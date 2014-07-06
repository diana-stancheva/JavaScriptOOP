define(function () {

    function ComboBox(collection) {
        this.collection = collection || [];
    }

    ComboBox.prototype.render = function (template) {
        var self = this;
        var items = this.collection.slice();

        var compileTemplate = Handlebars.compile(template);

        $('#combo-box').on('click', '.person-item', function () {
            $('#combo-input').val('');
            $(this).addClass('selected').show().siblings().removeClass('selected').slideToggle('fast');
        });

        $('#combo-box').on('keyup', '#combo-input', function (event) {

            var searchedString = $('#combo-input').val().toLowerCase();

            $('.person-item').each(function () {
                var text = $(this).text().toLowerCase();
                (text.indexOf(searchedString) >= 0) ? $(this).show() : $(this).hide();
            });
        });

        return compileTemplate({items: items});
    };

    return {
        ComboBox: function (collection) {
            return new ComboBox(collection);
        }
    };
});