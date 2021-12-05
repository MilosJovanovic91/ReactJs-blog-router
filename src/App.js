import { useState, useEffect } from "react";
import { Routes, Route, useHistory } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./page/About";
import Home from "./page/Home";
import MissingPage from "./page/MissingPage";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="post" element={NewPost} />
        <Route path="post/:id" element={PostPage} />
        <Route path="about" element={About} />
        <Route path="*" element={MissingPage}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
