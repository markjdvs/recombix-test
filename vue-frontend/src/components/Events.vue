<template>
  <div>

    <router-link :to="{ name: 'events-new'}">
      <button class="addEventNav">
        +
      </button>
    </router-link>

    <div class="eventCard container" v-for="event in events" :key="event.id">
    <!-- <div class="eventCard container" v-bind:class="{ upcoming: isUpcoming }" v-for="event in events" :key="event.id"> -->

      <h4>
        {{ event.title }}
      </h4>

      <p>
        {{ event.dateFrom | moment }} - {{ event.dateTo | moment }}
      </p>

      <p v-if="event.description">{{ event.description }}</p>

      <router-link
        :to="{
          name: 'events-show',
          params: {
            eventId: event._id
          }
        }">
        <button>View</button>
      </router-link>

    </div>
  </div>
</template>

<script>
  import EventsService from '../services/EventsService';
  import moment from 'moment';

  export default {
    data () {
      return {
        events: []
      }
    },
    methods: {
    },
    async mounted () {
      this.events = (await EventsService.index()).data;
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY');
      }
    },
    computed: {

      sortedEvents: function() {
        function compare(firstEvent, secondEvent) {
          firstEvent = new Date(firstEvent.dateFrom);
          secondEvent = new Date(secondEvent.dateFrom);
          console.log(firstEvent);
          console.log(secondEvent);
          console.log(firstEvent < secondEvent);
          if (firstEvent < secondEvent) return -1;
          if (firstEvent > secondEvent) return 1;
          return 0;
        }
        return this.events.sort(compare);
      }

    }
  }
</script>

<style scoped>
  button {
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
    background-color: #90d9bf;
  }

  .addEventNav {
    border-radius: 100%;
    width: 2.5em;
  }

  .eventCard {
    width: 50%;
    border-radius: 10px;
    padding: 10px;
    &.past {
      background-color: red;
    }
    &.upcoming {
      background-color: green;
    }
  }
</style>
