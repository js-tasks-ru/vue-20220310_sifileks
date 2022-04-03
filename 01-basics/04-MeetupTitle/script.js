import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const ComponentOptions = {
  data() {
    return {
      meetup: {
        input: '',
        title: '',
      }
    };
  },
  watch: {
    'meetup.input'(e) {
      fetchMeetupById(e).then((responce) => {
        this.meetup.title = responce.title;
      });
    },
  },
};

const app = createApp(ComponentOptions);
const vm = app.mount('#app');
