import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(process.env.BACKEND_URL + "/api/private", {
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.users) {
            setUsers(data.users);
            console.log(data);
          } else {
          }
        });
    } else {
      navigate("/signup");
    }
  }, []);

  return (
    <>
      <h1>Lista de Usuarios:</h1>
      {user &&
        users.map((user) => {
          return <p key={user.id}>{user.email}</p>;
        })}
    </>
  );
};
export default Private;
