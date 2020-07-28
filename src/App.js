import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/IndexBanner/IndexBanner';
import Description from './Components/IndexBio/IndexBio';
import BlogPost from './Components/IndexBlog/IndexBlog';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/About/About';
import AllBlogs from './Components/AllBlogs/AllBlogs';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Banner />
          <Description />
          <BlogPost />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/blog'>
        <AllBlogs />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
