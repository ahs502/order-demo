import generateDummyData from "../generate-dummy-data";
import reduceContentWithTransactions from "./reduce-content-with-transactions";

var mockReduceContentWithTransaction: jest.Mock;
import "../reduce-content-with-transaction";
jest.mock("../reduce-content-with-transaction", () => ({
  __esModule: true,
  default: mockReduceContentWithTransaction = jest.fn(),
}));

describe("reduceContentWithTransactions() helper", () => {
  test("It should return the same content if there are no transactions", () => {
    const content = generateDummyData();

    const result = reduceContentWithTransactions(content, []);

    expect(result).toBe(content);
  });

  test("It should reduce content with transactions using the reduceContentWithTransaction() helper", () => {
    const baseContent = generateDummyData();
    const steps = [
      {
        transaction: generateDummyData(),
        resultedContent: generateDummyData(),
      },
      {
        transaction: generateDummyData(),
        resultedContent: generateDummyData(),
      },
      {
        transaction: generateDummyData(),
        resultedContent: generateDummyData(),
      },
    ];
    const transactions = steps.map(({ transaction }) => transaction);
    const finalContent = steps[steps.length - 1].resultedContent;
    steps.forEach(({ resultedContent }) =>
      mockReduceContentWithTransaction.mockReturnValueOnce(resultedContent)
    );

    const result = reduceContentWithTransactions(baseContent, transactions);

    expect(result).toBe(finalContent);
    expect(mockReduceContentWithTransaction).toBeCalledTimes(steps.length);
    steps.forEach(({ transaction }, stepIndex) => {
      const previousStepContent =
        stepIndex === 0 ? baseContent : steps[stepIndex - 1].resultedContent;

      expect(mockReduceContentWithTransaction).toHaveBeenNthCalledWith(
        stepIndex + 1,
        previousStepContent,
        transaction
      );
    });
  });
});
