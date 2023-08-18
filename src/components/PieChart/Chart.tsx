import { PieChart, Pie, Cell, Legend } from 'recharts';

const PieRechartComponent = () => {
  const COLORS = ['#8884d8', '#82ca9d', '#FFBB28', '#FF8042', '#AF19FF'];

  const pieData = [
    {
      name: 'Ferraille',
      value: 54.85,
    },
    {
      name: 'Beton',
      value: 47.91,
    },
    {
      name: 'Gravats',
      value: 16.85,
    },
  ];

  return (
    <PieChart width={730} height={300}>
      <Pie
        data={pieData}
        color='#000000'
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        outerRadius={120}
        fill='#8884d8'>
        {pieData.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default PieRechartComponent;
