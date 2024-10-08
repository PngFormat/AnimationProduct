import React, { useState, useEffect } from 'react';
import styles from '../styles/imageCarousel.module.css';

interface CarouselItem {
    image: string;
    text: string;
  }
  
  interface ImageCarouselProps {
    items: CarouselItem[];
  }
  
  const ImageCarousel: React.FC<ImageCarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, [items]);
  
    const { image, text } = items[currentIndex];
  
    return (
        <div className={styles.backContainer}>
        <div className={styles.carouselContainer}>
        <img width={900} height={500} src={image} alt="Carousel Slide" className={styles.carouselImage} />
        <div className={styles.carouselText}>
          <h2>{text}</h2>
        </div>
      </div>
      </div>
    );
  };
  
  export default ImageCarousel;
  