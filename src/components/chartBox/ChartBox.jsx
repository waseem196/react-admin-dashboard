import { Link } from 'react-router-dom';
import { LineChart, Line, Tooltip } from 'recharts';
import './chartBox.scss';

const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="user" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.title }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <LineChart width={90} height={50} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: 'transparent', border: 'none' }}
              labelStyle={{ display: 'none' }}
              position={{ x: 10, y: 25 }}
            />
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke={props.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
