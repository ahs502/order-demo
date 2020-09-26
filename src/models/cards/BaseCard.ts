import Attachment from "../Attachment";
import CardType from "./CardType";

export default interface BaseCard<T extends CardType> {
  readonly type: T;
  readonly attachments: readonly Attachment[];
}
