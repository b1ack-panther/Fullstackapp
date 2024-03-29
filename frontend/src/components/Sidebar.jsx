import React, { useEffect, useState } from "react";
import "../styles/sidebar.css";
import Logo from "../assets/Logo.svg";
import AdminAvatar from "../assets/adminAvatar.png";

const Sidebar = () => {
	const [toggleMenu, setToggleMenu] = useState(true);

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth < 840) {
				setToggleMenu(false);
			} else {
				setToggleMenu(true);
			}
		});
	}, []);

	const optionOpener = () => {
		const optionTypes = document.querySelectorAll(".option-types");
		optionTypes.forEach((ele) => ele.classList.toggle("closed"));
		document.querySelector(".customers").classList.toggle("closed");
	}

	return (
		<div className={`sidebar ${toggleMenu ? "active" : "inactive"}`}>
			<div className="toggle-menu" onClick={() => setToggleMenu(!toggleMenu)}>
				{toggleMenu ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<rect
							x="12"
							width="12"
							height="12"
							rx="4"
							transform="rotate(90 12 0)"
							fill="#F7F6F3"
						/>
						<path
							d="M7.5 3L4.5 6L7.5 9"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<rect
							y="12"
							width="12"
							height="12"
							rx="4"
							transform="rotate(-90 0 12)"
							fill="#F7F6F3"
						/>
						<path
							d="M4.5 9L7.5 6L4.5 3"
							stroke="#454545"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</div>
			<div className="top">
				<img src={Logo} alt="Logo" />
				{toggleMenu && <h1>OrangeFarm</h1>}
			</div>
			<div className="mid">
				<div className="search">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 14L10 10M2 6.66667C2 7.2795 2.12071 7.88634 2.35523 8.45252C2.58975 9.01871 2.93349 9.53316 3.36683 9.9665C3.80018 10.3998 4.31462 10.7436 4.88081 10.9781C5.447 11.2126 6.05383 11.3333 6.66667 11.3333C7.2795 11.3333 7.88634 11.2126 8.45252 10.9781C9.01871 10.7436 9.53316 10.3998 9.9665 9.9665C10.3998 9.53316 10.7436 9.01871 10.9781 8.45252C11.2126 7.88634 11.3333 7.2795 11.3333 6.66667C11.3333 6.05383 11.2126 5.447 10.9781 4.88081C10.7436 4.31462 10.3998 3.80018 9.9665 3.36683C9.53316 2.93349 9.01871 2.58975 8.45252 2.35523C7.88634 2.12071 7.2795 2 6.66667 2C6.05383 2 5.447 2.12071 4.88081 2.35523C4.31462 2.58975 3.80018 2.93349 3.36683 3.36683C2.93349 3.80018 2.58975 4.31462 2.35523 4.88081C2.12071 5.447 2 6.05383 2 6.66667Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					{toggleMenu && (
						<input placeholder="Search" type="text" id="search-input" />
					)}
				</div>

				<div className="dashboard">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.66666 2.66666L9.33332 13.3333M7.99999 7.99999L2.66666 9.33332M2.66666 3.99999C2.66666 3.64637 2.80713 3.30723 3.05718 3.05718C3.30723 2.80713 3.64637 2.66666 3.99999 2.66666H12C12.3536 2.66666 12.6928 2.80713 12.9428 3.05718C13.1928 3.30723 13.3333 3.64637 13.3333 3.99999V12C13.3333 12.3536 13.1928 12.6928 12.9428 12.9428C12.6928 13.1928 12.3536 13.3333 12 13.3333H3.99999C3.64637 13.3333 3.30723 13.1928 3.05718 12.9428C2.80713 12.6928 2.66666 12.3536 2.66666 12V3.99999Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					{toggleMenu && <a href="#">Dashboard</a>}
				</div>
				<div className="customers">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.781C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.781C9.71905 11.2811 10 11.9594 10 12.6667V14M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334M14 14V12.6667C13.9966 12.0781 13.7986 11.5072 13.4368 11.0429C13.0751 10.5787 12.5699 10.2471 12 10.1M3.33333 4.66667C3.33333 5.37391 3.61428 6.05219 4.11438 6.55229C4.61448 7.05238 5.29276 7.33333 6 7.33333C6.70724 7.33333 7.38552 7.05238 7.88562 6.55229C8.38572 6.05219 8.66667 5.37391 8.66667 4.66667C8.66667 3.95942 8.38572 3.28115 7.88562 2.78105C7.38552 2.28095 6.70724 2 6 2C5.29276 2 4.61448 2.28095 4.11438 2.78105C3.61428 3.28115 3.33333 3.95942 3.33333 4.66667Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					{toggleMenu && (
						<>
							<div className="customer-options">
								<div onClick={optionOpener} className="main-customer">
									<a>Customers </a>
								</div>
								<div className="option-types">
									<a>Current</a>
								</div>
								<div className="option-types">
									<a>New</a>
								</div>
								<div className="option-types">
									<a>Negotiating</a>
								</div>
							</div>
							<svg
								onClick={optionOpener}
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4 6L8 10L12 6"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</>
					)}
				</div>

				<div className="all-reports">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.00001 3.33333H4.66668C4.31305 3.33333 3.97392 3.47381 3.72387 3.72386C3.47382 3.97391 3.33334 4.31304 3.33334 4.66667V12.6667C3.33334 13.0203 3.47382 13.3594 3.72387 13.6095C3.97392 13.8595 4.31305 14 4.66668 14H11.3333C11.687 14 12.0261 13.8595 12.2762 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2762 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H10M6.00001 3.33333C6.00001 2.97971 6.14049 2.64057 6.39053 2.39052C6.64058 2.14048 6.97972 2 7.33334 2H8.66668C9.0203 2 9.35944 2.14048 9.60949 2.39052C9.85953 2.64057 10 2.97971 10 3.33333M6.00001 3.33333C6.00001 3.68696 6.14049 4.02609 6.39053 4.27614C6.64058 4.52619 6.97972 4.66667 7.33334 4.66667H8.66668C9.0203 4.66667 9.35944 4.52619 9.60949 4.27614C9.85953 4.02609 10 3.68696 10 3.33333M6.00001 11.3333V8.66667M8.00001 11.3333V10.6667M10 11.3333V10"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					{toggleMenu && <a href="#">All Reports</a>}
				</div>
				<div className="geography">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.39998 6H13.6M2.39998 10H13.6M7.66669 2C6.54358 3.79974 5.94816 5.87858 5.94816 8C5.94816 10.1214 6.54358 12.2003 7.66669 14M8.33333 2C9.45644 3.79974 10.0519 5.87858 10.0519 8C10.0519 10.1214 9.45644 12.2003 8.33333 14M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{toggleMenu && <a href="#">Geography</a>}
				</div>
				<div className="conversations">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 13.3333L2.86667 10.7333C1.31733 8.442 1.916 5.48533 4.26667 3.81733C6.61733 2.15 9.99333 2.28666 12.1633 4.13733C14.3333 5.98866 14.6267 8.98133 12.8493 11.138C11.072 13.2947 7.77267 13.948 5.13333 12.6667L2 13.3333Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{toggleMenu && <a href="#">Conversations</a>}
				</div>
				<div className="deals">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.3333 6.66666L10 2.66666M4.66667 6.66666L6 2.66666M7.33331 13.3333H4.82931C4.35158 13.3333 3.88963 13.1623 3.52707 12.8512C3.1645 12.5401 2.92526 12.1095 2.85265 11.6373L2.01598 6.86932C1.98676 6.67931 1.99897 6.48523 2.05178 6.30038C2.1046 6.11553 2.19676 5.94429 2.32194 5.79839C2.44713 5.6525 2.60239 5.5354 2.77708 5.45512C2.95176 5.37485 3.14174 5.3333 3.33398 5.33332H12.6666C12.8589 5.3333 13.0489 5.37485 13.2236 5.45512C13.3982 5.5354 13.5535 5.6525 13.6787 5.79839C13.8039 5.94429 13.896 6.11553 13.9488 6.30038C14.0017 6.48523 14.0139 6.67931 13.9846 6.86932L13.6653 8.68866M10 12.6667L11.3333 14L14 11.3333M6.66667 9.33332C6.66667 9.68694 6.80714 10.0261 7.05719 10.2761C7.30724 10.5262 7.64638 10.6667 8 10.6667C8.35362 10.6667 8.69276 10.5262 8.94281 10.2761C9.19286 10.0261 9.33333 9.68694 9.33333 9.33332C9.33333 8.9797 9.19286 8.64056 8.94281 8.39051C8.69276 8.14047 8.35362 7.99999 8 7.99999C7.64638 7.99999 7.30724 8.14047 7.05719 8.39051C6.80714 8.64056 6.66667 8.9797 6.66667 9.33332Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{toggleMenu && <a href="#">Deals</a>}
				</div>
				<div className="export">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.66666 4C2.66666 5.10467 5.05466 6 7.99999 6C10.9453 6 13.3333 5.10467 13.3333 4M2.66666 4C2.66666 2.89533 5.05466 2 7.99999 2C10.9453 2 13.3333 2.89533 13.3333 4M2.66666 4V8M13.3333 4V8M2.66666 8C2.66666 9.10467 5.05466 10 7.99999 10C8.74532 10 9.45532 9.94267 10.1 9.83933M2.66666 8V12C2.66666 13.1047 5.05466 14 7.99999 14C8.10466 14 8.20799 13.9987 8.31066 13.9967M10.6667 12.6667H14.6667M14.6667 12.6667L12.6667 10.6667M14.6667 12.6667L12.6667 14.6667"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{toggleMenu && <a href="#">Export</a>}
				</div>
			</div>
			<div className="bottom">
				<div className="user">
					<img src={AdminAvatar} alt="adminAvatar" />
					{toggleMenu && (
						<div className="user-dets">
							<h4>Gustavo Xavier</h4>
							<div>Admin</div>
						</div>
					)}
				</div>
				<div className="settings">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.25 4.18C13.4791 4.3103 13.6694 4.49931 13.8012 4.72757C13.933 4.95582 14.0016 5.21508 14 5.47866V10.3347C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0896C2.07247 10.8612 2.00053 10.6004 2 10.3347V5.478C2 4.93866 2.29533 4.442 2.772 4.18L7.272 1.52666C7.50169 1.40002 7.75971 1.3336 8.022 1.3336C8.28429 1.3336 8.54231 1.40002 8.772 1.52666L13.272 4.18H13.25Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6 8.00001C6 8.53044 6.21071 9.03915 6.58579 9.41422C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41422C9.78929 9.03915 10 8.53044 10 8.00001C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21072 8.53043 6.00001 8 6.00001C7.46957 6.00001 6.96086 6.21072 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8.00001Z"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{toggleMenu && <a href="#">Settings</a>}
				</div>
				<div className="logout">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.33333 5.33334V4.00001C9.33333 3.64638 9.19286 3.30724 8.94281 3.0572C8.69276 2.80715 8.35362 2.66667 8 2.66667H3.33333C2.97971 2.66667 2.64057 2.80715 2.39052 3.0572C2.14048 3.30724 2 3.64638 2 4.00001V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 8.00001H14M14 8.00001L12 6.00001M14 8.00001L12 10"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{toggleMenu && <a href="#">Logout</a>}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
