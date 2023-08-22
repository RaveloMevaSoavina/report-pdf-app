import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import Logo from '../../assets/logo.png';
import { CategoryScale, Chart } from 'chart.js';
import PieChart from '../PieChart/Chart';
import imageDataUrl from '../../assets/segment.png';
// import PieChartImage from '../../assets/chart.png';
// import PieRechartComponent from '../PieChart/Chart';
// import { useEffect, useRef, useState } from 'react';
// import convertSvgToImage from '../../utils/convertChartToImage';

const styles = StyleSheet.create({
  page: {},
  section: { color: '#00A7A6', textAlign: 'center', margin: 30 },
  imageContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  image: { width: 50, height: 50, padding: 10 },
  imageWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#006262',
    borderRadius: '100%',
  },
  sectionChart: {
    color: '#222',
    textAlign: 'center',
    margin: 30,
  },
  labelChart: {
    fontWeight: 800,
    marginTop: 20,
  },
  pieChart: {
    display: 'none',
  },
});

Chart.register(CategoryScale);

function Report() {
  // const [chartData] = useState({
  //   labels: Data.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: 'Users Gained ',
  //       data: Data.map((data) => data.userGain),
  //       backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95'],
  //       borderColor: 'black',
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <View>
            <Text>Rapport Statistique</Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image src={Logo} style={styles.image} />
            </View>
          </View>
        </View>

        <View style={styles.sectionChart}>
          <Image src={imageDataUrl} />
          <PieChart />
          <Text style={styles.labelChart}>La composition de vos flux</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Report;
