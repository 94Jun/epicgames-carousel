import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
const itemList = [
  {
    id: "i0",
    title: "Goat Simulator3",
    horSrc: "./goat_simulator_hor.png",
    verSrc: "./goat_simulator_ver.png",
  },
  {
    id: "i1",
    title: "Dead Space",
    horSrc: "./dead_space_hor.png",
    verSrc: "./dead_space_ver.png",
  },
  {
    id: "i2",
    title: "Somverville",
    horSrc: "./somerville_hor.png",
    verSrc: "./somerville_ver.png",
  },
  {
    id: "i3",
    title: "Fortnite",
    horSrc: "./fortnite_hor.png",
    verSrc: "./fortnite_ver.png",
  },
];
const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(itemList[0].horSrc);
  const changeMainHandler = (id) => {
    setCurrentImg(itemList[id].horSrc);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel_wrap}>
        <div className={styles.main_img}>
          <img src={currentImg} />
        </div>
        <ul className={styles.sub_img_list}>
          {itemList.map((item) => {
            return (
              <CarouselItem
                key={item.horSrc}
                item={item}
                onChangeMainImg={changeMainHandler}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
