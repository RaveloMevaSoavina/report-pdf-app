import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import Logo from '../../assets/logo.png';

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
    width: 300,
    height: 300,
    margin: 'auto',
  },
});

function Report({ imageSrc }: { imageSrc: string }) {
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
}

export default Report;
