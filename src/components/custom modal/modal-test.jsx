import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  function handleToggle() {
    setShowModalPopUp(!showModalPopUp);
  }

  function onClose() {
    setShowModalPopUp(false);
  }

  return (
    <div>
      <button onClick={handleToggle}>Open Modal Pop up</button>
      {showModalPopUp && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};
export default ModalTest;
