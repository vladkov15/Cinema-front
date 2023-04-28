import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import { CardProps, Film } from "@/models/models";

interface CardsProps {
  data: Film[];
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div className={styles.cards}>
      {data.map((item) => (
        <Card key={item.id} data={item}          
        />
      ))}
    </div>
  );
};

export default Cards;