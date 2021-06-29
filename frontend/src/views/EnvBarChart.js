import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { getEnvDataAction } from "../redux/action/envAction";
import { connect } from "react-redux";

const EnvBarHook = (props) => {
  useEffect(() => {
    console.log("useEffect****");
    props.getEnvDataAction();
  }, []);

  console.log("barchart - props", props.environment);

  const options = {
      chart: {
        id: "ML - chart",
      },
      fill: {
        colors: ["#FFA500", "#0000EE", "#8A2BE2"],
      },
      xaxis: {
        categories: props.environment,
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
        color: "#0000EE",
      },
      {
        name: "high-riskFactor",
        data: props.high,
        color: "#8A2BE2",
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
  console.log("MapStateToprops:", state.environment);
  return {
    environment: state.environment.environment,
    low: state.environment.low,
    medium: state.environment.medium,
    high: state.environment.high,
    serviceFail: state.environment.serviceFail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getEnvDataAction: () => dispatch(getEnvDataAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnvBarHook);
