import React from "react";
import "./HeaderNav.css";
import logo from "../../assets/images/logo.png";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          code: "JP_RESOURCE",
          name: "精品资源",
        },
        {
          code: "XB_RESOURCE",
          name: "校本资源",
        },
      ],
    };
  }

  render() {
    return (
      <div className="nav-header-wrapper">
        <div className="nav-header">
          <img src={logo} className="logo" />
          <ul className="nav-list">
            {this.state.navList.map((nav) => (
              <li key={nav.code}>{nav.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
