class accessibility extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<img id="dysButton" src="/assets/DyslexiaButton.png" title="Toggle dyslexia font (may mess up layouts)" alt="Button to toggle dyslexia font" style="position: fixed; bottom: 2.5rem; left: 2.5rem; z-index:998; width: 84px; cursor: pointer" onclick="changeFont();">`;
    }
}

customElements.define("dyslexia-b", accessibility);

function changeFont(){
    const styleTag = document.getElementById("dys-style");
    if (localStorage.getItem("dysFont") === "active"){
        styleTag.innerHTML = "";
        localStorage.setItem("dysFont", "inactive");

    } else if (localStorage.getItem("dysFont") === "inactive"){
        styleTag.innerHTML=
            `* {
                font-family: dyslexia !important;
             }`;
        localStorage.setItem("dysFont", "active");

    } else {
        if (styleTag) {
            if (styleTag.innerHTML === ""){
                styleTag.innerHTML=
                `* {
                    font-family: dyslexia !important;
                }`;
            } else {
                styleTag.innerHTML = "";
            }
        } else {
            let generate = document.createElement("style");
            generate.setAttribute("id", "dys-style");
            generate.innerHTML=`
            * {
                font-family: dyslexia !important;
            }
            `
            document.head.appendChild(generate);
        }
        localStorage.setItem("dysFont", "active");
    }
    console.log(localStorage.getItem("dysFont"));
    return false;
}

document.addEventListener("DOMContentLoaded", event => {
    let generate = document.createElement("style");
    generate.setAttribute("id", "dys-style");
    generate.innerHTML=``;
    document.head.appendChild(generate);
    localStorage.setItem("dysFont", "inactive");
})

function comeForthMyChild(){
    if (document.getElementsByTagName("dyslexia-b").length > 0) {
        return false;
    } else {
        document.body.appendChild(document.createElement("dyslexia-b"));
        let element = document.getElementById("dyslexia-paragraph");
        element.style = "";
    }
    return false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function oopsIBlewUpTheImage() {
    let haha = ["Oh hi Mrs. Gordon!", "Huh? What's happening?", "Wait, wait wait wait wait", "OH NO, MRS. GORDON WATCH OUT", "SHE CAN'T HEAR US NOOOOOOOOOOOOOOO"];
    scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth"
    })
    let missgordon = document.getElementById("missgordon");
    missgordon.style = "";
    await sleep(2000);
    let element = document.getElementById("alttext-paragraph");
    element.style = "";
    missgordon.classList.add("vanish");
    haha.forEach((part, index) => {
        setTimeout(() => {
            console.log(index);
            element.innerHTML=`${haha[index]}`
        }, 4000*index);
    });
    missgordon.addEventListener("animationend", async () => {
        await sleep(3000);
        missgordon.src = "TOTALLYINVALIDLOLOLOL";
        missgordon.classList.remove("vanish");
        missgordon.style = "opacity: 1; padding-top: 75px; padding-bottom: 75px";
        await sleep(2000);
        element.innerHTML = "Oh hey, this isn't so bad"
        element.classList.add("vanish");
        element.style = "animation-duration: 6s";
        element.addEventListener("animationend", async () => {
            await sleep(2000);
            element.classList.remove("vanish");
            element.style = "opacity: 1";
            element.innerHTML = `Alt texts! They're used whenever`;
        })
    })
    return false;
}