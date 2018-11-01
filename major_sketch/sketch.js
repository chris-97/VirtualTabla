var globalc = [];
var back;
var isOverKinnarD;
var isOverMaidanD;
var isOverSyahiD;
var isOverKinnarB;
var isOverMaidanB;
var isOverSyahiB;

function preload() {

  back1 = loadImage('/assets/1.jpg');
  back2 = loadImage('/assets/2.jpg');
  back3 = loadImage('/assets/3.jpg');
  gajara = loadImage('/assets/gajara.png');
  gajara2 = loadImage('/assets/gajara2.png');

  soundFormats('wav','mp3','ogg');

  sitar = loadSound('/assets/sitar.wav');
  sitar0 = loadSound('/assets/sitar0.wav');

  kat0 = loadSound('/assets/Tabla/KAT/KAT0.wav');
  kat1 = loadSound('/assets/Tabla/KAT/KAT1.wav');
  kat2 = loadSound('/assets/Tabla/KAT/KAT2.wav');

  ge0 = loadSound('/assets/Tabla/GE/GE0.wav');
  ge1 = loadSound('/assets/Tabla/GE/GE1.wav');
  ge2 = loadSound('/assets/Tabla/GE/GE2.wav');
  ge3 = loadSound('/assets/Tabla/GE/GE3.wav');
  ge4 = loadSound('/assets/Tabla/GE/GE4.wav');
  ge5 = loadSound('/assets/Tabla/GE/GE5.wav');
  ge6 = loadSound('/assets/Tabla/GE/GE6.wav');

  syahi0 = loadSound('/assets/Tabla/SYAHI/SYAHI0.wav');
  syahi1 = loadSound('/assets/Tabla/SYAHI/SYAHI1.wav');
  syahi2 = loadSound('/assets/Tabla/SYAHI/SYAHI2.wav');
  syahi3 = loadSound('/assets/Tabla/SYAHI/SYAHI3.wav');
  syahi4 = loadSound('/assets/Tabla/SYAHI/SYAHI4.wav');

  ta0 = loadSound('/assets/Tabla/TA/TA0.wav');
  ta1 = loadSound('/assets/Tabla/TA/TA1.wav');
  ta2 = loadSound('/assets/Tabla/TA/TA2.wav');
  ta3 = loadSound('/assets/Tabla/TA/TA3.wav');
  ta4 = loadSound('/assets/Tabla/TA/TA4.wav');
  ta5 = loadSound('/assets/Tabla/TA/TA5.wav');

  tin0 = loadSound('/assets/Tabla/TIN/TIN0.wav');
  tin1 = loadSound('/assets/Tabla/TIN/TIN1.wav');
  tin2 = loadSound('/assets/Tabla/TIN/TIN2.wav');
  tin3 = loadSound('/assets/Tabla/TIN/TIN3.wav');
  tin4 = loadSound('/assets/Tabla/TIN/TIN4.wav');
  tin5 = loadSound('/assets/Tabla/TIN/TIN5.wav');
  tin6 = loadSound('/assets/Tabla/TIN/TIN6.wav');

  tun0 = loadSound('/assets/Tabla/TUN/TUN0.wav');
  tun1 = loadSound('/assets/Tabla/TUN/TUN1.wav');
  tun2 = loadSound('/assets/Tabla/TUN/TUN2.wav');
  tun3 = loadSound('/assets/Tabla/TUN/TUN3.wav');
  tun4 = loadSound('/assets/Tabla/TUN/TUN4.wav');
  tun5 = loadSound('/assets/Tabla/TUN/TUN5.wav');
  tun6 = loadSound('/assets/Tabla/TUN/TUN6.wav');
  tun7 = loadSound('/assets/Tabla/TUN/TUN7.wav');
  tun8 = loadSound('/assets/Tabla/TUN/TUN8.wav');
  tun9 = loadSound('/assets/Tabla/TUN/TUN9.wav');
  tun10 = loadSound('/assets/Tabla/TUN/TUN10.wav');

  trkt0 = loadSound('/assets/Tabla/TRKT/TRKT0.wav');
  trkt1 = loadSound('/assets/Tabla/TRKT/TRKT1.wav');
  trkt2 = loadSound('/assets/Tabla/TRKT/TRKT2.wav');
  trkt3 = loadSound('/assets/Tabla/TRKT/TRKT3.wav');

}

