import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
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
      <div className="Container bg-light p-5">
      <h1>Usuarios Registrados</h1>
      {users &&
        users.map((user) => {
          return <p key={user.id}>{user.email}</p>;
        })}
        </div>
    </>
  );
};

