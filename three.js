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
    if (document.getElementsByTagName("dyslexia-b")) {
        return false;
    } else {
        document.body.appendChild(document.createElement("dyslexia-b"));
        let element = document.getElementById("dyslexia-paragraph");
        element.style = "";
    }
    return false;
}

function oopsIBlewUpTheImage() {
    
}