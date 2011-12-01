
	
	var pictures = document.getElementsByTagName('picture');

	var currWidth = document.compatMode === "CSS1Compat" && document.documentElement.clientWidth || document.body.clientWidth || document.documentElement.clientWidth;

	for (var i = 0; i < pictures.length; i++) {
		var sources = pictures[i].getElementsByTagName('source');
		var img = pictures[i].getElementsByTagName('img')[0];
		var sourceURL = [];
		var sourceMedia = [];

		for (var i = 0; i < sources.length; i++) {
			sourceMedia.push({ 
						minw : sources[i].media.match( /min\-width:[\s]*([\s]*[0-9]+)px[\s]*/ ) && parseFloat( RegExp.$1 ), 
						maxw : sources[i].media.match( /max\-width:[\s]*([\s]*[0-9]+)px[\s]*/ ) && parseFloat( RegExp.$1 ),
						url  : sources[i].src
					});
		}

		for (var i in sourceMedia) {
				var thismedia = sourceMedia[i];
				if (!thismedia.minw && !thismedia.maxw || 
					(!thismedia.minw || thismedia.minw && currWidth >= thismedia.minw) && 
					(!thismedia.maxw || thismedia.maxw && currWidth <= thismedia.maxw) ) {						
						img.src = thismedia.url;
				}
			}
		
	}

	F.hidePictures.clear();
