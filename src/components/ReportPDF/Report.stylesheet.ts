import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
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