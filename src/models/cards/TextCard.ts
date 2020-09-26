import BaseCard from "./BaseCard";
import CardType from "./CardType";

export default interface TextCard extends BaseCard<CardType.TEXT> {
  readonly text: string;
}
