import fa_comment from "@fortawesome/fontawesome-free/svgs/solid/comment.svg";
import fa_paper_plane from "@fortawesome/fontawesome-free/svgs/solid/paper-plane.svg";
import fa_user_circle from "@fortawesome/fontawesome-free/svgs/solid/circle-user.svg";
import fa_street_view from "@fortawesome/fontawesome-free/svgs/solid/street-view.svg";
import fa_camera_retro from "@fortawesome/fontawesome-free/svgs/solid/camera-retro.svg";
import fa_info_circle from "@fortawesome/fontawesome-free/svgs/solid/circle-info.svg";
import fa_question_circle from "@fortawesome/fontawesome-free/svgs/solid/question.svg";
import fa_arrow_up from "@fortawesome/fontawesome-free/svgs/solid/arrow-up.svg";
import fa_xmark from "@fortawesome/fontawesome-free/svgs/solid/xmark.svg";
import fa_volume_high from "@fortawesome/fontawesome-free/svgs/solid/volume-high.svg";
import fa_volume_xmark from "@fortawesome/fontawesome-free/svgs/solid/volume-xmark.svg";

import showMessage from "./message.js";

// TTS相关变量 - 已禁用
// let isAudioEnabled = true;
// let isPlaying = false;

// TTS功能 - 已注释
/*
function playTTS(text) {
    if (isAudioEnabled && !isPlaying) {
        // TTS实现代码已被注释
    }
}

function setAudioEnabled(enabled) {
    isAudioEnabled = enabled;
}
*/

let text = "";

function showHitokoto() {
    // 增加 hitokoto.cn 的 API
    fetch("https://v1.hitokoto.cn")
        .then(response => response.json())
        .then(result => {
            text = result.hitokoto;
            showMessage(text, 6000, 9);
        });
}

function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// TTS相关变量和函数 - 已注释
// let isAudioEnabled = true;

// function playTTS(text) {
//     if (isAudioEnabled) {
//         // TTS功能实现
//     }
// }

function toggleAudio() {
    // TTS功能已禁用 - 原代码已注释
    /*
    if (isAudioEnabled) {
        showMessage("那小寰就不打扰你啦~", 4000, 9);
    } else {
        showMessage("小寰回来啦~", 4000, 9);
    }
    */
    showMessage("音频功能暂时不可用", 4000, 9);
}


function askQwenTurbo() {
    const question = prompt("哪里不理解呢？");
    if (question) {
        fetch(`http://localhost:8080/girl-keyword-explain?userInput=${question}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.text())
        .then(content => {
            text = content;
            showMessage(text, 8000, 9);
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage("啊……现在不太想回答问题呢……待会再问我试试看吧~", 4000, 9);
        });
    }
}



const tools = {
    "hitokoto": {
        icon: fa_comment,
        callback: showHitokoto
    },
    // TTS音频切换功能已注释
    /*
    "toggle-audio": {
        icon: (() => isAudioEnabled ? fa_volume_high : fa_volume_xmark)(),
        callback: toggleAudio
    },
    */
    "ask-qwen": {
        icon: fa_question_circle,
        callback: askQwenTurbo
    },
    "back-to-top": {
        icon: fa_arrow_up,
        callback: backToTop
    },
    "asteroids": {
        icon: fa_paper_plane,
        callback: () => {
            if (window.Asteroids) {
                if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
                window.ASTEROIDSPLAYERS.push(new Asteroids());
            } else {
                const script = document.createElement("script");
                script.src = "https://fastly.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
                document.head.appendChild(script);
            }
        }
    },
    "switch-model": {
        icon: fa_user_circle,
        callback: () => {}
    },
    "switch-texture": {
        icon: fa_street_view,
        callback: () => {}
    },
    "photo": {
        icon: fa_camera_retro,
        callback: () => {
            showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
            Live2D.captureName = "photo.png";
            Live2D.captureFrame = true;
        }
    },
    "info": {
        icon: fa_info_circle,
        callback: () => {
            open("https://gitee.com/zuoyuejun/globalwindow");
        }
    },
    "quit": {
        icon: fa_xmark,
        callback: () => {
            localStorage.setItem("waifu-display", Date.now());
            showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
            document.getElementById("waifu").style.bottom = "-500px";
            setTimeout(() => {
                document.getElementById("waifu").style.display = "none";
                document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
            }, 2000);
        }
    }
};

export default tools;
