(function () {
	var path = window.location.href.toLowerCase();
	var exactMetas = new Array();
	var fuzzyMetas = new Array();
	$.getJSON("/template/js/postMeta.json", function(json) {
		$.each(json, function(key, postMeta) {
			var exactMatchRules = postMeta["ExactMatch"];
			var fuzzyMatchRules = postMeta["FuzzyMatch"];
			$.each(exactMatchRules, function(index, exactRule) {
				if (path.includes(exactRule)) {
					exactMetas.push(postMeta);
					return false;
				}
			});
			$.each(fuzzyMatchRules, function(index, fuzzyRule) {
				if (path.includes(fuzzyRule)) {
					fuzzyMetas.push(postMeta);
					return false;
				}
			});
		});
		
		// append 404 title
		var appendHTML = "<h1>404 Not Found</h1>";
		if (exactMetas.length) {
			// append exact decription
			appendHTML += "<h2>您访问的链接地址已更新如下，请及时提醒引用方更换</h2><div class='releated'><div class='content'><ul>";

			// append exact list
			$.each(exactMetas, function(index, exactMeta) {
				appendHTML += "<li class='clearfix'><a href='";
				appendHTML += exactMeta["URL"];
				appendHTML += "'>";
				appendHTML += exactMeta["Title"];
				appendHTML += "</a><url>";
				appendHTML += exactMeta["URL"];
				appendHTML += "</url></li>";
			});
			appendHTML += "</ul></div></div>";
		}
		if (fuzzyMetas.length) {
			// append fuzzy decription
			appendHTML += "<h2>";
			if (exactMetas.length) {
				appendHTML += "我们同时为您匹配了如下相关文章";
			} else {
				appendHTML += "您访问的链接地址已失效，我们为您匹配了如下相关文章，请及时提醒引用方更换";
			}
			appendHTML += "</h2><div class='releated'><div class='content'><ul>";
			
			// append fuzzy list
			$.each(fuzzyMetas, function(index, fuzzyMeta) {
				appendHTML += "<li class='clearfix'><a href='";
				appendHTML += fuzzyMeta["URL"];
				appendHTML += "'>";
				appendHTML += fuzzyMeta["Title"];
				appendHTML += "</a><url>";
				appendHTML += fuzzyMeta["URL"];
				appendHTML += "</url></li>";
			});
			appendHTML += "</ul></div></div>";
		}

		// append html to content
		$('.not_found_new').append(appendHTML);
	});
})();