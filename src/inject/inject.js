chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);


    var element = document.createElement('script');

    var injectFunction = function (library) {
      
      function getURLs() {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
            if(xmlhttp.status == 200){
              var libraries = JSON.parse(xmlhttp.responseText).results;
              var foundLib = libraries.reduce(function (found, item) {
                if (item.name === library || item.name === library + '.js') {
                  found = item;
                } 
                return found;
              }, undefined);

              if (foundLib) {
                var url = foundLib.latest.replace('http', 'https');
                var libScript =document.createElement('script');
                libScript.src = url;
                document.head.appendChild(libScript);
                return console.log('library injected from ' + url);
              } else {
                console.log('library "' + library + '" not found');
              }
            }
            else { console.log(XMLHttpRequestlhttp.status)}
          }
        }

        var searchString = 'https://api.cdnjs.com/libraries?search=' + library;
        xmlhttp.open("GET", searchString, true);
        xmlhttp.send();
      }

      getURLs();
    }

    element.innerHTML = 'console.inject = ' + injectFunction.toString();
    document.head.appendChild(element);


	}
	}, 10);
});