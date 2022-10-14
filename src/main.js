import { createApp, h } from "vue";
import App from './App.vue'
import components from '@/components/UI';
import router from './router'
import store from './store'

const app = createApp({
  render: () => h(App)
});

components.forEach(component => {
  app.component(component.name, component)
});

app.use(router);
app.use(store);
app.mount("#app");