import { createApp } from './vendor/vue.esm-browser.js';

const ComponentOptions = {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    counterAppend() {
      return this.counter++;
    },
  },
};



const app = createApp(ComponentOptions);
const vm = app.mount('#app');
