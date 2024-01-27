import './RegisterNominee.css';
import { useState } from "react";


const RegisterNominee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [aadhaarId, setAadhaarId] = useState("");
  const [politicalName, setPoliticalName] = useState("");
  const [partyImage, setPartyImage] = useState("");
  const [district, setDistrict] = useState("");

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName && dateofBirth && gender && aadhaarId && politicalName && partyImage && district
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGender("");
    setAadhaarId("");
    setPoliticalName("");
    setPartyImage("");
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
          <h2>Register Nominee</h2>
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
              Political Name <sup>*</sup>
            </label>
            <input
              value={politicalName}
              onChange={(e) => {
                setPoliticalName(e.target.value);
              }}
              placeholder="Political Name"
            />
          </div>
          <div className="Field">
            <label>
              Party Image
            </label>
            <input
              type="file"
              value={partyImage}
              onChange={(e) => {
                setPartyImage(e.target.value);
              }}
              placeholder="Party Image"
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

export default RegisterNominee;
