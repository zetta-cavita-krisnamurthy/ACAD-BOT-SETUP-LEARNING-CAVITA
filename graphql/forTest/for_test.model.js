const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForTestSchema = new Schema(
  {
    greeting: {
      type: Schema.ObjectId,
      ref: 'hello_test',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('for_test', ForTestSchema);
