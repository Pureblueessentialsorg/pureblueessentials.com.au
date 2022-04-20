import image from 'js/lazysizes';

// bootstrap js - import the whole library
// import 'bootstrap';

// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })

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


// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })


// // create the index
// var FlexSearch = require("flexsearch");
// var index = FlexSearch.create();
// // load posts from a file
// var pages = JSON.parse(require('fs').readFileSync('db.json').toString()).models.Posts;

// // add posts to the index
// posts.forEach(post=>{
//   index.add(post.link, post.content)
// });

// // export a simple express middleware to search the index
// module.exports.searchHandler = function searchHandler(req, res) {
//   if (typeof req.query.q !== 'string') {
//     res.json([]);
//   }
//   res.json(index.search(req.query.q);
// }

import Fuse from 'fuse.js'

var fuse; // holds our search engine
// var searchVisible = false; 
var firstRun = true; // allow us to delay loading json data unless search activated
// var list = document.getElementById('searchResults'); // targets the <ul>
// var first = list.firstChild; // first child of search list
// var last = list.lastChild; // last child of search list
// var maininput = document.getElementById('js-searchInput'); // input box for search
// var resultsAvailable = false; // Did we get any search results?

// ==========================================
// The main keyboard event listener running the show
//
// document.addEventListener('keydown', function(event) {

const search = document.getElementById('js-search');
const searchInput = document.getElementById('js-searchInput');
const searchResults =  document.getElementById('js-searchResults');
const hiddenClass = 'd-none';



searchInput.addEventListener('focus', function() {
      // Load json search index if first time invoking search
  // Means we don't load json unless searches are going to happen; keep user payload small unless needed
  if(firstRun) {
    loadSearch(); // loads our json data and builds fuse.js search index
    firstRun = false; // let's never do this again
  }
}, false);

// search.addEventListener('submit', function(event) {
//   event.preventDefault();
//   executeSearch(searchInput.value);
// });


// ==========================================
// execute search as each character is typed
// keyup used to that blank text can be detected on backspace
searchInput.addEventListener('keyup', function(event) { 
  const text = this.value
  if ((event.key === 'Backspace') && (text === '')) {
    searchResults.classList.add(hiddenClass);
  } else {
    executeSearch(text);
  }
});

// close results on focus out
document.addEventListener('click', function(event) {
    var isClickInsideElement = searchInput.contains(event.target);
    if (!isClickInsideElement) {
      searchResults.classList.add(hiddenClass);
    }
});


// ==========================================
// fetch some json without jquery
//
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
          if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();  
}


// ==========================================
// load our search index, only executed once
// on focus
//
function loadSearch() { 
  fetchJSONFile('/index.json', function(data){

    var options = { // fuse.js options; check fuse.js website for details
      shouldSort: true,
      location: 0,
      distance: 100,
      threshold: 0.4,
      minMatchCharLength: 2,
      keys: [
        'title',
        'permalink',
        // 'contents',
        ],
    };
    fuse = new Fuse(data, options); // build the index from the json file
  });
}


// ==========================================
// using the index we loaded
// a search query (for "term") every time a letter is typed
// in the search box
//
function executeSearch(term) {
  let results = fuse.search(term); // the actual query being run using fuse.js
  let searchitems = ''; // our results bucket
  searchResults.classList.remove(hiddenClass);
  if (results.length === 0) { // no results based on what was typed into the input box
    //resultsAvailable = false;
    // searchitems = '';
    searchitems = searchitems + '<li><div class="title">No items found</div></li>';
  } else { // build our html 

    for (let item in results.slice(0,5)) { // only show first 5 results
      searchitems = searchitems + 
        '<li><a href="' + results[item].item.permalink + '" tabindex="0">' + 
        '<div class="title">' + results[item].item.title + '</div>';
        // '<br><span class="sc">'+ results[item].section +'</span> — ' + results[item].date + ' — <em>' + results[item].desc + '</em></a></li>';
    }
    //resultsAvailable = true;
  }

  searchResults.innerHTML = searchitems;
  // if (results.length > 0) {
  //   first = list.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
  //   last = list.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
  // }
}