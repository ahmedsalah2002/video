let cont=document.querySelectorAll(".cont")

cont[0].addEventListener("click",function(){
    let overlay = document.createElement("div");
    overlay.className = "video-overlay";
    document.body.appendChild(overlay);
    let videoBackground = document.createElement("div");
    videoBackground.className = "videoBackground";
    let video = document.createElement("video");
    video.src = "./images/1.mp4";
    video.controls = true
    video.autoplay=true;
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
    overlay.onclick=function(){
        videoBackground.remove()
        overlay.remove()
    }
})
cont[1].addEventListener("click",function(){
    let overlay = document.createElement("div");
    overlay.className = "video-overlay";
    document.body.appendChild(overlay);
    let videoBackground = document.createElement("div");
    videoBackground.className = "videoBackground";
    let video = document.createElement("video");
    video.src = "./images/2.mp4";
    video.controls = true
    video.autoplay=true;
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
    overlay.onclick=function(){
        videoBackground.remove()
        overlay.remove()
    }
})
cont[2].addEventListener("click",function(){
    let overlay = document.createElement("div");
    overlay.className = "video-overlay";
    document.body.appendChild(overlay);
    let videoBackground = document.createElement("div");
    videoBackground.className = "videoBackground";
    let video = document.createElement("video");
    video.src = "./images/3.mp4";
    video.controls = true
    video.autoplay=true;
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
    overlay.onclick=function(){
        videoBackground.remove()
        overlay.remove()
    }
})
cont[3].addEventListener("click",function(){
    let overlay = document.createElement("div");
    overlay.className = "video-overlay";
    document.body.appendChild(overlay);
    let videoBackground = document.createElement("div");
    videoBackground.className = "videoBackground";
    let video = document.createElement("video");
    video.src = "./images/4.mp4";
    video.controls = true
    video.autoplay=true;
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
    overlay.onclick=function(){
        videoBackground.remove()
        overlay.remove()
    }
})