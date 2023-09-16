const modals = () => {
  function bindModal(trigger, modal, close) {
    trigger.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }

  const callEngineerBtn = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    modalEngineerClose = document.querySelector(".popup_engineer .popup_close");

  bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};

export default modals;
