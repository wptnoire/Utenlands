// Open/Close Menu
function showmenu() {
    var x = document.getElementById('navoverlay');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";  x.style.transform = "scale(1)";
    }
  }

  // Logochange
function logochange() {
  var page1 = document.getElementById('navoverlay');
  var page2 = document.getElementById('titlelogo');
  var logosmall = document.getElementById('logosmall')
  var page3 = document.getElementById('titlelogowhite')
  if (page1.style.display == "block") {
    page2.style.opacity = "0"; page3.style.opacity ="0"; logosmall.style.opacity ="1";
  } else {
    page2.style.opacity = "1"; page3.style.opacity ="1"; logosmall.style.opacity ="0";
  }
}

// Icon1 hover
var icon = document.getElementById("icon1");
var missiontextone = document.getElementById("sustainability");
icon1.addEventListener("mouseover", mouseOver);
icon1.addEventListener("mouseout", mouseOut);
function mouseOver() {
  if (missiontextone.style.opacity == "0") {
      missiontextone.style.opacity = "1";
    } else {
      missiontextone.style.opacity = "1"
    }
  }
  function mouseOut() {
    if (missiontextone.style.opacity == "1") {
      missiontextone.style.opacity = "0";
     } else {
        missiontextone.style.opacity = "0"
    } 
  }

  document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));

/*
  // Icon2 hover
var icon2 = document.getElementById("icon2");
var missiontextwo = document.getElementById("recycling");
icon2.addEventListener("mouseover", mouseOver2);
icon2.addEventListener("mouseout", mouseOut2);
function mouseOver2() {
  if (missiontextwo.style.opacity == "0") {
      missiontextwo.style.opacity = "1";
    } else {
      missiontextwo.style.opacity = "1"
    }
  }
  function mouseOut2() {
    if (missiontextwo.style.opacity == "1") {
      missiontextwo.style.opacity = "0";
     } else {
        missiontextwo.style.opacity = "0"
    } 
  }
  */