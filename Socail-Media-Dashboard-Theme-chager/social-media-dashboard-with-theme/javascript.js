function check()
{  
    document.getElementById("div1").classList.toggle("dark-mode-div1");
    document.getElementById("fb").classList.toggle("fb-light");
    document.getElementById("tw").classList.toggle("tw-light");
    document.getElementById("yt").classList.toggle("yt-light");
    document.getElementById("insta").classList.toggle("insta-light");

    document.getElementById("fb-views").classList.toggle("fb-light");
    document.getElementById("fb-likes").classList.toggle("fb-light");

    document.getElementById("tw-views").classList.toggle("fb-light");
    document.getElementById("tw-likes").classList.toggle("fb-light");

    document.getElementById("insta-views").classList.toggle("fb-light");
    document.getElementById("insta-likes").classList.toggle("fb-light");

    document.getElementById("yt-views").classList.toggle("fb-light");
    document.getElementById("yt-likes").classList.toggle("fb-light");

    document.getElementById("fb-text").classList.toggle("fb-text-light");
    document.getElementById("tw-text").classList.toggle("tw-text-light");
    document.getElementById("yt-text").classList.toggle("yt-text-light");
    document.getElementById("insta-text").classList.toggle("insta-text-light");

    document.getElementById("fb-text-views").classList.toggle("fb-text-light-overview");
    document.getElementById("fb-text-likes").classList.toggle("fb-text-light-overview");

    document.getElementById("tw-text-views").classList.toggle("fb-text-light-overview");
    document.getElementById("tw-text-likes").classList.toggle("fb-text-light-overview");

    document.getElementById("insta-text-views").classList.toggle("fb-text-light-overview");
    document.getElementById("insta-text-likes").classList.toggle("fb-text-light-overview");

    document.getElementById("yt-text-views").classList.toggle("fb-text-light-overview");
    document.getElementById("yt-text-likes").classList.toggle("fb-text-light-overview");
}

function display()
{
    alert("These are not buttons")
}
