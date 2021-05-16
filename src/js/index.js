import initMap from './map';
import initMarkers from './markers';
import initRecenter from './ctrl_recenter';
import initClock from './ctrl_clock/clock';


initMap();
initMarkers();

// controls
initRecenter();
initClock();