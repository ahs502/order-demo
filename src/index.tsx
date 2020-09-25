import './index.css';

import initializeLocalForage from './initializers/initialize-localforage';
import initializeServiceWorker from './initializers/initialize-service-worker';
import renderApplication from './initializers/render-application';

initializeLocalForage()
renderApplication()
initializeServiceWorker()
