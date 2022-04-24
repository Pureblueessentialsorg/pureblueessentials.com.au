import 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';
/* eslint-disable no-unused-vars */
// import image from 'js/lazysizes';
// alternatively only import the modules that you need from the library
import {
  // Alert, // Control alerts
  // Button, // complex button toggles etc
  // Carousel, // required for carousel
  Collapse, // required for mobile collapse menu 
  // Dropdown, // not required for navbar only for custom dropdowns
  // Modal, // modal popups
  // Popover, // popovers
  // ScrollSpy, // auto update active link for 1 page sites
  Tab, // Tabs
  // Toast, // Toasts
  // Tooltip , // Tooltips
} from 'bootstrap';
/* eslint-enable no-unused-vars */

// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })

// bootstrap js - import the whole library
// import 'bootstrap';

// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })



// native loading config
lazySizes.cfg.nativeLoading = {
	setLoadingAttribute: true,
	disableListeners: {
		scroll: true
	},
};