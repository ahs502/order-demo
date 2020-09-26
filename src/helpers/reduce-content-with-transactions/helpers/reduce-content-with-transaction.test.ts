import DeleteCardTransaction from "../../../models/transactions/card-transactions/DeleteCardTransaction";
import EditCardTransaction from "../../../models/transactions/card-transactions/EditCardTransaction";
import InsertCardTransaction from "../../../models/transactions/card-transactions/InsertCardTransaction";
import TransactionType from "../../../models/transactions/TransactionType";
import generateDummyData from "../../generate-dummy-data";
import reduceContentWithTransaction from "./reduce-content-with-transaction";

var mockReduceContentWithInsertCardTransaction: jest.Mock;
import "./reduce-content-with-insert-card-transaction";
jest.mock("./reduce-content-with-insert-card-transaction", () => ({
  __esModule: true,
  default: mockReduceContentWithInsertCardTransaction = jest.fn(),
}));

var mockReduceContentWithEditCardTransaction: jest.Mock;
import "./reduce-content-with-edit-card-transaction";
jest.mock("./reduce-content-with-edit-card-transaction", () => ({
  __esModule: true,
  default: mockReduceContentWithEditCardTransaction = jest.fn(),
}));

var mockReduceContentWithDeleteCardTransaction: jest.Mock;
import "./reduce-content-with-delete-card-transaction";
jest.mock("./reduce-content-with-delete-card-transaction", () => ({
  __esModule: true,
  default: mockReduceContentWithDeleteCardTransaction = jest.fn(),
}));

describe("reduceContentWithTransaction() helper", () => {
  test("It should call reduceContentWithInsertCardTransaction() helper for an InsertCardTransaction", () => {
    const content = generateDummyData();
    const transaction: InsertCardTransaction = {
      type: TransactionType.CardTransactionType.INSERT_CARD,
      ...generateDummyData(),
    };
    const expectedResult = generateDummyData();
    mockReduceContentWithInsertCardTransaction.mockReturnValueOnce(
      expectedResult
    );

    const result = reduceContentWithTransaction(content, transaction);

    expect(mockReduceContentWithInsertCardTransaction).toBeCalledWith(
      content,
      transaction
    );
    expect(result).toBe(expectedResult);
  });

  test("It should call reduceContentWithEditCardTransaction() helper for an EditCardTransaction", () => {
    const content = generateDummyData();
    const transaction: EditCardTransaction = {
      type: TransactionType.CardTransactionType.EDIT_CARD,
      ...generateDummyData(),
    };
    const expectedResult = generateDummyData();
    mockReduceContentWithEditCardTransaction.mockReturnValueOnce(
      expectedResult
    );

    const result = reduceContentWithTransaction(content, transaction);

    expect(mockReduceContentWithEditCardTransaction).toBeCalledWith(
      content,
      transaction
    );
    expect(result).toBe(expectedResult);
  });

  test("It should call reduceContentWithDeleteCardTransaction() helper for a DeleteCardTransaction", () => {
    const content = generateDummyData();
    const transaction: DeleteCardTransaction = {
      type: TransactionType.CardTransactionType.DELETE_CARD,
      ...generateDummyData(),
    };
    const expectedResult = generateDummyData();
    mockReduceContentWithDeleteCardTransaction.mockReturnValueOnce(
      expectedResult
    );

    const result = reduceContentWithTransaction(content, transaction);

    expect(mockReduceContentWithDeleteCardTransaction).toBeCalledWith(
      content,
      transaction
    );
    expect(result).toBe(expectedResult);
  });
});
