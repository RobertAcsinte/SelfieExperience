import styles from './ComingSoon.module.scss'
import { ImageGallery } from "react-image-grid-gallery";
import {useEffect, useState} from "react";


const ComingSoon = () => {
  const [imagesArray, setImagesArray] = useState([])

  useEffect( () => {
    const loadImages = new Promise((resolve, reject) => {
        const imageModules = import.meta.glob("../../assets/img/presentation/*");
        const keys = Object.keys(imageModules);
        Promise.all(keys.map(key => imageModules[key]())).then(images => {
            resolve(images);
        }).catch(error => {
            reject(error)
        })
    })
      loadImages.then((images) => {
        setImagesArray(images.map((image) => (
          {src: image.default}
        )));
      })
  }, [])

  return (
      <>
        <div className={styles.container}>
          Placeholder text for now, some random shit
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
