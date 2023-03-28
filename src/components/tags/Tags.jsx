import style from "./Tags.module.scss";
import fotos from "components/galeria/fotos.json";

const Tags = (props) => {
  const { filtraFotos, tags, setItens } = props;
  return (
    <div className={style.tags}>
      <p>Filtre por tags</p>
      <ul className={style.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtraFotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
};

export default Tags;
