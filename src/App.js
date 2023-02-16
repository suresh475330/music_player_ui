import Main from "./pages/Main";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {

  const {user} = useSelector((state) => state.auth);

  return (
    < >
        {user ? <Main /> : <Login />}
    </>
  );
}


export default App;
