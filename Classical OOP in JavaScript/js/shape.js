var Shape = (function () {

    function Shape(selector) {
        this.selector = selector;
    }

    Shape.prototype = {
        drawRect: function (x, y, width, height) {
            var ctx = canvasContext(this.selector);
            ctx.beginPath();
            ctx.rect(x, y, width, height);
            ctx.closePath();
            ctx.stroke();
        },
        drawCircle: function (x, y, radius) {
            var ctx = canvasContext(this.selector);
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();

        },
        drawLine: function (x1, y1, x2, y2) {
            var ctx = canvasContext(this.selector);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

        }
    };

    function canvasContext(selector){
        var canvas = document.querySelector(selector);
        var ctx = canvas.getContext('2d');

        return ctx;
    }

    return Shape;
}());
