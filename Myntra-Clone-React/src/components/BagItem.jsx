import { FcFullTrash } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { BagSliceActions } from "../store/BagSlice";
import { motion } from "motion/react";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const HandleBagRemove = () => {
    dispatch(BagSliceActions.RemoveBag(item.id));
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bag-item-container"
    >
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">${item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={HandleBagRemove}>
        <FcFullTrash />
      </div>
    </motion.div>
  );
};
export default BagItem;
