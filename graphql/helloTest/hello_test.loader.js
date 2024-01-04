const DataLoader = require('dataloader');
const HelloTestModel = require('./hello_test.model');

const helloTest = async (heloId) => {
  const helos = await HelloTestModel.find({ _id: { $in: heloId } }).lean();
  const dataMap = new Map();
  helos.forEach((hello) => {
    dataMap.set(hello._id.toString(), hello);
  });
  return heloId.map((id) => dataMap.get(id.toString()));
};

exports.HelloTestLoader = () => new DataLoader(helloTest);
