
let runner = setInterval(function() {

    // Remove Home Channel Subscriber Count

    if (document.getElementById("subscriber-count") != null){
        document.getElementById("subscriber-count").style.display = "none";
    }

    // Remove Subscriber Count from Channels on Home Channel Page

    if (document.getElementById("subscribers") != null){
        document.getElementById("subscribers").style.display = "none";
    }

    // Remove Subscriber Count under Owner videos

    if (document.getElementById("owner-sub-count") != null){
        document.getElementById("owner-sub-count").style.display = "none";
    }

    // Remove Dot between Subscriber number and amount of videos on Home Channel Page

    if (document.getElementById("dot") != null){
        document.getElementById("dot").style.display = "none";
    }

    // remove Subscriber Count on YouTube Channel Grid under Channel Page 

    if (document.getElementById("thumbnail-attribution") != null){
        let items = document.querySelectorAll("#thumbnail-attribution");

        items.forEach(element => element.style.display = "none");
    }

    if (document.getElementsByClassName("subscribe") != null){
        let items = document.querySelectorAll("#subscribe.ytd-grid-channel-renderer");

        items.forEach(element => element.style.marginTop = "6px");
    }


}, 100);