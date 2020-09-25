import BaseCard from "./BaseCard";

export default interface TextCard extends BaseCard<"text"> {
  readonly text: string;
}
