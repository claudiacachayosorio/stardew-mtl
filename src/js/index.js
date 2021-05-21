// Assets
import '../sass/index.sass';


// Map
import initMap from './map.js';
import initMarkers from './markers.js';
import initRecenter from './control_recenter.js';
import initClock from './control_clock/clock.js';
initMap();
initMarkers();
initRecenter();
initClock();