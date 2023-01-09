export default function Section1({ News }) {
  return (
    <div>
      {News.map((c) => {
        return (
            <div className="row">
          
                <p>id{c.id}</p>
                <img alt="" />
                <p>head{c.head}</p>
                <p>title{c.title}</p>
                <p>date{c.date}</p>
                <p>isTrending{c.isTrending}</p>
                <p>category{c.category}</p>
                <p>key{c.key}</p>
                <p>read{c.read}</p>
                <p>createdUser{c.createdUser}</p>
            </div>
            );
            
        })}
  );}
