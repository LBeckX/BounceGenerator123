<!DOCTYPE html>
<html lang="en">
<head>
    <title>BounceGenerator123 - webitfactory.com</title>
    <meta name="description" content="Create your own bounce-effect with keyframes in CSS3">
    <meta charset="utf-8">
    <meta name="author" content="Lukas Beck <lb(at)webitfactory.com>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="files/favicon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="files/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="files/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="files/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="files/favicon/favicon-16x16.png">
    <link rel="manifest" href="files/favicon/manifest.json">
    <link rel="mask-icon" href="files/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <meta name="robots" content="index,follow" />
    <meta name="language" content="en">
    <meta name="keywords" content="CSS,css,css3,keyframes,bounce,jump,spring,effect,en,de,github,lbeckx,javascript,html5,html">
    <meta property="og:title" content="BounceGenerator123 - webitfactory.com" />
    <meta property="og:url" content="http://bouncegenerator.webitfactory.com" />
    <meta property="og:image" content="/files/img/pro_bounceGen.jpg" />
    <meta property="og:description" content="Create your own bounce-effect with keyframes in CSS3" />
    <meta property="og:type"   content="website" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i" rel="stylesheet">
    <link rel="stylesheet" href="files/css/design.css">
    <script type="text/javascript" LANGUAGE="JavaScript">
        window.onbeforeunload = function() {
            return 'Are you sure you want to close this site?';
        };
    </script>
    <style></style>
</head>
<body>
<div id="LEFT" class="infoBoxClose">
    <div id="HEADER"><h1>BounceGenerator123</h1></div>
    <div id="BOX">
        <div id="BOUNCE_ELEMENT ELEMENT" class="animation"><noscript>Your browser does not support JavaScript! Please enable it.</noscript></div>
    </div>

    <div class="option_present">
        <button id="RESTART_OPTION">Restart</button>
        <button id="START_STOP_OPTION">Start / Stop</button>
    </div>
</div>

<div id="RIGHT" class="infoBoxClose">
    <form id="GENERATOR_FORM">

        <div class="inputInLine">
            <div class="form_input">
                <label for="INPUT_ELEMENT_WIDTH">Element width</label>
                <input type="text" name="inputWidth" id="INPUT_ELEMENT_WIDTH" placeholder="50%" minlength="1" maxlength="10">
            </div>
            <div class="form_input">
                <label for="INPUT_ELEMENT_HEIGHT">Element height</label>
                <input type="text" name="inputHeight" id="INPUT_ELEMENT_HEIGHT" placeholder="150px" minlength="1" maxlength="10">
            </div>
        </div>
        <div class="form_input">
            <label for="INPUT_ELEMENT_BACKGROUND_COLOR">Element background color</label>
            <input type="text" name="inputBackgroundColor" id="INPUT_ELEMENT_BACKGROUND_COLOR" placeholder="#000" minlength="4" maxlength="7">
        </div>

        <div class="form_input">
            <label for="INPUT_ANIMATION_TIME">Animation time in ms</label>
            <input type="text" name="inputAnimationTime" id="INPUT_ANIMATION_TIME" placeholder="2000" minlength="1" maxlength="10">
        </div>

        <div class="form_input">
            <label for="INPUT_BOUNCE_TIME">Bounce time in ms</label>
            <input type="text" name="inputBounceTime" id="INPUT_BOUNCE_TIME" placeholder="100" minlength="1" maxlength="10">
        </div>

        <div class="form_input">
            <label for="INPUT_BOUNCE_DIRECTION">Bounce direction</label>
            <select id="INPUT_BOUNCE_DIRECTION" name="inputBounceDirection" size="1">
                <option value="bottom">top</option>
                <option value="left">right</option>
                <option value="top">bottom</option>
                <option value="right">left</option>
            </select>
        </div>

        <div class="form_input">
            <label for="INPUT_BOUNCE_WIDTH">Bounce width</label>
            <input type="text" name="inputBounceWidth" id="INPUT_BOUNCE_WIDTH" placeholder="20px" minlength="2" maxlength="10">
        </div>

        <div class="form_input">
            <label for="INPUT_ITERATION_COUNT">Iteration count (type 0 for infinite)</label>
            <input type="text" name="iterationCount" id="INPUT_ITERATION_COUNT" placeholder="0" minlength="1" maxlength="6">
        </div>

        <div class="form_input">
            <label for="INPUT_TIMING">Timing function</label>
            <select id="INPUT_TIMING" name="timingFunction" size="1">
                <option value="linear">linear</option>
                <option value="ease">ease</option>
                <option value="ease-in">ease-in</option>
                <option value="ease-out">ease-out</option>
                <option value="ease-in-out">ease-in-out</option>
            </select>
        </div>

        <div class="form_input">
            <label for="INPUT_DELAY">Delay in ms</label>
            <input type="text" name="delayInMs" id="INPUT_DELAY" placeholder="500" minlength="1" maxlength="6">
        </div>

        <div class="form_output">
            <label for="OUTPUT_CSS_CODE">Output CSS Code</label>
            <textarea id="OUTPUT_CSS_CODE" readonly="readonly"></textarea>
        </div>
        <div class="form_output">
            <label for="OUTPUT_HTML_CODE">Output HTML Code</label>
            <textarea id="OUTPUT_HTML_CODE" readonly="readonly"></textarea>
        </div>
    </form>
</div>
<div id="OUTPUT_MSG"></div>
<button id="OPEN_INFO">Informations</button>
<div id="INFO_BOX">
    <div class="closeButton infoBoxClose">X</div>
    <div class="head">You can find me here:</div>
    <div class="mid">
        <div class="fb">
            <a target="_blank" href="//www.facebook.com/lukas.beck36"></a>
        </div>
        <div class="github">
            <a target="_blank" href="//github.com/LBeckX"></a>
        </div>
        <div class="homepage">
            <a target="_blank" href="//www.unitgreen.com"></a>
        </div>
        <div class="homepage2">
            <a target="_blank" href="//www.webitfactory.com"></a>
        </div>
    </div>
    <div class="footer">
        Contact: <a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#108;&#098;&#064;&#117;&#110;&#105;&#116;&#103;&#114;&#101;&#101;&#110;&#046;&#099;&#111;&#109;">lb(at)unitgreen.com</a>
        <br>
        <a href="//www.unitgreen.com/meta/impressum.php">Impressum / Datenschutz</a>
    </div>
</div>
</body>
<script src="files/js/generate.js" type="text/javascript"></script>
</html>