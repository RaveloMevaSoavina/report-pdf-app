import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Bois', 'Carton', 'Ferraille'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: [
        'rgb(230, 126, 34)', // A shade of orange
        'rgb(52, 152, 219)', // A shade of blue
        'rgb(155, 89, 182)', // A shade of purple
      ],
      borderColor: 'rgb(0, 0, 0)',
      data: [10, 20, 15], // Update the data values accordingly
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
