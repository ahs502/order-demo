import Content from "../../../models/Content";
import InsertCardTransaction from "../../../models/transactions/card-transactions/InsertCardTransaction";
import TransactionType from "../../../models/transactions/TransactionType";
import generateDummyData from "../../generate-dummy-data";
import reduceContentWithInsertCardTransaction from "./reduce-content-with-insert-card-transaction";

describe("reduceContentWithInsertCardTransaction() helper", () => {
  test("It should add the new card to the page when page card list is empty", () => {
    const pageId = generateDummyData();
    const content: Content = {
      pages: [
        {
          id: pageId,
          name: generateDummyData(),
          owner: generateDummyData(),
          members: generateDummyData(),
          cards: [],
        },
      ],
    };
    const card = generateDummyData();
    const transaction: InsertCardTransaction = {
      type: TransactionType.CardTransactionType.INSERT_CARD,
      timeStamp: generateDummyData(),
      pageId,
      card,
    };

    const result = reduceContentWithInsertCardTransaction(content, transaction);
    const resultCards = result.pages[0].cards;

    expect(resultCards.length).toBe(1);
    expect(resultCards[0]).toBe(card);
  });

  test("It should append the new card to the end of the page card list", () => {
    const pageId = generateDummyData();
    const cards = [
      generateDummyData(),
      generateDummyData(),
      generateDummyData(),
    ];
    const content: Content = {
      pages: [
        {
          id: pageId,
          name: generateDummyData(),
          owner: generateDummyData(),
          members: generateDummyData(),
          cards,
        },
      ],
    };
    const card = generateDummyData();
    const transaction: InsertCardTransaction = {
      type: TransactionType.CardTransactionType.INSERT_CARD,
      timeStamp: generateDummyData(),
      pageId,
      card,
    };

    const result = reduceContentWithInsertCardTransaction(content, transaction);
    const resultCards = result.pages[0].cards;

    expect(resultCards.length).toBe(cards.length + 1);
    expect(resultCards.slice(0, -1)).toEqual(cards);
    expect(resultCards[resultCards.length - 1]).toBe(card);
  });
});
