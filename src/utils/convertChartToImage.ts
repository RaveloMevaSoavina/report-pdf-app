import * as htmlToImage from 'html-to-image';


const convertSvgToImage = async (svg: HTMLElement): Promise<string>  => {
	const dataUrl = await htmlToImage.toPng(svg);
	return dataUrl;
};

export default convertSvgToImage;