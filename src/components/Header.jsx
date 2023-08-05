import {MagnifyingGlass} from "@phosphor-icons/react";
import styles from "./Header.module.css";

export function Header({handleSearch, handleShowFavorites}) {
    return (
        <>
        <h1 className={styles.title}>Popular Movies</h1>
      <div className={styles.search}>
        <input onKeyUp={handleSearch} className={styles.searchType} type="text" placeholder="Type a movie to search..." />
       <button className={styles.iconSearch}><MagnifyingGlass size={20}/></button>
      </div>
      <div className={styles.container}>
        <label className={styles.formControl}>
          <input onChange={handleShowFavorites} type="checkbox" name="checkbox" />
          Show only my favorite movies
        </label>
      </div>
        </>
    )
}