import "./Login.css"

import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { logIn } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import googlePng from "../assets/google-logo 1.png"

import logo from "../assets/musicLogo.png";

export default function Login() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userObj = {
    name : "Suresh",
    roal : "admin"    
  }
  // const userObj = {
  //   name : "Kumar",
  //   roal : "user"    
  // }

  function goMain(user){
    dispatch(logIn(user));
    navigate("/");
  }
  
  return (
    <div className="loginContainer">

        <div>
        <img src={logo} alt="logo" width={150} />
        <h3>Welcome to Play On <br /> music stremming application <br />
        To play songs login with google account. </h3>
        </div>

      <Button onClick={() => goMain(userObj)} sx={{backgroundColor : "#0E0E0E",border : "1px solid #FFFFFF",borderRadius : "30px",":hover" : {backgroundColor : "#282828"}}} variant="contained" startIcon={<img src={googlePng} alt="logo"/>}>
        Continue with Google
      </Button>
    </div>
  );
}