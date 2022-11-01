
function hideCount(){

    if (document.getElementById("subscriber-count") != null){
        document.getElementById("subscriber-count").style.display = "none";
    }

    if (document.getElementById("subscribers") != null){
        document.getElementById("subscribers").style.display = "none";
    }

    if (document.getElementById("owner-sub-count") != null){
        document.getElementById("owner-sub-count").style.display = "none";
    }

    if (document.getElementById("dot") != null){
        document.getElementById("dot").style.display = "none";
    }

    if (document.getElementById("thumbnail-attribution") != null){
        let items = document.querySelectorAll("#thumbnail-attribution");

        items.forEach(element => element.style.display = "none");
    }
}

window.addEventListener("yt-navigate-finish", hideCount);