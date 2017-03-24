/**
 * Created by Administrator on 2017/3/20 0020.
 */
require(["http://example.com/api/data.json?callback=define"],
    function (data) {
        //The data object will be the API response for the
        //JSONP data call.
        console.log(data);
    }
);