import Vue from 'vue';
import Vuetify from 'vuetify';
import VCalendar from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    components: {
        VCalendar,
    },
});
