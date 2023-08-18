import './App.css';
import DownloadButton from './components/Button/Download';
import downloadSvg from './assets/download.svg';
import Header from './components/Header/Header';
import Report from './components/ReportPDF/Report';
import usePdfGenerator from './hooks/usePdfGenerator';
import PieRechartComponent from './components/PieChart/Chart';
import { ComposedChart } from 'recharts';

function App() {
  const generatePDF = usePdfGenerator();

  const handleDownload = async () => {
    generatePDF(<Report />, 'PDF_REPORT.pdf');
  };

  return (
    <div id='root'>
      <div className='header'>
        <Header />
      </div>
      <div className='root-title'>
        <h1>
          Unlock Insights with Elegant <br /> Data Visualization
        </h1>
        <p>
          Welcome to our Statistical Report App, where data-driven decisions
          become a breeze. <br />
          Whether you're a seasoned analyst or just starting out, our app
          empowers you to create visually stunning reports that leave a lasting
          impression.
        </p>
        <DownloadButton onDownload={handleDownload}>
          <div className='button-content'>
            <img alt='download' src={downloadSvg} id='download-logo' />
            <span>Download your ReportPDF</span>
          </div>
        </DownloadButton>
        <ComposedChart style={{ display: 'none' }}>
          <PieRechartComponent />
        </ComposedChart>
      </div>
    </div>
  );
}

export default App;
