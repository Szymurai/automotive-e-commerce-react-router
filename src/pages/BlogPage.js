import React, { Component } from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    author: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus porta odio, nec tincidunt felis rhoncus at. Nullam accumsan suscipit orci, nec luctus eros auctor quis. Sed vitae dictum risus, sodales pellentesque ante. Sed cursus erat ac iaculis posuere. Etiam dui velit, viverra feugiat porttitor accumsan, rhoncus a libero. Mauris pretium sollicitudin varius. Proin pretium quam et viverra accumsan. Suspendisse potenti. Donec mollis laoreet nisi, quis vehicula est dignissim sit amet. Donec scelerisque purus ex. Duis rhoncus orci tincidunt ante condimentum, eget ullamcorper lacus tristique. Nulla sagittis ipsum eu risus suscipit vestibulum. Cras congue, ipsum nec faucibus volutpat, sapien ligula posuere tellus, id lobortis augue neque nec ante.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    author: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus porta odio, nec tincidunt felis rhoncus at. Nullam accumsan suscipit orci, nec luctus eros auctor quis. Sed vitae dictum risus, sodales pellentesque ante. Sed cursus erat ac iaculis posuere. Etiam dui velit, viverra feugiat porttitor accumsan, rhoncus a libero. Mauris pretium sollicitudin varius. Proin pretium quam et viverra accumsan. Suspendisse potenti. Donec mollis laoreet nisi, quis vehicula est dignissim sit amet. Donec scelerisque purus ex. Duis rhoncus orci tincidunt ante condimentum, eget ullamcorper lacus tristique. Nulla sagittis ipsum eu risus suscipit vestibulum. Cras congue, ipsum nec faucibus volutpat, sapien ligula posuere tellus, id lobortis augue neque nec ante.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    author: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus porta odio, nec tincidunt felis rhoncus at. Nullam accumsan suscipit orci, nec luctus eros auctor quis. Sed vitae dictum risus, sodales pellentesque ante. Sed cursus erat ac iaculis posuere. Etiam dui velit, viverra feugiat porttitor accumsan, rhoncus a libero. Mauris pretium sollicitudin varius. Proin pretium quam et viverra accumsan. Suspendisse potenti. Donec mollis laoreet nisi, quis vehicula est dignissim sit amet. Donec scelerisque purus ex. Duis rhoncus orci tincidunt ante condimentum, eget ullamcorper lacus tristique. Nulla sagittis ipsum eu risus suscipit vestibulum. Cras congue, ipsum nec faucibus volutpat, sapien ligula posuere tellus, id lobortis augue neque nec ante.",
  },
];

class BlogPage extends Component {
  state = {};
  render() {
    const artList = articles.map((article) => (
      <Article key={article.id} {...article}></Article>
    ));
    return <div className="blog">{artList}</div>;
  }
}

export default BlogPage;
