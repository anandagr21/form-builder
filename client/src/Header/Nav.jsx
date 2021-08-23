import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [current, setCurrent] = useState("questions");
  const history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="justify-content-center"
    >
      <Menu.Item key="questions">
        <Link to="/">Questions </Link>
      </Menu.Item>

      <Menu.Item key="response">
        <Link to={`/getForm/${history.location.pathname.split("form/")[1]}`}>
          Responses
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
