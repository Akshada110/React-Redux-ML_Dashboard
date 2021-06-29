const Graph = require("../models/Graph");
const Environment = require("../models/Environment");
const Channel = require("../models/Channel");

exports.createGraphData = async (req, res) => {
  try {
    console.log(req.body);
    const graphData = new Graph(req.body);
    const demo = await graphData.save();
    res.status(201).send(demo);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getGraphData = async (req, res) => {
  try {
    const data = await Graph.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getEnvData = async (req, res) => {
  try {
    const data = await Environment.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getChannelData = async (req, res) => {
  try {
    const data = await Channel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
