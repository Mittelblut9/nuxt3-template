import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

library.add(faDiscord);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa', FontAwesomeIcon);
});