function setup(){
  var backs = [back1,back2,back3]
  back = random(backs);
  sitar.play();
  sitar0.play();
  tun4.play();
  syahi1.play();
  canvas = createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){

  textAlign(LEFT);
  background(0);
  cursor(ARROW);
  stroke(0,50);
  strokeWeight(width/350);

  image(back,0,0,width,height);

  //image(gajara,width/2+width*.0655,height*.314,width/4.29,width/4.29);
  //image(gajara2,width/6.6,height*.21,width/2.75,width/2.75);

  fill(250,50);
  rect(0,height*.04,width,height*.09);
  rect(0,height-height*.08,width,height*.05);

  fill(255,150);
  stroke(0);
  textSize(width/20);
  text("Virtual Tabla",width*.05,height*.0975);

  textSize(width/45);
  strokeWeight(width/250);
  stroke(0,200);
  fill(225,225);
  if(mouseX > width*.05 && mouseX < width*.05+width*.3){
    if(mouseY > height*.05 && mouseY < height*.05+height*.075){
      cursor(HAND);
      text("By Christopher Daniel",width*.05,height*.16);
    }
  }

  strokeWeight(width/200);
  textSize(width/37);
  text("BAYAN",width*.07,height/2+height*.25);
  text("Region:",width*.07,height/2+height*.3);
  textAlign(RIGHT);
  text("DAYAN",width-width*.07,height/2+height*.25);
  text(":Region",width-+width*.07,height/2+height*.3);

  var aboutS = "This application is designed to familiarise the user with tabla bols(sounds) and thekas(phrases). For the best experience, set your browser to fullscreen.";
  var indexS = "KEYBOARD CONTROLS: F = Kat, R = Ge, E = Syahi. H = Ta/Na, U = Tin, I = Tun,  J&K = Ti&Ri. COMBINATION-BOLS: R+H = Dha, R+U = Dhin. J,K,F,J = TRKT";
  var demoS = "Click for Demonstration Video";
  var banner = ["About","Index","☞Demo"];
  var bWX = [width*.7,width*.79,width*.878];
  var bW = [width*.05,width*.073,width*.097];
  var script = [aboutS,indexS,demoS];
  var add = .1;

  textAlign(CENTER);
  fill(40);
  strokeWeight(width/400);
  stroke(190);

  for(var u = 0; u < banner.length; u++){
    Hover(banner[u],bWX[u],bW[u],script[u],add*u);
  }

  stroke(0);

  var i = [width/2+width/5.5,width/2+width/5.5,width/2+width/5.5,width/2-width/6,width/2-width/5.95,width/2-width/6.9];
  var j = [height/2,height/2,height/2,height/2,height/2,height/2.1];

  var distanceKinnarD = dist(mouseX, mouseY, i[0],j[0]);
  var distanceMaidanD = dist(mouseX, mouseY, i[1],j[1]);
  var distanceSyahiD = dist(mouseX, mouseY, i[2],j[2]);

  var distanceKinnarB = dist(mouseX, mouseY, i[3],j[3]);
  var distanceMaidanB = dist(mouseX, mouseY, i[4],j[4]);
  var distanceSyahiB = dist(mouseX, mouseY, i[5],j[5]);

  var a = [distanceKinnarD,distanceMaidanD,distanceSyahiD,distanceKinnarB,distanceMaidanB,distanceSyahiB];
  var b = [width/15*1.5,width/19*1.5,width/36*2,width/12*2,width/14.5*2,width/34*2];
  var c = [isOverKinnarD,isOverMaidanD,isOverSyahiD,isOverKinnarB,isOverMaidanB,isOverSyahiB];
  var d = ['#E7DA4F','#E77624','#DF3520','#1BA68D','#513789','#913583'];
  var e = ["TA ता / NA ना","TIN तिन","TUN तुन","KAT कत","GE गे","!"];
  var f = [width*.85,width*.85,width*.85,width*.15,width*.15,width*.15];
  var g = [height/3,height/3,height/3,height/5,height/5,height/5];
  var h = ['#e6c297','#ebd4ba','#02021f','#e6c297','#ebd4ba','#02021f'];
  var k = [width/15*3,width/19*3,width/36*4,width/12*4,width/14.5*4,width/34*4]; //size inside
  var l = [distanceMaidanD,distanceSyahiD,width/34*2,distanceMaidanB,distanceSyahiB,width/34*2];
  var m = [width/19*1.5,width/36*2,distanceSyahiD,width/14.5*2,width/34*2,distanceSyahiB]; //mouse end
  var o = ["Kinnar","Maidan","Syahi","Kinnar","Maidan","Syahi"];
  var p = [width-width*.22,width-width*.22,width-width*.22,width*.22,width*.22,width*.22];
  var code = [72,85,73,70,82,69];

  for(var n = 0; n < a.length; n++){
    Circle(n,a[n],b[n],c[n],d[n],e[n],f[n],g[n],h[n],i[n],j[n],k[n],l[n],m[n],o[n],p[n],code[n]);
    if(keyCode == code[72] && keyCode == code[85]){
    console.log('possible');
    }
  }

  textAlign(CENTER);
  strokeWeight(width/200);
  textSize(width/38);
  stroke(0);
  fill(200,200);
  //text("Dha Ge Na Tin | Na Ka Dhin Na |",width/2,height-height/9)
  textSize(height/20);
  text("THEKA:",width-width/2,height-height/6);
  textSize(height/25);

  var space = width/9;
  var pTX = width/17.5;
  var pTX2 = width/11.5;
  var rTX = width/16;
  var rTX2 = width/13.5;
  var dTX = width/15.5;
  var dTX2 = width/14;
  var jTX = width/17.5;
  var jTX2 = width/12;
  var eTX = width/14;
  var eTX2 = width/18;
  var kTX = width/19.5;
  var kTX2 = width/10.5;
  var tTX = width/15.5;
  var tTX2 = width/14.5;
  var cTX = width/26.5;
  var cTX2 = width/8;

  var yellow = '#E7DA4F';
  var green = '#1BA68D';
  var blue = '#513789';
  var red = '#DF3520';
  var orange = '#E77624';
  var purple = '#64297B';
  var outline = 0;

  var ta = ["Ta ",yellow,outline];
  var na = ["Na ",yellow,outline];
  var tin = ["Tin ",orange,outline];
  var tun = ["Tun ",red,outline];
  var kat = ["Kat ",green,outline];
  var ka = ["Ka ",green,outline];
  var ge = ["Ge ",blue,outline];
  var dha = ["Dha ", blue,yellow];
  var dhin = ["Dhin ",blue,orange];
  var trkt = ["Trkt ",green,red];
  var bar = ["| ",(255),outline];
  var pause = ["X ",(255),outline];
  var dot = ["･ ",(0),255];

  var pT = [dha,dot,dhin,dot,dha,bar,dha,dot,dhin,dot,dha,bar,dha,dot,tin,dot,na,bar,na,dot,dhin,dot,dha];
  var rT = [tin,tin,na,bar,dhin,na,bar,dhin,na,bar];
  var dT = [dha,dhin,na,bar,dha,tin,na,bar];
  var jT = [dhin,na,bar,dhin,dhin,na,bar,tin,na,bar,dhin,dhin,na,bar];
  var eT = [dhin,dhin,bar,dha,trkt,bar,tun,na,bar,kat,ta,bar,dha,trkt,bar,dhin,na,bar];
  var kT = [dha,ge,na,tin,bar,na,ka,dhin,na,bar];
  var tT = [dha,dhin,dhin,dha,bar,dha,dhin,dhin,dha,bar,dha,tin,tin,na,bar,na,dhin,dhin,dha,bar];
  var cT = [dha,dhin,pause,bar,dha,dha,tin,pause,bar,ta,tin,pause,bar,dha,dha,dhin,na,bar];

  var xPos = [width/10,width/3.25,width/3,width/5,width/8,width/3.25,width/35,width/7]

  var q = ["Punjabi","Rupak","Dadra","Jhaptal","Ektal","Kherava","Tintal","Dipchandi"];
  var r = [pTX,rTX,dTX,jTX,eTX,kTX,tTX,cTX];
  var s = [pTX2,rTX2,dTX2,jTX2,eTX2,kTX2,tTX2,cTX2];
  var t = [pT,rT,dT,jT,eT,kT,tT,cT];

  for(var u = 0; u < q.length; u++){
  Theka(q[u],r[u],s[u],space*u,t[u],xPos[u],height-height/9);
  }

}

