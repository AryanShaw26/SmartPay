import { useState } from "react";

import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import AddBeneficiaryForm from "../../components/Beneficiaries/AddBeneficiaryForm/AddBeneficiaryForm";
import SearchBeneficiary from "../../components/Beneficiaries/SearchBeneficiary/SearchBeneficiary";
import BeneficiaryList from "../../components/Beneficiaries/BeneficiaryList/BeneficiaryList";

import "./Beneficiaries.css";

function Beneficiaries() {
  const [beneficiaries, setBeneficiaries] = useState([]);

  const addBeneficiary = (newBeneficiary) => {
    setBeneficiaries([
      ...beneficiaries,
      newBeneficiary,
    ]);
  };
  const [searchTerm,setSearchTerm]=useState("");
  const filteredBeneficiaries = beneficiaries.filter(
  (beneficiary) =>
    beneficiary.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    beneficiary.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
);
  return (
    <div className="beneficiaries-layout">

      <Sidebar />

      <div className="beneficiaries-main">

        <Header />

        <div className="beneficiaries-content">

          <AddBeneficiaryForm
            addBeneficiary={addBeneficiary}
          />

          <SearchBeneficiary 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}/>

          <BeneficiaryList
            beneficiaries={filteredBeneficiaries}
          />

        </div>

      </div>

    </div>
  );
}

export default Beneficiaries;