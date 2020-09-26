import type MarkdownCard from "./cards/MarkdownCard";
import type TextCard from "./cards/TextCard";
import type ToDoCard from "./cards/ToDoCard";

type Card = TextCard | MarkdownCard | ToDoCard;

export default Card;
