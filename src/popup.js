ci = function (library) {
var libraryUrls = {
  'angular' : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js',
  'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
  'jquery1' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js',
  'three.js' : 'https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js',
  'threejs' : 'https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js',
  'd3' : 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js',
  'underscore' : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js',
  'prototype' : 'https://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js',
  'dojo' : 'https://ajax.googleapis.com/ajax/libs/dojo/1.10.3/dojo/dojo.js',
  'backbone' : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js'
}

var lib = document.createElement('script');
lib.src = libraryUrls[library.toLowerCase()];
document.head.appendChild(lib);
}