//drawText(width/30,height-height/9,t[u])
//text(this.b,width/2,height-height/9);
function Theka(theka,tX,tX2,space,bolArray,x,y){
  this.t = theka;
  this.tx = tX;
  this.tx2 = tX2;
  this.s = space;
  this.b = bolArray;
  this.x = x;
  this.y = y;

  stroke(0,175);
  text(this.t,width/10+this.s,height-height/20);
  if(mouseX > this.tx+this.s && mouseX < this.tx+this.s+this.tx2){
    if(mouseY > height-height/13.5 && mouseY < height-height/13.5+height/25){
      cursor(HAND);
      textAlign(LEFT);
      strokeWeight(width/400);
      fill(250,150);
      rect(0,height-height*.1425,width,height*.055);
      for ( var i = 0; i < this.b.length; ++ i ){
        var part = this.b[i];
        var t = part[0];
        var c = part[1];
        var o = part[2];
        var w = textWidth(t);
        fill(c);
        stroke(o);
        strokeWeight(width/250);
        text(t,x,y);
        x += w;

      }
    }
  }
  //Reset font details
  textAlign(CENTER);
  strokeWeight(width/200);
  textSize(width/38);
  stroke(0);
  fill(200,200);
}

function Circle(id,question,answer,condition,newColour,word,textX,textY,originalColour,circleX,circleY,circleD,question2,answer2,region,regionX,kb){
  //store the id (pass 'n' in)
  this.id = id;
  this.q = question;
  this.a = answer;
  this.c = condition;
  this.nc = newColour;
  this.t = word;
  this.x = textX;
  this.y = textY;
  this.oc = originalColour;
  this.cx = circleX;
  this.cy = circleY;
  this.cd = circleD;
  this.q2 = question2;
  this.a2 = answer2;
  this.r = region;
  this.rx = regionX;
  this.code = kb;
  if(this.q < this.a && this.q2 > this.a2){
    this.c = true;
  } else {
    this.c = false;
  }
  globalc[id] = this.c;
  stroke(0);
  strokeWeight(width/600);
  if(this.c == true || keyCode == this.code){
    fill(this.nc);
    stroke(0);
    strokeWeight(width/200);
    textAlign(CENTER,CENTER);
    textSize(width/24);
    text(this.t,width/2+width*.025,height*.0975);
    textSize(width/35)
    strokeWeight(width/300);
    text(this.r,this.rx,height/2+height*.3);
    cursor(HAND);
    strokeWeight(width/150)
    stroke(0,50);
  } else {
    fill(this.oc);
    }
    ellipse(this.cx,this.cy,this.cd);
}


