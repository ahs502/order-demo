import BaseCard from "./BaseCard";
import CardType from "./CardType";

export default interface MarkdownCard extends BaseCard<CardType.MARKDOWN> {
  readonly markdown: string;
}
