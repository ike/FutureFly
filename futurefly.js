var imgs = document.getElementsByTagName('img');

function getSources() {
	for(var i = 0; i < imgs.length; i++)
	{
	   if(imgs[i].nextSibling.tagName == "source")
	   {
	     alert('found a source tag after an image');
	   }
	}
}