import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import { CardProps } from "@/types/type";

interface CardsProps {
  data: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div className={styles.cards}>
      {data.map((item) => (
        <Card
          key={item.title}
          imageUrl={item.imageUrl}
          title={item.title}
          subtitle={item.subtitle}
          buttons={item.buttons}
        />
      ))}
    </div>
  );
};

export default Cards;