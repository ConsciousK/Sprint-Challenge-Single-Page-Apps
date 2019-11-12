import React from "react";
import { Card } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card
      image={`${props.cardinfo.image}`}
      alt={`${props.cardinfo.name}`}
      header={`${props.cardinfo.name}`}
      meta={`${props.cardinfo.status}` + " " + `${props.cardinfo.species}`}
    />
  );
}
