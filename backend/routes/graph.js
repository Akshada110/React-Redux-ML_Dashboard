const express = require("express");
const {
  createGraphData,
  getGraphData,
  getEnvData,
  getChannelData,
} = require("../controllers/graph");

const router = express.Router();

router.post("/createdata", createGraphData);
router.get("/getdata", getGraphData);
router.get("/getenvdata", getEnvData);
router.get("/getchanneldata", getChannelData);

module.exports = router;
