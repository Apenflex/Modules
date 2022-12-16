export default class Customizator {
    constructor() {
        this.btnBlock = document.createElement("div");
        this.colorPicker = document.createElement("input");
        this.clear = document.createElement("div");
        this.scale = localStorage.getItem("scale") || 1;
        this.color = localStorage.getItem("color") || "#ffffff";

        this.btnBlock.addEventListener("click", (e) => this.onScaleChange(e));
        this.colorPicker.addEventListener("input", (e) => this.onColorChange(e));
        this.clear.addEventListener("click", () => this.onClear());
    }

    onScaleChange(e) {
        const body = document.querySelector("body");
        if (e) {
            this.scale = +e.target.value.replace(/x/g, "");
        }
        
        const recursy = (element) => {
            element.childNodes.forEach((item) => {
                if (item.nodeName === "#text" && item.nodeValue.replace(/\s/g, "").length > 0) {
                    
                    if (!item.parentNode.getAttribute("data-fontsize")) {
                        let value = window.getComputedStyle(item.parentNode, null).fontSize;
                        item.parentNode.setAttribute("data-fontsize", +value.replace(/px/g, ""));
                        item.parentNode.style.fontSize = item.parentNode.getAttribute("data-fontsize") * this.scale + 'px';
                    } else {
                        item.parentNode.style.fontSize = item.parentNode.getAttribute("data-fontsize") * this.scale + 'px';
                    }

                } else {
                    recursy(item);
                }
            });
        };

        recursy(body);

        localStorage.setItem("scale", this.scale);
    }

    onColorChange(e) {
        const body = document.querySelector("body");
        body.style.backgroundColor = e.target.value;

        localStorage.setItem("color", e.target.value);
    }

    setBgColor() {
        const body = document.querySelector("body");
        body.style.backgroundColor = this.color;
        this.colorPicker.value = this.color;
    }

    onClear() {
        localStorage.clear();
        this.scale = 1;
        this.color = "#ffffff";
        this.setBgColor();
        this.onScaleChange();
    }

    injectStyle() {
        const style = document.createElement("style");
        style.innerHTML = `
            .panel {
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: fixed;
                top: 10px;
                right: 0;
                border: 1px solid rgba(0,0,0, .2);
                box-shadow: 0 0 20px rgba(0,0,0, .5);
                width: 300px;
                height: 60px;
                background-color: #fff;
            }
            .scale {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100px;
                height: 40px;
            }
            .scale_btn {
                display: block;
                width: 40px;
                height: 40px;
                border: 1px solid rgba(0,0,0, .2);
                border-radius: 4px;
                font-size: 18px;
            }
            .color {
                width: 40px;
                height: 40px;
            }
            .clear {
                font-size: 30px;
                cursor: pointer;
            }
        `;
        document.querySelector("head").append(style);
    }

    render() {
        this.injectStyle();
        this.setBgColor();
        this.onScaleChange();

        let scaleInputS = document.createElement("input"),
            scaleInputM = document.createElement("input"),
            panel = document.createElement("div");

        panel.classList.add("panel");
        scaleInputS.classList.add("scale_btn");
        scaleInputM.classList.add("scale_btn");
        this.btnBlock.classList.add("scale");
        this.colorPicker.classList.add("color");
        this.clear.classList.add("clear");

        scaleInputS.setAttribute("type", "button");
        scaleInputM.setAttribute("type", "button");
        scaleInputS.setAttribute("value", "1x");
        scaleInputM.setAttribute("value", "1.5x");
        this.colorPicker.setAttribute("type", "color");
        this.colorPicker.setAttribute("value", "#ffffff");

        document.querySelector("body").append(panel);
        panel.append(this.btnBlock, this.colorPicker, this.clear);
        this.btnBlock.append(scaleInputS, scaleInputM);

        this.clear.innerHTML = "&times;";

    }
}
