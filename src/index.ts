import "./index.css";

import initializeLocalForage from "./initializers/initialize-localforage";
import fillLocalStorageZeroState from "./initializers/fill-local-storage-zero-state";
import renderApplication from "./initializers/render-application";
import initializeServiceWorker from "./initializers/initialize-service-worker";

Promise.resolve()
  .then(initializeLocalForage)
  .then(fillLocalStorageZeroState)
  .then(renderApplication)
  .then(initializeServiceWorker);
