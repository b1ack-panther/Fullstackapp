import React from "react";
import "../styles/topStates.css"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const TopStates = () => {
	const data = [
		{ name: "NY", profit: 120 },
		{ name: "MA", profit: 80 },
		{ name: "NH", profit: 70 },
		{ name: "OR", profit: 30 },
	];

	const CustomizedLabel = ({ x, y, fill, value }) => (
		<text
			x={value*1.5}
			y={y*1.8}
			fontSize="10"
			fontFamily="sans-serif"
      fill={fill}
      margin={{top: 10}}
			textAnchor="start"
		>
			{`${value}K`}
		</text>
	);

	return (
		<div
			className="top-states-body"
			// style={{ width: "270px", height: "200px" }}
		>
			<h2>Top States</h2>
			<div>
				<ResponsiveContainer width="100%" height={100}>
					<BarChart
						data={data}
						layout="vertical"
						barCategoryGap={1}
						margin={{ top: 0, right: 50, left: 5, bottom: 0 }}
						barSize={30}
					>
						<defs>
							<linearGradient id="colorOrange" x1="0" y1="0" x2="1" y2="0">
								<stop offset="0%" stopColor="#FFCD71" />
								<stop offset="200%" stopColor="rgba(255, 205, 113, 0.2)" />
							</linearGradient>
						</defs>
						<XAxis type="number" hide />
						<YAxis
							type="category"
							width={30}
							padding={{ left: 20 }}
							margin={{ left: 20 }}
							label={{ position: "" }}
							dataKey="name"
							// tick={{
							// 	transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`,
							// }}
						/>
						<Bar
							dataKey="profit"
							fill="url(#colorOrange)"
							// label={<CustomizedLabel />}
							// label={{ position: "top" }}
						></Bar>
						<Tooltip />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TopStates;
