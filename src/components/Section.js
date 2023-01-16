import React from "react";

export default function Section({ Lists }) {
  console.log(Lists);
  return (
    <div className="container">
      <h5>TRENDING ON MEDIUM</h5>
      {Lists.map((e) => {
        return (
          <div className="row">
            <div className="row col-4">
              <div className="col">
                <h2 className="num">{e.num}</h2>
              </div>
              <div className="d-flex col">
                <img className="oba" src={e.img} alt="a" />
                <h5>{e.ner}</h5>
              </div>
              <p>{e.title}</p>
              <p>{e.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
