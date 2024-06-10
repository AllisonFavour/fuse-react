import { Link } from 'react-router-dom';
import { FaCog } from "react-icons/fa";
import { BsLightbulbFill, BsBarChartFill, BsFillCreditCard2BackFill, BsThreeDots } from "react-icons/bs";
import { IoCheckmarkCircleSharp, IoSearchSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

import "../page/home.css";
import drake from "../../src/assets/drake.webp";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <p>Welcome, Drake</p>

          <div className="img-div">
            <img src={drake} alt="" />
          </div>
        </header>

        <div className="sections">
        <section>
          <div className="section">
            <div className="box"></div>

            <div className="icons">
              <div className="one"><BsLightbulbFill /></div>
              <div className="one"><IoCheckmarkCircleSharp /></div>
              <div className="one"><BsBarChartFill /></div>
              <div className="one"><BsFillCreditCard2BackFill /></div>
              <div className='one'><BsThreeDots /></div>
            </div>

            <div className="search-div">
                <div className="search-input">
                <input type="text" />
                <IoSearchSharp />
                </div>
                <div className="one icon-div"><TfiMenuAlt /></div>
            </div>
          </div>
        </section>

        <section>
            <div className="footer">
                <p className='dashboard'>Dashboard</p>

                <div className='login-icon'>
                <p><Link to='/login'>Login</Link></p>

                <div><FaCog /></div>
                </div>
            </div>
        </section>
        </div>

      </main>
    </>
  );
}
