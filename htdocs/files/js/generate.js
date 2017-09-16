/*Values*/
var outputCSS = "",
    outputHtml = "",
    inputWidth = "50%",
    inputHeight = "50%",
    inputBackgroundColor = "#030303",
    inputAnimationTime = "700",
    inputBounceTime = "300",
    inputBounceDirection = "bottom",
    inputBounceWidth = "20px",
    iterationCount="0",
    timingFunction = "linear",
    delayInMs = "0",


/*Elements*/
    inputElementWidth,
    inputElementHeight,
    inputElementBackgroundColor,

    inputElementAnimationTime,
    inputElementBounceTime,
    inputElementBounceDirection,
    inputElementBounceWidth,

    inputElementIterationCount,
    inputElementTimingFunction,
    inputElementDelay,
    optionElementRestart,
    optionElementStartBreak,
    outputTextAreaCSS,
    outputTextAreaHTML,
    outputTextMSG,
    boxElement,
    animationElement,
    inputElementOpenInfoBox,
    elementInfoBox;

document.addEventListener("DOMContentLoaded", function () {
    getElements();

    var inputElements = document.getElementsByTagName("input");
    for (var i=0;i<inputElements.length;i++){
        inputElements[i].addEventListener("change",addModifiedInput);
    }

    var selectElements = document.getElementsByTagName("select");
    for (var j=0;j<selectElements.length;j++){
        selectElements[j].addEventListener("change",addModifiedInput);
    }

    var closeInfoBoxElements = document.getElementsByClassName("infoBoxClose");
    for (var k=0;k<closeInfoBoxElements.length;k++){
        closeInfoBoxElements[k].addEventListener("click",closeInfoBox);
    }

    optionElementRestart.addEventListener("click",restartAnimation);
    optionElementStartBreak.addEventListener("click",startStopAnimation);
    outputTextAreaCSS.addEventListener("click",copyToClipboard);
    outputTextAreaHTML.addEventListener("click",copyToClipboard);
    inputElementOpenInfoBox.addEventListener("click",openCloseInfoBox);

    addModifiedInput();
}, false);


function getElements() {
    /*Element style*/
    inputElementWidth=document.getElementById("INPUT_ELEMENT_WIDTH");
    inputElementHeight=document.getElementById("INPUT_ELEMENT_HEIGHT");
    inputElementBackgroundColor=document.getElementById("INPUT_ELEMENT_BACKGROUND_COLOR");

    /*Animation values*/
    inputElementAnimationTime=document.getElementById("INPUT_ANIMATION_TIME");
    inputElementBounceTime=document.getElementById("INPUT_BOUNCE_TIME");
    inputElementBounceDirection=document.getElementById("INPUT_BOUNCE_DIRECTION");
    inputElementBounceWidth=document.getElementById("INPUT_BOUNCE_WIDTH");

    /*Animation parameter*/
    inputElementIterationCount=document.getElementById("INPUT_ITERATION_COUNT");
    inputElementTimingFunction=document.getElementById("INPUT_TIMING");
    inputElementDelay=document.getElementById("INPUT_DELAY");

    /*Animation functions*/
    optionElementRestart=document.getElementById("RESTART_OPTION");
    optionElementStartBreak=document.getElementById("START_STOP_OPTION");
    outputTextAreaCSS=document.getElementById("OUTPUT_CSS_CODE");
    outputTextAreaHTML=document.getElementById("OUTPUT_HTML_CODE");
    outputTextMSG=document.getElementById("OUTPUT_MSG");

    boxElement=document.getElementById("BOX");
    animationElement=document.getElementsByClassName("ELEMENT")[0];
    inputElementOpenInfoBox=document.getElementById("OPEN_INFO");
    elementInfoBox=document.getElementById("INFO_BOX");
}


function addModifiedInput(){
    switch(this.name){
        case "inputWidth":
            inputWidth = this.value;
            break;
        case "inputHeight":
            inputHeight = this.value;
            break;
        case "inputBackgroundColor":
            inputBackgroundColor = this.value;
            break;

        case "inputAnimationTime":
            inputAnimationTime = this.value;
            break;
        case "inputBounceTime":
            inputBounceTime = this.value;
            break;
        case "inputBounceDirection":
            inputBounceDirection = this.value;
            break;
        case "inputBounceWidth":
            inputBounceWidth = this.value;
            break;

        case "iterationCount":
            iterationCount=this.value;
            break;
        case "timingFunction":
            timingFunction=this.value;
            break;
        case "delayInMs":
            delayInMs=this.value;
            break;
    }
    updateInput();
    upadteOutputText();
    getElements();
}

function updateInput() {
    inputElementWidth.value = inputWidth;
    inputElementHeight.value = inputHeight;
    inputElementBackgroundColor.value = inputBackgroundColor;
    inputElementAnimationTime.value = inputAnimationTime;
    inputElementBounceTime.value = inputBounceTime;
    inputElementBounceDirection.value = inputBounceDirection;
    inputElementBounceWidth.value = inputBounceWidth;
    inputElementIterationCount.value = iterationCount;
    inputElementTimingFunction.value = timingFunction;
    inputElementDelay.value = delayInMs;
}


