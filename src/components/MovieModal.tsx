import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import api from "../api.json";

export default function MovieModal() {
  let { modal, itemModal } = useContext(ModalContext);
  let open = { display: modal.modal ? "block" : "none" };
  let fullName = (first: string, last: string) => {
    return first + " " + last;
  };

  let formatDate = (date: any) => {
    let newDate = new Date(date);
    return (
      newDate.getDate() +
      "/" +
      formatMonth(newDate.getMonth()) +
      "/" +
      newDate.getFullYear()
    );
  };

  let formatMonth = (month: any) => {
    if ((month + 1).length === 1) {
      return "0" + month + 1;
    } else {
      return month + 1;
    }
  };
  return (
    <div className="modal fade show" style={open}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-black">
              {itemModal.itemModal.title}
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
            <div className="img-movie-container">
              <img
                className="img-movie"
                alt={itemModal.itemModal.title}
                src={api.IMAGE_URL + itemModal.itemModal.image}
              />
            </div>
            <p className="text-black information">
              <span className="subtitle">
                Release date: {formatDate(itemModal.itemModal.releaseDate)}
              </span>{" "}
              <i className="bi bi-dot"></i>
              <span className="subtitle">
                {" "}
                Duration: {itemModal.itemModal.duration}
              </span>
            </p>
            <p className="text-black description">
              {itemModal.itemModal.description}
            </p>
          </div>
          <div className="actor-picture-modal-container">
            {itemModal.itemModal.actors.map((x: any) => {
              return (
                <div>
                  <div className="actor-picture-modal">
                    <img
                      src={api.ACTOR_URL + x.image}
                      alt={fullName(x.firstName, x.lastName)}
                    />
                  </div>
                  <p className="text-black">
                    {fullName(x.firstName, x.lastName)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
