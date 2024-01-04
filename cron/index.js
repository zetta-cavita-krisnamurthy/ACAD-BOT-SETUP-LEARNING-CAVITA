const CronJob = require('cron').CronJob;
const cronEnabled = process.env.ENABLE_CRON;
const timeZone = process.env.CRON_TIME_ZONE;
const runImmediately = false;
const holidayList = require('../utils/holidayListFrance').holidays;

// Require functions from different file here.
// Note that each of this function should return a promise in order to be use here.
// Also each of this job should have first parameters as options.
const { TEST_N1 } = require('./TEST_NX');
let schedules = [
  {
    CRON_TIME: '*/5 * * * * *', // Every 5 seconds
    JOBS_TO_RUN: [{ func: TEST_N1, params: {} }],
  },
];

async function start() {
  if (cronEnabled === 'true') {
    console.log('Cron Job Enabled');

    for (const schedule of schedules) {
      new CronJob(
        schedule.CRON_TIME,
        async () => {
          let todayStart = new Date();
          // get date in format of '2019-12-25'
          let date = todayStart.toISOString().split('T')[0];

          if (todayStart.getDay() === 6 || todayStart.getDay() === 0 || holidayList.indexOf(date) > -1) {
            // do not send notifications on saturday, sunday or holiday.
            console.log('Today is holiday in france so no need to send notifications');
          } else {
            // loop over each jobs that needs to be run at scheduled time.
            for (const job of schedule.JOBS_TO_RUN) {
              let { func, params = {}, blocked = false } = job;

              // execute the job.
              try {
                // execute function only if not blocked.
                if (!blocked) {
                  await func(params);
                }
              } catch (e) {
                console.error(e);
              }
            } // end of loop over schedule.JOBS_TO_RUN
          }
        },
        null,
        true, // "start" - if set to false, then need to execute job.start()- refer to https://www.npmjs.com/package/cron#api
        timeZone,
        null,
        runImmediately // run cron jobs immediately.
      );
    }
  } else {
    // log a message if cron job are disabled.
    console.log('Not running cron jobs. To enable, set ENABLE_CRON env variable to "true".');
  }
}

async function trigger(cronName) {
  try {
    let cron = await eval(cronName)({});
    return cron;
  } catch (err) {
    return err;
  }
}

module.exports = {
  start,
  trigger,
};
