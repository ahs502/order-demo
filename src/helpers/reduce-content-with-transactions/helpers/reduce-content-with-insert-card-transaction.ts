import type Content from "../../../models/Content";
import type InsertCardTransaction from "../../../models/transactions/card-transactions/InsertCardTransaction";

export default function reduceContentWithInsertCardTransaction(
  content: Content,
  transaction: InsertCardTransaction
): Content {
  const oldPage = content.pages.find(({ id }) => id === transaction.pageId)!;
  const newPage: typeof oldPage = {
    ...oldPage,
    cards: [...oldPage.cards, transaction.card],
  };
  const newPages = content.pages.map((page) =>
    page === oldPage ? newPage : page
  );

  return {
    ...content,
    pages: newPages,
  };
}
