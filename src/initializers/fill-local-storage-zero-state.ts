import persistent from "../persistent";

import initialContent from "../store/initial-data/initial-content";

/**
 * The purpose of this function is to fill up the local storage
 * with some initializing data. In the real-life application, this
 * stage will be replaced with some services fetching data from
 * some API end-points. For now, we simply fill them manually.
 * Because, that is out of the scope of this assignment.
 */
export default async function fillLocalStorageZeroState(): Promise<void> {
  const content = await persistent("content").get();

  if (content !== undefined) return;

  await persistent("content").set(initialContent);
}
