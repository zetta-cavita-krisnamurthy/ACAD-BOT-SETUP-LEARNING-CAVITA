const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelloTestSchema = new Schema(
  {
    greeting: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('hello_test', HelloTestSchema);
