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
            :rules="nameRules"
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
            :rules="nameRules"
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
            :rules="emailRules"
            label="E-Mail"
            hide-details
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
            :rules="nameRules"
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
            :rules="Number"
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
            :rules="nameRules"
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
      name: 'Home',
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }),
    created() {
      // Verbindung zur MongoDB herstellen
      mongoose.connect('mongodb+srv://roster_user:D0w1rKmPqq6QYx46@roster.hwic3bh.mongodb.net/?retryWrites=true&w=majority&appName=roster', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => {
          console.log('Verbindung zur MongoDB erfolgreich hergestellt');
          // Führe hier weitere Aktionen aus, die von der MongoDB-Verbindung abhängen
        })
        .catch((error) => {
          console.error('Fehler beim Herstellen der Verbindung zur MongoDB:', error);
        });
    },
    computed: {
    },
    watch: {
    },
    methods: {
      save: function(){
        if (!this.firstName && !this.lastname) {
          return {
            'background-color': 'gray',
             cursor: 'default'
          }
        } else {
          // HTTP-Anfrage an das Backend senden
        axios.post('/api/data', this.data)
        .then(response => {
          console.log('Daten erfolgreich gespeichert:', response.data);
          // Weitere erforderliche Aktionen nach dem Speichern
          this.reset();
        })
        .catch(error => {
          console.error('Fehler beim Speichern der Daten:', error);
        });
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
    }
</script>