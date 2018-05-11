class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-expand-lg navbar-light bg-light" },
      React.createElement(
        "a",
        { className: "navbar-brand", href: "#" },
        "Navbar"
      ),
      React.createElement(
        "button",
        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        React.createElement("span", { className: "navbar-toggler-icon" })
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
        React.createElement(
          "ul",
          { className: "navbar-nav mr-auto" },
          React.createElement(
            "li",
            { className: "nav-item active" },
            React.createElement(
              "a",
              { className: "nav-link", href: "#" },
              " ",
              React.createElement(Login, null),
              " ",
              React.createElement(
                "span",
                { className: "sr-only" },
                "(current)"
              )
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link", href: "#" },
              "Link"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item dropdown" },
            React.createElement(
              "a",
              { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
              "Dropdown"
            ),
            React.createElement(
              "div",
              { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
              React.createElement(
                "a",
                { className: "dropdown-item", href: "#" },
                "Action"
              ),
              React.createElement(
                "a",
                { className: "dropdown-item", href: "#" },
                "Another action"
              ),
              React.createElement("div", { className: "dropdown-divider" }),
              React.createElement(
                "a",
                { className: "dropdown-item", href: "#" },
                "Something else here"
              )
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link disabled", href: "#" },
              "Disabled"
            )
          )
        ),
        React.createElement(
          "form",
          { className: "form-inline my-2 my-lg-0" },
          React.createElement("input", { className: "form-control mr-sm-2", type: "search", placeholder: "Search", "aria-label": "Search" }),
          React.createElement(
            "button",
            { className: "btn btn-outline-success my-2 my-sm-0", type: "submit" },
            "Search"
          )
        )
      )
    );
  }
}