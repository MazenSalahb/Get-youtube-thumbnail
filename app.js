let vidUrl = document.getElementById("url");
let vidId;
let imageDiv = document.getElementById("imageDiv")
let img = document.getElementById("img");
let a = document.getElementById("downBtn");
let label = document.getElementById("label");
let imgsrc;
let loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.remove()
})

function getthumb() {
    if (vidUrl.value.includes("=")) {
        vidId = vidUrl.value.slice((vidUrl.value.search('v=') + 2),(vidUrl.value.search('v=')+13));
        imgsrc = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        
        img.src = imgsrc;
        imageDiv.style.display = "flex";
        a.href = imgsrc
        label.style.display ="none"
    }else if (vidUrl.value.includes("be")){
        vidId = vidUrl.value.slice((vidUrl.value.search('be/') + 3));
        imgsrc = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        img.src = imgsrc;
        imageDiv.style.display = "flex";
        a.href = imgsrc
        label.style.display ="none"
    }else{
        vidUrl.style.border ="1px solid red";
        label.innerHTML = "من فضلك ادخل رابط صحيح"
        label.style.display ="block"
    }
};


function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true;
    else
        return false;
}