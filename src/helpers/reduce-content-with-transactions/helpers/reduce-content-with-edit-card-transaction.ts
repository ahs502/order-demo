import type Content from "../../../models/Content";
import type EditCardTransaction from "../../../models/transactions/card-transactions/EditCardTransaction";

export default function reduceContentWithEditCardTransaction(
  content: Content,
  transaction: EditCardTransaction
): Content {
  const oldPage = content.pages.find(({ id }) => id === transaction.pageId)!;
  const newPage: typeof oldPage = {
    ...oldPage,
    cards: oldPage.cards.map((card, cardIndex) =>
      cardIndex === transaction.index ? transaction.card : card
    ),
  };
  const newPages = content.pages.map((page) =>
    page === oldPage ? newPage : page
  );

  return {
    ...content,
    pages: newPages,
  };
}
