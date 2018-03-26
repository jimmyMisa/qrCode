window.addEventListener("load",globs.getIcons);
function winLoaded(e){
	_wait(function(){
		return globs.map;
	},function(){
		globs.loaded=true;
	});
	globs.getIcons(e);
}

