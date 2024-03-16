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
  
  </v-app>
</template>
<script>
  import axios from 'axios';
  export default {
    data: () => ({
      addedemployees: [],
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

