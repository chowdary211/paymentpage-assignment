import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";
import downArrow from "../assets/header/IconChevronDown.png";

const Header = () => {
  return (
    <div className="header">
      <div className="leftContent">
        <img className="logo" src={logo}></img>
        <div className="flexClass">
          <h4>courses</h4>
          <img src={downArrow}></img>
        </div>
        <div className="flexClass">
          <h4>Programs</h4>
          <img src={downArrow}></img>
        </div>
      </div>
      <div className="rightContent">
        <img src={searchIcon}></img>
        <h4>Log in</h4>
        <button className="primaryButton">JOIN NOW</button>
      </div>
    </div>
  );
};

export default Header;
