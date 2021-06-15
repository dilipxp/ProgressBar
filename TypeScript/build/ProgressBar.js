"use strict";
var Progress = /** @class */ (function () {
    function Progress(p) {
        this.bar = document.getElementById("progress-bar");
        this.p = p;
        //   this.update();
    }
    // private update() {
    //     this.bar.style.width = this.p + '%';
    //     this.bar.innerHTML = this.p+'%';
    // }  
    Progress.prototype.countup = function () {
        if (this.p < 100) {
            this.p += 20;
        }
        this.bar.style.width = this.p + '%';
        this.bar.innerHTML = this.p + '%';
    };
    return Progress;
}());
var move = document.getElementById('move');
var p = new Progress(0);
move === null || move === void 0 ? void 0 : move.addEventListener('click', function () { p.countup(); });
