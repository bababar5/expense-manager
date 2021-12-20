import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataValues = props.dataPoints.map(el => el.value);
    const maxValue =   Math.max(...dataValues);
    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) =>
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};

export default Chart;
