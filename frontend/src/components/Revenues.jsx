import React from 'react'
import "../styles/revenues.css"

const Revenues = () => {
  return (
		<div className="revenues-body">
			<h3>Revenues</h3>
			<div>
				<h2>15%</h2>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
				>
					<path
						d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333"
						stroke="#25CD25"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<p>Increase compared to last week</p>
			<a href="#">
				Revenues report{" "}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="15"
					viewBox="0 0 14 15"
					fill="none"
				>
					<path
						d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
						stroke="#734A00"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</a>
		</div>
	);
}

export default Revenues
