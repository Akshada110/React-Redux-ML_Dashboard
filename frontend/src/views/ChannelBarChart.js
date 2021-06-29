import React, { useEffect } from "react";
import Chart from "react-apexcharts";
// import { getChannelDataAction } from "../redux/action/channelAction";
import { getChannelDataAction } from "../redux/action/channelAction";
import { connect } from "react-redux";

const ChannelBarHook = (props) => {
  useEffect(() => {
    console.log("useEffect****");
    props.getChannelDataAction();
  }, []);

  console.log("channel-barchart - props", props.channels);

  const options = {
      chart: {
        id: "ML - chart",
      },
      fill: {
        colors: ["#FFA500", "#0000FF", "#F41605"],
      },
      xaxis: {
        categories: props.channels,
      },
    },
    series = [
      {
        name: "low-riskFactor",
        data: props.low,
        color: "#FFA500",
      },
      {
        name: "medium-riskFactor",
        data: props.medium,
        color: "#0000FF",
      },
      {
        name: "high-riskFactor",
        data: props.high,
        color: "#F41605",
      },
    ];

  return (
    <div>
      {!props.serviceFail ? (
        <Chart
          options={options}
          series={series}
          type="bar"
          width={950}
          height={550}
        />
      ) : (
        <h2 style={{ color: "red" }}>Channel Graph is not availble..!!</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("channelBarChart-MapStateToprops:", state.channel);
  return {
    channels: state.channel.channels,
    low: state.channel.low,
    medium: state.channel.medium,
    high: state.channel.high,
    serviceFail: state.channel.serviceFail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getChannelDataAction: () => dispatch(getChannelDataAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelBarHook);
