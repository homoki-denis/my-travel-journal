import React from "react";
import Card from "./Card";
import data from "../data";

function Content() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return <div className="content">{cards}</div>;
}

export default Content;
