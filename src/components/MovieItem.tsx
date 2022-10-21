import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import { Movie } from "../models/Movie";

export default function MovieItem({ item }: { item: any }) {
  let { modal, itemModal } = useContext(ModalContext);
  let openModal = () => {
    itemModal.newItem(item);
    modal.newModal(true);
  };
  return (
    <div onClick={openModal} className="card movie-item">
      <div className="card">
        <img
          src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
          className="card-img-top"
          alt="cat"
        />
        <div className="card-body">
          <h5 className="card-title">{item.id + ". " + item.title}</h5>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