function keyPressed(){
  var taA = [ta0,ta1,ta2,ta3,ta4,ta5];
  var tinA = [tin0,tin1,tin2,tin3,tin4,tin5,tin6];
  var tunA = [tun0,tun1,tun2,tun3,tun4,tun5,tun6,tun7,tun8,tun9,tun10];
  var trktA = [trkt0,trkt1,trkt2];
  var katA = [kat0,kat1,kat2];
  var geA = [ge0,ge1,ge2,ge3,ge4,ge5,ge6];
  var syahiA = [syahi0,syahi1,syahi2,syahi3,syahi4];
  var a = [taA,tinA,tunA,katA,geA,syahiA,trktA,trktA];
  var o = ["Kinnar","Maidan","Syahi","Kinnar","Maidan","Syahi","Syahi","Syahi"];
  var p = [window.innerWidth/2+width*.175,width/2+width*.175,width/2+width*.175,width*.175,width*.175,width*.175,width/2+width*.175,width/2+width*.175];
  var q = ['#E7DA4F','#E77624','#DF3520','#1BA68D','#232555','#64297B','#DF3520','#DF3520'];
  var b = [72,85,73,70,82,69,74,75];
  for(var i = 0; i < a.length; i++){
    Conditions(keyCode,b[i],a[i]);
  }
}

function mousePressed(){
  var taA = [ta0,ta1,ta2,ta3,ta4,ta5];
  var tinA = [tin0,tin1,tin2,tin3,tin4,tin5,tin6];
  var tunA = [tun0,tun1,tun2,tun3,tun4,tun5,tun6,tun7,tun8,tun9,tun10];
  var trktA = [trkt0,trkt1,trkt2];
  var katA = [kat0,kat1,kat2];
  var geA = [ge0,ge1,ge2,ge3,ge4,ge5,ge6];
  var syahiA = [syahi0,syahi1,syahi2,syahi3,syahi4];
  var c = [taA,tinA,tunA,katA,geA,syahiA];
  console.log(globalc);
  for(var i = 0; i < c.length; i++){
    Conditions(globalc[i],true,c[i]);
  }
}

function Conditions(question,answer,sound){
  this.q = question;
  this.a = answer;
  this.s = sound;
  if(this.q == this.a){
    random(this.s).play();
  }
}

function Hover(title,tX,tX2,script,add){
  this.t = title;
  this.tx = tX;
  this.tx2 = tX2;
  this.b = script;
  this.a = add;

  text(this.t,width*(this.a+.725),height*.11);

  if(mouseX > this.tx && mouseX < this.tx+this.tx2){
    if(mouseY > height*.085 && mouseY < height*.125){
      stroke(150,100);
      fill(50,100);
      rect(width*.6875,height*.13,width/3.5,height/4.8);
      cursor(HAND);
      textAlign(LEFT);
      textSize(height/40);
      fill(255);
      text(this.b,width*.6975,height*.13,width/3.6,height/4.5);
      textAlign(CENTER);
      fill(50);
      textSize(width/37);
      strokeWeight(width/400);
      stroke(150);

      if(mouseIsPressed){
        if(mouseX > width*.878 && mouseX < width*.878+width*.097){
          if(mouseY > height*.085 && mouseY < height*.125){
            console.log("pressed");
            window.open("https://www.youtube.com/channel/UCtzcHH3a14zbdnT1NvDW0xw?view_as=subscriber");
            console.log("YouTube opened");
          }
        }
      }
    }
  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}
