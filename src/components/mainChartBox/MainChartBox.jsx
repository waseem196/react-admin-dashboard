import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { AiOutlineReload, AiOutlineSetting } from 'react-icons/ai';
import './mainChartBox.scss';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    mv: 3400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    mv: 1898,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    mv: 4800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    mv: 1908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    mv: 3100,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    mv: 3000,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    mv: 1300,
    amt: 2100,
  },
];

const MainChartBox = () => {
  return (
    <div className="mainChartBox">
      <div className="sales">
        <h3>SALES VS COGS</h3>
        <div className="icons">
          <span>
            <AiOutlineSetting />
          </span>
          <span>
            <AiOutlineReload />
          </span>
        </div>
      </div>
      <div className="schedule">
        <div className="date">06 Aug to 12 Aug</div>
        <div className="sort">
          <span className="decorated">last week</span>
          <span>last two week</span>
          <span>last month</span>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <LineChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="mv" stroke="#942f3e" />
          </LineChart>
        </div>
      </div>
      <div className="summary">
        <div className="description">
          <div className="text">Number of Invoices</div>
          <div className="number">99</div>
        </div>
        <div className="description">
          <div className="text">Sales</div>
          <div className="number">$5000</div>
        </div>
        <div className="description">
          <div className="text">Cogs</div>
          <div className="number">$2400</div>
        </div>
      </div>
    </div>
  );
};

export default MainChartBox;

{
  /* <Tooltip
              contentStyle={{ background: 'transparent', border: 'none' }}
              labelStyle={{ display: 'none' }}
              position={{ x: 10, y: 25 }}
            /> */
}
