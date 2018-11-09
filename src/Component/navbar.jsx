import React from "react";
import { Breadcrumb, Icon, Button } from "antd";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Icon type="home" />
        <span>
          <a href="#"> Home </a>
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon type="user" />
        <span>
          <a href="#">About</a>
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Cart</a>
        <Button type="primary">{totalCounters}</Button>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default NavBar;
