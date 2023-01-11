import { useState } from "react";
import SignIn from "../SignIn";

function Menu({ sent }) {
  const [show, setShow] = useState(false);
  console.log(sent);
  function showModal() {
    setShow(!show);
  }
  return (
    <div className="Big">
      <div className=" p-0">
        <div className="menu">
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
            <span className="sign" onClick={showModal}>
              Sign In
            </span>
          </div>
          {/* </ul> */}
          <button className="btn">Get Started</button>
          <SignIn show={show} />
        </div>
      </div>
    </div>
  );
}
export default Menu;

//{...data}   object data==hussen neree

//data={data} object array  data = {data } {} data
