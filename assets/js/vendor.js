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

import { Index } from 'flexsearch';

//  Create the search index variable
const index = new Index({});

function setupSearchIndex() {
  //  Add the data to the search index
  const data = {
    1: { id: 1, title: "React" },
    2: { id: 2, title: "React.js" },
    3: { id: 3, title: "ReactJS" },
    4: { id: 4, title: "Node" },
    5: { id: 5, title: "Node.js" },
    6: { id: 6, title: "NodeJS" }
  };

  Object.values(data).forEach((item) => {
    index[item.id] = item.title;
  });
}

function search(query) {
  setupSearchIndex();
  const results = index.search(query);
  console.log(results);
}