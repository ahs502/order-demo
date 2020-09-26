import type BaseCard from "./BaseCard";
import type CardType from "./CardType";

export default interface MarkdownCard extends BaseCard<CardType.MARKDOWN> {
  readonly markdown: string;
}
