import React from "react";
import data from "./data";

export default class DevDraw extends React.Component {
    constructor(){
        super();
        this.state = {
            points: [
                // {x:10,y:80},
                // {x:90,y:20},
            ],
            results: "",
            name: "",
        };

        this.onClick = this.onClick.bind(this);
        this.clickDone = this.clickDone.bind(this);
    }
    componentDidMount() {
        // this.updateCanvas();
    }

    onClick(event){

        var rect = event.target.getBoundingClientRect();
        var x1 = event.clientX - rect.left;
        x1 = Math.round(x1);
        var y2 = event.clientY - rect.top;
        y2 = Math.round(y2);

        this.state.points.push({x: x1,y:y2});
        this.forceUpdate();

        var points = JSON.stringify(this.state.points);
        var way  =this.calcWaypoints(this.state.points);
    }

    calcWaypoints(vertices) {
        var waypoints = [];
        for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < 100; j++) {
                var x = pt0.x + dx * j / 100;
                var y = pt0.y + dy * j / 100;
                waypoints.push({
                    x: x,
                    y: y
                });
            }
        }
        return (waypoints);
    }

    render() {
        //http://jsfiddle.net/m1erickson/7faRQ/

        return (
            <div className="container border">
                <svg width={"100%"} height={"500px"} onClick={this.onClick}  xmlns="http://www.w3.org/2000/svg">

                    {
                        this.calcWaypoints(this.state.points).map(( value,i ) => {

                            return (
                                <circle key={i} cx={value.x} cy={value.y} r="1"/>
                            );
                        })
                    }

                </svg>

                <input className="form-control" onChange={(event)=>this.inputChange(event)} value={this.state.name} />
                <button onClick={ ()=>this.random() } className="btn btn-info">Random</button>
                <button onClick={()=>this.undo()} className="btn btn-danger">undo</button>
                <button onClick={this.clickDone} className="btn btn-primary">Done</button>
                <div>
                    {
                        this.state.results
                    }
                </div>

            </div>
        );
    }

    clickDone() {

        var points = JSON.stringify({name: this.state.name, points: this.state.points})+",";
        this.setState({results: points });

        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = points;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    inputChange(event) {
        var name = event.currentTarget.value;
        this.setState({name: name});
    }

    random() {

        var random_index = Math.floor(Math.random() * data.invalid.length-1) + 1;
        var draw_item = data.invalid[random_index];
        console.log(draw_item);
        this.setState({name:draw_item.name});
    }
    undo() {
        this.state.points.pop();
        this.forceUpdate();
    }
}