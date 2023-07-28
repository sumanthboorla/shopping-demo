import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="container-flex">
        {users.map((user) => (
          <div class="row ">
            <div class="col-sm-12 col-md-6 col-lg-3  p-4 ">
              <div
                className="card"
                key={user.title}
                style={{ height: "30rem", width: "20rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{user.title}</h5>
                  <div className="card-img">
                    <div className=" card-img-hover-overlay">
                      <img
                        src={user.image}
                        style={{
                          maxWidth: "12rem",
                          height: "12rem",
                          align: "center"
                        }}
                        alt="User Avatar"
                      />
                    </div>
                    <p className="card-text">
                      {" "}
                      <p> Price :{user.price}</p>
                    </p>
                    <p className="card-text">category : {user.category}</p>
                    <p className="card-text">Rating: {user.rating.rate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
