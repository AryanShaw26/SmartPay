import "./AddBeneficiaryForm.css";
import { useState } from "react";
function AddBeneficiaryForm({ addBeneficiary }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("");
  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert("Please fill all required fields");
      return;
    }

    addBeneficiary({
      id: Date.now(),
      name,
      email,
      phone,
      relationship,
    });

    setName("");
    setEmail("");
    setPhone("");
    setRelationship("");
  };
  return (
    <div className="add-beneficiary-form">
      <div className="form-header">
        <h2>Add Beneficiary</h2>
      </div>

      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Relationship (Optional)</label>
        <input
          type="text"
          placeholder="Friend, Family, Colleague..."
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Add Beneficiary
      </button>
    </div>
  );
}

export default AddBeneficiaryForm;
