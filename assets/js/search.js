
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
  if (searchLoaded === false) {
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
function getJSONFile(path, callback, errorCallback, timeout = 3000) {
  // 1. Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  // 2. Configure it: GET-request for the URL 
  xhr.open('GET', path);
  // 3. Send the request over the network
  xhr.send();
  // 4. This will be called after the response is received (success or not)
  xhr.onloadend = () => {
    if (xhr.status === 200) { // success
      var data = JSON.parse(xhr.responseText);
      if (callback) callback(data);
    } else { // fail
      const status = `Error ${xhr.status}: ${xhr.statusText}`;
      if (errorCallback) errorCallback(status);
    }
  };
  // 5. set timeout 
  xhr.timeout = timeout; // time in milliseconds
}

// display message on xhr error
function errorCallback() {
  searchResults.classList.remove(hiddenClass);
  searchResults.innerHTML = '<div class="results__empty">Connectivity error.</div>';
}

// ==========================================
// load our search index, only executed once
// on focus
//
function loadSearch() {
  getJSONFile('/search/index.json', function (data) {
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
    results.slice(0,5).forEach((value, key) => {
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