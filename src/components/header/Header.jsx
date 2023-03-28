import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo do Alura" />
      <div className={styles.cabecalho__container}>
        <input
          type="text"
          placeholder="O que você procurar?"
          className={styles.cabecalho__input}
        />
        <img src={search} alt="Ícone de lupa" />
      </div>
    </header>
  );
};

export default Header;
