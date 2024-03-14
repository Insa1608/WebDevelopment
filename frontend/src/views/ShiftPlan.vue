<template>
  <v-app>
    <div class="home pa-10">
     <h1>List of Employees</h1>
    </div>
    <div v-for="added in addedemployees" :key="added._id">
      <v-card class="mx-auto" color="light-blue" dark max-width="800">
    <v-card-text class="font-weight-bold firstname white--text">
    {{ added.firstname }} {{ added.lastname }}, {{ added.address }}, living in {{ added.postalcode }} {{ added.city }}.
    Has {{ added.holidays }} holidays left. With Position {{ added.position }} and {{ added.small }} {{ added.medium }} {{ added.big }} hours per week.
      <v-list-item id="employee-list" class="grow">
        <v-btn @click="deleteemployee(added._id), reloadPage()" class="mx-2" small 
        color="red"> Delete </v-btn>
      </v-list-item>
    </v-card-text>
  </v-card>
</div>
  <v-row>
    <v-col cols="12">
      <v-sheet>
        <v-select
          v-model="weekday"
          :items="weekdays"
          class="ma-2"
          label="Sunday - Saturday"
          variant="outlined"
          dense
          hide-details
        ></v-select>
      </v-sheet>
    </v-col>
    <v-col cols="12">
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="today"
          color="primary"
          type="week"
          category-show-all
          :events="events"
          :event-color="getEventColor"
          first-interval="0"
          interval-minutes="60"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
  
  </v-app>
</template>
<script>
  import axios from 'axios';
  export default {
    data: () => ({
      addedemployees: [],
      today: new Date().toISOString().substr(0, 10),
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: 'Sunday - Saturday',
      events: [
        {
          title: 'Insa Shift',
          start: new Date('2024-03-15 06:30'),
          end: new Date('2024-03-15 16:00'),
        },
        {
          title: 'Insa Shift',
          start: new Date('2024-03-14 06:30'),
          end: new Date('2024-03-14 16:00'),
        },
      ],
    }),
    methods: {
      deleteemployee(id) {
        axios.delete("http://localhost:4000/api/add/" + id).then(response => {
          console.log(response.data);
        })
      },
      reloadPage() {
        window.location.reload()
      },
    },
    created() {
      // fetch added employees
      axios.get("http://localhost:4000/api/add")
      .then(response => (this.addedemployees = response.data))
      .catch(error => console.log(error));
    }
  }


</script>
<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #3b6ea8;
  color: #9f4b4b;
  border: 1px solid #3b6ea8;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>

