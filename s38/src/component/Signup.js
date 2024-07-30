import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let singleRef = useRef();
  let marriedRBRef = useRef();
  let stateSelectRef = useRef();
  let resultParaRef = useRef();
  let selectedGender;
  let selectedMS;
  let onCreateAccount = () => {
    if (stateSelectRef.current.value == "Select State") {
      alert("Please select your state.");
    } else {
      let salutation = "";
      if (selectedGender == "male") {
        salutation = "Mr. ";
      }
      if (selectedGender == "female") {
        if (selectedMS == "single") {
          salutation = "Miss. ";
        } else {
          salutation = "Mrs. ";
        }
      }
      resultParaRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value}, your account has been created.`;
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <h2>Sign Up</h2>
        </div>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            type="radio"
            name="marriage"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="marriage"
            nChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label>Age</label>
          <input></input>
        </div>
        <div>
          <label>email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <label>Mobile No</label>
          <input></input>
        </div>
        <div>
          <label>State</label>
          <select ref={stateSelectRef}>
            <option>Select State</option>
            <option value="AP"> Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option>Tamilnadu</option>
            <option>Kerala</option>
            <option>Goa</option>
            <option> Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Uttarakhad</option>
            <option>Uttar Pradesh</option>
            <option>Jammu and Kashmir</option>
            <option>Rajistan</option>
            <option>West Bengal</option>
            <option>Odisha</option>
            <option>Maharastra</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
            <option>Punjab</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              onCreateAccount();
            }}
          >
            Signup
          </button>
        </div>
        <p ref={resultParaRef}></p>
      </form>
      <br></br>
      <br></br>
      <br></br>

      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
