$(document).ready(function () { 
    $('#navbar').load('../navbar/navbar.html');
    $('#footer').load('../navbar/footer.html');
});

// Code by Shan Eapen Koshy
var channelID = "UCBUkAyb841r533idYMAVj2Q";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#latest_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
});
// End