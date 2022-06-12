import { Link } from "react-router-dom";
import "./signup.scoped.css";
import React, { useState } from "react";

function Signup() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const getData = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const register = async () => {
    await fetch("http://196.223.240.154:8099/supapp/api/auth/admin/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    register();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You have signed up");
  };
  return (
    <div className="App">
      <div className="one">
        <img src={"logo_orangebg.png"} alt="" />
      </div>

      <div className="two">
        <h1>Sign Up</h1>

        <form action="#" method="POST" className="form" onSubmit={handleSubmit}>
          <div className="Field">
            <label>FIRST NAME</label>
            <br />
            <input
              type="text"
              name="firstname"
              value={data.firstname}
              onChange={getData}
              placeholder="First Name"
            />
            <br />
          </div>
          <div className="Field">
            <label>LAST NAME</label>
            <br />
            <input
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={getData}
              placeholder="Last Name"
            />
            <br />
          </div>
          <div className="Field">
            <label>PHONE</label>
            <br />
            <input
              type="number"
              name="phone"
              value={data.phone}
              onChange={getData}
            />
            <br />
          </div>
          <div className="Field">
            <label>EMAIL </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={data.email}
              onChange={getData}
            />
            <br />
          </div>
          <div className="Field">
            <label>PASSWORD</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={getData}
            />
            <br />
          </div>

          <div className="Field">
            <button type="submit" className="sub">
              Sign up
            </button>
          </div>

          <div className="a">
            Already have an account?
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
