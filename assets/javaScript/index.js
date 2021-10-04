import {homeLink, homeCollapse, homeLink2, homeCollapse2, showList, list} from './variables.js'
import customEvents from './customEvents.js'


const allEvents = new customEvents();
const {homeCollapseToggle, itemsCollapseToggle} = allEvents;

homeCollapseToggle(homeLink, homeCollapse, 'menu-open');
homeCollapseToggle(homeLink2, homeCollapse2, 'menu-open');
itemsCollapseToggle(showList, list)