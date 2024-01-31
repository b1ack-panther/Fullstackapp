import React from "react";
import "../styles/chats.css";
import ChrisAvatar from "../assets/chris.png";
import MaggieAvatar from "../assets/maggie.png";
import GaelAvatar from "../assets/gael.png";
import JennaAvatar from "../assets/jenna.png";

const Chats = () => {
	return (
		<div className="chats-body">
			<h2>Chats</h2>
			<p>2 unread messages</p>
			<div className="chat-avatars">
				<div className="user-active">
					<img src={MaggieAvatar} alt="avatar-img" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
					>
						<circle
							cx="4"
							cy="4"
							r="3"
							fill="#EB5050"
							stroke="#FFF7E8"
							strokeWidth="2"
						/>
					</svg>
				</div>
				<div className="user-active">
					<img src={ChrisAvatar} alt="avatar-img" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
					>
						<circle
							cx="4"
							cy="4"
							r="3"
							fill="#EB5050"
							stroke="#FFF7E8"
							strokeWidth="2"
						/>
					</svg>
				</div>
				<div>
					<img src={GaelAvatar} alt="avatar-img" />
				</div>
				<div>
					{" "}
					<img src={JennaAvatar} alt="avatar-img" />
				</div>
			</div>
		</div>
	);
};

export default Chats;
