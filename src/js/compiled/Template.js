class Template extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return React.createElement(
            "div",
            { className: "container border" },
            React.createElement(
                "h2",
                null,
                "Template Reactjs Component "
            )
        );
    }
}