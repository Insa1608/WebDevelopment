<template>
    <div class="home pa-10">
      <h1>Add New Employees</h1>
      <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="[rules.required]"
            label="First Name"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="[rules.required]"
            label="Last Name"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-Mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="city"
            :counter="10"
            :rules="[rules.required]"
            label="City"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="postalcode"
            :counter="10"
            :rules="[rules.required]"
            label="Postal Code"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="address"
            :rules="[rules.required]"
            label="Address"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-form>
   <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <div class="form-field">
          <v-select
            label="Holidays"
            :items="['25 d', '26 d', '27 d', '28 d', '29 d', '30 d']"
            variant="solo-filled"
          ></v-select>
        </div>
      </v-col>
    </v-row>
   </v-container>
  </v-form> 
   <v-container>
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
   </v-container>
  <v-container>
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
  </v-row>
  </v-container>
   <v-container>
    <v-row align="center" justify="center">
      <v-col
      cols="auto">
        <v-btn density="comfortable" color="blue">Reset</v-btn>
        <v-btn density="comfortable" color="red">Save</v-btn>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
  
<script>
    export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }),
    data: () => {
      return {
        address: '',
        email: '',
        firstname: '',
        lastname: '',
        postalcode: '',
        city: '',
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
    reset: function() {
      this.firstname = '',
      this.lastname = '',
      this.email = '',
      this.holidays = '',
      this.position = '',
      this.city = '',
      this.address = '',
      this.birthdate = '',
      this.postalcode = ''
      }
    }
</script>