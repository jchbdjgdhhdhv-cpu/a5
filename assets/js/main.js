(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var bs=$('bz-s');if(bs){var be=$('bz-e');function pol(m,r){var a=(m/60)*2*Math.PI;return [150+r*Math.sin(a),150-r*Math.cos(a)];}
 function bz(){var s=+bs.value,e=+be.value,end=(s+e)%60;$('bz-sv').textContent=s;$('bz-ev').textContent=e;$('bz').style.transform='rotate('+(s*6)+'deg)';var a=pol(s,100),b=pol(s+e,100),big=e>30?1:0;
  $('bz-arc').setAttribute('d',e?('M150 150L'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'A100 100 0 '+big+' 1 '+b[0].toFixed(1)+' '+b[1].toFixed(1)+'z'):'');var m=pol(s+e,88);$('bz-m').setAttribute('x2',m[0].toFixed(1));$('bz-m').setAttribute('y2',m[1].toFixed(1));
  $('bz-o').innerHTML='The minute hand now points to <b>'+end+'</b> on the dial and to <b>'+e+'</b> on the bezel: that is your elapsed time.';}
 bs.addEventListener('input',bz);be.addEventListener('input',bz);bz();}
var D=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],EV=[['work','Work'],['formal','Formal'],['sport','Sport'],['travel','Travel'],['relax','Relaxed']],DEF=['work','work','work','sport','work','relax','relax'];
var W={dress:['Dress watch','#F5F0E6',{formal:5,work:3}],diver:['Diver','#1E2A44',{sport:5,travel:4,relax:3}],field:['Field watch','#5E6B3A',{relax:4,travel:4,work:3,sport:2}],chrono:['Chronograph','#B08D57',{work:4,relax:3,travel:2}],digital:['Digital','#333',{sport:4,travel:3}]};
var dd=$('wk-d');if(dd){dd.innerHTML=D.map(function(d,i){return '<div><b>'+d+'</b><select aria-label="'+d+'">'+EV.map(function(e){return '<option value="'+e[0]+'"'+(e[0]===DEF[i]?' selected':'')+'>'+e[1]+'</option>';}).join('')+'</select></div>';}).join('');
 var cbs=[].slice.call(document.querySelectorAll('.rt-fs input[type=checkbox]')),sels=[].slice.call(dd.querySelectorAll('select'));
 function wk(){var own=cbs.filter(function(c){return c.checked;}).map(function(c){return c.value;}),used={},h='';if(!own.length){$('wk-o').innerHTML='<li style="grid-column:1/-1">Tick at least one watch.</li>';return;}
  sels.forEach(function(s,i){var ev=s.value,best=own[0],bs=-99;own.forEach(function(w){var sc=(W[w][2][ev]||0)-(used[w]||0)*1.6;if(sc>bs){bs=sc;best=w;}});used[best]=(used[best]||0)+1;h+='<li><b>'+D[i]+'</b><i style="--c:'+W[best][1]+'"></i><span>'+W[best][0]+'</span><em>'+s.options[s.selectedIndex].text+'</em></li>';});
  $('wk-o').innerHTML=h;}
 cbs.concat(sels).forEach(function(x){x.addEventListener('change',wk);});wk();}
var ph=$('pr-h');if(ph){var pt=$('pr-t'),n=new Date();n.setHours(n.getHours()-12);n.setMinutes(n.getMinutes()-n.getTimezoneOffset());pt.value=n.toISOString().slice(0,16);
 function pr(){var h=+ph.value,t=new Date(pt.value),now=new Date();if(isNaN(t)){$('pr-o').textContent='Enter when you took it off.';return;}var stop=new Date(t.getTime()+h*36e5),left=(stop-now)/36e5,pct=Math.max(0,Math.min(1,left/h));$('pr-f').style.width=(pct*100)+'%';
  var f=stop.toLocaleString(undefined,{weekday:'short',hour:'2-digit',minute:'2-digit'});$('pr-o').innerHTML=left>0?'<b>About '+Math.round(left)+' hours left</b><p>It should stop around '+f+'. Wear it before then and no setting is needed.</p>':'<b>Probably stopped</b><p>It ran out around '+f+'. Give the crown 20&ndash;40 turns, then set the date and time.</p>';}
 ph.addEventListener('change',pr);pt.addEventListener('input',pr);pr();}
})();
