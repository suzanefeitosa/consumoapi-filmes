import {MagnifyingGlass} from "@phosphor-icons/react";
import styles from "./Header.module.css";

export function Header() {
    return (
        <>
        <h1 className={styles.title}>Filmes Populares</h1>
      <div className={styles.search}>
        <input className={styles.searchType} type="text" placeholder="Digite algum filme para pesquisar..." />
       <button className={styles.iconSearch}><MagnifyingGlass size={20}/></button>
      </div>
      <div className={styles.container}>
        <label className={styles.formControl}>
          <input type="checkbox" name="checkbox" />
         Mostrar apenas meus filmes favoritos
        </label>
      </div>
        </>
    )
}