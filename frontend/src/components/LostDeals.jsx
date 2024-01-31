import React from 'react'
import "../styles/lostDeals.css"

const LostDeals = () => {
  return (
		<div className="lost-deals-body">
			<h3>Lost deals</h3>
			<div>
				<h2>4%</h2>
			</div>
			<p>Increase compared to last week</p>
			<a href="#">
				All deals{" "}
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

export default LostDeals
