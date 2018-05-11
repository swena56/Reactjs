class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        { "data-toggle": "modal", "data-target": "#myModal" },
        "Login"
      ),
      React.createElement(
        "div",
        { className: "modal fade", id: "myModal" },
        React.createElement(
          "div",
          { className: "modal-dialog modal-dialog-centered" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "h4",
                { className: "modal-title" },
                "Modal Heading"
              ),
              React.createElement(
                "button",
                { type: "button", className: "close", "data-dismiss": "modal" },
                "\xD7"
              )
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              "Modal body.."
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                { type: "button", className: "btn btn-danger", "data-dismiss": "modal" },
                "Close"
              )
            )
          )
        )
      )
    );
  }
}