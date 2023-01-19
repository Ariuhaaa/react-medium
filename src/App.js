import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import { useState } from "react";
import SignIn from "./SignIn";
import News from "./components/data";
import Section from "./components/Section";
import Hand from "./components/Hand";
import Lists from "./components/lists";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Page from "./components/Page";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState();
  const [admin, setAdmin] = useState(false);
  const [write, setWrite] = useState(true);

  let data = {
    menu: ["Our story", "Membership", "Write", "Sign In"],
    title: "Stay curious.",
    para: "Discover stories, thinking, and expertise from writers on any topic.",
    button: "Start Reading",
    footer: [
      "Help",
      "Status",
      "Writers",
      "Blog",
      "Careers",
      "Privacy",
      "Terms",
      "About",
      " Text to speech ",
    ],
  };
  const list = [
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
  ];

  const onLogin = (username, password) => {
    //id

    setUser(username);
    console.log(username, password);
  };

  return (
    <div>
      {!admin ? (
        <>
          <Menu
            sent={data.menu}
            onLogin={onLogin}
            user={user}
            setAdmin={setAdmin}
            setWrite={setWrite}
          />
          {!user && (
            <Header title={data.title} para={data.para} button={data.button} />
          )}
          <Section Lists={Lists} />
          <Section1 news={News} user={user} list={list} footer={data.footer} />
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
