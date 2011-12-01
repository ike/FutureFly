/*
 * FutureFly Responsive Image Polyfill
 * by Isaac Lewis - @_crossdiver
 * 
 * https://github.com/Crossdiver/FutureFly
 *
 */

// FutureFly loader. Determines JS support
function FutureFly() {

	this.support = (
			document.getElementsByTagName
		) ? true : false;

	// Error callback for child classes.
	this.error = function(error, stop) {
	  if (stop) this.support = false;
	  console.log(e);
	}

	// Hide all picture elements.
	if (this.support) {
		this.hidePictures = new Style(this);
		this.hidePictures.init('picture img, picture source { display: none; }', 'hidePictures');
	}

	// Load the inline JS
	this.loadFlyScript = function() {
	  if (this.support) {
	    this.body = document.getElementsByTagName('body')[0];
	    this.flyScript = document.createElement('script');
	    this.flyScript.src = './futureflyinline.js';
	    this.flyScript.type = 'text/javascript';
	    this.body.appendChild(this.flyScript);
	  } 
	}
}

// Add and access style tags
function Style(parent) {
	if (parent) this.parent = parent;
	if (document.getElementsByTagName && document.createElement && document.createTextNode) {
	  this.head = document.getElementsByTagName('head')[0];
	  this.style = document.createElement('style');

	  this.init = function(rules, rel) {
	    this.rules = document.createTextNode(rules);
	    this.style.type = 'text/css';
	    this.style.setAttribute('rel', rel);

	    if(this.style.styleSheet) {
	      this.style.styleSheet.cssText = this.rules.nodeValue;
	    } else { this.style.appendChild(this.rules); }

	    this.head.appendChild(this.style);
	  }

	  this.clear = function() {
	    this.style.innerHTML = '';
	  }

	  this.add = function(rules) {
	    // Append rules to this.rules and refresh content of this.style
	    this.rules.appendData(rules);

	    if(this.style.styleSheet) {
	      this.style.styleSheet.cssText = this.rules.nodeValue;
	    } else { this.style.appendChild(this.rules); }
	  }
	} else {
	  this.parent.error('Insufficient JS support.', false)
	}
}


// Initialize FutureFly
var F = new FutureFly();

// When DOM is ready, attempt to load the 
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
	    F.loadFlyScript();
	}
}