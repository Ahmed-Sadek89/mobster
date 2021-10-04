import {homeLink, homeCollapse, homeLink2, homeCollapse2, showList, list} from './variables.js'
import customEvents from './customEvents.js'


const allEvents = new customEvents();
const {homeCollapseToggle, itemsCollapseToggle} = allEvents;

homeCollapseToggle(homeLink, homeCollapse);
homeCollapseToggle(homeLink2, homeCollapse2);
itemsCollapseToggle(showList, list)
