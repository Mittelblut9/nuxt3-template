import Aos from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.AOS = Aos.init({
        duration: 700,
        once: true,
        easing: 'ease-in-out',
        offset: 50,
        delay: 0,
        disable: 'mobile',
    });
});
