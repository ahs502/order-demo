import Content from "../../../models/Content";
import EditCardTransaction from "../../../models/transactions/card-transactions/EditCardTransaction";
import TransactionType from "../../../models/transactions/TransactionType";
import generateDummyData from "../../generate-dummy-data";
import reduceContentWithEditCardTransaction from "./reduce-content-with-edit-card-transaction";

describe("reduceContentWithEditCardTransaction() helper", () => {
  test("It should replace the card at the specified index at the page card list", () => {
    const pageId = generateDummyData();
    const cardsBefore = [generateDummyData(), generateDummyData()];
    const oldCard = generateDummyData();
    const index = cardsBefore.length;
    const cardsAfter = [generateDummyData(), generateDummyData()];
    const cards = [...cardsBefore, oldCard, ...cardsAfter];
    const content: Content = {
      pages: [
        {
          id: pageId,
          owner: generateDummyData(),
          members: generateDummyData(),
          cards,
        },
      ],
    };
    const newCard = generateDummyData();
    const transaction: EditCardTransaction = {
      type: TransactionType.CardTransactionType.EDIT_CARD,
      timeStamp: generateDummyData(),
      pageId,
      index,
      card: newCard,
    };

    const result = reduceContentWithEditCardTransaction(content, transaction);
    const resultCards = result.pages[0].cards;

    expect(resultCards.slice(0, index)).toEqual(cardsBefore);
    expect(resultCards.slice(index + 1)).toEqual(cardsAfter);
    expect(resultCards[index]).toBe(newCard);
  });
});
