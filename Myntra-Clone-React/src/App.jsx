import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeItems from "./components/HomeItems";
import "./index.css";
import Home from "./routs/Home";
import FetchData from "./routs/FetchData";
import { useSelector } from "react-redux";
import BasicExample from "./components/Looding";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const featching = useSelector((store) => store.fetch);
  console.log(featching.Currentfetching);
  return (
    <>
      <div>
        <Header />
        <FetchData />
        {featching.Currentfetching ? <BasicExample /> : <Outlet />}
        <Footer />
      </div>
    </>
  );
}

export default App;
