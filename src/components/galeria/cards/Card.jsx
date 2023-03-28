import curtir from "../../../assets/favorito.png";
import open from "../../../assets/open.png";
import styles from "../cards/Cards.module.scss";

const Card = (props) => {
  const { foto } = props;
  return (
    <li key={foto.id} className={styles.card}>
      <img className={styles.imagem} src={foto.imagem} alt={foto.tag} />
      <p className={styles.descricao}> {foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          <img src={curtir} alt="ícone coração de curtir" />
          <img src={open} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
};

export default Card;
