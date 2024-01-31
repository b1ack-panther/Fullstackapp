import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Revenues from "./components/Revenues.jsx";
import LostDeals from "./components/LostDeals.jsx";
import QuarterGoal from "./components/QuarterGoal.jsx";
import Customers from "./components/Customers.jsx";
import Chats from "./components/Chats.jsx";
import TopStates from "./components/TopStates.jsx";
import NewDeals from "./components/NewDeals.jsx";
import Growth from "./components/Growth.jsx";

const App = () => {
	return (
		<div className="main">
			<Sidebar />
			<div className="dashboard-body">
				<div className="dashboard-top">
					<Revenues />
					<LostDeals />
					<QuarterGoal />
				</div>
				<div className="dashboard-mid">
					<Customers />
					<Growth />
				</div>
				<div className="dashboard-bottom">
					<Chats />
					<TopStates />
					<NewDeals />
				</div>
			</div>
		</div>
	);
};
export default App;
