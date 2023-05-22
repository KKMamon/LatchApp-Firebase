import React, { } from "react";
import { useNavigate } from "react-router-dom";
import LogoLogin from "../images/test.jpg";

const Home = () => {
    const navigate = useNavigate();

    const Login = async (e) => {
        e.preventDefault();
        try {
          navigate("/Login");
        } catch (error) {
          console.log(error.message);
        }
      };


    return (
        <>
          <div style={{position: 'relative'}}>
            <div className="LogoLogin"><img src={LogoLogin} alt="LogoLogin" style={{maxWidth: '100%'}} onClick={Login}/></div>
          </div>
        </>
      );
};

export default Home;

