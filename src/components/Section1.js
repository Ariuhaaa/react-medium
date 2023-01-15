export default function Section1({ news, list, footer }) {
  // console.log(News);
  return (
    <div className="container">
    <div className="row">
    <div  className="col-8">
      {news.map((c) => {
        return (
          <div className="row section1 container">
            {/* <p>{c.id}</p> */}
            <img className="zurag" src={c.img} alt="s" />
            <h5>{c.head}</h5>
            <p>{c.title}</p>
            <div className="d-flex justify-content-between col-11">
              <p>{c.date}</p>
              <p>{c.isTrending}</p>
              <p>{c.category}</p>
              <p className="key">{c.key}</p>
              <p>{c.read}</p>
              <p>{c.createdUser.Name}</p>
              {/* <p>{c.createdUser.img}</p> */}
            </div>
          </div>
        );
      })}
      </div>
        <div className="col">
          <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
          <div>
            {list.map((e)=>{
              return <button className="btns">{e}</button>
            })}
            </div>
            <hr/>
            {footer.map((e)=>{
              return <p className="footer">{e}</p>
            })}
        </div>
      </div>
    </div>
  );
}
