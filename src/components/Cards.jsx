import { HeartStraight, Star } from "@phosphor-icons/react";
import styles from "./Cards.module.css";

export function Cards() {
  return (
    <div className={styles.cardsMovie}>
      <div className={styles.boxIcon}>
       <img src="./src/assets/movie-icon.svg"/>
      </div>
      <div className={styles.content}>
        <div className={styles.titleMovie}> 
          <p>Batman (2022)</p>
        </div>
      <div className={styles.ratingFavorite}>
        <div className={styles.rating}>
          <Star className={styles.iconStar} size={20} weight="fill" />
          <span className={styles.textRatingFavorite}>9.3</span>
        </div>
        <div className={styles.favorite}>
         <HeartStraight className={styles.heartDisLike} size={20} weight="light" />
          {/* <HeartStraight className={styles.heartLike} size={20} weight="fill" /> */}
          <span className={styles.textRatingFavorite}>Favoritar</span>
        </div>
        </div>
        </div>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            obcaecati ea, quod repellendus ut autem illo voluptatem porro esse
            at odio. Animi debitis, placeat beatae obcaecati ratione nostrum?
            Blanditiis, provident.
          </p>
        </div>
    </div>
  );
}
