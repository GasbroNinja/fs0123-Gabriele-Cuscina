import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHome from "./components/MyHome"
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyHome>
        <MyNav />
        <AllTheBooks />
        <MyFooter />
      </MyHome>
    </>
  );
}

export default App;
