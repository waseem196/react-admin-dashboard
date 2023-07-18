import AreaChartBox from '../../components/areaChartBox/AreaChartBox';
import HeroBox from '../../components/heroBox/HeroBox';
import MainChartBox from '../../components/mainChartBox/MainChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import SentrixBox from '../../components/sentrixBox/SentrixBox';
import SmallBox from '../../components/smallBox/SmallBox';
import StatsBox from '../../components/statsBox/StatsBox';

import './home.scss';

const Home = () => {
  return (
    <>
      <HeroBox />
      <div className="home">
        <div className="box box1">
          <SmallBox headingText="Repairs" />
        </div>
        <div className="box box2">
          <SmallBox headingText="Network Unlocks" />
        </div>
        <div className="box box3">
          <SentrixBox />
        </div>
        <div className="box box4">
          <SmallBox headingText="Accessories & Parts" />
        </div>
        <div className="box box5">
          <SmallBox headingText="Trade In" />
        </div>
        <div className="box box6">
          <AreaChartBox />
        </div>
        <div className="box box7">
          <MainChartBox />
        </div>
        <div className="box box8">
          <PieChartBox />
        </div>
        <div className="box box9">
          <StatsBox />
        </div>
      </div>
    </>
  );
};

export default Home;
