import $ from 'jquery';
import 'readmore-js';
var jQueryBridget = require('jquery-bridget');
var Flickity = require('flickity');

// make Flickity a jQuery plugin
Flickity.setJQuery( $ );
jQueryBridget( 'flickity', Flickity, $ );

/***************
ABOUT SECTION
****************/

// Add readmore functionality to the about section
$('#ricapp-about-content').readmore({ 
	speed: 75,
	lessLink: '<a href="#">Read less</a>',
	collapsedHeight: 210
});

$('#ricapp-team-carousel').flickity( {
  // options, defaults listed
 
  accessibility: true,
  // enable keyboard navigation, pressing left & right keys
 
  adaptiveHeight: false,
  // set carousel height to the selected slide
 
  autoPlay: false,
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second
 
  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
 
  cellSelector: '.carousel-cell',
  // specify selector for cell elements
 
  contain: false,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled
 
  draggable: '>1',
  // enables dragging & flicking
  // if at least 2 cells
 
  dragThreshold: 3,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices
 
  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells
 
  //friction: 0.2,
  // smaller number = easier to flick farther
 
  groupCells: false,
  initialIndex: 0, 
  lazyLoad: 2,
  percentPosition: true,
  prevNextButtons: true,
  pageDots: true,
  resize: true,
  rightToLeft: false,
  wrapAround: true
 
});

/***************
SCHEDULE SECTION
****************/

$('.ricapp-schedule .ricapp-schedule-results p').readmore({ 
	speed: 75,
	lessLink: '<a href="#">Read less</a>',
	collapsedHeight: 47
});

export default {

};