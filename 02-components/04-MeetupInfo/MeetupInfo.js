import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      validator: (e) => {
        let timestamp = e;
        let date = new Date(timestamp);
        let options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
        return e = date.toLocaleDateString("ru-RU", options);
      },
    }
  },
  methods: {
    dateConvertingAttribute() {
      const format = (date) => date < 10 ? `0${date}` : date.toString();

      const getDateString = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${format(month)}-${format(day)}`;
      };

      return getDateString(this.date);
    },
    dateConverting() {
      let timestamp = this.date;
      let date = new Date(timestamp);
      let options = { day: 'numeric', month: 'long', year: 'numeric', };
      return date.toLocaleDateString('ru', options);
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dateConvertingAttribute()">{{ dateConverting() }}</time>
      </li>
    </ul>`,
});
