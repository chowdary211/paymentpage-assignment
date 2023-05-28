import { useState } from "react";
import stageIcon1 from "../assets/form/pb-icon1.png";
import stageIcon2 from "../assets/form/pb-icon2.png";
import fieldButton1 from "../assets/tfield1-button.png";
import payProviderLogo from "../assets/paymentProviderLogo.png";
import clockIcon from "../assets/form/alertClockIcon.png";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalPrice, setTotalPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();

  const field2TotalPrice = 179;
  const field3TotalPrice = 149;
  const field4TotalPrice = 99;

  // Function to handle radio button selection
  const handleRadioSelect = (option, price) => {
    setSelectedOption(option);
    setTotalPrice(price);
    setDiscountedPrice("-" + (18500 - price));
  };

  return (
    <div className="form">
      <div className="progressBar">
        <div className="stage">
          <img src={stageIcon1}></img>
          <p>Sign Up</p>
        </div>
        <div className="stage">
          <img src={stageIcon2}></img>
          <p>Subscribe</p>
        </div>
      </div>
      <div className="formHeader">
        <p>Select your subcription plan</p>
      </div>
      <div className="inputContainer">
        {/* text Field 1 */}
        <div className="textField1">
          <img src={fieldButton1}></img>
          <div className="formTextContainer">
            <div className="leftContainer">
              <p>12 Months Subscription </p>
            </div>
            <div className="rightContainer">
              <p>Total Rs 99</p>
              <p>Rs 8 /mo</p>
            </div>
          </div>
          <div className="tag1">
            <p>Offer expired</p>
          </div>
        </div>

        {/* text Field 2 */}
        <div>
          <label
            className={`textField2 ${
              selectedOption === "textField2" ? "selected" : ""
            }`}
            htmlFor="textField2"
          >
            <input
              type="radio"
              name="sub"
              id="textField2"
              checked={selectedOption === "textField2"}
              onChange={() => handleRadioSelect("textField2", field2TotalPrice)}
            />
            <div className="formTextContainer">
              <div className="leftContainer">
                <p>12 Months Subscription </p>
              </div>
              <div className="rightContainer">
                <p>Total Rs{field2TotalPrice}</p>
                <p>Rs 15 /mo</p>
              </div>
            </div>
            <div className="tag2">
              <p>Recommended</p>
            </div>
          </label>
        </div>

        {/* text Field 3 */}
        <div>
          <label
            className={`textField-3-4 ${
              selectedOption === "textField3" ? "selected" : ""
            }`}
            htmlFor="textField3"
          >
            <input
              type="radio"
              name="sub"
              id="textField3"
              checked={selectedOption === "textField3"}
              onChange={() => handleRadioSelect("textField3", field3TotalPrice)}
            />
            <div className="formTextContainer">
              <div className="leftContainer">
                <p>6 Months Subscription </p>
              </div>
              <div className="rightContainer">
                <p>Total Rs{field3TotalPrice}</p>
                <p>Rs 25 /mo</p>
              </div>
            </div>
          </label>
        </div>

        {/* text Field 4 */}
        <div>
          <label
            className={`textField-3-4 ${
              selectedOption === "textField4" ? "selected" : ""
            }`}
            htmlFor="textField4"
          >
            <input
              type="radio"
              name="sub"
              id="textField4"
              checked={selectedOption === "textField4"}
              onChange={() => handleRadioSelect("textField4", field4TotalPrice)}
            />
            <div className="formTextContainer">
              <div className="leftContainer">
                <p>3 Months Subscription </p>
              </div>
              <div className="rightContainer">
                <p>Total Rs{field4TotalPrice}</p>
                <p>Rs 33 /mo</p>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="summaryContainer">
        <div className="summaryTextContainer">
          <p>Subscription Fee</p>
          <p>18,500</p>
        </div>
        <div className="alert">
          <div className="alertHeader">
            <p>Limited time offer</p>
            <p>{discountedPrice}</p>
          </div>
          <div className="alertBody">
            <img src={clockIcon}></img>
            <p>offer valid till 25th March 2023</p>
          </div>
        </div>
        <div className="summaryFooter">
          <p>Total (Incl. of 18% GST)</p>
          <p>Rs {totalPrice}</p>
        </div>
      </div>
      <div className="buttonContainner">
        <button className="secondaryButton">CANCEL</button>
        <button className="formPrimaryButton">PROCEED TO PAY</button>
      </div>
      <div className="iconContainer">
        <img src={payProviderLogo}></img>
      </div>
    </div>
  );
};

export default Form;
