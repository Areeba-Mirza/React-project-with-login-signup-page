import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  // Toggle mobile menu
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Logout function
  handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");

    // Update App.js state via props
    if (this.props.setIsLoggedIn) this.props.setIsLoggedIn(false);
    if (this.props.setUserRole) this.props.setUserRole("");

    this.setState({ clicked: false });
  };

  render() {
    const { isLoggedIn } = this.props; // always use App.js state

    // Filter menu items based on login status
    const filteredMenu = MenuItems.filter((item) => {
      if (item.private && !isLoggedIn) return false; // private links
      if (isLoggedIn && (item.title === "Login" || item.title === "Sign Up"))
        return false; // hide login/signup
      return true;
    });

    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {filteredMenu.map((item, index) => (
            <li key={index}>
              <Link
                className={item.Cname}
                to={item.url}
                onClick={() => this.setState({ clicked: false })} // only close menu
              >
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          ))}

          {/* Logout button */}
          {isLoggedIn && (
            <li>
              <button className="logout-btn" onClick={this.handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
