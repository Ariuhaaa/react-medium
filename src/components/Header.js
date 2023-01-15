export default function Header({ title, para, button }) {
  return (
    <div className="header">
      <div  className="container">
        <div className="row">
      <div className="text col">
        <h1 className="text1">{title}</h1>
        <p className="text1">{para}</p>
        <button className="btn1 text1">{button}</button>
      </div>
      <div className="col">
        <img
          class="m"
          src={require("../components/images/headerImg/Frame.png")}
          alt="a"
        />
      </div>
      </div>
      </div>
    </div>
  );
}
