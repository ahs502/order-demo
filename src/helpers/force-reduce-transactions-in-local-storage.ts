import Content from "../models/Content";

import persistent from "../persistent";

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
