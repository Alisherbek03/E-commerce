import { useEffect, useState } from "react";
import { apiInstance } from "../../api";
import "./home.css";
import { useDispatch } from "react-redux";
import { addToBascket } from "../../redux/slices/main";
// import Carts from "../cart/Carts";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const newLocal = "/products";
    apiInstance(newLocal).then((response) => {
      setProducts(response.data);
    });
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images} alt="" />
            <div className="card-title">
              <h4>Title: {product.title.slice(0, 20)}</h4>
              <p>Description: {product.description.slice(0, 40)}</p>
              <strong>Price: ${product.price}</strong>
              <div>
                <button
                  className="added-cart"
                  onClick={() => {
                    dispatch(addToBascket(product));
                    toast.success("Korzinkaga o'tkazildi", {
                      position: "bottom-center",
                    });
                  }}
                >
                  Added cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Carts /> */}
    </div>
  );
};

export default Home;
