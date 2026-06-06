import "./AddBeneficiaryForm.css";

function AddBeneficiaryForm() {
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
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email Address"
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
        />
      </div>

      <div className="input-group">
        <label>Relationship (Optional)</label>
        <input
          type="text"
          placeholder="Friend, Family, Colleague..."
        />
      </div>

      <button className="submit-btn">
        Add Beneficiary
      </button>

    </div>
  );
}

export default AddBeneficiaryForm;