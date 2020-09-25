export const cardTypes = ["text", "markdown", "todo"] as const;

export type CardType = typeof cardTypes[number];

export default interface BaseCard<T extends CardType> {
  readonly type: T;
}
