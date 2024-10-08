import React, {useState} from 'react';
import './App.css';
import Header from "./components/header";
import styles from './styles/main.module.css';
import Footer from './components/footer';
import ImageCarousel from './components/ImageCarousel';

function App() {
  const [logos, setLogos] = useState({
    firstLogo: "https://applefun.com.ua/upload/2023-11/iphone151700210822.jpeg",
    secondLogo: "https://ap71.ru/wp-content/uploads/2021/02/38939-74370-iPhone-12-mini-Camera-xl.jpg"
  });

  const [hovered, setHovered] = useState(false);

  const swapLogos = () => {
    setLogos({
      firstLogo: logos.secondLogo,
      secondLogo: logos.firstLogo
    });
    setHovered(!hovered);
  };

  const imagesAndText = [
    { image: 'https://media.assettype.com/analyticsinsight%2F2024-07%2Fb1817f27-f5f3-4818-99be-9e4d38564780%2FiPhone-16-Pro-Price%2C-Release%2C-Design%2C-and-Features.jpg', text: 'Iphone 16 the latest phone in industry' },
    { image: 'https://images.macrumors.com/article-new/2024/09/iphone-16-design.jpg', text: 'Features' },
    { image: 'https://gizcompare.com/wp-content/uploads/2024/09/iPhone-16-Specs.webp', text: 'Color gamma' },
  ];


  return (
    <div className="App">
      <div className={styles.container}></div>
      <Header />
      <div className={styles.backContainer}>
      <div className={styles.mainContainer}>
        
      <div className={`${styles.textContainer} ${hovered ? styles.hidden : styles.show}`}>
          <h2>iPhone 13 Pro</h2>
          <p>The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and the best camera system in an iPhone.</p>
        </div>
        <div className={styles.logo} onMouseEnter={swapLogos} onMouseLeave={swapLogos}>
          <div className={styles.phoneContent}>
          <img src={logos.firstLogo}  alt="iPhone display" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

    
        <div className={styles.logo} onMouseEnter={swapLogos} onMouseLeave={swapLogos}>
          <div className={styles.phoneContent}>
          <img src={logos.secondLogo} alt="iPhone display" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className={`${styles.textContainer} ${hovered ? styles.show : styles.hidden}`}>
          <h2>iPhone 12 Mini</h2>
          <p>The iPhone 12 Mini packs the same powerful A14 Bionic chip in a smaller form factor with a 5.4-inch Super Retina XDR display.</p>
        </div>
        
       
      </div>
     
      </div>
      <ImageCarousel items={imagesAndText}></ImageCarousel>

      
      <Footer/>
    </div>
  );
}

export default App;
