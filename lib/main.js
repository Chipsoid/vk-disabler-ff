// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "http://vk.com/feed",
  contentScriptFile: [self.data.url("jquery.js"),
                      self.data.url("script.js")],
  contentStyleFile: self.data.url("style.css"),
  onAttach: function(worker) {
    console.log("VK Disabler start work on: " + worker.tab.url);
  }
});