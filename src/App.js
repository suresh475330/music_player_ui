import Main from "./pages/Main";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

function App() {



  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<Main />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}


export default App;
