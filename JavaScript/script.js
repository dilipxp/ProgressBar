var bar = 0;

function progress(a) {
    if (bar == 0) {
        bar = 1;
        var progress = document.getElementById(a);
        var width = 1;
        var id = setInterval(frame, 25);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                bar = 0;
            } else {

                width++;
                progress.style.width = width + "%";
                progress.innerHTML = width+"%";
            }
        }
    }
}