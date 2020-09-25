import DeleteCardTransaction from "./card-transactions/DeleteCardTransaction";
import EditCardTransaction from "./card-transactions/EditCardTransaction";
import InsertCardTransaction from "./card-transactions/InsertCardTransaction";

type CardTransaction =
  | InsertCardTransaction
  | EditCardTransaction
  | DeleteCardTransaction;

export default CardTransaction;
