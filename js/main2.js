var _$_42e7=["touchmove","preventDefault","addEventListener","body","DOMContentLoaded","attach","menuButton","getElementById","sideBar","mask","onclick","open","toggle","classList","show","remove","ten-drop.wilddog.com","https://ten-drop.wilddogio.com","initializeApp","ref","sync","user","child","userImg","levelRank","userName","canvas","2d","getContext","width","height","leftDrop","NONE","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","push","info","restartBtn","level","bestLevel","todayBest","best","loadBg","x","y","generation","direction","colorArr","#43A6FF","#1BD369","#FF7575","prototype","chooseDraw","color","draw_1","draw_2","draw_3","draw_4","draw_5","left","add_broken","dropCollection","right","up","down","save","fillStyle","scale","beginPath","moveTo","PI","arc","closePath","fill","restore","w","h","hor","ver","boardArr","lineTo","stroke","dropArr","brokenArr","clearRect","length","process","splice","isInto","board","floor","gameStart","pause","startTime","endTime","name","init","add","innerHTML","timeChange","clickSelect","getTime","isGameOver","Game over!","offsetX","offsetY","You win! Try your best to go to next level!","nextLevel","You lose!","fly","Level ","setBest","today","Try your best! Give you another "," drop!","","0","round","userAgent","\u5929 ","\u5c0f\u65f6 "," \u5206\u949f"," \u79d2","src","encrypt","_","update","random","reset","code","response","avatar_url","href","https://bupt-hjm.github.io/ten-drop/","GET","users/profile","user_id","data","ajax","API","on","visitor","value","val","set","toDateString","playTime","rank","UA","time","t","token","once","img","unshift","log","forEach","<p><span class='user-rank'>","</span><img src=","><span class='user-rank-name'>","</span><span class='user-level'>level ","</span></p>","hide","limitToLast","orderByChild","todayRank","switch","rankTitle","\u4eca\u65e5\u5b9e\u65f6\u6392\u884c\u699c","\u5386\u53f2\u6392\u884c\u699c","\u4eca\u65e5","\u5386\u53f2"];document[_$_42e7[3]][_$_42e7[2]](_$_42e7[0],function(a){a[_$_42e7[1]]()},false);if(_$_42e7[2] in  document){document[_$_42e7[2]](_$_42e7[4],function(){FastClick[_$_42e7[5]](document[_$_42e7[3]])},false)};var menuButton=document[_$_42e7[7]](_$_42e7[6]);var sideBar=document[_$_42e7[7]](_$_42e7[8]);var mask=document[_$_42e7[7]](_$_42e7[9]);menuButton[_$_42e7[10]]= function(){sideBar[_$_42e7[13]][_$_42e7[12]](_$_42e7[11]);mask[_$_42e7[13]][_$_42e7[12]](_$_42e7[14])};mask[_$_42e7[10]]= function(){sideBar[_$_42e7[13]][_$_42e7[15]](_$_42e7[11]);mask[_$_42e7[13]][_$_42e7[15]](_$_42e7[14])};var pastPlayTime;var todayPlayTime= new Date();var userData;var config={authDomain:_$_42e7[16],syncURL:_$_42e7[17]};var defApp=wilddog[_$_42e7[18]](config);var ref=wilddog[_$_42e7[20]]()[_$_42e7[19]]();var user_ref=ref[_$_42e7[22]](_$_42e7[21]);var userImg=document[_$_42e7[7]](_$_42e7[23]);var levelRank=document[_$_42e7[7]](_$_42e7[24]);var userNameP=document[_$_42e7[7]](_$_42e7[25]);var canvas=document[_$_42e7[7]](_$_42e7[26]);var ctx=canvas[_$_42e7[28]](_$_42e7[27]);canvas[_$_42e7[29]]= 600;canvas[_$_42e7[30]]= 600;var w=canvas[_$_42e7[29]];var h=canvas[_$_42e7[30]];var leftDropNum=10;var leftDropSpan=document[_$_42e7[7]](_$_42e7[31]);var leftDropArr=[_$_42e7[32],_$_42e7[33],_$_42e7[34],_$_42e7[35],_$_42e7[36],_$_42e7[37],_$_42e7[38],_$_42e7[39],_$_42e7[40],_$_42e7[41],_$_42e7[42]];for(var i=11;i< 100;i++){leftDropArr[_$_42e7[43]](i)};var infoP=document[_$_42e7[7]](_$_42e7[44]);var restartBtn=document[_$_42e7[7]](_$_42e7[45]);var levelP=document[_$_42e7[7]](_$_42e7[46]);var bestLevel=document[_$_42e7[7]](_$_42e7[47]);var todayBest=document[_$_42e7[7]](_$_42e7[48]);var best=document[_$_42e7[7]](_$_42e7[49]);var loadBg=document[_$_42e7[7]](_$_42e7[50]);var game=null;var Drop=function(){this[_$_42e7[51]]= w/ 2;this[_$_42e7[52]]= h/ 2;this[_$_42e7[53]]= 1;this[_$_42e7[54]]= null;this[_$_42e7[55]]= [_$_42e7[56],_$_42e7[57],_$_42e7[58]]};Drop[_$_42e7[59]]= {process:function(){this[_$_42e7[60]]()},chooseDraw:function(){var b=(game[_$_42e7[46]]- 1)% 3;this[_$_42e7[61]]= this[_$_42e7[55]][b];switch(this[_$_42e7[53]]){case 1:this[_$_42e7[62]]();break;case 2:this[_$_42e7[63]]();break;case 3:this[_$_42e7[64]]();break;case 4:this[_$_42e7[65]]();break;case 5:this[_$_42e7[66]]();break;default:break}},draw_1:function(){EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],15,20,this[_$_42e7[61]])},draw_2:function(){EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],30,30,this[_$_42e7[61]])},draw_3:function(){EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],45,35,this[_$_42e7[61]])},draw_4:function(){EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],50,50,this[_$_42e7[61]])},draw_5:function(){var c=this[_$_42e7[51]];var d=this[_$_42e7[52]];if(this[_$_42e7[54]]== null){this[_$_42e7[53]]= 6;EvenCompEllipse(ctx,this[_$_42e7[51]]- 20,this[_$_42e7[52]],10,10,this[_$_42e7[61]]);EvenCompEllipse(ctx,this[_$_42e7[51]]+ 20,this[_$_42e7[52]],10,10,this[_$_42e7[61]]);EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]]- 20,10,10,this[_$_42e7[61]]);EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]]+ 20,10,10,this[_$_42e7[61]])}else {EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],10,10,this[_$_42e7[61]]);EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],10,10,this[_$_42e7[61]]);EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],10,10,this[_$_42e7[61]]);EvenCompEllipse(ctx,this[_$_42e7[51]],this[_$_42e7[52]],10,10,this[_$_42e7[61]]);return};var f= new Drop();f[_$_42e7[51]]= c- 20;f[_$_42e7[52]]= d;f[_$_42e7[53]]= 5;f[_$_42e7[54]]= _$_42e7[67];game[_$_42e7[69]][_$_42e7[68]](f);var g= new Drop();g[_$_42e7[51]]= c+ 20;g[_$_42e7[52]]= d;g[_$_42e7[53]]= 5;g[_$_42e7[54]]= _$_42e7[70];game[_$_42e7[69]][_$_42e7[68]](g);var j= new Drop();j[_$_42e7[51]]= c;j[_$_42e7[52]]= d+ 20;j[_$_42e7[53]]= 5;j[_$_42e7[54]]= _$_42e7[71];game[_$_42e7[69]][_$_42e7[68]](j);var e= new Drop();e[_$_42e7[51]]= c;e[_$_42e7[52]]= d- 20;e[_$_42e7[53]]= 5;e[_$_42e7[54]]= _$_42e7[72];game[_$_42e7[69]][_$_42e7[68]](e)}};function EvenCompEllipse(T,m,n,R,S,U){T[_$_42e7[73]]();T[_$_42e7[74]]= U;var V=(R> S)?R:S;var W=R/ V;var X=S/ V;T[_$_42e7[75]](W,X);T[_$_42e7[76]]();T[_$_42e7[77]]((m+ R)/ W,n/ X);T[_$_42e7[79]](m/ W,n/ X,V,0,2* Math[_$_42e7[78]]);T[_$_42e7[80]]();T[_$_42e7[81]]();T[_$_42e7[82]]()}var Board=function(){this[_$_42e7[83]]= canvas[_$_42e7[29]];this[_$_42e7[84]]= canvas[_$_42e7[30]];this[_$_42e7[85]]= 6;this[_$_42e7[86]]= 6;this[_$_42e7[87]]= []};Board[_$_42e7[59]]= {init:function(){for(var i=0;i< this[_$_42e7[85]];i++){for(var k=0;k< this[_$_42e7[86]];k++){var m=i* this[_$_42e7[83]]/ this[_$_42e7[85]]+ this[_$_42e7[83]]/ this[_$_42e7[85]]/ 2;var n=k* this[_$_42e7[84]]/ this[_$_42e7[86]]+ this[_$_42e7[84]]/ this[_$_42e7[86]]/ 2;var l={x:m,y:n};this[_$_42e7[87]][_$_42e7[43]](l)}}},draw:function(){for(var i=0;i<= this[_$_42e7[85]];i++){ctx[_$_42e7[73]]();ctx[_$_42e7[76]]();ctx[_$_42e7[77]](i* this[_$_42e7[83]]/ this[_$_42e7[85]],0);ctx[_$_42e7[88]](i* this[_$_42e7[83]]/ this[_$_42e7[85]],this[_$_42e7[84]]);ctx[_$_42e7[80]]();ctx[_$_42e7[89]]();ctx[_$_42e7[82]]()};for(var i=0;i<= this[_$_42e7[86]];i++){ctx[_$_42e7[73]]();ctx[_$_42e7[76]]();ctx[_$_42e7[77]](0,i* this[_$_42e7[84]]/ this[_$_42e7[86]]);ctx[_$_42e7[88]](this[_$_42e7[83]],i* this[_$_42e7[84]]/ this[_$_42e7[86]]);ctx[_$_42e7[80]]();ctx[_$_42e7[89]]();ctx[_$_42e7[82]]()}}};var DropCollection=function(){this[_$_42e7[90]]= [];this[_$_42e7[91]]= []};DropCollection[_$_42e7[59]]= {process:function(){ctx[_$_42e7[92]](0,0,canvas[_$_42e7[29]],canvas[_$_42e7[30]]);for(var i=0;i< this[_$_42e7[90]][_$_42e7[93]];i++){if(this[_$_42e7[90]][i][_$_42e7[53]]== 6){continue};this[_$_42e7[90]][i][_$_42e7[94]]()};for(var i=0;i< this[_$_42e7[91]][_$_42e7[93]];i++){if(this[_$_42e7[91]][i][_$_42e7[53]]== 6){continue};this[_$_42e7[91]][i][_$_42e7[94]]()}},add:function(o){this[_$_42e7[90]][_$_42e7[43]](o)},remove:function(o){for(var i=0;i< this[_$_42e7[90]][_$_42e7[93]];i++){if(this[_$_42e7[90]][i]== o){this[_$_42e7[90]][_$_42e7[95]](i,1)}}},add_broken:function(o){this[_$_42e7[91]][_$_42e7[43]](o)},remove_broken:function(o){for(var i=0;i< this[_$_42e7[91]][_$_42e7[93]];i++){if(this[_$_42e7[91]][i]== o){this[_$_42e7[91]][_$_42e7[95]](i,1)}}},fly:function(o){for(var i=0;i< this[_$_42e7[91]][_$_42e7[93]];i++){if(this[_$_42e7[91]][i][_$_42e7[53]]== 6){continue};if(this[_$_42e7[96]](this[_$_42e7[91]][i][_$_42e7[51]],this[_$_42e7[91]][i][_$_42e7[52]])|| this[_$_42e7[91]][i][_$_42e7[51]]< -5|| this[_$_42e7[91]][i][_$_42e7[51]]> canvas[_$_42e7[29]]+ 5|| this[_$_42e7[91]][i][_$_42e7[52]]> canvas[_$_42e7[30]]+ 5|| this[_$_42e7[91]][i][_$_42e7[52]]<  -5){this[_$_42e7[91]][i][_$_42e7[53]]= 6;continue};switch(this[_$_42e7[91]][i][_$_42e7[54]]){case _$_42e7[67]:this[_$_42e7[91]][i][_$_42e7[51]]--;break;case _$_42e7[70]:this[_$_42e7[91]][i][_$_42e7[51]]++;break;case _$_42e7[71]:this[_$_42e7[91]][i][_$_42e7[52]]++;break;case _$_42e7[72]:this[_$_42e7[91]][i][_$_42e7[52]]--;break;default:break}}},isInto:function(m,n){var p=game[_$_42e7[97]];var q=game[_$_42e7[69]][_$_42e7[90]];var i=Math[_$_42e7[98]](m/ (p[_$_42e7[83]]/ p[_$_42e7[85]]));var k=Math[_$_42e7[98]](n/ (p[_$_42e7[84]]/ p[_$_42e7[86]]));for(var r=0;r< q[_$_42e7[93]];r++){if((q[r][_$_42e7[51]]== (i* p[_$_42e7[83]]/ p[_$_42e7[85]]+ p[_$_42e7[83]]/ p[_$_42e7[85]]/ 2))&& (q[r][_$_42e7[52]]== (k* p[_$_42e7[84]]/ p[_$_42e7[86]]+ p[_$_42e7[84]]/ p[_$_42e7[86]]/ 2))&& (q[r][_$_42e7[53]]<= 4)){q[r][_$_42e7[53]]++;if(q[r][_$_42e7[53]]> 6){q[r][_$_42e7[53]]= 6};return true}};return false}};var Game=function(){this[_$_42e7[97]]= null;this[_$_42e7[69]]= null;this[_$_42e7[99]]= false;this[_$_42e7[46]]= 1;this[_$_42e7[100]]= false;this[_$_42e7[101]]= 0;this[_$_42e7[102]]= 0;this[_$_42e7[103]]= null};Game[_$_42e7[59]]= {init:function(){ctx[_$_42e7[92]](0,0,canvas[_$_42e7[29]],canvas[_$_42e7[30]]);var p= new Board();p[_$_42e7[104]]();this[_$_42e7[97]]= p;var s= new DropCollection();for(var i=0;i< p[_$_42e7[87]][_$_42e7[93]];i++){var o= new Drop();o[_$_42e7[53]]= getNumberInRange(1,4);o[_$_42e7[51]]= p[_$_42e7[87]][i][_$_42e7[51]];o[_$_42e7[52]]= p[_$_42e7[87]][i][_$_42e7[52]];s[_$_42e7[105]](o)};leftDropSpan[_$_42e7[106]]= leftDropArr[10];this[_$_42e7[107]]();this[_$_42e7[69]]= s;this[_$_42e7[108]]();this[_$_42e7[101]]=  new Date()[_$_42e7[109]]()},clickSelect:function(){var t=this;var p=this[_$_42e7[97]];canvas[_$_42e7[10]]= function(u){u[_$_42e7[1]]();if(this[_$_42e7[100]]){return};if(leftDropNum== 0|| t[_$_42e7[110]]()){alert(_$_42e7[111]);return};t[_$_42e7[99]]= true;var i=Math[_$_42e7[98]](u[_$_42e7[112]]/ (p[_$_42e7[83]]/ p[_$_42e7[85]]));var k=Math[_$_42e7[98]](u[_$_42e7[113]]/ (p[_$_42e7[84]]/ p[_$_42e7[86]]));var q=t[_$_42e7[69]][_$_42e7[90]];for(var r=0;r< q[_$_42e7[93]];r++){if((q[r][_$_42e7[51]]== (i* p[_$_42e7[83]]/ p[_$_42e7[85]]+ p[_$_42e7[83]]/ p[_$_42e7[85]]/ 2))&& (q[r][_$_42e7[52]]== (k* p[_$_42e7[84]]/ p[_$_42e7[86]]+ p[_$_42e7[84]]/ p[_$_42e7[86]]/ 2))){if(q[r][_$_42e7[53]]>= 5){continue};q[r][_$_42e7[53]]++;leftDropNum--;leftDropSpan[_$_42e7[106]]= leftDropArr[leftDropNum];t[_$_42e7[69]][_$_42e7[94]]()}}}},timeChange:function(){var t=this;if(this[_$_42e7[99]]&& this[_$_42e7[110]]()&& !this[_$_42e7[100]]){info[_$_42e7[106]]= _$_42e7[114];this[_$_42e7[100]]= true;setTimeout(function(){t[_$_42e7[115]]();t[_$_42e7[100]]= false},1000)};if(leftDropNum== 0&& !this[_$_42e7[110]]()){info[_$_42e7[106]]= _$_42e7[116]};var t=this;setTimeout(function(){t[_$_42e7[69]][_$_42e7[117]]();t[_$_42e7[69]][_$_42e7[94]]();t[_$_42e7[107]]()},4)},isGameOver:function(){var v=0;var q=this[_$_42e7[69]][_$_42e7[90]];for(var r=0;r< q[_$_42e7[93]];r++){if(q[r][_$_42e7[53]]== 6){v++}};if(v== q[_$_42e7[93]]){return true}else {return false}},nextLevel:function(){this[_$_42e7[46]]++;levelP[_$_42e7[106]]= _$_42e7[118]+ this[_$_42e7[46]];if(this[_$_42e7[46]]> +bestLevel[_$_42e7[106]]){this[_$_42e7[119]](this[_$_42e7[46]])};if(this[_$_42e7[46]]> +todayBest[_$_42e7[106]]){this[_$_42e7[119]](this[_$_42e7[46]],_$_42e7[120])};ctx[_$_42e7[92]](0,0,canvas[_$_42e7[29]],canvas[_$_42e7[30]]);this[_$_42e7[99]]= false;this[_$_42e7[69]]= null;var p=this[_$_42e7[97]];var s= new DropCollection();var v=0;for(var i=0;i< p[_$_42e7[87]][_$_42e7[93]];i++){var o= new Drop();o[_$_42e7[53]]= getNumberInRange(1,4);v+= o[_$_42e7[53]];o[_$_42e7[51]]= p[_$_42e7[87]][i][_$_42e7[51]];o[_$_42e7[52]]= p[_$_42e7[87]][i][_$_42e7[52]];s[_$_42e7[105]](o)};var z;if(leftDropNum+ 7<= 20){z= 7}else {z= 20- leftDropNum};leftDropNum+= z;leftDropSpan[_$_42e7[106]]= leftDropArr[leftDropNum];info[_$_42e7[106]]= _$_42e7[121]+ z+ _$_42e7[122];this[_$_42e7[69]]= s},setBest:function(I,B){var N=userData[_$_42e7[103]]+ _$_42e7[123];var H=I+ _$_42e7[123];var G=H[_$_42e7[93]];for(var i=0;i< 6- G;i++){H= _$_42e7[124]+ H};var K= new Date()+ _$_42e7[123];this[_$_42e7[102]]=  new Date()[_$_42e7[109]]();var M=this[_$_42e7[102]]- this[_$_42e7[101]];var A=Math[_$_42e7[98]](M/ (24* 3600* 1000));var D=M% (24* 3600* 1000);var C=Math[_$_42e7[98]](D/ (3600* 1000));var E=D% (3600* 1000);var J=Math[_$_42e7[98]](E/ (60* 1000));var F=E% (60* 1000);var L=Math[_$_42e7[125]](F/ 1000);if(B== _$_42e7[120]){user_ref[_$_42e7[22]](N)[_$_42e7[22]](_$_42e7[120])[_$_42e7[134]]({level:I,UA:navigator[_$_42e7[126]],time:A+ _$_42e7[127]+ C+ _$_42e7[128]+ J+ _$_42e7[129]+ L+ _$_42e7[130],img:userImg[_$_42e7[131]],t:M,token:sjcl[_$_42e7[132]](M+ _$_42e7[123],I+ _$_42e7[123]),rank:H+ _$_42e7[133]+ (3000000000000- M),playTime:K+ _$_42e7[123]});user_ref[_$_42e7[22]](N)[_$_42e7[134]]({todayRank:H+ _$_42e7[133]+ (3000000000000- M)});todayBest[_$_42e7[106]]= I;return};user_ref[_$_42e7[22]](N)[_$_42e7[134]]({level:I,UA:navigator[_$_42e7[126]],time:A+ _$_42e7[127]+ C+ _$_42e7[128]+ J+ _$_42e7[129]+ L+ _$_42e7[130],t:M,token:sjcl[_$_42e7[132]](M+ _$_42e7[123],I+ _$_42e7[123]),rank:H+ _$_42e7[133]+ (3000000000000- M),playTime:K+ _$_42e7[123],todayRank:H+ _$_42e7[133]+ (3000000000000- M)});bestLevel[_$_42e7[106]]= I}};restartBtn[_$_42e7[10]]= function(){for(var i=0;i< 99999;i++){clearTimeout(i)};game= null;leftDropNum= 10;game=  new Game();game[_$_42e7[104]]()};function getNumberInRange(Z,Y){var ba=Y- Z;var V=Math[_$_42e7[135]]();return Math[_$_42e7[125]](V* ba+ Z)}DUOSHUO[_$_42e7[149]][_$_42e7[148]](_$_42e7[136],function(){var P=function(Q){if(Q[_$_42e7[137]]== 0){userData= Q[_$_42e7[138]];userImg[_$_42e7[131]]= userData[_$_42e7[139]];userNameP[_$_42e7[106]]= userData[_$_42e7[103]];game=  new Game();game[_$_42e7[104]]();userBest();getRank();getTodayRank()}else {location[_$_42e7[140]]= _$_42e7[141]}};var O=function(Q){location[_$_42e7[140]]= _$_42e7[141]};DUOSHUO[_$_42e7[147]][_$_42e7[146]](_$_42e7[142],_$_42e7[143],{"user_id":this[_$_42e7[145]][_$_42e7[144]]},P,O)});function userBest(){user_ref[_$_42e7[160]](_$_42e7[150],function(bf){var N=userData[_$_42e7[103]]+ _$_42e7[123];var bf=bf[_$_42e7[151]]();var K= new Date()+ _$_42e7[123];if(bf[N]== undefined){bestLevel[_$_42e7[106]]= 1;todayBest[_$_42e7[106]]= 1;user_ref[_$_42e7[22]](N)[_$_42e7[152]]({name:N,level:1,UA:navigator[_$_42e7[126]],time:0,t:0,img:userImg[_$_42e7[131]],token:sjcl[_$_42e7[132]](0+ _$_42e7[123],1+ _$_42e7[123]),rank:0,playTime:K+ _$_42e7[123],id:userData[_$_42e7[144]],today:1,todayRank:0})}else {bestLevel[_$_42e7[106]]= bf[N][_$_42e7[46]];if(user_ref[_$_42e7[22]](N)[_$_42e7[120]]== 1){user_ref[_$_42e7[22]](N)[_$_42e7[22]](_$_42e7[120])[_$_42e7[152]]({level:1,UA:navigator[_$_42e7[126]],time:0,t:0,token:sjcl[_$_42e7[132]](0+ _$_42e7[123],1+ _$_42e7[123]),rank:0,playTime:K+ _$_42e7[123]})}else {if((bf[N][_$_42e7[120]]== undefined)&& ( new Date(bf[N][_$_42e7[154]])[_$_42e7[153]]()==  new Date(todayPlayTime)[_$_42e7[153]]())){user_ref[_$_42e7[22]](N)[_$_42e7[134]]({todayRank:bf[N][_$_42e7[155]]});user_ref[_$_42e7[22]](N)[_$_42e7[22]](_$_42e7[120])[_$_42e7[152]]({level:bf[N][_$_42e7[46]],UA:bf[N][_$_42e7[156]],time:bf[N][_$_42e7[157]],t:bf[N][_$_42e7[158]],token:bf[N][_$_42e7[159]],rank:bf[N][_$_42e7[155]],playTime:bf[N][_$_42e7[154]]});todayBest[_$_42e7[106]]= bf[N][_$_42e7[120]][_$_42e7[46]];return};pastPlayTime= bf[N][_$_42e7[120]][_$_42e7[154]];if( new Date(pastPlayTime)[_$_42e7[153]]()!==  new Date(todayPlayTime)[_$_42e7[153]]()){user_ref[_$_42e7[22]](N)[_$_42e7[22]](_$_42e7[120])[_$_42e7[134]]({level:1,UA:navigator[_$_42e7[126]],time:0,t:0,token:sjcl[_$_42e7[132]](0+ _$_42e7[123],1+ _$_42e7[123]),rank:0,playTime:K+ _$_42e7[123]})}};todayBest[_$_42e7[106]]= bf[N][_$_42e7[120]][_$_42e7[46]]}})}var todayRankHtml=_$_42e7[123];var pastRankHtml=_$_42e7[123];function getRank(){user_ref[_$_42e7[172]](_$_42e7[155])[_$_42e7[171]](8)[_$_42e7[148]](_$_42e7[150],function(bd){var bc=[];var bb=8;bd[_$_42e7[164]](function(bf){var be=bf[_$_42e7[151]]();try{bc[_$_42e7[162]]({img:be[_$_42e7[161]],name:be[_$_42e7[103]],level:be[_$_42e7[46]]})}catch(err){console[_$_42e7[163]](err)}});if(bc[_$_42e7[93]]< 8){bb= bc[_$_42e7[93]]};pastRankHtml= _$_42e7[123];for(var i=0;i< bb;i++){pastRankHtml+= _$_42e7[165]+ (i+ 1)+ _$_42e7[166]+ bc[i][_$_42e7[161]]+ _$_42e7[167]+ bc[i][_$_42e7[103]]+ _$_42e7[168]+ bc[i][_$_42e7[46]]+ _$_42e7[169]};levelRank[_$_42e7[106]]= pastRankHtml;loadBg[_$_42e7[13]][_$_42e7[105]](_$_42e7[170])})}function getTodayRank(){user_ref[_$_42e7[172]](_$_42e7[173])[_$_42e7[171]](300)[_$_42e7[148]](_$_42e7[150],function(bd){todayPlayTime=  new Date();var bc=[];var bb=8;var r=0;bd[_$_42e7[164]](function(bf){var be=bf[_$_42e7[151]]();try{if( new Date(be[_$_42e7[154]])[_$_42e7[153]]()==  new Date(todayPlayTime)[_$_42e7[153]]()){bc[_$_42e7[162]]({img:be[_$_42e7[161]],name:be[_$_42e7[103]],level:be[_$_42e7[46]]});r++};if(r== 8){return}}catch(err){console[_$_42e7[163]](err)}});if(bc[_$_42e7[93]]< 8){bb= bc[_$_42e7[93]]};todayRankHtml= _$_42e7[123];for(var i=0;i< bb;i++){todayRankHtml+= _$_42e7[165]+ (i+ 1)+ _$_42e7[166]+ bc[i][_$_42e7[161]]+ _$_42e7[167]+ bc[i][_$_42e7[103]]+ _$_42e7[168]+ bc[i][_$_42e7[46]]+ _$_42e7[169]}})}var switchButton=document[_$_42e7[7]](_$_42e7[174]);var rankTitle=document[_$_42e7[7]](_$_42e7[175]);switchButton[_$_42e7[10]]= function(){if(rankTitle[_$_42e7[106]]== _$_42e7[176]){levelRank[_$_42e7[106]]= pastRankHtml;rankTitle[_$_42e7[106]]= _$_42e7[177];switchButton[_$_42e7[106]]= _$_42e7[178]}else {levelRank[_$_42e7[106]]= todayRankHtml;rankTitle[_$_42e7[106]]= _$_42e7[176];switchButton[_$_42e7[106]]= _$_42e7[179]}}