function Menu({ sent }) {
  console.log(sent);
  return (
    <div className="container-fluid p-0">
      <div className="menu">
        <div>
          <img
            width={150}
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="logo"
          />
        </div>
        <div className="left d-flex col-md-6">
          <ul className="list">
            {sent.map((e) => {
              return <span className="d-flex col-md-6" >{e}</span>;
            })}
          </ul>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;

//{...data}   object data==hussen neree

//data={data} object array  data = {data } {} data
