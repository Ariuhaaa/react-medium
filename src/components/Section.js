import React from "react";

export default function Section({ Lists }) {
  console.log(Lists);
  return (
    <div className="container ">
      <h5>TRENDING ON MEDIUM</h5>
      <br/>
      <div className="container-fluid d-flex flex-wrap ">
        {Lists.map((e) => {
          return (
            <div className="row col-4">
              <div className="col-2">
                <h2 className="num">{e.num}</h2>
              </div>
              <div className="d-flex flex-column col-10">
                <div className="row">
                  <div className="col-3">
                    <img className="oba w-100" src={e.img} alt="a" />
                  </div>
                  <p className="col-9 ner">{e.ner}</p>
                </div>
                <p>{e.title}</p>
                <p>{e.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr/>
    </div>
  );
}
