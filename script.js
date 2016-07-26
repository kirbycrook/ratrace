function looper(url, interval){
    interval = interval === undefined ? 300 : interval;

    if (url) {
        document.getElementById('ChangeImage').src = url;
    } else {
        // Default
        url = "hil1.png";
    }

    setTimeout(function() {
        if (url === "hil1.png") {
            looper("hil2.png", 300);
        } else {
            looper("hil1.png", 300);
        }
    }, interval);
}

looper();

