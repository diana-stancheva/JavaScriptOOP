define(['jquery'], function ($) {

    var getData = function (path) {
        //var fileContent;
        $.get(path, function (data) {
            //$( "#combo-box" ).html( data );
            return data;
        });

    };

    return {
        getData: getData
    }
});