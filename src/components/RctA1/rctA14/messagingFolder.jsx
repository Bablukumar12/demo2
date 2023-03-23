import React, { Component } from "react";
import Message from "./message";
class MessagingFolder extends Component {
	getColor = (folder) => {
		let { option } = this.props;
		if (option === folder) return "d-block bg-light text-dark";
	};
	render() {
		let { emails, OnOption, option, onMessage, message, onBack, onDelete } =
			this.props;
		const femails = option
			? emails.filter((e1) => e1.folder === option)
			: emails;

		return (
			<React.Fragment>
				<nav class="navbar navbar-expand-sm navbar-light bg-light">
					<span class="navbar-brand mb-0 h1">Navbar</span>
					<ul class="navbar-nav">
						
						<li class="nav-item">
							<a class="nav-link" href="#">
								Messages : {emails.length}
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Unread Messages : {emails.reduce((a,c)=>!c.read? a+1 : a,0)}
							</a>
						</li>
					</ul>
				</nav>
				<div className="row">
					<div className="col-3 bg-secondary text-white">
						<span className="fw-bold">Folders</span>
						<br />
						<span className={this.getColor("")} onClick={() => OnOption("")}>
							All
						</span>
						<br />
						<span
							className={this.getColor("Inbox")}
							onClick={() => OnOption("Inbox")}>
							Inbox
						</span>
						<br />
						<span
							className={this.getColor("Social")}
							onClick={() => OnOption("Social")}>
							Social
						</span>
						<br />
						<span
							className={this.getColor("Sent")}
							onClick={() => OnOption("Sent")}>
							Sent
						</span>
					</div>
					{message.id ? (
						<div className="col-9">
							<Message message={message} onBack={onBack} onDelete={onDelete} />
						</div>
					) : (
						<div className="col-9">
							{femails.map((e1) => {
								let { id, sent, from, to, subject, text, folder, read } = e1;
								let getClass = !read ? "fw-bolder" : "";
								return (
									<div className="row border p-2" onClick={() => onMessage(id)}>
										<div className="col-1">
											{read ? (
												<i class="fa fa-envelope-open-o"></i>
											) : (
												<i class="fa fa-envelope-o"></i>
											)}
										</div>
										<div className={"col-5 " + getClass}>{from}</div>
										<div className={"col-6 " + getClass}>{subject}</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}
export default MessagingFolder;
