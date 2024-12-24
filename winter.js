var close_cat = document.getElementById("close-cat");
var open_cat = document.getElementById("open-cat");
var my_audio = document.getElementById("my-audio");
var snow = document.getElementById("snowflakes");
var snow1 = document.getElementById("snowflakes1");

my_audio.currentTime = 3.5;

function toggleImages() {
    if (close_cat.classList.contains("show")) {
        close_cat.classList.add("hide");
        close_cat.classList.remove("show");
        open_cat.classList.add("show");
        open_cat.classList.remove("hide");
        snow.classList.add("visible")
        snow.classList.remove("hidden")
        snow1.classList.add("visible")
        snow1.classList.remove("hidden")
        my_audio.play();
    } else {
        open_cat.classList.add("hide");
        open_cat.classList.remove("show");
        close_cat.classList.add("show");
        close_cat.classList.remove("hide");
        snow.classList.add("hidden")
        snow.classList.remove("visible")
        snow1.classList.add("hidden")
        snow1.classList.remove("visible")
        my_audio.pause();
    }
}

close_cat.onclick = toggleImages;
open_cat.onclick = toggleImages;
