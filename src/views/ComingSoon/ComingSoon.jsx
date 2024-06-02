import React, { useEffect, useState } from 'react';
import styles from './ComingSoon.module.scss';
import { PropagateLoader } from 'react-spinners';
import Logo from '../../assets/img/logo/selfieExperienceLogoVectorized.svg';

const ComingSoon = () => {
  const [imagesArray, setImagesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = new Promise((resolve, reject) => {
      const imageModules = import.meta.glob("../../assets/img/presentation/*");
      const keys = Object.keys(imageModules);
      Promise.all(keys.map(key => imageModules[key]())).then(images => {
        const imageSrcs = images.map(img => img.default);
        resolve(imageSrcs);
      }).catch(reject);
    });

    loadImages.then((imageSrcs) => {
      setImagesArray(imageSrcs);
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
              <div className={styles.containerContact}>
                  <p className={`${styles.contact} ${styles.phone}`}>Telefon: 0761 547 589</p>
                  <p className={`${styles.contact} ${styles.address}`}>Adresa: Bd-ul Hristo Botev 11, București</p>
              </div>
              <img src={Logo} className={styles.logo} alt="Selfie Experience Logo"/>
              <p className={styles.text}>
                  {"In timp ce noi lucram la site, fa-ne o vizita, suntem deschisi :)"}
              </p>
      </div>
      {loading && <div className={styles.loaderWrapper}>
    <PropagateLoader size={30} color="#FEFC13" />
  </div>}
      {error && <p>Error loading images.</p>}
      {!loading && !error && (
        <div className={styles.galleryGrid}>
          {imagesArray.map((imageSrc, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              style={{ backgroundImage: `url(${imageSrc})` }}
              onClick={() => openLightbox(imageSrc)}
            />
          ))}
        </div>
      )}
      {isOpen && (
        <div className={styles.lightbox} onClick={() => setIsOpen(false)}>
          <img src={selectedImage} alt="Selected" className={styles.lightboxImage} />
        </div>
      )}
    </>
  );
};

export default ComingSoon;
