// Assets
import '../sass/index.sass';

// Map
import initMap from './map';
import initMarkers from './markers';
import initRecenter from './recenter';
import initClock from './clock/control';
initMap();
initMarkers();
initRecenter();
initClock();