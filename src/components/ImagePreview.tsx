'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view';
 
interface IImagePreviewProps {
    images? : string[];
}

export default function ImagePreview({
    images = []
}: Readonly<IImagePreviewProps>) {
  return (
    <PhotoProvider>
      <div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt={"preview " + index} />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}