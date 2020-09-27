import Content from "../../../models/Content";
import DeleteCardTransaction from "../../../models/transactions/card-transactions/DeleteCardTransaction";

export default function reduceContentWithDeleteCardTransaction(
  content: Content,
  transaction: DeleteCardTransaction
): Content {
  const oldPage = content.pages.find(({ id }) => id === transaction.pageId)!;
  const newPage: typeof oldPage = {
    ...oldPage,
    cards: [
      ...oldPage.cards.slice(0, transaction.index),
      ...oldPage.cards.slice(transaction.index + 1),
    ],
  };
  const newPages = content.pages.map((page) =>
    page === oldPage ? newPage : page
  );

  return {
    ...content,
    pages: newPages,
  };
}
