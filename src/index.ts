import "./index.css";

import initializeServiceWorker from "./initializers/initialize-service-worker";
import initializeLocalForage from "./initializers/initialize-localforage";
import fillLocalStorageZeroState from "./initializers/fill-local-storage-zero-state";
import renderApplication from "./initializers/render-application";

initializeServiceWorker();
initializeLocalForage();
fillLocalStorageZeroState().then(renderApplication);
