import { IChartData } from "../types/Chart";

const data: IChartData = {
	labels: ['January', 'February', 'March'],
	datasets: [
		{
		label: 'My First dataset',
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(0, 255, 0)',
			'rgb(0, 0, 255)',
		],
		borderColor: 'rgb(0, 0, 0)',
		data: [10, 20, 15], // Update the data values accordingly
		},
	],
};

export default data;