import './Image.css';
import { ImageProps } from './ImageType'

const Image = (image: ImageProps) => {
  return (
    <img 
      className={image.className} 
      src={image.src} 
      alt={image.alt}
    />
  )
}

export default Image