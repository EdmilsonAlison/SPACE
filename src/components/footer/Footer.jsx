import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="#">
          <img src={facebook} alt="Icone Facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="Icone instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="Icone Twitter" />
        </a>
      </div>
      <h2>Desenvolvido por Alura</h2>
    </footer>
  );
};

export default Footer;
