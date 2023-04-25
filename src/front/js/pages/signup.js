import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    fetch(process.env.BACKEND_URL + "/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message == "all ok") {
          navigate("/login");
        } else {
          console.log(response)
          alert("A ocurrido un error");
        }
      });
  };

  return (
    <>
    <div className="Container d-flex justify-content-center m-5">
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleClick}>Register</button>
      </div>
    </>
  );
};


