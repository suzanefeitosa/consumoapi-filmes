import { HeartStraight, Star } from "@phosphor-icons/react";
import styles from "./Cards.module.css";


export function Cards({ title, description, rating, image, addMovie, id }) {
 
  return (
    <div className={styles.cardsMovie}>
      <div className={styles.boxIcon}>
        <img src={image} />
      </div>
      <div className={styles.content}>
          <p className={styles.titleMovie}>{title}</p>
        <div className={styles.ratingFavorite}>
          <div className={styles.rating}>
            <Star className={styles.iconStar} size={20} weight="fill" />
            <span className={styles.textRatingFavorite}>{rating}</span>
          </div>
          <div className={styles.favorite}>
            <button onClick={() => addMovie(id)} className={styles.heartDisLike}>
              {addMovie ? (
                <HeartStraight size={20} weight="fill" />
              ) : (
                <HeartStraight size={20} weight="light" />
              )}
            </button>
            <span className={styles.textRatingFavorite}>Favorite</span>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <p>{description}</p>
      </div>
    </div>
  );
}
