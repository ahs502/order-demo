import type BaseCard from "./BaseCard";
import type CardType from "./CardType";

export default interface TextCard extends BaseCard<CardType.TEXT> {
  readonly text: string;
}
