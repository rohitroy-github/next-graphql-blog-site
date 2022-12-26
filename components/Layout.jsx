// Layout will be used as a wrapper

import React from "react";
import Header from "./Header";

const Layout = ({children}) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
