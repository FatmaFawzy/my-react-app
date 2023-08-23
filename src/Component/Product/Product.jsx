import "./product.css";
import { HeartStraight, ShoppingCart } from "phosphor-react";
import { useShopContext } from "../Context/ShopContext";

export default function Product(props) {
  const { id, productName, price, productImg } = props.data;
  const { addToCart } = useShopContext();

  return (
    <>
      <div className="contain col-md-3">
        <div className="space p-3">
          <div className="img-contain mb-3">
            <img src={productImg} alt="" className="card-img-top w-100" />
          </div>
          <div className="card pt-2">
            <h5> {productName}</h5>
            <h6>
              {price}{" "}
              <button className="ms-2" onClick={() => addToCart(id)}>
                <ShoppingCart size="25" />
              </button>{" "}
              <span className="ms-27">
                <HeartStraight size="25" />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
