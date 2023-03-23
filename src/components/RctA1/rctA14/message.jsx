import React, { Component } from "react";
class Message extends Component {
	render() {
		let { message,onBack,onDelete} = this.props;
		let {id, from, to, subject, text } = message;
		return (
			<React.Fragment>
				<div className="row border">
					<div className="col-6" onClick={()=>onBack()}><i class="fa fa-arrow-left"></i></div>
					<div className="col-6 text-end" onClick={()=>onDelete(id)}><i class="fa fa-trash"></i></div>
				</div>
				<div className="row border">
					<div className="col m-2">
						From : {from} <br />
						To : {to} <br />
						Subject : {subject} <br />
						{text} <br />
						Regards,
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Message;
