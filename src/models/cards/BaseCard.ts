import type CardType from "./CardType";

export default interface BaseCard<T extends CardType> {
  readonly type: T;
}
