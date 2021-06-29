const mongoose = require("mongoose");
const envSchema = new mongoose.Schema({
  environmentName: {
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
const Env = new mongoose.model("Env", envSchema);

module.exports = Env;
