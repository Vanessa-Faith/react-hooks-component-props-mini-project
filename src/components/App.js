import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;