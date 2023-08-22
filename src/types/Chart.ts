export interface IChartData {
	labels: string[];
	datasets: Dataset[];
}


interface Dataset {
	label: string;
	backgroundColor: string[];
	borderColor: string;
	data: number[];
}
  