import { saveAs } from 'file-saver';
import htmlToImage from 'html-to-image';

const useImageGenerator = () => {
  const generateImage = async (component: Node, fileName: string) => {
    const node = document.createElement('div');
    node.appendChild(component);

    try {
      const imageBlob = (await htmlToImage.toBlob(node)) as Blob;
      saveAs(imageBlob, `${fileName}.png`);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return generateImage;
};

export default useImageGenerator;
