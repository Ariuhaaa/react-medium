export default function Section1 ({id, head,title,date,isTrending,category,key,read,createdUser}) {
    // console.log(News);
    return (
        {News.map((c)=>{
            return (
            <div>
                <p>id{c.id}</p>
                <img alt=""/>
                <p>head{c.head}</p>
                <p>title{c.title}</p>
                <p>date{c.date}</p>
                <p>isTrending{c.isTrending}</p>
                <p>category{c.category}</p>
                <p>key{c.key}</p>
                <p>read{c.read}</p>
                <p>createdUser{c.createdUser}</p>
            </div>
            )
        })
    )
}