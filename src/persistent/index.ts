import localForage from "localforage";

import type Persistent from "./Persistent";

interface PersistentAccessor<K extends keyof Persistent> {
  get(defaultValue?: Persistent[K]): Promise<Persistent[K] | undefined>;
  set(value: Persistent[K]): Promise<void>;
  remove(): Promise<void>;
}

export default function persistent<K extends keyof Persistent>(
  key: K
): PersistentAccessor<K> {
  return {
    async get(defaultValue) {
      const value = await localForage.getItem<Persistent[K]>(key);

      return value === null ? defaultValue : value;
    },

    async set(value) {
      await localForage.setItem(key, value);
    },

    async remove() {
      await localForage.removeItem(key);
    },
  };
}
