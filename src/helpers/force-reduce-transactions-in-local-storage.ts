import Content from "../models/Content";

import persistent from "../persistent";

/**
 * This implementation is out of the scope of this assignment.
 * I did it just for fun! With this, you are now able to store
 * newer contents into the local storage besides the initial content.
 * @param content The content from the current state in the store.
 */
export default async function forceReduceTransactionsInLocalStorage(
  content: Content
): Promise<void> {
  try {
    await Promise.all([
      persistent("content").set(content),
      persistent("transactions").set([]),
    ]);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}
