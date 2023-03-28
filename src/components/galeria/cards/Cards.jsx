import styles from "../cards/Cards.module.scss";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  const { itens } = props;

  return (
    <ul className={styles.cards}>
      {itens.map((foto) => {
        return <Card foto={foto} />;
      })}
    </ul>
  );
};

export default Cards;
