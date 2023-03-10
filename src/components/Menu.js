import { useState } from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../SignIn";
import Hand from "./Hand";

function Menu({ sent, onLogin, user, setAdmin, setWrite }) {
  const [show, setShow] = useState(false);
  console.log(sent);
  function showModal() {
    setShow(!show);
  }

  console.log("Menu");
  return (
    <div>
      <div className="menu">
        <div className="menu container">
          <div>
            <img
              width={150}
              src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
              alt="logo"
            />
          </div>
          <div className="left d-flex col-md-4">
            {/* <ul className="list"> */}
            {/* {sent.map((e) => {
              return <span className="d-flex col-md-6">{e}</span>;
            })} */}
            <span>Our story</span>
            <span>Membership</span>
            <span>Write</span>

            {user ? (
              <span>{user}</span>
            ) : (
              <span className="sign bg-success" onClick={showModal}>
                Sign In
              </span>
            )}
          </div>
          {/* </ul> */}
          <button className="btn">Get Started</button>
          <SignIn
            onLogin={onLogin}
            show={show}
            setShow={setShow}
            setAdmin={setAdmin}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Menu;

//{...data}   object data==hussen neree

//data={data} object array  data = {data } {} data
