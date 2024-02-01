import React from "react";
import "../styles/growth.css";
import GrowthChart from "./GrowthChart";
import MaggieAvatar from "../assets/maggie.png";
import { ResponsiveContainer } from "recharts";

const Growth = () => {
	return (
		<div className="growth-body">
			<div className="growth-main">
				<div className="growth-header">
					<h3>Growth</h3>
					<div className="sort">
						<select name="sort-by" id="sort-by">
							<option value="Yearly">Yearly</option>
							<option value="Weekly">Weekly</option>
							<option value="Daily">Daily</option>
						</select>
					</div>
				</div>
				<div className="growth-chart">
					<ResponsiveContainer >
						<GrowthChart />
					</ResponsiveContainer>
				</div>
			</div>
			<div className="widget top-month">
				<h3>Top month</h3>
				<div>
					<h2>November</h2>
					<h3>2019</h3>
				</div>
			</div>
			<div className="widget top-year">
				<h3>Top year</h3>
				<div>
					<h2>2023</h2>
					<h3>96K sold so far</h3>
				</div>
			</div>
			<div className="widget top-buyer">
				<h3>Top Buyer</h3>
				<div>
					<img src={MaggieAvatar} alt="avater-img" />
					<h2>Maggie Johnson</h2>
					<p>Oasis Organic Inc.</p>
				</div>
			</div>
		</div>
	);
};

export default Growth;
