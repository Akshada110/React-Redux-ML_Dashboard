const mongoose = require("mongoose");
const channelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
  },
  lowRisk: {
    type: Number,
    required: true,
  },
  mediumRisk: {
    type: Number,
    required: true,
  },
  highRisk: {
    type: Number,
    required: true,
  },
});

//We will create new collection
const Channel = new mongoose.model("Channel", channelSchema);

module.exports = Channel;
