import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex  flex-col gap-5">
      <Header />
      <div className="   border-red-500">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
