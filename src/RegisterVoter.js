import './RegisterVoter.css';
import { useState } from "react";

const RegisterVoter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [aadhaarId, setAadhaarId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [voterId, setVoterId] = useState("");
  const [district, setDistrict] = useState("");

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName && dateofBirth && gender && aadhaarId && phoneNumber && voterId && district
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGender("");
    setAadhaarId("");
    setPhoneNumber("");
    setVoterId("");
    setDistrict("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Register Voter</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Date of Birth
            </label>
            <input
              value={dateofBirth}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
              placeholder="Date of Birth"
            />
          </div>
          <div className="Field">
            <label>
              Gender 
            </label>
            <input
              value={gender}
              onChange={(e) =>{
                setGender(e.target.value);
              }}
              placeholder="Gender"
            />
          </div>
          <div className="Field">
            <label>
              Aadhaar Id <sup>*</sup>
            </label>
            <input
              value={aadhaarId}
              onChange={(e) => {
                setAadhaarId(e.target.value);
              }}
              placeholder=" Aadhaar Id"
            />
          </div>
          <div className="Field">
            <label>
            Phone Number <sup>*</sup>
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Phone Number"
            />
          </div>
          <div className="Field">
            <label>
            Voter Id
            </label>
            <input
              type="file"
              value={voterId}
              onChange={(e) => {
                setVoterId(e.target.value);
              }}
              placeholder="Voter Id"
            />
          </div> 
          <div className="Field">
            <label>
            District
            </label>
            <input
              
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              placeholder="District"
            />
          </div> 
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  ); 
};

export default RegisterVoter;
