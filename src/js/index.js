import initMap from './map.js';
import initMarkers from './markers.js';
import initRecenter from './ctrl_recenter.js';
import initClock from './ctrl_clock/clock.js';

initMap();
initMarkers();

// controls
initRecenter();
initClock();