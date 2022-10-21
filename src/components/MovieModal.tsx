import { useContext } from "react";
import ModalContext from "../context/ModalContext";

export default function MovieModal() {
  let { modal, itemModal } = useContext(ModalContext);
  let open = { display: modal ? "block" : "none" };
  return (
    <div className="modal fade show" style={open}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-black">
              {itemModal.itemModal.id}. {itemModal.itemModal.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                modal.newModal(false);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-black">{itemModal.itemModal.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
