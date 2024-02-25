import styles from './ComingSoon.module.scss'
import { ImageGallery } from "react-image-grid-gallery";
import {useEffect, useState} from "react";
import {PropagateLoader} from "react-spinners";
import Logo from '../../assets/img/logo/selfieExperienceLogoVectorized.svg'



const ComingSoon = () => {
  const [imagesArray, setImagesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
          const loadImages = new Promise((resolve, reject) => {
              const imageModules = import.meta.glob("../../assets/img/presentation/*");
              const keys = Object.keys(imageModules);
              Promise.all(keys.map(key => imageModules[key]())).then(images => {
                  resolve(images);
              }).catch(error => {
                  reject(error);
              })
          });
          loadImages.then((images) => {
              setImagesArray(images.map((image) => (
                  {src: image.default}
              )));
              setLoading(false);
          }).catch((error) => {
                setError(error);
                setLoading(false);
          });
      },
      []);

  return (
      <>
          <div className={styles.container}>
              <div className={styles.containerContact}>
                  <p className={`${styles.contact} ${styles.phone}`}>Telefon: 0761 547 589</p>
                  <p className={`${styles.contact} ${styles.address}`}>Adresa: Bd-ul Hristo Botev 11, București</p>
              </div>
              <img src={Logo} className={styles.logo} alt="Selfie Experience Logo"/>
              <p className={styles.text}>
                  In timp ce noi lucram la site, fa-ne o vizita, suntem deschisi :)
              </p>

              <PropagateLoader
                  size={30}
                  color='#FEFC13'
                  loading={loading}
                  cssOverride={
                      {
                          "display": "inline-block",
                          "margin": "50px 0",
                          "width": "500px",
                      }
                  }
              />
              {error && <p className={styles.text}>error</p>}
          </div>
          <ImageGallery
              imagesInfoArray={imagesArray}
              columnWidth={230}
              gapSize={10}
          />
      </>
  )
}

export default ComingSoon
