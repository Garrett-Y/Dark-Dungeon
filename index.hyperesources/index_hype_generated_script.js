//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"mask1\").style.top = \"-48px\";\n\tdocument.getElementById(\"mask1\").style.left = \"-848px\";\n\tif (window.difficulty == \"easy\") {\n\t\twindow.initialCountdownValue = 60;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t} else {\n\t\twindow.initialCountdownValue = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t}\n\t\n\tdocument.getElementById(\"counter\").innerHTML = window.initialCountdownValue;\n\tdocument.getElementById(\"thermometer\").style.width = \"790px\";\tdocument.getElementById(\"player\").style.top = \"576px\";\n\tdocument.getElementById(\"player\").style.left = \"32px\";\n\tdocument.getElementById(\"blueDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"hidden\";\n\twindow.playerMoveable = true;\n\t\n\twindow.grid = [\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0],\n\t\t[0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0],\n\t\t[0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0],\n\t\t[0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],\n\t\t[0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],\n\t\t[0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0],\n\t\t[0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\n\t];\n\t\n\twindow.grid[8][17] = 2; // BLUE KEY\n\twindow.grid[14][14] = 3; // BLUE DOOR\n\twindow.grid[2][6] = 4; // RED KEY\n\twindow.grid[7][21] = 5; // RED DOOR\n\twindow.grid[17][23] = 6; // GREEN KEY\n\twindow.grid[10][4] = 7; // GREEN DOOR\n\twindow.grid[1][26] = 8; // CHECKERED FLAG\n\t\t\n\twindow.countdownInterval = setInterval(decrementTimer, 100);\n\twindow.counterSegments = 10;\n\t\n\tfunction decrementTimer() {\n\t\tvar temp2 = parseFloat(document.getElementById(\"thermometer\").style.width);\n\t\tvar decrementAmount = 79/(window.initialCountdownValue);\n\t\tdocument.getElementById(\"thermometer\").style.width = (temp2 - decrementAmount) + \"px\";\n\t\twindow.counterSegments--;\n\t\tif (window.counterSegments == 0) {\n\t\t\twindow.counterSegments = 10;\n\t\t\tvar temp1 = parseInt(document.getElementById(\"counter\").innerHTML);\n\t\t\ttemp1 = temp1 - 1;\n\t\t\tdocument.getElementById(\"counter\").innerHTML = temp1;\n\t\t}\n\t\tif (temp1 == 0) {\n\t\t\tclearInterval(window.countdownInterval);\n\t\t\twindow.playerMoveable = false;\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU LOSE!\";\n\t\t\tdocument.getElementById(\"thermometer\").style.width = \"0px\";\n\t\t\thypeDocument.startTimelineNamed('playerLose');\n\t\t}\n\t}\n\t\t\n}",identifier:"37"},{name:"detectKeyDown",source:"function(hypeDocument, element, event) {\t\n\tif (window.playerMoveable == true) {\n\t\tvar topPosition = parseInt(document.getElementById('player').style.top);\n\t\tvar leftPosition = parseInt(document.getElementById('player').style.left);\n\t\tvar maskTopPosition = parseInt(document.getElementById('mask1').style.top);\n\t\tvar maskLeftPosition = parseInt(document.getElementById('mask1').style.left);\n\t\tvar playerTopGrid = topPosition/32;\n\t\tvar playerLeftGrid = leftPosition/32;\n\t\tvar keyPressed = event.key;\n\t\tvar keyCode = event.keyCode;\n\t\tif (keyCode == \"37\") \t\t{ playerLeftGrid = playerLeftGrid - 1; } // MOVE LEFT\n\t\telse if (keyCode == \"38\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"39\") { playerLeftGrid = playerLeftGrid + 1; } // MOVE RIGHT\n\t\telse if (keyCode == \"40\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\tvar string4 = \"grid[\" + playerTopGrid + \"][\" + playerLeftGrid + \"]\";\n\t\tvar string5 = eval(string4);\n\t\n\t\t// REMINDER:\t\twindow.grid[14][3] = 2; // BLUE KEY\n\t\t// REMINDER:\t\twindow.grid[12][11] = 3; // BLUE DOOR\n\t\t// REMINDER:\t\twindow.grid[18][19] = 4; // RED KEY\n\t\t// REMINDER:\t\twindow.grid[6][7] = 5; // RED DOOR\n\t\t// REMINDER:\t\twindow.grid[9][19] = 6; // GREEN KEY\n\t\t// REMINDER:\t\twindow.grid[11][21] = 7; // GREEN DOOR\n\t\n\t\tif (string5 == 1) { // OPEN PATH\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\thypeDocument.startTimelineNamed('footstep');\n\t\t} else if (string5 == 0) { // OBSTACLE\n\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t} else if (string5 == 2) { // BLUE KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"blueKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"visible\";\n\t\t\twindow.grid[14][3] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 4) { // RED KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"redKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"visible\";\n\t\t\twindow.grid[18][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 6) { // GREEN KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"greenKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"visible\";\n\t\t\twindow.grid[9][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 3) { // BLUE DOOR\n\t\t\tif (document.getElementById(\"blueKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"blueDoor\").style.visibility = \"hidden\";\n\t\t\t\twindow.grid[12][11] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 5) { // RED DOOR\n\t\t\tif (document.getElementById(\"redKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"redDoor\").style.visibility = \"hidden\";\n\t\t\t\twindow.grid[6][7] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 7) { // GREEN DOOR\n\t\t\tif (document.getElementById(\"greenKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"greenDoor\").style.visibility = \"hidden\";\n\t\t\t\twindow.grid[11][21] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 8) { // CHECKERED FLAG\n\t\t\twindow.playerMoveable = false;\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t\t\thypeDocument.startTimelineNamed('endMaze');\n\t\t\tclearInterval(window.countdownInterval);\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU WIN!\";\n\t\t\thypeDocument.startTimelineNamed('playerWin');\n\t\t}\n\t}\n\t\t\n}",identifier:"41"},{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\twindow.difficulty = \"easy\";\n\t} else {\n\t\twindow.difficulty = \"hard\";\n\t}\n\t\n\thypeDocument.startTimelineNamed('splashStart');\n\t\n}",identifier:"83"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"-2":{n:"blank.gif"},"18":{p:2,n:"playerLose.mp3",g:"76",t:"audio/mpeg"},"10":{p:1,n:"redKey.gif",g:"14",t:"@1x"},"19":{p:2,n:"badBeep.mp3",g:"44",t:"audio/mpeg"},"11":{p:1,n:"greenDoor.gif",g:"122",t:"@1x"},"0":{p:2,n:"footstep.mp3",g:"48",t:"audio/mpeg"},"12":{p:1,n:"blueDoor.png",g:"123",t:"@1x"},"1":{p:2,n:"pickup.mp3",g:"49",t:"audio/mpeg"},"20":{p:2,n:"creditRoll.mp3",g:"117",t:"audio/mpeg"},"2":{p:2,n:"playerWin.mp3",g:"71",t:"audio/mpeg"},"13":{p:1,n:"redDoor.gif",g:"124",t:"@1x"},"3":{p:2,n:"pickup-1.mp3",g:"91",t:"audio/mpeg"},"14":{p:1,n:"greenKey.gif",g:"23",t:"@1x"},"4":{p:2,n:"charge.mp3",g:"92",t:"audio/mpeg"},"5":{p:1,n:"mask1.png",g:"119",t:"@1x"},"15":{p:1,n:"13004399515_f611e45b95_b.jpg",g:"125",t:"@1x"},"6":{p:1,n:"blueKey.gif",g:"11",t:"@1x"},"16":{p:2,n:"endMaze.mp3",g:"47",t:"audio/mpeg"},"7":{p:1,n:"checkeredFlag.gif",g:"42",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"map1.png",g:"7",t:"@1x"},"17":{p:2,n:"doorOpen.mp3",g:"46",t:"audio/mpeg"},"9":{p:1,n:"player.gif",g:"25",t:"@1x"}},h,[],d,[{n:"splash",o:"77",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"93",X:[2]}],[{o:"79",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#6A0037",bY:1,d:1024,U:{},T:{"84_hover":{i:"84_hover",n:"84_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"A",e:"#F2C200",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"G",e:"#EBE800",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"C",e:"#F2C200",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"B",e:"#F2C200",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"D",e:"#F2C200",s:"#FF0000",o:"143"},{y:1,i:"A",s:"#F2C200",z:0,o:"143",f:"c"},{y:1,i:"G",s:"#EBE800",z:0,o:"143",f:"c"},{y:1,i:"C",s:"#F2C200",z:0,o:"143",f:"c"},{y:1,i:"B",s:"#F2C200",z:0,o:"143",f:"c"},{y:1,i:"D",s:"#F2C200",z:0,o:"143",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:6,b:[],a:[{f:"c",y:0,z:0.15,i:"bA",e:"#EED800",s:"#FF2700",o:"147"},{f:"c",y:0.15,z:0.15,i:"bA",e:"#FF0000",s:"#EED800",o:"147"},{f:"c",y:1,z:1,i:"bA",e:"#EBE600",s:"#FF0000",o:"147"},{f:"c",y:2,z:1,i:"bA",e:"#FF0000",s:"#EBE600",o:"147"},{f:"c",y:3,z:1,i:"bA",e:"#EEDA00",s:"#FF0000",o:"147"},{f:"c",y:4,z:1,i:"bA",e:"#FF0000",s:"#EEDA00",o:"147"},{f:"c",y:5,z:1,i:"bA",e:"#F0D000",s:"#FF0000",o:"147"},{f:"c",p:2,y:6,z:0,i:"ActionHandler",s:{a:[{}]},o:"kTimelineDefaultIdentifier"},{y:6,i:"bA",s:"#F0D000",z:0,o:"147",f:"c"}],f:30},"90":{i:"90",n:"splashStart",z:4,b:[],a:[{f:"c",y:0,z:0.01,i:"e",e:0,s:1,o:"141"},{f:"c",y:0,z:0.05,i:"a",e:302,s:-420,o:"145"},{y:0.01,i:"e",s:0,z:0,o:"141",f:"c"},{f:"c",p:2,y:0.05,z:0.3,i:"ActionHandler",e:{a:[{p:12,o:"49",q:false}]},s:{a:[{p:12,o:"91",q:false}]},o:"90"},{f:"c",y:0.05,z:0.2,i:"a",e:302,s:302,o:"145"},{f:"c",y:0.25,z:0.05,i:"a",e:1024,s:302,o:"145"},{f:"c",y:1,z:0.05,i:"a",e:302,s:-420,o:"140"},{y:1,i:"a",s:1024,z:0,o:"145",f:"c"},{f:"c",p:2,y:1.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"49",q:false}]},s:{a:[{p:12,o:"49",q:false}]},o:"90"},{f:"c",y:1.05,z:0.2,i:"a",e:302,s:302,o:"140"},{f:"c",y:1.25,z:0.05,i:"a",e:1024,s:302,o:"140"},{f:"c",y:2,z:0.05,i:"a",e:302,s:-420,o:"148"},{y:2,i:"a",s:1024,z:0,o:"140",f:"c"},{f:"c",p:2,y:2.05,z:1,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:12,o:"49",q:false}]},o:"90"},{f:"c",y:2.05,z:0.2,i:"a",e:302,s:302,o:"148"},{f:"c",y:2.25,z:0.05,i:"a",e:1024,s:302,o:"148"},{f:"c",y:3,z:0.05,i:"a",e:302,s:-420,o:"142"},{y:3,i:"a",s:1024,z:0,o:"148",f:"c"},{f:"c",p:2,y:3.05,z:0.25,i:"ActionHandler",e:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},s:{a:[{p:12,o:"49",q:false}]},o:"90"},{f:"c",y:3.05,z:0.2,i:"a",e:302,s:302,o:"142"},{f:"c",y:3.25,z:0.05,i:"a",e:1024,s:302,o:"142"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},o:"90"},{y:4,i:"a",s:1024,z:0,o:"142",f:"c"}],f:30},"82_hover":{i:"82_hover",n:"82_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#F4B400",s:"#FF0000",o:"144"},{f:"c",y:0,z:1,i:"B",e:"#F3BE00",s:"#FF0000",o:"144"},{f:"c",y:0,z:1,i:"C",e:"#F3BE00",s:"#FF0000",o:"144"},{f:"c",y:0,z:1,i:"D",e:"#F3BE00",s:"#FF0000",o:"144"},{f:"c",y:0,z:1,i:"A",e:"#F3BE00",s:"#FF0000",o:"144"},{y:1,i:"G",s:"#F4B400",z:0,o:"144",f:"c"},{y:1,i:"B",s:"#F3BE00",z:0,o:"144",f:"c"},{y:1,i:"C",s:"#F3BE00",z:0,o:"144",f:"c"},{y:1,i:"D",s:"#F3BE00",z:0,o:"144",f:"c"},{y:1,i:"A",s:"#F3BE00",z:0,o:"144",f:"c"}],f:30}},bZ:180,O:["146","147","142","148","140","145","141","144","143"],n:"Untitled Layout","_":0,v:{"148":{G:"#000000",bB:6,aU:8,c:404,d:354,bC:6,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:288,Z:"break-word",i:"title5",w:"1",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:8,aS:8,aT:8,a:-420,bA:"#FF2600",F:"center",b:220},"141":{G:"#000000",bB:1,aU:8,c:1008,d:254,bC:1,aV:8,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",r:"inline",t:48,Z:"break-word",i:"title2",w:"Use Arrow Keys To Move<br>\nGrab \"Keys\" To Open Doors<br>\nComplete The Dungeon Before<br>\nThe Timer Gets To Zero",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,bA:"#FF2600",F:"center",b:280},"144":{b:600,z:4,K:"Solid",c:142,L:"Solid",d:57,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000000",aU:6,P:8,i:"easyButton",aV:6,j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FF0000",B:"#FF0000",aM:"82_hover",Z:"break-word",C:"#FF0000",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FF0000",t:48,aA:{a:[{p:4,h:"83"}]},F:"center",G:"#FF0000",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:200,y:"preserve",J:"Solid"},"147":{G:"#000000",bB:4,aU:8,c:1008,d:184,bC:4,aV:8,r:"inline",s:"Papyrus,fantasy",t:135,Z:"break-word",i:"title1",w:"Dark Dungeon",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#FF2700",F:"center",b:50},"140":{G:"#000000",bB:6,aU:8,c:404,d:354,bC:6,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:288,Z:"break-word",i:"title4",w:"2",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:7,aS:8,aT:8,a:-420,bA:"#FF2600",F:"center",b:220},"143":{b:600,z:5,K:"Solid",c:142,L:"Solid",d:57,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000000",aU:6,P:8,i:"hardButton",aV:6,j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FF0000",B:"#FF0000",aM:"84_hover",Z:"break-word",C:"#FF0000",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FF0000",t:48,aA:{a:[{p:4,h:"83"}]},F:"center",G:"#FF0000",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:654,y:"preserve",J:"Solid"},"146":{bI:0.75039558410644536,h:"125",w:"",x:"visible",a:0,bJ:0.65249208860759489,b:-19,q:"100% 100%",dB:"img",z:1,j:"absolute",k:"div",d:806,p:"no-repeat",c:1033,bL:7.613726265822784,r:"inline"},"142":{G:"#FF0000",bB:6,aU:8,c:404,d:354,bC:6,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:288,Z:"break-word",i:"title6",w:"GO!",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:9,aS:8,aT:8,a:-420,bA:"#000000",F:"center",b:220},"145":{G:"#000000",bB:6,aU:8,c:404,d:354,bC:6,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:288,Z:"break-word",i:"title3",w:"3",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:6,aS:8,aT:8,a:-420,bA:"#FF2600",F:"center",b:220}}},{A:{a:[{p:4,h:"37"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,C:{a:[{p:4,h:"41"}]},c:"#45323E",L:[],bY:1,d:1024,U:{},T:{"70":{i:"70",n:"playerWin",z:6.15,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"47",q:false}]},o:"70"},{f:"d",y:0,z:1.15,i:"b",e:32,s:-576,o:"149"},{f:"c",y:0,z:1.15,i:"e",e:0,s:0,o:"152"},{y:1.15,i:"b",s:32,z:0,o:"149",f:"c"},{f:"c",y:1.15,z:2.15,i:"e",e:1,s:0,o:"152"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"153"},{y:4,i:"e",s:1,z:0,o:"152",f:"c"},{y:4.15,i:"e",s:1,z:0,o:"153",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"150"},{y:6.15,i:"e",s:1,z:0,o:"150",f:"c"}],f:30},"75":{i:"75",n:"playerLose",z:6.15,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"76",q:false}]},o:"75"},{f:"f",y:0,z:1.15,i:"b",e:32,s:-576,o:"149"},{y:1.15,i:"b",s:32,z:0,o:"149",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"153"},{y:4.15,i:"e",s:1,z:0,o:"153",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"150"},{y:6.15,i:"e",s:1,z:0,o:"150",f:"c"}],f:30},"55":{i:"55",n:"doorOpen",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"46",q:false}]},o:"55"}],f:30},"62_hover":{i:"62_hover",n:"62_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000000",o:"150"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000000",o:"150"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000000",o:"150"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000000",o:"150"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000000",o:"150"},{y:1,i:"A",s:"#FF2600",z:0,o:"150",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"150",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"150",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"150",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"150",f:"c"}],f:30},"58":{i:"58",n:"pickup",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"49",q:false}]},o:"58"}],f:30},"56":{i:"56",n:"endMaze",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"47",q:false}]},o:"56"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"92",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30},"54":{i:"54",n:"badBeep",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"44",q:false}]},o:"54"}],f:30},"61_hover":{i:"61_hover",n:"61_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000000",o:"153"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000000",o:"153"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000000",o:"153"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000000",o:"153"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000000",o:"153"},{y:1,i:"G",s:"#FF2600",z:0,o:"153",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"153",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"153",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"153",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"153",f:"c"}],f:30},"57":{i:"57",n:"footstep",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"48",q:false}]},o:"57"}],f:30}},bZ:180,O:["151","149","152","153","150","166","165","156","174","171","163","158","170","161","157","173","159","167","169","160","162","175","164","176","172","154","155","168"],n:"Untitled Layout","_":1,v:{"173":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"124",M:0,i:"redDoor",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:7,P:0,D:"#D8DDE4",a:672,b:220},"165":{k:"div",x:"hidden",c:896,d:640,z:23,i:"maskBox",r:"inline",a:0,j:"absolute",b:0},"157":{h:"11",p:"no-repeat",x:"visible",i:"blueKeyDisplay",q:"100% 100%",b:168,a:912,j:"absolute",z:18,k:"div",dB:"img",d:32,c:64,r:"inline"},"149":{k:"div",x:"visible",c:832,d:576,z:25,i:"gameOverBox",a:32,j:"absolute",b:-576},"161":{p:"no-repeat",c:80,q:"100% 100%",d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border1",N:10,A:"#80012F",x:"visible",j:"absolute",B:"#80012F",k:"div",O:10,C:"#80012F",z:12,P:10,D:"#80012F",a:894,b:150},"153":{b:376,z:3,K:"Solid",c:218,L:"Solid",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#FFFFFF",aU:6,P:10,bF:"149",i:"playAgainButton",aV:6,j:"absolute",aI:25,k:"div",aJ:25,aK:25,aL:25,A:"#000000",B:"#000000",aM:"61_hover",Z:"break-word",C:"#000000",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#000000",t:36,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"77"}]},F:"center",G:"#000000",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:118,y:"preserve",J:"Solid"},"174":{h:"7",p:"no-repeat",x:"visible",i:"map1",q:"100% 100%",b:0,a:0,j:"absolute",z:3,k:"div",dB:"img",d:640,c:896,r:"inline"},"166":{p:"no-repeat",bJ:0.34117879746835439,c:1792,q:"100% 100%",bK:10.588607788085939,d:1280,r:"inline",e:0.80000000000000004,bL:5,h:"119",v:"bold",i:"mask1",w:"",bF:"165",j:"absolute",x:"visible",k:"div",dB:"img",z:1,a:0,b:0},"158":{G:"#FFFFFF",aU:8,c:144,aV:8,d:32,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:24,Z:"break-word",i:"inventoryTitle",w:"INVENTORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:11,aS:8,aT:8,a:864,F:"center",b:32},"170":{h:"14",p:"no-repeat",x:"visible",i:"redKey",q:"100% 100%",b:72,a:191,j:"absolute",z:6,k:"div",dB:"img",d:16,c:32,r:"inline"},"162":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"123",M:0,i:"blueDoor",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:5,P:0,D:"#D8DDE4",a:448,b:448},"154":{p:"no-repeat",c:780,q:"100% 100%",d:80,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border4",N:10,A:"#80002F",x:"visible",j:"absolute",B:"#80002F",k:"div",O:10,C:"#80002F",z:16,P:10,D:"#80002F",a:48,b:640},"175":{p:"no-repeat",c:80,q:"100% 100%",d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border3",N:10,A:"#80012F",x:"visible",j:"absolute",B:"#80012F",k:"div",O:10,C:"#80012F",z:14,P:10,D:"#80012F",a:896,b:450},"167":{p:"no-repeat",c:80,q:"100% 100%",d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border2",N:10,A:"#80012F",x:"visible",j:"absolute",B:"#80012F",k:"div",O:10,C:"#80012F",z:13,P:10,D:"#80012F",a:896,b:300},"159":{h:"11",p:"no-repeat",x:"visible",i:"blueKey",q:"100% 100%",b:265,a:543,j:"absolute",z:4,k:"div",dB:"img",d:16,c:32,r:"inline"},"150":{b:376,z:4,K:"Solid",c:218,L:"Solid",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#FFFFFF",aU:6,P:10,bF:"149",i:"creditsButton",aV:6,j:"absolute",aI:25,k:"div",aJ:25,aK:25,aL:25,A:"#000000",B:"#000000",aM:"62_hover",Z:"break-word",C:"#000000",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#000000",t:36,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"93"}]},F:"center",G:"#000000",aP:"pointer",w:"CREDITS",x:"visible",I:"Solid",a:468,y:"preserve",J:"Solid"},"171":{c:128,d:768,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,i:"rightBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:896,b:0},"163":{h:"42",p:"no-repeat",x:"visible",i:"checkeredFlag",q:"100% 100%",b:32,a:832,j:"absolute",z:22,k:"div",dB:"img",d:32,c:32,r:"inline"},"155":{G:"#FFFFFF",aU:8,c:144,aV:8,d:84,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:64,Z:"break-word",i:"counter",w:"60",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:864,F:"center",b:640},"176":{h:"23",p:"no-repeat",x:"visible",a:738,q:"100% 100%",b:552,j:"absolute",i:"greenKey",z:9,k:"div",dB:"img",d:16,c:32,r:"inline",e:1},"168":{c:790,d:90,I:"None",J:"None",K:"None",g:"#00EF41",L:"None",M:0,i:"thermometer",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:15,P:0,D:"#D8DDE4",a:53,b:645},"151":{c:832,d:576,I:"None",J:"None",K:"None",g:"rgba(248, 255, 199, 0.750)",L:"None",M:0,i:"background1",N:0,bF:"149",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"172":{c:1024,d:128,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,i:"bottomBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:640},"164":{h:"23",p:"no-repeat",x:"visible",i:"greenKeyDisplay",q:"100% 100%",b:468,a:912,j:"absolute",z:21,k:"div",dB:"img",d:32,c:64,r:"inline"},"156":{h:"25",p:"no-repeat",x:"visible",i:"player",q:"100% 100%",b:0,a:0,j:"absolute",z:10,k:"div",dB:"img",d:32,c:32,r:"inline"},"169":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"122",M:0,i:"greenDoor",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:8,P:0,D:"#D8DDE4",a:128,b:318},"160":{h:"14",p:"no-repeat",x:"visible",i:"redKeyDisplay",q:"100% 100%",b:318,a:912,j:"absolute",z:20,k:"div",dB:"img",d:32,c:64,r:"inline"},"152":{G:"#FF2600",bB:2,aU:8,c:816,d:124,bC:2,aV:8,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",r:"inline",t:96,Z:"break-word",i:"gameOverMessage",w:"You Escaped!!!",bF:"149",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#000000",F:"center",b:76}}},{o:"104",p:"600px",B:{a:[{p:13,o:"117",q:false}]},cA:false,Z:768,Y:1024,c:"#5E0024",L:[],bY:1,d:1024,U:{},T:{"99_hover":{i:"99_hover",n:"99_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#F0CC00",s:"#FF0000",o:"180"},{f:"c",y:0,z:1,i:"B",e:"#E4EB00",s:"#FF0000",o:"180"},{f:"c",y:0,z:1,i:"C",e:"#E4EB00",s:"#FF0000",o:"180"},{f:"c",y:0,z:1,i:"D",e:"#E4EB00",s:"#FF0000",o:"180"},{f:"c",y:0,z:1,i:"A",e:"#E4EB00",s:"#FF0000",o:"180"},{y:1,i:"G",s:"#F0CC00",z:0,o:"180",f:"c"},{y:1,i:"B",s:"#E4EB00",z:0,o:"180",f:"c"},{y:1,i:"C",s:"#E4EB00",z:0,o:"180",f:"c"},{y:1,i:"D",s:"#E4EB00",z:0,o:"180",f:"c"},{y:1,i:"A",s:"#E4EB00",z:0,o:"180",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:20,b:[],a:[{f:"b",y:0,z:20,i:"b",e:-1000,s:484,o:"179"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"117",q:true}]},o:"kTimelineDefaultIdentifier"},{y:20,i:"b",s:-1000,z:0,o:"179",f:"c"}],f:30}},bZ:180,O:["177","178","181","179","183","182","180"],n:"Untitled Layout","_":2,v:{"177":{G:"#000000",bB:4,aU:8,c:1008,d:184,bC:4,aV:8,r:"inline",s:"Papyrus,fantasy",t:144,Z:"break-word",i:"credits1",w:"Dark Dungeon<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#FF2600",F:"center",b:50},"180":{b:1070,z:1,K:"Solid",c:372,L:"Solid",d:62,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000000",aU:6,P:8,bF:"179",i:"restartButton",aV:6,j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FF0000",B:"#FF0000",aM:"99_hover",Z:"break-word",C:"#FF0000",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FF0000",t:48,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"77"}]},F:"center",G:"#FF0000",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:312,y:"preserve",J:"Solid"},"183":{G:"#000000",bB:2,aU:8,c:396,d:884,bC:2,aV:8,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",r:"inline",t:48,Y:96,Z:"break-word",i:"credits3",w:"Designed by<br>\nJavascript by<br>\nDeveloped at<br>\nAudio Resources<br>\nUsability Testers<br>\n<br>\nSpecial Thanks to<br>\n<br>\n<br>\n\n",bF:"179",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:100,bA:"#FF2600",F:"left",b:120},"179":{k:"div",x:"visible",c:1024,d:1200,z:1,i:"creditRoll",a:0,j:"absolute",bF:"178",b:484},"182":{G:"#000000",bB:2,aU:8,c:396,d:884,bC:2,aV:8,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",r:"inline",t:48,Y:96,Z:"break-word",i:"credits4",w:"Garrett Yzaguirre<br>\nDarren Pearson<br>\nSaint Paul College<br>\nProject Hawkthorne<br>Gavin King<br>Hunter Johnson<br>Stan Lee<br>Tim<br>\n\n",bF:"179",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:8,aT:8,a:512,bA:"#FF2600",F:"left",b:120},"178":{k:"div",x:"hidden",c:1024,d:350,z:3,i:"outerContainer",a:0,j:"absolute",b:300},"181":{G:"#000000",bB:1,aU:8,c:1008,d:84,bC:1,aV:8,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",r:"inline",t:48,Z:"break-word",i:"credits2",w:"CREDITS\n",bF:"179",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#FF2600",F:"center",b:0}}}],{},g,{f:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
