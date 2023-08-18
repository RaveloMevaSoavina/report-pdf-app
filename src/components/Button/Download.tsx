import { FC, ReactElement } from 'react';
import './Download.css';

interface IDownloadButton {
  children: ReactElement;
  onDownload: () => void;
}

const DownloadButton: FC<IDownloadButton> = ({ children, onDownload }) => {
  return (
    <button className='download-button' onClick={onDownload}>
      {children}
    </button>
  );
};

export default DownloadButton;
