drawGraph();

function drawGraph() {
    var theCanvas = document.getElementById("myCanvas");
    var theContext = theCanvas.getContext("2d");

    var sales = [30, 40, 60, 35, 60, 75, 80, 69, 90];

    var scalar = 6;
    var width = theCanvas.width * scalar;
    var height = 100 * scalar;
    var unitSpacing = 10 * scalar;
    var border = 100 / scalar;

    theContext.fillRect(border, border, width, height);

    for (var i = 0; i < sales.length; i++) {
        theContext.lineTo(border + i * (unitSpacing) + 10, border + height - (sales[i] * scalar));
        theContext.lineTo(border + i * (unitSpacing) + unitSpacing, border + height - (sales[i] * scalar));
        theContext.lineTo(border + i * (unitSpacing) + unitSpacing, border + height);
        theContext.lineTo(border + i * (unitSpacing) + unitSpacing + 10, border + height);
    }

    theContext.lineTo(border + (sales.length * unitSpacing), border + height);
    theContext.lineTo(border + 10, border + height);
    theContext.fillStyle = "#fff";
    theContext.fill();
}