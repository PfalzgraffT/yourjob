// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// CSS
import 'mapbox-gl/dist/mapbox-gl.css';
//import 'progressbar/dist/progressbar.css';
// internal imports
import { initMapbox } from '../plugins/init_mapbox';
import { initProgressBar } from '../plugins/init_progressbar';
import { initChart } from '../plugins/init_chart';
import { initSiema } from '../plugins/init_siema';
// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
// import "bootstrap";
// import swal from 'sweetalert';

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

// import "fichier js "
// import initNavTabs from '../components/init_nav_tabs';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initMapbox();
  initProgressBar();
  initChart();
  initSiema();
  // initNavTabs();
});
