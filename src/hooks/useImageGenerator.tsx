import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { ReactElement } from 'react';

const useImageGenerator = () => {
  const generateImage = async (component: ReactElement, fileName: string) => {
    const node = document.createElement('div');
    // Render the React component into the created DOM node
    ReactDOM.render(component, node);

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
