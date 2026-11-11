/* Album-local ordering. Pointer, tap-to-place, keyboard and exact position share one transaction. */
'use strict';
window.albumArranging=false;
let arrangeAlbumId=null,pickedAlbumCard=null,albumDrag=null,dragFrame=0,pageHover=null,pageHoverAt=0;
const arrangeDefault='Am Griff ziehen oder Griff und Zielkarte nacheinander antippen. Das Pfeilkreuz öffnet die genaue Positionswahl.';
function orderedAlbum(){const a=albums.find(a=>a.id===currentAlbum);return a?PokeCore.albumCards(cards,a):[];}
function announceArrange(text){if($('arrangeHint').textContent!==text)$('arrangeHint').textContent=text;}
function focusAlbumHandle(id){if(currentView!=='albums')return;requestAnimationFrame(()=>document.querySelector((binderMode?'#binderPage':'#albumCards')+' [data-album-card="'+CSS.escape(id)+'"] .drag-handle')?.focus({preventScroll:true}));}
function moveAlbumCard(id,index){
 const album=albums.find(a=>a.id===currentAlbum),list=orderedAlbum(),from=list.findIndex(c=>c.id===id);
 if(!album||from<0||!Number.isFinite(index))return false;
 const final=Math.max(0,Math.min(list.length-1,Math.trunc(index)));if(final===from){announceArrange('Die Karte bleibt an Position '+(from+1)+'.');return false;}
 const before=list.map(c=>c.id),cardOrder=PokeCore.moveInAlbum(list,id,final),previousPage=binderIndex;
 if(binderMode)binderIndex=Math.floor(final/9);pickedAlbumCard=null;
 if(!commit(cards,albums.map(a=>a.id===album.id?{...a,cardOrder}:a))){binderIndex=previousPage;return false;}
 const name=list[from].name;announceArrange(name+' ist jetzt an Position '+(final+1)+'.');focusAlbumHandle(id);
 toast(name+' an Position '+(final+1),{label:'Rückgängig',run:()=>{
  const target=albums.find(a=>a.id===album.id);if(!target)return toast('Das Album existiert nicht mehr.');
  if(currentAlbum===album.id&&binderMode)binderIndex=Math.floor(from/9);
  if(commit(cards,albums.map(a=>a.id===album.id?{...a,cardOrder:before}:a))){pickedAlbumCard=null;announceArrange('Verschieben rückgängig gemacht.');focusAlbumHandle(id);}
 }});return true;
}
function clearDropMarks(){document.querySelectorAll('#albumDetail .drop-before,#albumDetail .drop-after,#albumDetail .drop-empty,.page-hover').forEach(el=>el.classList.remove('drop-before','drop-after','drop-empty','page-hover'));}
function cancelAlbumDrag(){
 const d=albumDrag;albumDrag=null;if(d){d.ghost?.remove();try{document.documentElement.releasePointerCapture(d.pointer);}catch{}}
 cancelAnimationFrame(dragFrame);dragFrame=0;pageHover=null;clearDropMarks();document.body.classList.remove('album-dragging');document.querySelectorAll('.drag-source').forEach(el=>el.classList.remove('drag-source'));
}
function chooseAlbumCard(id){
 if(!window.albumArranging)return;
 if(pickedAlbumCard===id){pickedAlbumCard=null;renderAlbums();announceArrange(arrangeDefault);return;}
 pickedAlbumCard=id;renderAlbums();const c=cards.find(c=>c.id===id);announceArrange((c?.name||'Karte')+' ausgewählt. Tippe auf die gewünschte Zielkarte. Zum Abbrechen erneut auf den Griff tippen.');focusAlbumHandle(id);
}
function placePicked(index){if(!pickedAlbumCard)return;const id=pickedAlbumCard;pickedAlbumCard=null;if(!moveAlbumCard(id,index)){renderAlbums();focusAlbumHandle(id);}}
function startAlbumPointer(e,card,element){
 if(e.button!==0||albumDrag||!window.albumArranging)return;e.preventDefault();
 albumDrag={id:card.id,album:currentAlbum,pointer:e.pointerId,startX:e.clientX,startY:e.clientY,x:e.clientX,y:e.clientY,moving:false,target:null,source:element,ghost:null};
 try{document.documentElement.setPointerCapture(e.pointerId);}catch{}
}
function beginDragVisual(){
 const d=albumDrag;if(!d)return;d.moving=true;pickedAlbumCard=null;
 d.source.classList.add('drag-source');document.querySelectorAll('.picked-card').forEach(el=>el.classList.remove('picked-card'));
 const ghost=create('div','album-drag-ghost');ghost.setAttribute('aria-hidden','true');const img=d.source.querySelector('img');if(img?.complete&&img.naturalWidth){const canvas=document.createElement('canvas');canvas.width=100;canvas.height=126;const scale=Math.min(100/img.naturalWidth,126/img.naturalHeight),w=img.naturalWidth*scale,h=img.naturalHeight*scale;canvas.getContext('2d').drawImage(img,(100-w)/2,(126-h)/2,w,h);ghost.append(canvas);}else ghost.append(icon('book'));
 ghost.append(create('b','',cards.find(c=>c.id===d.id)?.name||'Karte'));document.body.append(ghost);d.ghost=ghost;document.body.classList.add('album-dragging');
 announceArrange('Ziehe die Karte an ihre neue Position. Zum Abbrechen außerhalb des Albums loslassen oder Escape drücken.');dragFrame=requestAnimationFrame(dragTick);
}
function updateDropTarget(){
 const d=albumDrag;if(!d?.moving)return;clearDropMarks();
 const hit=document.elementFromPoint(d.x,d.y),nav=hit?.closest('#binderPrev,#binderNext');
 if(nav&&!nav.disabled){nav.classList.add('page-hover');if(pageHover!==nav.id){pageHover=nav.id;pageHoverAt=performance.now();}}else pageHover=null;
 const target=hit?.closest('#albumDetail [data-album-index]');d.target=null;
 if(!target||target.dataset.albumCard===d.id)return;
 let index;
 if(target.dataset.albumCard){const rect=target.getBoundingClientRect(),after=d.x>rect.left+rect.width/2;index=PokeCore.albumDropIndex(orderedAlbum(),d.id,target.dataset.albumCard,after);target.classList.add(after?'drop-after':'drop-before');}
 else{index=orderedAlbum().length-1;target.classList.add('drop-empty');}
 if(index>=0){d.target=index;announceArrange('Loslassen: Position '+(index+1)+' von '+orderedAlbum().length+'.');}
}
function dragTick(now){
 const d=albumDrag;if(!d?.moving)return;
 const width=112,height=158,x=Math.min(innerWidth-width-6,Math.max(6,d.x+14)),y=Math.min(innerHeight-height-6,Math.max(6,d.y+14));
 d.ghost.style.transform='translate('+x+'px,'+y+'px)';
 const bottom=innerWidth<=760?innerHeight-95:innerHeight-35,top=70;
 const overPageControl=document.elementFromPoint(d.x,d.y)?.closest('#binderPrev,#binderNext');
 if(!overPageControl&&d.y>bottom)window.scrollBy(0,Math.min(17,(d.y-bottom)/4+3));else if(!overPageControl&&d.y<top)window.scrollBy(0,-Math.min(17,(top-d.y)/4+3));
 updateDropTarget();
 if(pageHover&&now-pageHoverAt>700){const direction=pageHover==='binderNext'?1:-1;pageHoverAt=now;turnPage(direction);announceArrange('Seite '+(binderIndex+1)+'. Ziehe die Karte auf das gewünschte Fach.');}
 dragFrame=requestAnimationFrame(dragTick);
}
document.addEventListener('pointermove',e=>{const d=albumDrag;if(!d||e.pointerId!==d.pointer)return;d.x=e.clientX;d.y=e.clientY;if(!d.moving&&Math.hypot(d.x-d.startX,d.y-d.startY)>=7)beginDragVisual();if(d.moving){e.preventDefault();updateDropTarget();}},{passive:false});
function finishAlbumPointer(e){
 const d=albumDrag;if(!d||e.pointerId!==d.pointer)return;
 const cancelled=e.type==='pointercancel'||d.album!==currentAlbum||currentView!=='albums';
 if(d.moving){d.x=e.clientX;d.y=e.clientY;updateDropTarget();}
 const index=d.target;cancelAlbumDrag();
 if(cancelled){announceArrange('Verschieben abgebrochen.');return;}
 if(!d.moving){chooseAlbumCard(d.id);return;}
 if(index===null){announceArrange('Keine neue Position gewählt. Die Karte bleibt an ihrer bisherigen Stelle.');return;}
 moveAlbumCard(d.id,index);
}
document.documentElement.addEventListener('lostpointercapture',e=>{if(albumDrag?.pointer===e.pointerId){cancelAlbumDrag();announceArrange('Verschieben abgebrochen.');}});
document.addEventListener('pointerup',finishAlbumPointer);document.addEventListener('pointercancel',finishAlbumPointer);
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(albumDrag){e.preventDefault();cancelAlbumDrag();announceArrange('Verschieben abgebrochen.');}else if(pickedAlbumCard){e.preventDefault();pickedAlbumCard=null;renderAlbums();announceArrange(arrangeDefault);}});
window.addEventListener('blur',()=>{if(albumDrag){cancelAlbumDrag();announceArrange('Verschieben abgebrochen.');}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAlbumDrag();});
function decorateAlbum(){
 if(currentView!=='albums'||!currentAlbum||arrangeAlbumId!==currentAlbum){cancelAlbumDrag();window.albumArranging=false;pickedAlbumCard=null;arrangeAlbumId=currentAlbum;}
 $('albums').classList.toggle('viewing-album',!!currentAlbum);
 const list=orderedAlbum(),button=$('arrangeAlbum');button.replaceChildren(icon(window.albumArranging?'check':'move'),create('span','',window.albumArranging?'Fertig':'Anordnen'));button.setAttribute('aria-pressed',String(window.albumArranging));button.disabled=list.length<2;
 $('arrangeHint').hidden=!window.albumArranging;const binderHelp=$('binder').querySelector(':scope>p');if(binderHelp)binderHelp.textContent=window.albumArranging?'Mit den Pfeilen unten blättern. Zum Verschieben am Griff ziehen oder eine Position wählen.':'Wischen oder Pfeiltasten zum Blättern. Tippe auf eine Karte für Details.';$('albumGrid').setAttribute('aria-pressed',String(!binderMode));$('albumBinder').setAttribute('aria-pressed',String(binderMode));
 if(!window.albumArranging)announceArrange(arrangeDefault);
 if(currentAlbum){$('albumStats').textContent=list.length+' '+(list.length===1?'Eintrag':'Einträge')+' · '+Math.max(1,Math.ceil(list.length/9))+' '+(list.length<=9?'Seite':'Seiten');}
 [...$('albumCards').querySelectorAll('.card-tile')].forEach((el,i)=>decorateSlot(el,list[i],i));
 if(binderMode)[...$('binderPage').children].forEach((el,i)=>decorateSlot(el,list[binderIndex*9+i],binderIndex*9+i));
 if(currentAlbum&&!list.length){const area=binderMode?$('binderPage'):$('albumCards');empty(area,'Noch keine Karten im Album','Füge Karten aus deiner Sammlung hinzu oder scanne eine neue Karte.',{label:'Karten hinzufügen',run:openAlbumAdd});}
 function decorateSlot(el,card,index){
  el.dataset.albumIndex=String(index);if(card)el.dataset.albumCard=card.id;
  el.classList.toggle('arrange-card',window.albumArranging);el.classList.toggle('picked-card',pickedAlbumCard===card?.id);el.classList.toggle('drag-source',!!(albumDrag?.moving&&albumDrag.id===card?.id));
  if(card?.favorite){el.classList.add('is-favorite');if(binderMode){const badge=create('span','binder-favorite');badge.setAttribute('aria-label','Favorit');badge.append(icon('heart-filled'));el.append(badge);}}
  if(!window.albumArranging)return;
  if(el.tagName==='BUTTON'){const box=create('div',el.className);Object.assign(box.dataset,el.dataset);box.append(...el.childNodes);el.replaceWith(box);el=box;}
  if(!card){el.tabIndex=pickedAlbumCard?0:-1;el.setAttribute('role','button');el.setAttribute('aria-label','An das Albumende verschieben');el.onclick=()=>placePicked(list.length-1);el.onkeydown=e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();placePicked(list.length-1);}};return;}
  const open=el.querySelector('.card-open');if(open){open.onclick=()=>{if(pickedAlbumCard)placePicked(index);else chooseAlbumCard(card.id);};open.setAttribute('aria-label',pickedAlbumCard?'Hierher verschieben: '+card.name:card.name+' zum Verschieben auswählen');}
  else{const target=create('button','binder-card-target');target.type='button';target.setAttribute('aria-label',pickedAlbumCard?'Hierher verschieben: '+card.name:card.name+' zum Verschieben auswählen');target.append(...el.childNodes);el.append(target);target.onclick=()=>{if(pickedAlbumCard)placePicked(index);else chooseAlbumCard(card.id);};}
  const controls=create('div','arrange-controls'),handle=create('button','drag-handle'),position=create('button','position-handle');handle.type=position.type='button';handle.append(icon('grip'));position.append(icon('move'));
  handle.setAttribute('aria-label',card.name+' verschieben');handle.setAttribute('aria-pressed',String(pickedAlbumCard===card.id));handle.title='Ziehen oder antippen';position.setAttribute('aria-label','Position für '+card.name+' wählen');position.title='Genaue Position wählen';
  handle.onpointerdown=e=>startAlbumPointer(e,card,el);handle.onclick=e=>{e.stopPropagation();if(e.detail===0)chooseAlbumCard(card.id);};position.onclick=e=>{e.stopPropagation();openAlbumPosition(card.id);};
  handle.onkeydown=e=>{const columns=getComputedStyle(binderMode?$('binderPage'):$('albumCards')).gridTemplateColumns.split(' ').length;const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-columns,ArrowDown:columns}[e.key];if(delta!==undefined){e.preventDefault();moveAlbumCard(card.id,index+delta);}else if(e.key==='Home'||e.key==='End'){e.preventDefault();moveAlbumCard(card.id,e.key==='Home'?0:list.length-1);}};
  controls.append(handle,position);el.append(controls);
 }
}
$('arrangeAlbum').onclick=()=>{cancelAlbumDrag();pickedAlbumCard=null;window.albumArranging=!window.albumArranging;arrangeAlbumId=currentAlbum;renderAlbums();if(window.albumArranging)announceArrange(arrangeDefault);};
const baseBackAlbums=backAlbums;backAlbums=function(){cancelAlbumDrag();pickedAlbumCard=null;window.albumArranging=false;arrangeAlbumId=null;baseBackAlbums();$('albums').classList.remove('viewing-album');};$('backAlbums').onclick=backAlbums;
const baseRenderAlbums=renderAlbums;renderAlbums=function(){baseRenderAlbums();decorateAlbum();};
// Exact position is available without dragging, including across binder pages.
const posDialog=create('dialog','ui-dialog');posDialog.id='albumPositionDialog';posDialog.setAttribute('aria-labelledby','albumPositionTitle');
posDialog.innerHTML='<form id="albumPositionForm"><div class="ui-dialog-head"><h2 id="albumPositionTitle">Karte verschieben</h2><button class="icon-button" type="button" data-close="albumPositionDialog" aria-label="Schließen"></button></div><p id="albumPositionCard" class="muted"></p><label>Neue Position<input id="albumPositionInput" type="number" min="1" step="1" required inputmode="numeric"></label><p id="albumPositionHint" class="hint" role="status"></p><button type="submit" class="btn primary wide">Verschieben</button></form>';
posDialog.querySelector('[data-close]').append(icon('close'));posDialog.querySelector('[data-close]').onclick=()=>posDialog.close();document.body.append(posDialog);let positionCard=null;
function openAlbumPosition(id){const list=orderedAlbum(),index=list.findIndex(c=>c.id===id);if(index<0)return;positionCard={id,album:currentAlbum};$('albumPositionCard').textContent=list[index].name;$('albumPositionInput').max=list.length;$('albumPositionInput').value=index+1;updatePositionHint();posDialog.showModal();$('albumPositionInput').focus();$('albumPositionInput').select();}
function updatePositionHint(){const n=Number($('albumPositionInput').value),max=Number($('albumPositionInput').max);$('albumPositionHint').textContent=Number.isInteger(n)&&n>=1&&n<=max?'Seite '+(Math.floor((n-1)/9)+1)+' · Fach '+((n-1)%9+1)+' · insgesamt '+max+' Positionen':'Bitte eine ganze Zahl von 1 bis '+max+' eingeben.';}
$('albumPositionInput').oninput=updatePositionHint;$('albumPositionForm').onsubmit=e=>{e.preventDefault();const n=Number($('albumPositionInput').value);if(!positionCard||positionCard.album!==currentAlbum||!Number.isInteger(n)||n<1||n>orderedAlbum().length)return;posDialog.close();moveAlbumCard(positionCard.id,n-1);};
// Add existing cards directly in the album instead of editing each card separately.
const addDialog=create('dialog','ui-dialog album-add-dialog');addDialog.id='albumAddDialog';addDialog.setAttribute('aria-labelledby','albumAddTitle');
addDialog.innerHTML='<div class="ui-dialog-head"><h2 id="albumAddTitle">Karten hinzufügen</h2><button class="icon-button" type="button" aria-label="Schließen"></button></div><p class="hint">Wähle Karten aus deiner Sammlung. Vorhandene Zuordnungen bleiben erhalten.</p><input id="albumAddSearch" type="search" aria-label="Karten im Hinzufügen-Menü suchen" placeholder="Name, Set oder Nummer suchen"><div id="albumAddList" class="album-add-list"></div><div class="album-add-footer"><button id="albumAddNew" class="btn secondary" type="button">Neue Karte scannen</button><button id="albumAddSave" class="btn primary" type="button" disabled>Hinzufügen</button></div>';
addDialog.querySelector('.icon-button').append(icon('close'));addDialog.querySelector('.icon-button').onclick=()=>addDialog.close();document.body.append(addDialog);let addAlbumId=null,addSelection=new Set();
function openAlbumAdd(){if(!currentAlbum)return;addAlbumId=currentAlbum;addSelection=new Set();$('albumAddSearch').value='';renderAlbumAdd();addDialog.showModal();}
function renderAlbumAdd(){const q=norm($('albumAddSearch').value),list=cards.filter(c=>!c.albumIds?.includes(addAlbumId)&&(!q||norm([c.name,c.set,c.number].join(' ')).includes(q))),area=$('albumAddList');area.replaceChildren();for(const c of list.slice(0,180)){const label=create('label','album-add-option'),input=create('input'),img=create('img'),text=create('span');input.type='checkbox';input.value=c.id;input.checked=addSelection.has(c.id);input.onchange=()=>{if(input.checked)addSelection.add(c.id);else addSelection.delete(c.id);updateAddButton();};img.alt='';img.loading='lazy';label.append(input,img);text.append(create('b','',c.name),create('small','',[c.set,c.number,c.language].filter(Boolean).join(' · ')));label.append(text);if(c.favorite)label.append(icon('heart-filled'));area.append(label);bestImage(c,img);}if(!list.length)area.append(create('p','empty-copy',q?'Keine passenden Karten. Ändere den Suchbegriff.':cards.length?'Alle Karten deiner Sammlung sind bereits in diesem Album.':'Deine Sammlung ist noch leer. Scanne zuerst eine Karte.'));if(list.length>180)area.append(create('p','hint','Die ersten 180 Karten werden angezeigt. Grenze die Liste mit der Suche ein.'));updateAddButton();}
function updateAddButton(){$('albumAddSave').textContent=addSelection.size?addSelection.size+' hinzufügen':'Hinzufügen';$('albumAddSave').disabled=!addSelection.size;}
$('albumAddSearch').oninput=renderAlbumAdd;$('albumAddCards').onclick=openAlbumAdd;
$('albumAddNew').onclick=()=>{const id=addAlbumId;if(!albums.some(a=>a.id===id))return;addDialog.close();go('add');$('albumSelect').value=id;window.refreshCustomSelects?.();toast('Neue Karte wird in diesem Album gespeichert.');};
$('albumAddSave').onclick=()=>{if(!albums.some(a=>a.id===addAlbumId))return toast('Das Album existiert nicht mehr.');let count=0;const next=cards.map(c=>{if(!addSelection.has(c.id)||c.albumIds?.includes(addAlbumId))return c;count++;return{...c,albumIds:[...(c.albumIds||[]),addAlbumId]};});if(count&&commit(next)){addDialog.close();toast(count+' '+(count===1?'Karte hinzugefügt':'Karten hinzugefügt'));}};
renderAlbums();
