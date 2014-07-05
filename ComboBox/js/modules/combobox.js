define(function () {

    function ComboBox(collection) {
        this.collection = collection || [];
        this._collapsed = true;
    };

    ComboBox.prototype.render = function (template) {
        var self = this;
        var items = this.collection.slice();

        var compileTemplate = Handlebars.compile(template);

        $('#combo-box').on('click', '.person-item', function () {
            var $this = $(this);
            $('#combo-input').val('')

            if (!self._collapsed) {
                self._collapsed = true;
                $this.parent().find('.person-item').hide();
                $this.show();
            } else {
                $this.parent().find('.person-item').show();
                self._collapsed = false;
            }
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