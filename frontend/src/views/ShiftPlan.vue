<template>
  <v-app>
  <v-row>
    <v-col cols="12">
      <v-sheet>
        <v-select
          v-model="weekday"
          :items="weekdays"
          class="ma-2"
          label="weekdays"
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
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
  
    <div class="d-flex justify-center">
      <h1 id="seeEmployees">Employees</h1>
    </div>
    <div class="d-flex justify-center">
      <v-col cols="6" style="margin: 0px auto;">
        <v-text-field v-model="newTodo" label="Add Todo" solo></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center">
      <v-btn @click="addToDo()" color="primary">Add ToDo</v-btn>
    </div>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      today: '2019-01-08',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      events: [
        {
          title: 'Weekly Meeting',
          start: new Date('2019-01-07 09:00'),
          end: new Date('2019-01-07 10:00'),
        },
        {
          title: `Thomas' Birthday`,
          start: new Date('2019-01-10'),
          end: new Date('2019-01-10'),
          allDay: true,
        },
        {
          title: 'Mash Potatoes',
          start: new Date('2019-01-09 12:30'),
          end: new Date('2019-01-09 15:30'),
        },
      ],
    }),
  }
</script>
<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #3b6ea8;
  color: #ffffff;
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

