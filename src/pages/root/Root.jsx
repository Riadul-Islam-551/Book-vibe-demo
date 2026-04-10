import React from "react";
import Nav from "../../components/navbar/Nav";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
