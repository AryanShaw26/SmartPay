import "./BeneficiaryList.css";
import BeneficiaryCard from "../BeneficiaryCard/BeneficiaryCard";

function BeneficiaryList() {
  return (
    <div className="beneficiary-list">

      <div className="beneficiary-list-header">
        <h2>Beneficiaries</h2>
      </div>

      <div className="beneficiaries-container">

        <BeneficiaryCard />

        <BeneficiaryCard />

        <BeneficiaryCard />

        <BeneficiaryCard />

      </div>

    </div>
  );
}

export default BeneficiaryList;