<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn            
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="addShift"
            >Add Shift
          </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          type="category"
          category-show-all
          :categories="categories"
          :events="events"
          :event-color="getEventColor"
          @change="fetchEvents"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple'],
      names: ['Early Shift', 'Middle Shift', 'Late Shift', 'Night Shift'],
      categories: ['Insa Sangs', 'Malte Sangs'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      //returns a random color out of the array colors for every event
      getEventColor (event) {
        return event.color
      },
      // to switch back to today when the button TODAY is pressed
      setToday () {
        this.focus = ''
      },
      // method to to show previes dates
      prev () {
        this.$refs.calendar.prev()
      },
      // method to show the next dates
      next () {
        this.$refs.calendar.next()
      },
      //fetches a random event which is 8 hours long
      fetchEvents ({ start, end }) {
        const events = []
        const usedDateByCategory = new Map()


        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 1) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = 8
          const second = new Date(first.getTime() + secondTimestamp * 3600000)

          const category = this.categories[this.rnd(0, this.categories.length -1)]
          const currentDateByCategory = usedDateByCategory.get(category)

          if (!currentDateByCategory || currentDateByCategory.getTime() !== first.getTime()) {
      events.push({
              name: this.names[this.rnd(0, this.names.length - 1)],
              start: first,
              end: second,
              color: this.colors[this.rnd(0, this.colors.length - 1)],
              timed: !allDay,
              category,
            })
            usedDateByCategory.set(category, new Date(first.getTime()))
          }
        }

        this.events = events
      },
      // random function
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>