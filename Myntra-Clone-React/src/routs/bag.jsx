import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummry from "../components/BagSummry";
import Header from "../components/Header";

const bag = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);

  const Items = useSelector((store) => store.items);
  const FinalItems = Items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="  bag-items-container ">
            {FinalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummry />
        </div>
      </main>
    </div>
  );
};
export default bag;
