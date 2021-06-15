class Progress {
    private p: number;
    private bar = document.getElementById("progress-bar");

    constructor (p: number) {
        this.p = p;
    //   this.update();
    }
    // private update() {
    //     this.bar.style.width = this.p + '%';
    //     this.bar.innerHTML = this.p+'%';
    // }  
    countup() {
        if (this.p < 100) {
            this.p += 20;
        } 
        this.bar.style.width = this.p + '%';
        this.bar.innerHTML = this.p+'%';
    }
}

var move = document.getElementById('move');
var p = new Progress(0);

move?.addEventListener('click', () => {p.countup(); })
