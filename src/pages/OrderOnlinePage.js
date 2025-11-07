import React from "react";

import Header from '../components/Header-Homepage'
import Footer from '../components/Footer'

import OrderOnline from "../components/OrderOnline";

const OrderOnlinePage = () => {
  return (
    <>
      <Header />
      <OrderOnline />
      <Footer/>
    </>
  );
};

export default OrderOnlinePage;