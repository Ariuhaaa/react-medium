export default function Section1({ news, list, footer }) {
  // console.log(News);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {news.map((c) => {
            return (
              <div className="row section1 container">
                <div className="col">
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
                  </div>
                </div>
                <div className="col">
                  <img className="w-100 col" src={c.createdUser.img} alt="a" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 right">
          <br/>
          <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
          <div>
            {list.map((e) => {
              return <button className="btns">{e}</button>;
            })}
          </div>
          <hr />
          <div className="d-flex flex-wrap">
            {footer.map((e) => {
              return <p className="footer px-3">{e}</p>;
            })}
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}
