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
      // Array to fetch the data from the database
      addedemployees: [],
    }),
    methods: {
      deleteemployee(id) {
        // delete added employees
        axios.delete("http://localhost:4000/api/add/" + id).then(response => {
          console.log(response.data);
        })
      },
      // reload Page so that the deleted employee visably disappear
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


