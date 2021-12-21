import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import { Route, Routes } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import MyCart from './components/MyCart/MyCart';


function App() {


  let routes = (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/my-cart" element={<MyCart />} />
    </Routes>

  );
  return (
    <Fragment>
      <Layout>
        {routes}
      </Layout>
    </Fragment>
  );
}

export default connect()(App);
