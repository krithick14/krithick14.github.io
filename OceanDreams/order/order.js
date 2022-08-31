
var get_link=new URLSearchParams(window.location.search);
var mov_name=get_link.get("movie");
var year = get_link.get("year");


$(function () {
    $.getJSON('../movies.json', function (data) {
        for (var key in data.movies) {
            console.log(key);
            if(data.movies[key].name == mov_name)
            {
                document.getElementById("title").innerHTML = data.movies[key].name;
                document.getElementById("year").innerHTML = year;
                document.getElementById('yt-trailer').src = data.movies[key].link;
            }
        };
    })

});
