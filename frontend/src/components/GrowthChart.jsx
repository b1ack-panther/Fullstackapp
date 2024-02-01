import { useEffect, useState } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";
import axios from "axios"



const GrowthChart = () => {
  const [data, setData] = useState([])
useEffect(() => { 
  axios.get("http://localhost:5555/data")
    .then((res) => {console.log(res); setData(res.data) })
  .catch((err)=>{console.log(err)})
}, [])
	
	return (
		<AreaChart
			style={{
				'color': " #7D7D7D",
				"fontFamily": "Inter",
				"fontSize": "10px",
				"fontWeight": "500",
				"letterSpacing": "-0.3px",
			}}
			width={450}
			height={160}
			data={data}
			margin={{ top: 10, right: 20, left: -20 }}
		>
			<defs>
				<linearGradient id="paint0_linear_33_474" x1="0" y1="0" x2="0" y2="1">
					<stop offset="10%" stopColor="#25CD25" stopOpacity={0.6} />
					<stop offset="100%" stopColor="#25CD25" stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis
        tickMargin={15}
        tickFormatter={(value) => value.split("-")[1] + "-" + value.split("-")[0]}
				dataKey="date"
			/>
			<YAxis tickMargin={15} tickFormatter={(value) => value + "k"} />
			<CartesianGrid />
			<Tooltip />

			<Area
				type="linear"
				dataKey="profit"
				stroke="#25CD25"
				strokeDasharray="3 3"
				strokeWidth="2"
				fillOpacity={1}
				fill="url(#paint0_linear_33_474)"
			/>
		</AreaChart>
	);
};

export default GrowthChart