import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import Logo from '../../assets/logo.png';
import { FC } from 'react';
import { styles } from './Report.stylesheet';

interface IReport {
  imageSrc: string;
}

const Report: FC<IReport> = ({ imageSrc }) => {
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
          <Image src={imageSrc} style={styles.pieChart} />
          <Text style={styles.labelChart}>La composition de vos flux</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Report;
