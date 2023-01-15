import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import { useState } from "react";
import SignIn from "./SignIn";
import News from "./components/data";
import Section from "./components/Section";
import Hand from "./components/Hand";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState();

  let data = {
    menu: ["Our story", "Membership", "Write", "Sign In"],
    title: "Stay curious.",
    para: "Discover stories, thinking, and expertise from writers on any topic.",
    button: "Start Reading",
    footer: ["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Terms", "About"," Text to speech "]
  };
  const list = ["Programming", "Data Science", "Technology","Self Improvement", "Writing",
  "Relationships","Machine Learning","Productivity", "Politics" ]



  const onLogin = (username, password) => {
    //id

    setUser(username);
    console.log(username, password);
  };

  return (
    <div>
      <Menu sent={data.menu} onLogin={onLogin} user={user} />
      {!user && (
        <Header title={data.title} para={data.para} button={data.button} />
      )}
      <Section Lists = {News.Lists}/>
    
      <Section1 news={News} user={user} list={list} footer = {data.footer}/>
    </div>
  );
}

export default App;
