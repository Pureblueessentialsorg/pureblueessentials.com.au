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

// unexpected end of json
// limit length of search


import Fuse from 'fuse.js/dist/fuse.basic.esm';

let fuse; // fuse is loaded here and re-used later
let searchLoaded = false; // allow us to delay loading json data unless search activated
const search = document.getElementById('js-search');
const searchInput = document.getElementById('js-searchInput');
const searchResults = document.getElementById('js-searchResults');
const loading = document.getElementById('js-searchLoading');
const hiddenClass = 'd-none';

searchInput.addEventListener('focus', function () {
  // Load json search index if first time invoking search
  // Means we don't load json unless searches are going to happen; keep user payload small unless needed
  if (!searchLoaded) {
    loadSearch(); // loads our json data and builds fuse.js search index
    searchLoaded = true; // let's never do this again
  }
}, false);

// disable enter when cursor inside the search box
search.addEventListener('submit', function (event) {
  event.preventDefault();
  // executeSearch(searchInput.value);
});

function watchSearch() {
  // check if the user has already typed something
  if (searchInput.value) {
    executeSearch(searchInput.Value);
  }

  // ==========================================
  // execute search as each character is typed
  // keyup used to that blank text can be detected on backspace
  searchInput.addEventListener('keyup', function (event) {
    const text = this.value
    if ((event.key === 'Backspace') && (text === '')) {
      searchResults.classList.add(hiddenClass);
    } else {
      // show results 
      searchResults.classList.remove(hiddenClass);
      loading.classList.add(hiddenClass);
      executeSearch(text);
    }
  });
  // close results on focus out
  document.addEventListener('click', function (event) {
    var isClickInsideElement = searchInput.contains(event.target);
    if (!isClickInsideElement) {
      searchResults.classList.add(hiddenClass);
    }
  });
}

// ==========================================
// GET json
//
function fetchJSONFile(path, callback, errorCallback, timeout = 3000) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path);
  xhr.onloaded = () => {
    if (xhr.status === 200) { // success
      var data = JSON.parse(xhr.responseText);
      if (callback) callback(data);
    } else { // fail
      const status = `Error ${xhr.status}: ${xhr.statusText}`;
      if (errorCallback) errorCallback(status);
    }
  };
  xhr.timeout = timeout; // time in milliseconds
  xhr.send();
}

// display message on xhr error
function errorCallback() {
  searchResults.classList.remove(hiddenClass);
  searchResults.innerHTML = '<div class="results__empty">Connectivity error.</div>';
};

// ==========================================
// load our search index, only executed once
// on focus
//
function loadSearch() {
  fetchJSONFile('/index.json', function (data) {

    var options = { // fuse.js options; check fuse.js website for details
      shouldSort: true,
      // location: 0,
      // distance: 100,
      threshold: 0.3, // 0.0 requires perfect score, 1 matches anything. default 0.6
      minMatchCharLength: 2,
      findAllMatches: true, // finishes searching pattern, even if an exact match is found
      ignoreLocation: true, // match anywhere in the strings
      keys: [
        'title',
        // 'permalink',
        // 'contents',
        'categories',
      ],
    };
    fuse = new Fuse(data, options); // build the index from the json file
    // watch the search field now that fuse has loaded
    watchSearch();
  }, errorCallback);
}

// ==========================================
// using the index we loaded
// a search query (for "term") 
// in the search box
//
function executeSearch(term) {
  let results = fuse.search(term); // the actual query being run using fuse.js
  if (results.length === 0) { // no results based on what was typed into the input box
    searchResults.innerHTML = '<div class="results__empty">No items found</div>';
  } else {
    // hide loading
    loading.classList.add(hiddenClass);
    // clear div
    searchResults.innerHTML = '';
    // add each result to the div
    results.forEach((value, key) => {
      const { title, permalink, image, categories } = value.item;
      const output = `
        <div class="results__container" id="result-${key}">
          <div class="results__row">
            <div class="results__col--4">
              <img src="${image}" class="results__image" /> 
            </div>
            <div class="results__col--8"> 
              <div class="results__title"><a href="${permalink}">${title}</a></div>
              <div class="text-muted">${categories.join(', ')}</div>
            </div>
          </div>
        </div>`;
      // add result to div
      searchResults.innerHTML += output;
    })
  }
}