(function () {
    require.config({
        paths: {
            "jquery": "libs/jquery/jquery.min",
            "handlebars": "libs/handlebars/handlebars.min",
            "combobox": "modules/combobox",
            "getData": "modules/get-data"
        }
    });


    require(["jquery", "handlebars","getData", "combobox", ], function ($, Handlebars, data, controls) {

        var people = [
            { id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "images/doncho.jpg" },
            { id: 2, name: "Todor Stoyanov", age: 19, avatarUrl: "images/todor.jpg" },
            { id: 3, name: "Ivaylo Kenov", age: 20, avatarUrl: "images/ivo.jpg" },
            { id: 4, name: "Nikolay Kostov", age: 21, avatarUrl: "images/niki.jpg" }
        ];

        var comboContainer = document.getElementById('combo-container');

        var comboBox = controls.ComboBox(people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        comboContainer.innerHTML = comboBoxHtml;
    });
}());