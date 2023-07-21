import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1f2a5b',
                background:"#dddddd",
                textColor:"#ffffff"
            },
            dark: {
                primary: '#e7643e',
                background:"#2b2b2b",
                textColor:"#000000"

            }
        }
    }
});
