chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Type console.inject(\"library\") to inject your favorite library!");
    console.log('Some good ideas are jquery, underscore, or d3!');
		// ----------------------------------------------------------

    var elt = document.createElement('script');

    var ci = function (library) {
      var libraryUrls = {
        'angular' : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js',
        'jQuery' : 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
        'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
        'jquery1' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js',
        'three.js' : 'https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js',
        'threejs' : 'https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js',
        'D3' : 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js',
        'd3' : 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js',
        'underscore' : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js',
        'prototype' : 'https://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js',
        'dojo' : 'https://ajax.googleapis.com/ajax/libs/dojo/1.10.3/dojo/dojo.js',
        'backbone' : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js'
      }

      var url = libraryUrls[library];
      var lib =document.createElement('script');
      lib.src = url;
      document.head.appendChild(lib);
      return console.log('library injected from ' + url);
    }

    elt.innerHTML = 'console.inject = ' + ci.toString();
    document.head.appendChild(elt);


	}
	}, 10);
});