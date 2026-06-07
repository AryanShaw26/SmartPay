import "./BeneficiaryList.css";
import BeneficiaryCard from "../BeneficiaryCard/BeneficiaryCard";

function BeneficiaryList({ beneficiaries }) {
  return (
    <div className="beneficiary-list">

      <div className="beneficiary-list-header">
        <h2>Beneficiaries</h2>
      </div>

      <div className="beneficiaries-container">

        {beneficiaries.map((beneficiary) => (
          <BeneficiaryCard
            key={beneficiary.id}
            name={beneficiary.name}
            email={beneficiary.email}
          />
        ))}

      </div>

    </div>
  );
}

export default BeneficiaryList;