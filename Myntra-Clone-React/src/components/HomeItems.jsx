import { useDispatch, useSelector } from "react-redux";
import { BagSliceActions } from "../store/BagSlice";
import { motion } from "motion/react";

const HomeItems = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const HandleAddBag = () => {
    dispatch(BagSliceActions.addBag(item.id));
  };

  const HandleRemoveBag = () => {
    dispatch(BagSliceActions.RemoveBag(item.id));
  };
  const IdCheck = bag.indexOf(item.id) >= 0;
  console.log(item.id, IdCheck);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="item-container"
    >
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        <span>
          {item && item.rating.stars != null ? (
            <>
              <span style={{ color: "#FFD700" }}>★</span> {item.rating.stars}
            </>
          ) : (
            "No rating"
          )}
        </span>{" "}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {IdCheck ? (
        <motion.button
          className="btn-remove-bag"
          onClick={HandleRemoveBag}
          animate={{
            backgroundColor: "#ff5252", // red for remove
            color: "#fff",
          }}
          transition={{ duration: 0.3 }}
          key="remove"
        >
          Remove From Bag
        </motion.button>
      ) : (
        <motion.button
          className="btn-add-bag"
          onClick={HandleAddBag}
          animate={{
            backgroundColor: "#43a047", // green for add
            color: "#fff",
          }}
          transition={{ duration: 0.3 }}
          key="add"
        >
          Add to Bag
        </motion.button>
      )}
    </motion.div>
  );
};
export default HomeItems;
