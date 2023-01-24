import React from "react";
import Header from "../components/Header";
import Section1 from "../components/Section1";

import Section from "../components/Section";

import { Lists, News } from "../components/data";

export default function MainNews({ data, list, user }) {
  console.log("ahahah");
  return (
    <div>
      {!user && (
        <Header title={data.title} para={data.para} button={data.button} />
      )}
      <Section Lists={Lists} />
      <Section1 news={News} user={user} list={list} footer={data.footer} />
    </div>
  );
}
