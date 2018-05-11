class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
        	<div>
                <a data-toggle="modal" data-target="#myModal">Login</a>
             
                <div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>

                      <div className="modal-body">
                        Modal body..
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                   </div>
                </div>
			</div>
        );
    }
}