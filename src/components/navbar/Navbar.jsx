import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>RepairDesk</span>
      </div>
      <div className="texts">
        <Link to="/">
          <span>Repair</span>
        </Link>
        <Link to="/">
          <span>Inventory</span>
        </Link>
        <Link to="/">
          <span>Customer</span>
        </Link>
        <Link to="/">
          <span>Port of Sale</span>{' '}
        </Link>
        <Link to="/">
          <span> Reports</span>
        </Link>
        <Link to="/">
          <span>Campaigner</span>
        </Link>
        <Link to="/">
          <span>Expense</span>
        </Link>
      </div>
      <div className="icons">
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg " alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
