import { useEffect, useRef } from 'react';
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

const options: any = {
  animation: {
    duration: 0, // Set the animation duration to 0 to disable animations
  },
  plugins: {
    legend: {
      display: true,
      position: 'center',
    },
  },
};

const PieChart = ({ setImageSrc }: { setImageSrc: (src: string) => void }) => {
  const pieRef = useRef<any>(null);

  useEffect(() => {
    if (pieRef.current) {
      setImageSrc(pieRef.current.canvas.toDataURL('image/png'));
    }
  }, [setImageSrc]);

  return (
    <div>
      <Pie
        data={data}
        ref={pieRef}
        options={options}
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};

export default PieChart;
