// Mount function to start up the app
import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

const mount = (el) => {
    const app = createApp(Dashboard)
    app.mount(el)
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container
// and we should export the mount function
export { mount };
