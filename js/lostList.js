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
		var appendHTML = "";
		if (exactMetas.length) {
			// append exact decription
			appendHTML += "<h2>您访问的链接已更新（如下所示），请及时提醒引用方修改</h2><div class='releated'><div class='content'><ul>";

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
				appendHTML += "我们同时为您匹配了相关的链接（如下所示）";
			} else {
				appendHTML += "您访问的链接已失效，我们为您匹配了相关的链接（如下所示），如有正确的匹配，请及时提醒引用方修改";
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
		if (!exactMetas.length && !fuzzyMetas.length) {
			appendHTML += "<h2 style=\"text-align:center;\">您访问的链接不存在或已失效，\
			您可以到博客 <a href=\"/\">首页</a> 或 <a href=\"/archive\">归档页</a> 查找您想要的文章，\
			或将此问题反馈给 <a href=\"mailto:xuyafei86@163.com\">博主</a></h2>";
		}

		// append html to content
		$('.not_found_new').append(appendHTML);
	});
})();