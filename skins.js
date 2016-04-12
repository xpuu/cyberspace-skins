$(function () {

	var onSelect = function (e) {
		var v = this.value;
		//console.log(v);
		if (v.indexOf('.css') != -1) {
			var url = 'https://cdn.rawgit.com/xpuu/cyberspace-skins/master/' + v;
			console.log(url);
			$('link[rel="stylesheet"]').remove();
			$('<link>').appendTo('head').attr({type: 'text/css', rel: 'stylesheet', href: url});
		}
	};

	$.get('https://api.github.com/repos/xpuu/cyberspace-skins/contents/', function (data) {
		var $sel = $('#skinner').change(onSelect);
		$.each(data, function (k, v) {
			//console.log(v);
			var n = v.name;
			if (n.indexOf('.css' != -1)) {
				$sel.append('<option value="' + n + '">' + n.toUpperCase() + '</option>');
			}
		});
	});

});