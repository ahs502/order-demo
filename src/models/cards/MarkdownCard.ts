import BaseCard from "./BaseCard";

export default interface MarkdownCard extends BaseCard<"markdown"> {
  readonly markdown: string;
}
