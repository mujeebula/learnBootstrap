$(document).ready(function(){
	var urls = [];
	var titles = [];
	$.ajax({
	  url: "https://www.reddit.com/r/wallpapers.json",
	  cache: false,
	  success: function(data){
		$.each(
		    data.data.children.slice(0, 100),
		    function (i, post) {
			urls.push(post.data.url);
			titles.push(post.data.title);
		    }
		);
		for(var i = 0; i < urls.length; i++){
			console.log("URL :" + urls[i]);
		}
		var i = 0;
		$('img').each(function () {
        		$(this).attr('src', urls[i++]);
    		});
		i = 0;
		$('.desc').each(function(){
			$(this).text(titles[i++]);
		});
		i = 0;
		$('a').each(function(){
			$(this).attr('href', urls[i++]);
		});
	  }
	});

	var curr = 0;
	$("#prev").click(function(){
		console.log("prev clicked");
		console.log("loading url:" + urls[curr]);
		$("#img_url").attr("src", urls[curr--]);
	});

	$("#next").click(function(){
		console.log("next clicked");
		console.log("loading url:" + urls[curr]);
		$("#img_url").attr("src", urls[curr++]);
	});
});
