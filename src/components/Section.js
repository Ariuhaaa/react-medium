import React from 'react'

export default function Section({Lists}) {
    console.log(Lists);
  return (
    <div className="container">
        <h5>TRENDING ON MEDIUM</h5>
        {/* {Lists.map((e) => {
            return (
                <div>
                <h1>{e.num}</h1>



                </div>
            )
            })} */}

    </div>
  );
}
