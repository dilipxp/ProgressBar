var progressBar = function (canvas) {
    return {
        ctx : document.getElementById(canvas).getContext('2d'),
        display : function (p, color) {
            this.ctx.fillStyle = '#dce6df';
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, p* this.ctx.canvas.width/100, this.ctx.canvas.height);
        }
    };
};


var bar = 0;
function progress() {
    progressBar('progressBar').display(bar, '#02e84b');
    var id = setInterval(frame, 25);
    function frame() {
        if (bar >= 100) {
            clearInterval(id)
            bar = 0;
        } else {
            bar++;
            progressBar('progressBar').display(bar, '#02e84b');
        }
    }
}