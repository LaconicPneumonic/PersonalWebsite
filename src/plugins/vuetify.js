import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import light from "./theme";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        // primary: "#FCFCFC",
        // secondary: "#2D3142",
        // accent: "#313638",
        // success: "#FFFAE3",
        // error: "#EF6461",
        // warning: "#FCFCFC"

        themes: {
            light
        },
    },
    icons: {
        iconfont: "mdi" // default - only for display purposes
    }
});
