import { createApp } from './vendor/vue.esm-browser.js';

const ComponentOptions = {
  data() {
    return {
      operation: 'sum',
      results: 0,
      firstNum: 0,
      secondNum: 0,
    };
  },
  watch: {
  },
  computed: {
    calculate() {
      switch (this.operation) {
        case 'sum':
          return this.results = this.firstNum + this.secondNum;
        case 'subtract':
           return this.results = this.firstNum - this.secondNum;
        case 'multiply':
          return this.results = this.firstNum * this.secondNum;
        case 'divide':
          return this.results = this.firstNum / this.secondNum;
      }
    },
},
};

const app = createApp(ComponentOptions);
const vm = app.mount('#app');
