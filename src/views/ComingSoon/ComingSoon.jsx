import styles from './ComingSoon.module.scss'
import { ImageGallery } from "react-image-grid-gallery";

const ComingSoon = () => {
  const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLPw4DzyVfauDtG11E7mkNogPzwKn37-Xw&usqp=CAU",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://www.autozine.nl/cache/nieuws/728/6446_1.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://carsbase.com/photo/mazda/mazda-6-mps-mk34-pic33063.jpg",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLPw4DzyVfauDtG11E7mkNogPzwKn37-Xw&usqp=CAU",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://www.autozine.nl/cache/nieuws/728/6446_1.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://carsbase.com/photo/mazda/mazda-6-mps-mk34-pic33063.jpg",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLPw4DzyVfauDtG11E7mkNogPzwKn37-Xw&usqp=CAU",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://www.autozine.nl/cache/nieuws/728/6446_1.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://carsbase.com/photo/mazda/mazda-6-mps-mk34-pic33063.jpg",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLPw4DzyVfauDtG11E7mkNogPzwKn37-Xw&usqp=CAU",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://www.autozine.nl/cache/nieuws/728/6446_1.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://carsbase.com/photo/mazda/mazda-6-mps-mk34-pic33063.jpg",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLPw4DzyVfauDtG11E7mkNogPzwKn37-Xw&usqp=CAU",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://www.autozine.nl/cache/nieuws/728/6446_1.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://carsbase.com/photo/mazda/mazda-6-mps-mk34-pic33063.jpg",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XLPw4DzyVfauDtG11E7mkNogPzwKn37-Xw&usqp=CAU",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://www.autozine.nl/cache/nieuws/728/6446_1.jpg",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://carsbase.com/photo/mazda/mazda-6-mps-mk34-pic33063.jpg",
    },
  ];

  return (
    <>
     {/*<div className={styles.container}>*/}
      <div className={styles.container}>
        Placeholder text for now, some random shit
      </div>
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnWidth={230}
        gapSize={10}
      />
     {/*</div>*/}
    </>
  )
}

export default ComingSoon
