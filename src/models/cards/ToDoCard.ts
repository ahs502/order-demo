import BaseCard from "./BaseCard";

export default interface ToDoCard extends BaseCard<"todo"> {
  readonly label: string;
  readonly checked: boolean;
  readonly deadline: number;
}
