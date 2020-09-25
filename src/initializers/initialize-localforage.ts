import localForage from "localforage";

export default function initializeLocalForage(): void {
  localForage.config({
    name: "order-demo",
    storeName: "store",
  });
}
