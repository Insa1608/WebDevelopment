<template>
    <div class="home pa-10">
      <h1>Add New Employees</h1>
      <v-form autocomplete="off">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="[rules.required]"
            label="First Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="[rules.required]"
            label="Last Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="[rules.email]"
            label="E-Mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="city"
            :rules="[rules.required]"
            label="City"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="postalcode"
            :rules="[rules.required]"
            label="Postal Code"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="address"
            :rules="[rules.required]"
            label="Address"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <div class="form-field">
          <v-select
            label="Holidays"
            :items="['25 d', '26 d', '27 d', '28 d', '29 d', '30 d']"
            variant="solo-filled"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
        <div class="form-field">
          <v-legend>Position</v-legend>
          <v-radio-group inline>
          <v-radio label="MTA" value="one"></v-radio>
          <v-radio label="BTA" value="two"></v-radio>
          <v-radio label="MFA" value="three"></v-radio>
          </v-radio-group>
        </div>
    </v-row>
        <v-row align="center" justify="center">
          <legend>Working Hours Per Week</legend>
        </v-row>
        <v-row align="center" justify="center">
          <div>
            <v-checkbox
            v-model="ex4"
            color="primary"
            label="25 h"
            value="primary"
            hide-details
          ></v-checkbox>
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <div>
            <v-checkbox
            v-model="ex4"
            color="primary"
            label="35 h"
            value="primary"
            hide-details
          ></v-checkbox>
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <div>
            <v-checkbox
            v-model="ex4"
            color="primary"
            label="40 h"
            value="primary"
            hide-details
          ></v-checkbox>
          </div>
        </v-row>
  <v-row align="center" justify="center">
    <v-flex xs12 sm6 md4>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Birthdate"
            prepend-icon=""
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12>
        <p v-if="successMsg != ''">{{ successMsg }}</p>
    </v-flex>
  </v-row>
      <v-row align="center" justify="center">
          <v-btn @click="addEmployee" density="comfortable" color="light-green" >SAVE</v-btn>
      </v-row>
    </v-container>
  </v-form>
</div>
</template>
  
<script>
  import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        posts: [],
        firstname: '',
        lastname: '',
        email: '',
        postalcode: '',
        city: '',
        address: '',
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
    async mounted() {
      const response = await axios.get("api/");
      this.posts = response.data;
    },
    methods: {
      async addEmployee(e) {
        e.preventDefault();
        const response = await axios.get("api/add", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          postalcode: this.postalcode,
          city: this.city,
          address: this.address,
        });
        this.posts.push(response.data);
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.postalcode = '';
        this.city = '';
        this.address = '';
      },
      async removeEmployee(item, i) {
        await axios.delete("api/add" + item._id);
        this.posts.splice(i, 1);
      },
    }   
  }

</script>