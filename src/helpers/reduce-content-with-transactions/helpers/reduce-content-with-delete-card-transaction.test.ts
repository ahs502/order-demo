import Content from "../../../models/Content";
import DeleteCardTransaction from "../../../models/transactions/card-transactions/DeleteCardTransaction";
import TransactionType from "../../../models/transactions/TransactionType";
import generateDummyData from "../../generate-dummy-data";
import reduceContentWithDeleteCardTransaction from "./reduce-content-with-delete-card-transaction";

describe("reduceContentWithDeleteCardTransaction() helper", () => {
  test("It should delete the card at the specified index of the page card list", () => {
    const pageId = generateDummyData();
    const cardsBefore = [generateDummyData(), generateDummyData()];
    const targetedCard = generateDummyData();
    const index = cardsBefore.length;
    const cardsAfter = [generateDummyData(), generateDummyData()];
    const content: Content = {
      pages: [
        {
          id: pageId,
          owner: generateDummyData(),
          members: generateDummyData(),
          cards: [...cardsBefore, targetedCard, ...cardsAfter],
        },
      ],
    };
    const transaction: DeleteCardTransaction = {
      type: TransactionType.CardTransactionType.DELETE_CARD,
      timeStamp: generateDummyData(),
      pageId,
      index,
    };

    const result = reduceContentWithDeleteCardTransaction(content, transaction);
    const resultCards = result.pages[0].cards;

    expect(resultCards).toEqual([...cardsBefore, ...cardsAfter]);
  });
});
