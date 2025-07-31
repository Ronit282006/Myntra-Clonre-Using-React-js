import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ItemActions } from "../store/Items";
import { FetchSliceActions } from "../store/FetchSlice";
const FetchData = () => {
  const featching = useSelector((state) => state.fetch);
  const dispatch = useDispatch();
  console.log(featching);
  useEffect(() => {
    if (featching.FetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchSliceActions.FetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchSliceActions.FetchingDone());

        dispatch(FetchSliceActions.FetchingEnd());
        dispatch(ItemActions.addBagItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, []);
};
export default FetchData;
