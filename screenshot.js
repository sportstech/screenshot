// Render Multiple URLs to file

"use strict";
var RenderUrlsToFile, arrayOfUrls, system, arrayOfNames;

system = require("system");

var configFileName = Array.prototype.slice.call(system.args, 1);

console.log(system.args);
phantom.exit();
// 
// 
// if(!configFileName){
//   console.log('Need a config file. ');
//   process.exit(1);
// }
// 
// 
// 
// 
// arrayOfUrls = [];
// 
// arrayOfNames = Object.keys(config);
// arrayOfNames.forEach(function(key){
//   arrayOfUrls.push({
//     name: key,
//     url: config[key]
//   });
// });
// 
// 
// /*
// Render given urls
// @param array of URLs to render
// @param callbackPerUrl Function called after finishing each URL, including the last URL
// @param callbackFinal Function called after finishing everything
// */
// RenderUrlsToFile = function(urls, callbackPerUrl, callbackFinal) {
//     var getFilename, next, page, retrieve, webpage;
//     webpage = require("webpage");
//     page = null;
//     next = function(status, url, file) {
//         page.close();
//         callbackPerUrl(status, url, file);
//         return retrieve();
//     };
//     retrieve = function() {
//         var url, target;
//         if (urls.length > 0) {
//             target = urls.shift();
//             page = webpage.create();
//             page.viewportSize = {
//                 width: 800,
//                 height: 600
//             };
//             page.settings.userAgent = "Phantom.js bot";
//             return page.open(target.url, function(status) {
//                 var file = 'screenshots/'+ shortConfigName + '/' + target.name + '.png';
//                 if (status === "success") {
//                     return window.setTimeout((function() {
//                         page.render(file);
//                         return next(status, target.url, target.name);
//                     }), 2000);
//                 } else {
//                     return next(status, target.url, target.name);
//                 }
//             });
//         } else {
//             return callbackFinal();
//         }
//     };
//     return retrieve();
// };
// 
// RenderUrlsToFile(arrayOfUrls, (function(status, url, file) {
//     if (status !== "success") {
//         return console.log("Unable to render '" + url + "'");
//     } else {
//         return console.log("Rendered '" + file + "' at '" + url + "'");
//     }
// }), function() {
//     return phantom.exit();
// });