function upadteOutputText() {
    var iterationCountText = "infinite";
    if(iterationCount !== "0"){
        iterationCountText=iterationCount;
    }

    var bounceFirstStep = (inputBounceTime/2)/inputAnimationTime*100;
    var bounceSecondStep = bounceFirstStep*2;

    var min = "",
        inputBounceDirectionN = "top";
    if(inputBounceDirection === "bottom"){
        inputBounceDirectionN = "top";
        min="-";
    } else if(inputBounceDirection === "right"){
        inputBounceDirectionN = "left";
        min="-";
    } else {
        inputBounceDirectionN = inputBounceDirection;
    }


    outputCSS='' +
        '@-webkit-keyframes bounceAnimation{\n' +
        '0%,100%{margin:0;}\n' +
        bounceFirstStep+'%{margin-'+inputBounceDirectionN+':'+min+inputBounceWidth+';}\n' +
        bounceSecondStep+'%{margin:0;}\n' +
        '}\n' +

        '@-moz-keyframes bounceAnimation{\n' +
        '0%,100%{margin:0;}\n' +
        bounceFirstStep+'%{margin-'+inputBounceDirectionN+':'+min+inputBounceWidth+';}\n' +
        bounceSecondStep+'%{margin:0;}\n' +
        '}\n' +

        '@-o-keyframes bounceAnimation{\n' +
        '0%,100%{margin:0;}\n' +
        bounceFirstStep+'%{margin-'+inputBounceDirectionN+':'+min+inputBounceWidth+';}\n' +
        bounceSecondStep+'%{margin:0;}\n' +
        '}\n' +

        '@keyframes bounceAnimation{\n' +
        '0%,100%{margin:0;}\n' +
        bounceFirstStep+'%{margin-'+inputBounceDirectionN+':'+min+inputBounceWidth+';}\n' +
        bounceSecondStep+'%{margin:0;}\n' +
        '}\n' +

        '.animation{\n' +
        '-webkit-animation:bounceAnimation '+(inputAnimationTime/1000)+'s '+timingFunction+' '+(delayInMs/1000)+'s '+iterationCountText+' normal ;\n'+
        '-moz-animation:bounceAnimation '+(inputAnimationTime/1000)+'s '+timingFunction+' '+(delayInMs/1000)+'s '+iterationCountText+' normal ;\n'+
        '-o-animation:bounceAnimation '+(inputAnimationTime/1000)+'s '+timingFunction+' '+(delayInMs/1000)+'s '+iterationCountText+' normal ;\n'+
        'animation:bounceAnimation '+(inputAnimationTime/1000)+'s '+timingFunction+' '+(delayInMs/1000)+'s '+iterationCountText+' normal ;\n'+
        '}\n' +
        '/*BounceGenerator123 - (https://github.com/LBeckX/BounceGenerator123)*/';

    outputHtml='<div id="BOUNCE_ELEMENT ELEMENT" class="animation ELEMENT" style="width:'+inputWidth+';height:'+inputHeight+';background-color:'+inputBackgroundColor+';"></div>';

    document.getElementsByTagName('style')[0].innerHTML = outputCSS;

    boxElement.innerHTML = outputHtml;
    outputTextAreaCSS.innerHTML = outputCSS;
    outputTextAreaHTML.innerHTML = outputHtml;

    textareaHeight(outputTextAreaCSS);
    textareaHeight(outputTextAreaHTML);

}

function copyToClipboard() {
    this.focus();
    this.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        var textMSG = 'Copying to clipboard was ' + msg;
        addRemoveClass(outputTextMSG,"open",2000);
        outputTextMSG.innerText = textMSG;
    } catch (err) {
        outputTextMSG.innerText = 'Unable to copy';
    }
}

function textareaHeight(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

function restartAnimation() {
    removeClass(animationElement,"animation");
    setTimeout(function () {
        addClass(animationElement,"animation");
    },200);
}

function startStopAnimation() {
    if(hasClass(animationElement,'animation')){
        removeClass(animationElement,'animation');
    }
    else {
        addClass(animationElement,'animation');
    }
}

function openCloseInfoBox() {
    if(hasClass(elementInfoBox,"open")){
        removeClass(elementInfoBox,"open");
    }
    else {
        addClass(elementInfoBox,"open");
    }
}

function closeInfoBox() {
    if(hasClass(elementInfoBox,"open")){
        removeClass(elementInfoBox,"open");
    }
}

function hasClass(element,className) {
    if (element.classList.contains(className)) {
        return true;
    }
}

function removeClass(element,className) {
    element.className = element.className.replace(className,'');
    element.className = element.className.replace(" "+className,'');
}

function addClass(element,className) {
    removeClass(element,className);
    className = ' '+className;
    element.className = element.className + className;
}

function addRemoveClass(element,className,timeInMs) {
    addClass(element,className);
    setTimeout(function () {
        removeClass(element,className);
    },timeInMs)
}
