import styles from './ComingSoon.module.scss'
import { ImageGallery } from "react-image-grid-gallery";
import {useEffect, useState} from "react";
import {PropagateLoader} from "react-spinners";


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
              <p>Placeholder text for now, some random shit</p>

              <PropagateLoader
                  color="#d63636"
                  loading={loading}
                  cssOverride={{"display": "inline-block"}}
              />
              {error && <div>error</div>}
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
