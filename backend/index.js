import express from "express";
import { PORT } from "./configure.js";
import fs from "fs";
import cors from "cors";
import {datafile} from "./datafile.js"

const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use((req, res, next) => {
	res.setHeader(
		"Content-Security-Policy",
		"default-src 'none'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
	);
	next();
});

function parseCSVAndDownsample(csvData, interval) {
	var lines = csvData.split("\n");
	var data = [];
	lines.forEach(function (line) {
		var parts = line.split(",");
		if (parts.length === 2) {
			var timestamp = new Date(parts[0]);
			var profit = parseFloat(parts[1]);
			if (!isNaN(profit)) {
				data.push({ timestamp: timestamp.toISOString(), profit: profit });
			}
		}
	});

	var downsampledData = [];
	var sum = 0;
	var count = 0;
	var startDate = new Date(data[0].timestamp);

	data.forEach(function (entry) {
		var currentDate = new Date(entry.timestamp);
		if (currentDate - startDate < interval) {
			sum += entry.profit;
			count++;
		} else {
			var averageProfit = sum / count;
			downsampledData.push({
				date: startDate.toISOString(),
				profit: Math.round(averageProfit),
			});
			sum = entry.profit;
			count = 1;
			startDate = currentDate;
		}
	});

	var averageProfit = sum / count;
	downsampledData.push({
		date: startDate.toISOString(),
		profit: Math.round(averageProfit),
	});
	return downsampledData;
}

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.get("/data", (req, res) => {
	// fs.readFile("dataset.csv", "utf8", (err, data) => {
	// 	if (err) {
	// 		console.error("Error while reading file:", err);
	// 		return res.status(500).json({ error: "Error while reading file" });
	// 	}
		var downsampledData = parseCSVAndDownsample(datafile, 1500000000);

		res.status(200).json(downsampledData);
	// });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
