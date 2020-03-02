var caso = 0;
var vezX = true;
var buttonDisable = false;

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function mole() {
    document.getElementById("options").style.display = "none";
    document.getElementById('molee').style.display = "block";
    document.getElementById('audioMole').play();
    document.getElementById('audioMole').volume = 0.1;
}

function undoMole() {
    document.getElementById("options").style.display = "block";
    document.getElementById('molee').style.display = "none";
    document.getElementById('audioMole').pause();
    document.getElementById('audioMole').currentTime = 0.0;
}

function impossivel() {
    limparBoxes();
    vezX = true;
    document.getElementById("options").style.display = "none";
    document.getElementById('impossivell').style.display = "block";
    document.getElementById('audioImpossivel').play();
    document.getElementById('audioImpossivel').volume = 0.1;
}

function derrota() {
    caso = 0;
    buttonDisable = true;
    document.getElementById('audioImpossivel').pause();
    document.getElementById('audioImpossivel').currentTime = 0.0;
    document.getElementById("fight").style.display = "none";
    document.getElementById("imgImpossivel").style.display = "none";
    document.getElementById('audioDerrota').play();
    document.getElementById('audioDerrota').volume = 0.1;
    document.getElementById('derrota').style.display = "block";
}

function empate() {
    caso = 0;
    buttonDisable = true;
    document.getElementById('audioImpossivel').pause();
    document.getElementById('audioImpossivel').currentTime = 0.0;
    document.getElementById("fight").style.display = "none";
    document.getElementById("imgImpossivel").style.display = "none";
    document.getElementById('empate').style.display = "block";
    document.getElementById('videoempate').play();
    document.getElementById('videoempate').volume = 0.1;
}

function mainMenu() {
    changeToNormalCase();
    document.getElementById('audioDerrota').pause();
    document.getElementById('audioDerrota').currentTime = 0.0;
    document.getElementById('derrota').style.display = "none";
    document.getElementById("fight").style.display = "block";
    document.getElementById("imgImpossivel").style.display = "block";
    document.getElementById('impossivell').style.display = "none";
    document.getElementById("options").style.display = "block";
    document.getElementById('empate').style.display = "none";
    document.getElementById('videoempate').pause();
    document.getElementById('videoempate').currentTime = 0.0;
}

