import Attachment from "../models/Attachment";
import Card from "../models/Card";
import CardType from "../models/cards/CardType";
import MarkdownCard from "../models/cards/MarkdownCard";
import TextCard from "../models/cards/TextCard";
import ToDoCard from "../models/cards/ToDoCard";
import Page from "../models/Page";
import User from "../models/User";

export default function generateDummyData(): any {
  return {} as any;
}

generateDummyData.string = () => Math.random().toString() as any;
generateDummyData.number = (upperLimit: number = 1000000) =>
  Math.floor(Math.random() * upperLimit + 1) as any;
generateDummyData.boolean = () => (Math.random() > 0.5) as any;
generateDummyData.function = () => (() => {}) as any;

generateDummyData.attachment = (): Attachment => ({
  type: generateDummyData.string(),
  name: generateDummyData.string(),
  url: generateDummyData.string(),
});
generateDummyData.attachments = (count: number = 5): readonly Attachment[] =>
  Array(count).fill(null).map(generateDummyData.attachment);

generateDummyData.textCard = (): TextCard => ({
  type: CardType.TEXT,
  attachments: generateDummyData.attachments(),
  text: generateDummyData.string(),
});
generateDummyData.markdownCard = (): MarkdownCard => ({
  type: CardType.MARKDOWN,
  attachments: generateDummyData.attachments(),
  markdown: generateDummyData.string(),
});
generateDummyData.toDoCard = (): ToDoCard => ({
  type: CardType.TODO,
  attachments: generateDummyData.attachments(),
  label: generateDummyData.string(),
  checked: generateDummyData.boolean(),
});
generateDummyData.card = (): Card => {
  const index = generateDummyData.number(3);
  if (index === 1) return generateDummyData.textCard();
  if (index === 2) return generateDummyData.markdownCard();
  /*if (index === 3)*/ return generateDummyData.toDoCard();
};
generateDummyData.cards = (count: number = 10): readonly Card[] =>
  Array(count).fill(null).map(generateDummyData.card);

generateDummyData.user = (): User => ({
  id: generateDummyData.string(),
  name: generateDummyData.string(),
});
generateDummyData.users = (count: number = 3) =>
  Array(count).fill(null).map(generateDummyData.user);

generateDummyData.page = (): Page => ({
  id: generateDummyData.string(),
  name: generateDummyData.string(),
  owner: generateDummyData.user(),
  members: generateDummyData.users(),
  cards: generateDummyData.cards(),
});
