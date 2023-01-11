export default function Section1({ news }) {
  // console.log(News);
  return (
    <div>
      {news.map((c) => {
        return (
          <div className="row section1 col-4 border container">
            <p>{c.id}</p>
            <img className="zurag" src={c.img} alt="s" />
            <h4>{c.head}</h4>
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
        );
      })}
    </div>
  );
}
