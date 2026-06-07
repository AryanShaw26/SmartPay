import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import "./Beneficiaries.css";
import AddBeneficiaryForm from "../../components/Beneficiaries/AddBeneficiaryForm/AddBeneficiaryForm";
import SearchBeneficiary from "../../components/Beneficiaries/SearchBenificiary/SearchBeneficiary";
import BeneficiaryCard from "../../components/Beneficiaries/BeneficiaryCard/BeneficiaryCard";
import BeneficiaryList from "../../components/Beneficiaries/BeneficiaryList/BeneficiaryList";
import { Link } from "react-router-dom";
function Beneficiaries() {
  return (
    <div className="beneficiaries-layout">
      <Sidebar />

      <div className="beneficiaries-main">
        <Header />

        <div className="beneficiary-form">
          <AddBeneficiaryForm />
          <SearchBeneficiary></SearchBeneficiary>
          <BeneficiaryList></BeneficiaryList>
        </div>
      </div>
    </div>
  );
}
export default Beneficiaries;
