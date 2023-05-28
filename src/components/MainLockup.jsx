import pIcon1 from "../assets/mainLockUp/p-icon1.png";
import pIcon2 from "../assets/mainLockUp/p-icon2.png";
import pIcon3 from "../assets/mainLockUp/p-icon3.png";
import pIcon4 from "../assets/mainLockUp/p-icon4.png";
import pIcon5 from "../assets/mainLockUp/p-icon5.png";

const MainLockup = () => {
  return (
    <div className="mainLockup">
      <div className="mainHeader">
        <p>Access curated courses worth</p>
        <p>
          Rs <span className="strike">18500</span> at just
          <span className="headerHighlight"> 99</span> per year!
        </p>
      </div>

      <div className="pointer">
        <div className="icon">
          <img src={pIcon1}></img>
        </div>
        <div className="textContainer">
          <p>
            <span className="pointerHighlight">100+</span> Job relevant courses
          </p>
        </div>
      </div>

      <div className="pointer">
        <div className="icon">
          <img src={pIcon2}></img>
        </div>
        <div className="textContainer">
          <p>
            <span className="pointerHighlight">20,000+</span> Hours of content
          </p>
        </div>
      </div>

      <div className="pointer">
        <div className="icon">
          <img src={pIcon3}></img>
        </div>
        <div className="textContainer">
          <p>
            <span className="pointerHighlight">Exclusive</span> webinar access
          </p>
        </div>
      </div>

      <div className="pointer">
        <div className="icon">
          <img src={pIcon4}></img>
        </div>
        <div className="textContainer">
          <p>
            Scholarship worth{" "}
            <span className="pointerHighlight">Rs.94,500</span>
          </p>
        </div>
      </div>

      <div className="pointer">
        <div className="icon">
          <img src={pIcon5}></img>
        </div>
        <div className="textContainer">
          <p>
            <span className="pointerHighlight">Ad Free</span> learning
            experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLockup;
