import styles from "./Carousel.module.css";
const CarouselItem = (props) => {
  const clickSubImgHandler = (e) => {
    props.onChangeMainImg(e.target.id.slice(1));
  };
  return (
    <li
      className={styles.sub_img_item}
      onClick={clickSubImgHandler}
      id={props.item.id}
    >
      <img src={props.item.verSrc} />
      <span>{props.item.title}</span>
    </li>
  );
};

export default CarouselItem;