function limparBoxes() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box${i}x`).style.display = "none";
        document.getElementById(`box${i}o`).style.display = "none";
    }
    buttonDisable = false;
}

function marcarbox(boxX, boxO) {

    if (boxX.style.display == "none" && boxO.style.display == "none" && !(buttonDisable) && vezX) {
        boxX.style.display = "block"
        vezX = false;
    }
    if (!(buttonDisable)) {
        jogoVeia(boxX);
    }
}

function changeToNormalCase() {
    limparBoxes();
    caso = 0;
    document.getElementById('box1').style.marginTop = "0px";
    document.getElementById('box1').style.marginLeft = "0px";

    document.getElementById('box2').style.marginTop = "0px";
    document.getElementById('box2').style.marginLeft = "104px";

    document.getElementById('box3').style.marginTop = "0px";
    document.getElementById('box3').style.marginLeft = "204px";

    document.getElementById('box4').style.marginTop = "104px";
    document.getElementById('box4').style.marginLeft = "0px";

    document.getElementById('box5').style.marginTop = "104px";
    document.getElementById('box5').style.marginLeft = "104px";

    document.getElementById('box6').style.marginTop = "104px";
    document.getElementById('box6').style.marginLeft = "204px";

    document.getElementById('box7').style.marginTop = "204px";
    document.getElementById('box7').style.marginLeft = "0px";

    document.getElementById('box8').style.marginTop = "204px";
    document.getElementById('box8').style.marginLeft = "104px";

    document.getElementById('box9').style.marginTop = "204px";
    document.getElementById('box9').style.marginLeft = "204px";
}

function changeCase3to1() {
    limparBoxes();
    caso = 0;
    document.getElementById('box1').style.marginLeft = "204px";
    document.getElementById('box3').style.marginLeft = "0px";
    document.getElementById('box4').style.marginLeft = "204px";
    document.getElementById('box6').style.marginLeft = "0px";
    document.getElementById('box7').style.marginLeft = "204px";
    document.getElementById('box9').style.marginLeft = "0px";
}

function changeCase7to1() {
    limparBoxes();
    caso = 0;
    document.getElementById('box1').style.marginTop = "204px";
    document.getElementById('box7').style.marginTop = "0px";
    document.getElementById('box2').style.marginTop = "204px";
    document.getElementById('box8').style.marginTop = "0px";
    document.getElementById('box3').style.marginTop = "204px";
    document.getElementById('box9').style.marginTop = "0px";
}

function changeCase9to1() {
    limparBoxes();
    caso = 0;
    document.getElementById('box1').style.marginTop = "204px";
    document.getElementById('box1').style.marginLeft = "204px";
    document.getElementById('box9').style.marginTop = "0px";
    document.getElementById('box9').style.marginLeft = "0px";

    document.getElementById('box2').style.marginTop = "104px";
    document.getElementById('box2').style.marginLeft = "204px";
    document.getElementById('box6').style.marginTop = "0px";
    document.getElementById('box6').style.marginLeft = "104px";

    document.getElementById('box4').style.marginTop = "204px";
    document.getElementById('box4').style.marginLeft = "104px";
    document.getElementById('box8').style.marginTop = "104px";
    document.getElementById('box8').style.marginLeft = "0px";
}

function changeCase4to2() {

    limparBoxes();
    caso = 0;
    document.getElementById('box3').style.marginTop = "204px";
    document.getElementById('box3').style.marginLeft = "0px";
    document.getElementById('box7').style.marginTop = "0px";
    document.getElementById('box7').style.marginLeft = "204px";

    document.getElementById('box2').style.marginTop = "104px";
    document.getElementById('box2').style.marginLeft = "0px";
    document.getElementById('box4').style.marginTop = "0px";
    document.getElementById('box4').style.marginLeft = "104px";

    document.getElementById('box6').style.marginTop = "204px";
    document.getElementById('box6').style.marginLeft = "104px";
    document.getElementById('box8').style.marginTop = "104px";
    document.getElementById('box8').style.marginLeft = "204px";

}

function jogoVeia(box) {

    if (caso == 0 && box == box3x) {
        box = box1x;
        changeCase3to1();
        box1x.style.display = "block";
    }

    if (caso == 0 && box == box7x) {
        box = box1x;
        changeCase7to1();
        box1x.style.display = "block";
    }

    if (caso == 0 && box == box9x) {
        box = box1x;
        changeCase9to1();
        box1x.style.display = "block";
    }

    if (caso == 0 && box == box4x) {
        box = box2x;
        changeCase4to2();
        box2x.style.display = "block";
    }

    if (caso == 0 && box == box6x) {
        box = box2x;
        changeCase9to1();
        box2x.style.display = "block";
    }

    if (caso == 0 && box == box8x) {
        box = box2x;
        changeCase7to1();
        box2x.style.display = "block";
    }

    {//caso 1
        if (caso == 0 && box == box1x) {
            caso = 1;
            box5o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box2x) {
            caso = 12;
            box3o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box3x) {
            caso = 13;
            box2o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box4x) {
            caso = 14;
            box7o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box6x) {
            caso = 16;
            box9o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box7x) {
            caso = 17;
            box4o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box8x) {
            caso = 18;
            box9o.style.display = "block";
            vezX = true;
        }
        if (caso == 1 && box == box9x) {
            caso = 19;
            box2o.style.display = "block";
            vezX = true;
        }

        {//caso 12
            if (caso == 12 && box == box7x) {
                caso = 127;
                box4o.style.display = "block";
                vezX = true;
            }

            if (caso == 12 && (box == box4x || box == box6x || box == box8x || box == box9x)) {
                box7o.style.display = "block";
                derrota();
            }
        }

        {//caso 13
            if (caso == 13 && box == box8x) {
                caso = 138;
                box4o.style.display = "block";
                vezX = true;
            }

            if (caso == 13 && (box == box4x || box == box6x || box == box7x || box == box9x)) {
                box8o.style.display = "block";
                derrota();
            }
        }

        {//caso 14
            if (caso == 14 && box == box3x) {
                caso = 143;
                box2o.style.display = "block";
                vezX = true;
            }

            if (caso == 14 && (box == box2x || box == box6x || box == box8x || box == box9x)) {
                box3o.style.display = "block";
                derrota();
            }
        }

        {//caso 16
            if (caso == 16 && box == box2x) {
                caso = 162;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 16 && box == box3x) {
                caso = 163;
                box2o.style.display = "block";
                vezX = true;
            }
            if (caso == 16 && box == box4x) {
                caso = 164;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 16 && box == box7x) {
                caso = 167;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 16 && box == box8x) {
                caso = 168;
                box2o.style.display = "block";
                vezX = true;
            }
        }

        {//caso 17
            if (caso == 17 && box == box6x) {
                caso = 176;
                box2o.style.display = "block";
                vezX = true;
            }

            if (caso == 17 && (box == box2x || box == box8x || box == box3x || box == box9x)) {
                box6o.style.display = "block";
                derrota();
            }
        }

        {//caso 18
            if (caso == 18 && box == box4x) {
                caso = 184;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 18 && box == box7x) {
                caso = 187;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 18 && box == box2x) {
                caso = 182;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 18 && box == box3x) {
                caso = 183;
                box2o.style.display = "block";
                vezX = true;
            }
            if (caso == 18 && box == box6x) {
                caso = 186;
                box4o.style.display = "block";
                vezX = true;
            }

        }

        {//caso 19
            if (caso == 19 && box == box8x) {
                caso = 198;
                box7o.style.display = "block";
                vezX = true;
            }

            if (caso == 19 && (box == box3x || box == box4x || box == box6x || box == box7x)) {
                box8o.style.display = "block";
                derrota();
            }
        }

        {//caso 127
            if (caso == 127 && box == box6x) {
                caso = 1276;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 127 && (box == box8x || box == box9x)) {
                box6o.style.display = "block";
                derrota();
            }
        }

        {//caso 138
            if (caso == 138 && box == box6x) {
                caso = 1386;
                box9o.style.display = "block";
                vezX = true;
            }

            if (caso == 138 && (box == box7x || box == box9x)) {
                box6o.style.display = "block";
                derrota();
            }
        }

        {//caso143
            if (caso == 143 && box == box8x) {
                caso = 1438;
                box6o.style.display = "block";
                vezX = true;
            }

            if (caso == 143 && (box == box6x || box == box9x)) {
                box8o.style.display = "block";
                derrota();
            }
        }

        {//caso 162
            if (caso == 162 && box == box7x) {
                caso = 1627;
                box4o.style.display = "block";
                vezX = true;
            }

            if (caso == 162 && (box == box4x || box == box8x)) {
                box7o.style.display = "block";
                derrota();
            }
        }

        {//caso 163
            if (caso == 163 && box == box8x) {
                caso = 1638;
                box4o.style.display = "block";
                vezX = true;
            }

            if (caso == 163 && (box == box4x || box == box7x)) {
                box8o.style.display = "block";
                derrota();
            }

        }

        {//caso 164
            if (caso == 164 && box == box2x) {
                box3o.style.display = "block";
                derrota();
            }
            if (caso == 164 && box == box3x) {
                box8o.style.display = "block";
                derrota();
            }
            if (caso == 164 && box == box8x) {
                box3o.style.display = "block";
                derrota();
            }
        }

        {//caso 167
            if (caso == 167 && box == box2x) {
                caso = 1672;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 167 && box == box3x) {
                caso = 1673;
                box2o.style.display = "block";
                vezX = true;
            }
            if (caso == 167 && box == box8x) {
                caso = 1678;
                box2o.style.display = "block";
                vezX = true;
            }
        }

        {//caso 168
            if (caso == 168 && box == box3x) {
                caso = 1683;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 168 && box == box4x) {
                caso = 1684;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 168 && box == box7x) {
                caso = 1687;
                box4o.style.display = "block";
                vezX = true;
            }
        }

        {//caso 176
            if (caso == 176 && box == box8x) {
                caso = 1768;
                box9o.style.display = "block";
                vezX = true;
            }

            if (caso == 176 && (box == box3x || box == box9x)) {
                box8o.style.display = "block";
                derrota();
            }
        }

        {//caso 184
            if (caso == 184 && box == box3x) {
                caso = 1843;
                box2o.style.display = "block";
                vezX = true;
            }

            if (caso == 184 && (box == box2x || box == box6x)) {
                box3o.style.display = "block";
                derrota();
            }
        }

        {//caso 187
            if (caso == 187 && box == box6x) {
                caso = 1876;
                box2o.style.display = "block";
                vezX = true;
            }

            if (caso == 187 && (box == box2x || box == box3x)) {
                box6o.style.display = "block";
                derrota();
            }

        }

        {//caso 182
            if (caso == 182 && box == box4x) {
                box7o.style.display = "block";
                derrota();
            }
            if (caso == 182 && box == box7x) {
                box6o.style.display = "block";
                derrota();
            }
            if (caso == 182 && box == box6x) {
                box7o.style.display = "block";
                derrota();
            }
        }

        {//caso 183
            if (caso == 183 && box == box4x) {
                caso = 1834;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 183 && box == box7x) {
                caso = 1837;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 183 && box == box6x) {
                caso = 1836;
                box4o.style.display = "block";
                vezX = true;
            }
        }

        {//caso 186
            if (caso == 186 && box == box7x) {
                caso = 1867;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 186 && box == box2x) {
                caso = 1862;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 186 && box == box3x) {
                caso = 1863;
                box2o.style.display = "block";
                vezX = true;
            }
        }

        {//caso 198
            if (caso == 198 && box == box3x) {
                caso = 1983;
                box6o.style.display = "block";
                vezX = true;
            }

            if (caso == 198 && (box == box4x || box == box6x)) {
                box3o.style.display = "block";
                derrota();
            }
        }

        {//caso 1276
            if (caso == 1276 && box == box9x) {
                empate();
            }
        }

        {//caso 1386
            if (caso == 1386 && box == box7x) {
                empate();
            }
        }

        {//caso 1438
            if (caso == 1438 && box == box9x) {
                empate();
            }
        }

        {//caso 1627
            if (caso == 1627 && box == box8x) {
                empate();
            }
        }

        {//caso 1638
            if (caso == 1638 && box == box7x) {
                empate();
            }
        }

        {//caso 1672
            if (caso == 1672 && box == box8x) {
                empate();
            }
        }

        {//caso 1673
            if (caso == 1673 && box == box8x) {
                empate();
            }
        }

        {//caso 1678
            if (caso == 1678 && box == box3x) {
                empate();
            }
        }

        {//caso 1683
            if (caso == 1683 && box == box4x) {
                empate();
            }
        }

        {//caso 1684
            if (caso == 1684 && box == box3x) {
                empate();
            }
        }

        {//caso 1687
            if (caso == 1687 && box == box3x) {
                empate();
            }
        }

        {//caso 1768
            if (caso == 1768 && box == box3x) {
                empate();
            }
        }

        {//caso 1843
            if (caso == 1843 && box == box6x) {
                empate();
            }
        }

        {//caso 1876
            if (caso == 1876 && box == box3x) {
                empate();
            }
        }

        {//caso 1834
            if (caso == 1834 && box == box6x) {
                empate();
            }
        }

        {//caso 1837
            if (caso == 1837 && box == box6x) {
                empate();
            }
        }

        {//caso 1836
            if (caso == 1836 && box == box7x) {
                empate();
            }
        }

        {//caso 1867
            if (caso == 1867 && box == box2x) {
                empate();
            }
        }

        {//caso 1862
            if (caso == 1862 && box == box7x) {
                empate();
            }
        }

        {//caso 1863
            if (caso == 1863 && box == box7x) {
                empate();
            }
        }

        {//caso 1983
            if (caso == 1983 && box == box4x) {
                empate();
            }
        }

    }

    {//caso 2
        if (caso == 0 && box == box2x) {
            caso = 2;
            box5o.style.display = "block";
            vezX = true;
        }

        if (caso == 2 && box == box1x) {
            caso = 21;
            box3o.style.display = "block";
            vezX = true;
        }

        if (caso == 2 && box == box3x) {
            caso = 23;
            box1o.style.display = "block";
            vezX = true;
        }

        if (caso == 2 && box == box4x) {
            caso = 24;
            box3o.style.display = "block";
            vezX = true;
        }
        if (caso == 2 && box == box6x) {
            caso = 26;
            box1o.style.display = "block";
            vezX = true;
        }

        if (caso == 2 && box == box7x) {
            caso = 27;
            box3o.style.display = "block";
            vezX = true;
        }

        if (caso == 2 && box == box8x) {
            caso = 28;
            box4o.style.display = "block";
            vezX = true;
        }
        if (caso == 2 && box == box9x) {
            caso = 29;
            box3o.style.display = "block";
            vezX = true;
        }


        {//caso 21
            if (caso == 21 && box == box7x) {
                caso = 217;
                box4o.style.display = "block";
                vezX = true;
            }

            if (caso == 21 && (box == box4x || box == box6x || box == box8x || box == box9x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 217
            if (caso == 217 && box == box6x) {
                caso = 2176;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 217 && (box == box8x || box == box9x)) {
                box6o.style.display = "block";
                derrota();
            }
        }
        {//caso 2176
            if (caso == 2176 && box == box9x) {
                caso = 0;
                empate();
            }
        }

        {//caso 23
            if (caso == 23 && box == box9x) {
                caso = 239;
                box6o.style.display = "block";
                vezX = true;
            }

            if (caso == 23 && (box == box6x || box == box4x || box == box8x || box == box7x)) {
                caso = 0;
                box9o.style.display = "block";
                derrota();
            }
        }
        {//caso 239
            if (caso == 239 && box == box4x) {
                caso = 2394;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 239 && (box == box8x || box == box7x)) {
                box4o.style.display = "block";
                derrota();
            }
        }
        {//caso 2394
            if (caso == 2394 && box == box7x) {
                caso = 0;
                empate();
            }
        }

        {//caso 24
            if (caso == 24 && box == box7x) {
                caso = 247;
                box1o.style.display = "block";
                vezX = true;
            }

            if (caso == 24 && (box == box1x || box == box6x || box == box8x || box == box9x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 247
            if (caso == 247 && box == box9x) {
                caso = 2479;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 247 && (box == box6x || box == box8x)) {
                box9o.style.display = "block";
                derrota();
            }
        }
        {//caso 2479
            if (caso == 2479 && box == box6x) {
                caso = 0;
                empate();
            }
        }

        {//caso 26
            if (caso == 26 && box == box9x) {
                caso = 269;
                box3o.style.display = "block";
                vezX = true;
            }

            if (caso == 26 && (box == box3x || box == box4x || box == box8x || box == box7x)) {
                box9o.style.display = "block";
                derrota();
            }
        }
        {//caso 269
            if (caso == 269 && box == box7x) {
                caso = 2697;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 269 && (box == box4x || box == box8x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 2697
            if (caso == 2697 && box == box4x) {
                caso = 0;
                empate();
            }
        }

        {//caso 27
            if (caso == 27 && box == box4x) {
                caso = 274;
                box1o.style.display = "block";
                vezX = true;
            }
            if (caso == 27 && box == box1x) {
                caso = 271;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 27 && box == box8x) {
                caso = 278;
                box9o.style.display = "block";
                vezX = true;
            }
            if (caso == 27 && box == box9x) {
                caso = 279;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 27 && box == box6x) {
                caso = 276;
                box4o.style.display = "block";
                vezX = true;
            }

        }
        {//caso 274
            if (caso == 274 && box == box9x) {
                caso = 2749;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 274 && (box == box8x || box == box6x)) {
                box9o.style.display = "block";
                derrota();
            }
        }
        {//caso 271
            if (caso == 271 && box == box6x) {
                caso = 2716;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 271 && (box == box8x || box == box9x)) {
                box6o.style.display = "block";
                derrota();
            }

        }
        {//caso 278
            if (caso == 278 && box == box4x) {
                box1o.style.display = "block";
                derrota();
            }
            if (caso == 278 && box == box1x) {
                box6o.style.display = "block";
                derrota();
            }
            if (caso == 278 && box == box6x) {
                box1o.style.display = "block";
                derrota();
            }
        }
        {//caso 279
            if (caso == 279 && box == box4x) {
                caso = 2794;
                box1o.style.display = "block";
                vezX = true;
            }
            if (caso == 279 && box == box1x) {
                caso = 2791;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 279 && box == box6x) {
                caso = 2796;
                box4o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 276
            if (caso == 276 && box == box1x) {
                caso = 2761;
                box9o.style.display = "block";
                vezX = true;
            }
            if (caso == 276 && box == box8x) {
                caso = 2768;
                box9o.style.display = "block";
                vezX = true;
            }
            if (caso == 276 && box == box9x) {
                caso = 2769;
                box8o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 2749
            if (caso == 2749 && box == box6x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2716
            if (caso == 2716 && box == box9x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2794
            if (caso == 2794 && box == box6x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2791
            if (caso == 2791 && box == box6x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2796
            if (caso == 2796 && box == box1x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2761
            if (caso == 2761 && box == box8x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2768
            if (caso == 2768 && box == box1x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2769
            if (caso == 2769 && box == box1x) {
                caso = 0;
                empate();
            }
        }

        {//caso 28
            if (caso == 28 && box == box6x) {
                caso = 286;
                box1o.style.display = "block";
                vezX = true;
            }

            if (caso == 28 && (box == box3x || box == box1x || box == box9x || box == box7x)) {
                box6o.style.display = "block";
                derrota();
            }
        }
        {//caso 286
            if (caso == 286 && box == box7x) {
                caso = 2867;
                box9o.style.display = "block";
                vezX = true;
            }

            if (caso == 286 && (box == box3x || box == box9x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 2867
            if (caso == 2867 && box == box3x) {
                caso = 0;
                empate();
            }
        }
        {//caso 29
            if (caso == 29 && box == box6x) {
                caso = 296;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 29 && box == box3x) {
                caso = 293;
                box6o.style.display = "block";
                vezX = true;
            }
            if (caso == 29 && box == box8x) {
                caso = 298;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 29 && box == box7x) {
                caso = 297;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 29 && box == box4x) {
                caso = 294;
                box6o.style.display = "block";
                vezX = true;
            }

        }
        {//caso 296
            if (caso == 296 && box == box7x) {
                caso = 2967;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 296 && (box == box8x || box == box4x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 293
            if (caso == 293 && box == box4x) {
                caso = 2934;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 293 && (box == box8x || box == box7x)) {
                box4o.style.display = "block";
                derrota();
            }

        }
        {//caso 298
            if (caso == 298 && box == box6x) {
                box3o.style.display = "block";
                derrota();
            }
            if (caso == 298 && box == box3x) {
                box4o.style.display = "block";
                derrota();
            }
            if (caso == 298 && box == box4x) {
                box3o.style.display = "block";
                derrota();
            }
        }
        {//caso 297
            if (caso == 297 && box == box6x) {
                caso = 2976;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 297 && box == box3x) {
                caso = 2973;
                box6o.style.display = "block";
                vezX = true;
            }
            if (caso == 297 && box == box4x) {
                caso = 2974;
                box6o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 294
            if (caso == 294 && box == box3x) {
                caso = 2943;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 294 && box == box8x) {
                caso = 2948;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 294 && box == box7x) {
                caso = 2947;
                box8o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 2967
            if (caso == 2967 && box == box4x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2934
            if (caso == 2934 && box == box7x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2976
            if (caso == 2976 && box == box4x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2973
            if (caso == 2973 && box == box4x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2974
            if (caso == 2974 && box == box3x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2943
            if (caso == 2943 && box == box8x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2948
            if (caso == 2948 && box == box3x) {
                caso = 0;
                empate();
            }
        }
        {//caso 2947
            if (caso == 2947 && box == box3x) {
                caso = 0;
                empate();
            }
        }
    }

    {//caso 5
        if (caso == 0 && box == box5x) {
            caso = 5;
            box1o.style.display = "block";
            vezX = true;
        }

        if (caso == 5 && box == box2x) {
            caso = 52;
            box8o.style.display = "block"
            vezX = true;
        }
        if (caso == 5 && box == box3x) {
            caso = 53;
            box7o.style.display = "block";
            vezX = true;
        }
        if (caso == 5 && box == box4x) {
            caso = 54;
            box6o.style.display = "block";
            vezX = true;
        }
        if (caso == 5 && box == box6x) {
            caso = 56;
            box4o.style.display = "block";
            vezX = true;
        }
        if (caso == 5 && box == box7x) {
            caso = 57;
            box3o.style.display = "block";
            vezX = true;
        }
        if (caso == 5 && box == box8x) {
            caso = 58;
            box2o.style.display = "block";
            vezX = true;
        }
        if (caso == 5 && box == box9x) {
            caso = 59;
            box7o.style.display = "block";
            vezX = true;
        }

        {//caso 52

            if (caso == 52 && box == box3x) {
                caso = 523;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 52 && box == box4x) {
                caso = 524;
                box6o.style.display = "block";
                vezX = true;
            }
            if (caso == 52 && box == box6x) {
                caso = 526;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 52 && box == box7x) {
                caso = 527;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 52 && box == box9x) {
                caso = 529;
                box6o.style.display = "block";
                vezX = true;
            }

        }
        {//caso 523
            if (caso == 523 && box == box4x) {
                box9o.style.display = "block";
                derrota();
            }

            if (caso == 523 && (box == box6x)) {
                box4o.style.display = "block";
                derrota();
            }

            if (caso == 523 && (box == box9x)) {
                box4o.style.display = "block";
                derrota();
            }
        }
        {//caso 524
            if (caso == 524 && box == box3x) {
                caso = 5243;
                box7o.style.display = "block";
                vezX = true;
            }

            if (caso == 524 && (box == box7x)) {
                caso = 5247;
                box3o.style.display = "block";
                vezX = true;
            }

            if (caso == 524 && (box == box9x)) {
                caso = 5249;
                box3o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 526
            if (caso == 526 && box == box7x) {
                caso = 5267;
                box3o.style.display = "block";
                vezX = true;
            }

            if (caso == 526 && (box == box3x || box == box9x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 527
            if (caso == 527 && box == box4x) {
                caso = 5274;
                box6o.style.display = "block";
                vezX = true;
            }

            if (caso == 527 && box == box6x) {
                caso = 5276;
                box4o.style.display = "block";
                vezX = true;
            }

            if (caso == 527 && box == box9x) {
                caso = 5279;
                box6o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 529
            if (caso == 529 && box == box3x) {
                caso = 5293;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 529 && box == box4x) {
                caso = 5294;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 529 && box == box7x) {
                caso = 5297;
                box3o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 5243
            if (caso == 5243 && box == box9x) {
                empate();
            }
        }
        {//caso 5247
            if (caso == 5247 && box == box9x) {
                empate();
            }
        }
        {//caso 5249
            if (caso == 5249 && box == box7x) {
                empate();
            }
        }
        {//caso 5267
            if (caso == 5267 && box == box9x) {
                empate();
            }
        }
        {//caso 5274
            if (caso == 5274 && box == box9x) {
                empate();
            }
        }
        {//caso 5276
            if (caso == 5276 && box == box9x) {
                empate();
            }
        }
        {//5279
            if (caso == 5279 && box == box4x) {
                empate();
            }
        }
        {//5293
            if (caso == 5293 && box == box4x) {
                empate();
            }
        }
        {//5294
            if (caso == 5294 && box == box3x) {
                empate();
            }
        }
        {//5297
            if (caso == 5297 && box == box4x) {
                empate();
            }
        }

        {//caso 53

            if (caso == 53 && box == box2x) {
                box4o.style.display = "block";
                derrota();
            }
            if (caso == 53 && box == box4x) {
                caso = 534;
                box6o.style.display = "block";
                vezX = true;
            }
            if (caso == 53 && box == box6x) {
                box4o.style.display = "block";
                derrota();
            }
            if (caso == 53 && box == box8x) {
                box4o.style.display = "block";
                derrota();
            }
            if (caso == 53 && box == box9x) {
                box4o.style.display = "block";
                derrota();
            }
        }
        {//caso 534
            if (caso == 534 && box == box2x) {
                caso = 5342;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 534 && box == box8x) {
                caso = 5348;
                box2o.style.display = "block";
                vezX = true;
            }
            if (caso == 534 && box == box9x) {
                caso = 5349;
                box8o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 5342
            if (caso == 5342 && box == box9x) {
                empate();
            }
        }
        {//caso 5348
            if (caso == 5348 && box == box9x) {
                empate();
            }
        }
        {//caso 5349
            if (caso == 5349 && box == box2x) {
                empate();
            }
        }

        {//caso 54

            if (caso == 54 && box == box7x) {
                caso = 547;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 54 && box == box2x) {
                caso = 542;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 54 && box == box8x) {
                caso = 548;
                box2o.style.display = "block";
                vezX = true;
            }
            if (caso == 54 && box == box3x) {
                caso = 543;
                box7o.style.display = "block";
                vezX = true;
            }
            if (caso == 54 && box == box9x) {
                caso = 549;
                box8o.style.display = "block";
                vezX = true;
            }

        }
        {//caso 547
            if (caso == 547 && box == box2x) {
                box9o.style.display = "block";
                derrota();
            }

            if (caso == 547 && (box == box8x)) {
                box2o.style.display = "block";
                derrota();
            }

            if (caso == 547 && (box == box9x)) {
                box2o.style.display = "block";
                derrota();
            }
        }
        {//caso 542
            if (caso == 542 && box == box7x) {
                caso = 5427;
                box3o.style.display = "block";
                vezX = true;
            }

            if (caso == 542 && (box == box3x)) {
                caso = 5423;
                box7o.style.display = "block";
                vezX = true;
            }

            if (caso == 542 && (box == box9x)) {
                caso = 5429;
                box7o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 548
            if (caso == 548 && box == box3x) {
                caso = 5483;
                box7o.style.display = "block";
                vezX = true;
            }

            if (caso == 548 && (box == box7x || box == box9x)) {
                box3o.style.display = "block";
                derrota();
            }
        }
        {//caso 543
            if (caso == 543 && box == box2x) {
                caso = 5432;
                box8o.style.display = "block";
                vezX = true;
            }

            if (caso == 543 && box == box8x) {
                caso = 5438;
                box2o.style.display = "block";
                vezX = true;
            }

            if (caso == 543 && box == box9x) {
                caso = 5439;
                box8o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 549
            if (caso == 549 && box == box7x) {
                caso = 5497;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 549 && box == box2x) {
                caso = 5492;
                box3o.style.display = "block";
                vezX = true;
            }
            if (caso == 549 && box == box3x) {
                caso = 5493;
                box7o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 5427
            if (caso == 5427 && box == box9x) {
                empate();
            }
        }
        {//caso 5423
            if (caso == 5423 && box == box9x) {
                empate();
            }
        }
        {//caso 5429
            if (caso == 5429 && box == box3x) {
                empate();
            }
        }
        {//caso 5483
            if (caso == 5483 && box == box9x) {
                empate();
            }
        }
        {//caso 5432
            if (caso == 5432 && box == box9x) {
                empate();
            }
        }
        {//caso 5438
            if (caso == 5438 && box == box9x) {
                empate();
            }
        }
        {//5439
            if (caso == 5439 && box == box2x) {
                empate();
            }
        }
        {//5497
            if (caso == 5497 && box == box2x) {
                empate();
            }
        }
        {//5492
            if (caso == 5492 && box == box7x) {
                empate();
            }
        }
        {//5493
            if (caso == 5493 && box == box2x) {
                empate();
            }
        }

        {//caso 56
            if (caso == 56 && box == box7x) {
                caso = 567;
                vezX = true;
                box3o.style.display = "block";
            }

            if (caso == 56 && (box == box2x || box == box3x || box == box8x || box == box9x)) {
                box7o.style.display = "block";
                derrota();
            }
        }
        {//caso 567
            if (caso == 567 && box == box2x) {
                caso = 5672;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 567 && (box == box8x || box == box9x)) {
                box2o.style.display = "block";
                derrota();
            }
        }
        {//caso 5672
            if (caso == 5672 && box == box9x) {
                empate();
            }
        }

        {//caso 57

            if (caso == 57 && box == box4x) {
                box2o.style.display = "block";
                derrota();
            }
            if (caso == 57 && box == box2x) {
                caso = 572;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 57 && box == box8x) {
                box2o.style.display = "block";
                derrota();
            }
            if (caso == 57 && box == box6x) {
                box2o.style.display = "block";
                derrota();
            }
            if (caso == 57 && box == box9x) {
                box2o.style.display = "block";
                derrota();
            }
        }
        {//caso 572
            if (caso == 572 && box == box4x) {
                caso = 5724;
                box6o.style.display = "block";
                vezX = true;
            }
            if (caso == 572 && box == box6x) {
                caso = 5726;
                box4o.style.display = "block";
                vezX = true;
            }
            if (caso == 572 && box == box9x) {
                caso = 5729;
                box6o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 5724
            if (caso == 5724 && box == box9x) {
                empate();
            }
        }
        {//caso 5726
            if (caso == 5726 && box == box9x) {
                empate();
            }
        }
        {//caso 5729
            if (caso == 5729 && box == box4x) {
                empate();
            }
        }

        {//caso 58
            if (caso == 58 && box == box3x) {
                caso = 583;
                box7o.style.display = "block";
                vezX = true;
            }

            if (caso == 58 && (box == box4x || box == box7x || box == box6x || box == box9x)) {
                box3o.style.display = "block";
                derrota();
            }
        }
        {//caso 583
            if (caso == 583 && box == box4x) {
                caso = 5834;
                box6o.style.display = "block";
                vezX = true;
            }
            if (caso == 583 && (box == box6x || box == box9x)) {
                box4o.style.display = "block";
                derrota();
            }
        }
        {//caso 5834
            if (caso == 5834 && box == box9x) {
                empate();
            }
        }

        {//caso 59
            if (caso == 59 && box == box4x) {
                caso = 594;
                box6o.style.display = "block";
                vezX = true;
            }

            if (caso == 59 && (box == box2x || box == box3x || box == box6x || box == box8x)) {
                box4o.style.display = "block";
                derrota();
            }
        }
        {//caso 594
            if (caso == 594 && box == box2x) {
                caso = 5942;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 594 && box == box3x) {
                caso = 5943;
                box8o.style.display = "block";
                vezX = true;
            }
            if (caso == 594 && box == box8x) {
                caso = 5948;
                box2o.style.display = "block";
                vezX = true;
            }
        }
        {//caso 5942
            if (caso == 5942 && box == box3x) {
                empate();
            }
        }
        {//caso 5943
            if (caso == 5943 && box == box2x) {
                empate();
            }
        }
        {//caso 5948
            if (caso == 5948 && box == box3x) {
                empate();
            }
        }
    }

    //fecho função jogoVeia
}
