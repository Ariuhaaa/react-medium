export default function Header({ title, para, button }) {
  return (
    <div className="header row">
      <div className="text col-5">
        <h1 className="text1">{title}</h1>
        <p className="text1">{para}</p>
        <button className="btn1 text1">{button}</button>
      </div>

      <div className="col-5">
        <img
          class="m"
          src={require("../components/images/headerImg/Frame.png")}
          alt=""
          width={300}
        />
      </div>
    </div>
  );
}
