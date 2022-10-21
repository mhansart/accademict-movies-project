// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesList from "./components/MoviesList";
import { useState } from "react";
import MovieModal from "./components/MovieModal";
import ModalContext from "./context/ModalContext";

function App() {
  const newModal = (i: any) => {
    setModal({ ...modal, modal: i });
  };
  const newItem = (i: any) => {
    setItemModal({ ...itemModal, itemModal: i });
  };
  let [itemModal, setItemModal] = useState({
    itemModal: {},
    newItem,
  });
  const [modal, setModal] = useState({
    modal: false,
    newModal,
  });

  return (
    <ModalContext.Provider value={{ modal: modal, itemModal: itemModal }}>
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <h1>Movies app!</h1>
            <MoviesList />
            {modal.modal && <MovieModal />}
          </div>
        </main>
        <Footer />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
