import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate} from "react-router";
export default function Register() {
    const username=useRef();
    const email=useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate= useNavigate();
    const handleClick = async (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Password don't match!");
        }
        else{
            const user={
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
            await axios.post("/auth/register",user);
            navigate("/login");
            }
            catch(err){
                console.log(err)
            }
        }
    };
  return (
   
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Asocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on Asocial</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" required ref={email} className="loginInput" type="email" />
                    <input placeholder="Username" required ref={username}  className="loginInput"  />
                    <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6" />
                    <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password" minLength="6" />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">Log Into Account</button>
                </form>
            </div>
        </div>
      
    </div>
  );
}
