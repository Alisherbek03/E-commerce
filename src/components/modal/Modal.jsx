import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementToBascket,
  decrementToBascket,
  removeCart,
} from "../../redux/slices/main";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [summ, setSumm] = useState(0);
  const { bascket } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  console.log(bascket);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let total = 0;
    bascket.forEach((i) => {
      total += i.price * i.count;
    });
    setSumm(total);
  }, [bascket]);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      <button
        onClick={toggleModal}
        className="btn-modal"
        style={{ display: "flex" }}
      >
        <i className="fa-solid fa-cart-shopping active"></i>
        {bascket.length}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {bascket.length > 0 ? (
              bascket.map((i, id) => {
                return (
                  <div className="modal-cart-products">
                    <div className="modal-cart-product">
                      <img className="item-image" src={i.images} alt="" />
                      <h3 className="cart-product-text">
                        {i.title.slice(0, 20)} - {i.count} x {i.count * i.price}
                        $
                      </h3>
                      <div className="btn-cart">
                        <button
                          onClick={() =>
                            dispatch(incrementToBascket(i.id, i.price))
                          }
                        >
                          +
                        </button>
                        <p>{i.count}</p>
                        <button
                          onClick={() =>
                            dispatch(decrementToBascket(i.id, i.price))
                          }
                        >
                          -
                        </button>
                        <button onClick={() => dispatch(removeCart(i.id))}>
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>Mahsulot Mavjud emas</h1>
            )}
            <strong
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: "10px",
                padding: "10px",
                background: "dodgerblue",
                color: "white",
                textAlign: "left",
                borderRadius: "5px",
              }}
            >
              Umumiy narx: ${summ}
            </strong>
            <button className="close-modal" onClick={toggleModal}>
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
