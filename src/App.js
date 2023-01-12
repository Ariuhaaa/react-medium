import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import { useState } from "react";
import SignIn from "./SignIn";
import News from "./components/data";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState();

  let data = {
    menu: ["Our story", "Membership", "Write", "Sign In"],
    title: "Stay curious",
    para: "Discover stories, thinking, and expertise from writers on any topic.",
    button: "Start Reading",
  };

  const onLogin = (username, password) => {
    //ididi

    setUser(username);
    console.log(username, password);
  };

  return (
    <div>
      <Menu sent={data.menu} onLogin={onLogin} user={user} />
      {!user && (
        <Header title={data.title} para={data.para} button={data.button} />
      )}
      <Section1 news={News} user={user} />
    </div>
  );
}
export default App;
