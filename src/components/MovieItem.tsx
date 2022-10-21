import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import { Movie } from "../models/Movie";
import api from "../api.json";

export default function MovieItem({ item }: { item: Movie }) {
  let { modal, itemModal } = useContext(ModalContext);
  let openModal = () => {
    itemModal.newItem(item);
    modal.newModal(true);
  };

  let truncate = (str: string) => {
    return str.substring(0, 120) + "...";
  };
  return (
    <div onClick={openModal} className="card movie-item">
      <div className="card">
        <div className="card-img-container-padding">
          <div className="card-img-container">
            <img
              src={api.IMAGE_URL + item.image}
              className="card-img-top"
              alt="cat"
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title text-light">{item.title}</h5>
          <p className="card-text text-light">
            {truncate(item.description)}{" "}
            <span className="see-more">See more</span>
          </p>
        </div>
      </div>
    </div>
  );
}
