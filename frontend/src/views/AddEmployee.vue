<template>
  <v-app>
    <div class="home pa-10">
      <h1 id="addemployee">Add New Employees</h1>
      <v-form autocomplete="off">
    <!--v-container fluid -->
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
            v-model="holidays"
            :items="['25', '26', '27', '28', '29', '30']"
            variant="solo-filled"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
        <div class="form-field">
          <v-legend>Position</v-legend>
          <v-radio-group inline v-model="position">
          <v-radio label="MTA" value="MTA"></v-radio>
          <v-radio label="BTA" value="BTA"></v-radio>
          <v-radio label="MFA" value="MFA"></v-radio>
          </v-radio-group>
        </div>
    </v-row>
        <v-row align="center" justify="center">
          <legend>Working Hours Per Week</legend>
        </v-row>
        <v-row align="center" justify="center">
          <div>
            <v-checkbox
            v-model="small"
            color="primary"
            label="25 h"
            value="25"
            hide-details
          ></v-checkbox>
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <div>
            <v-checkbox
            v-model="medium"
            color="primary"
            label="35 h"
            value="35"
            hide-details
          ></v-checkbox>
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <div>
            <v-checkbox
            v-model="big"
            color="primary"
            label="40 h"
            value="40"
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
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          label="Birthday"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        locale="jp-ja"
        v-model="date"
        :day-format="date => new Date(date).getDate()"
        :max="new Date().toISOString().substr(0, 10)"
        :picker-date="pickerDate"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>

    </v-flex>
  </v-row>
    <!--/v-container -->
  </v-form>
</div>
<div class="d-flex justify-center">
    <v-btn @click="addEmployee(), reloadPage()" density="comfortable" color="light-green" >SAVE</v-btn>
</div>
</v-app>
</template>
  
<script>
  import axios from 'axios';
  export default {
    data: () => ({
        firstname: '',
        lastname: '',
        email: '',
        postalcode: '',
        city: '',
        address: '',
        holidays:'',
        position: '',
        small: '',
        medium: '',
        big: '',
        date: null,
        menu: false,
        pickerDate: '1995-1-1',
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }),
      watch: {
        menu (val) {
          val && setTimeout(() => (
          this.$refs.picker.activePicker = 'YEAR',
          this.pickerDate = null
        ))
      },
      },
    methods: {
      async addEmployee() {
        axios.post("http://localhost:4000/api/add", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          postalcode: this.postalcode,
          city: this.city,
          address: this.address,
          holidays: this.holidays,
          position: this.position,
          small: this.small,
          medium: this.medium,
          big: this.big,
          date: this.date,
        }).then(response => {
          this.message = response.data;
        });
      },
      reloadPage() {
        window.location.reload()
      },
      save (date) {
      this.$refs.menu.save(date)
      this.pickerDate = date;
    },
    }   
  }

</script>