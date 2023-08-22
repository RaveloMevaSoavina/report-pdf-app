import { FC, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { data } from '../../utils/data';
import { options } from '../../utils/chartOptions';

interface IPieChart {
  setImageSrc: (src: string) => void;
}

const PieChart: FC<IPieChart> = ({ setImageSrc }) => {
  const pieRef = useRef<any>(null);

  useEffect(() => {
    if (pieRef.current) {
      setImageSrc(pieRef.current.canvas.toDataURL('image/png'));
    }
  }, [setImageSrc]);

  return (
    <>
      <Pie
        data={data}
        ref={pieRef}
        options={options}
        style={{ visibility: 'hidden' }}
      />
    </>
  );
};

export default PieChart;
