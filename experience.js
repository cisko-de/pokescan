/* A compact mobile workflow and album-local card order. */
'use strict';
$('changeMatch').onclick=()=>{$('matchesDisclosure').open=true;$('matchesDisclosure').scrollIntoView({behavior:'smooth',block:'start'});};
function syncWorkflow(){
 const summary=$('quickPrice');summary.textContent=$('manualReference').value!==''?'Eigene Schätzung: '+money(Number($('manualReference').value)):quote?'Referenzwert: '+money(quote.price):selected?'Treffer übernommen · Finish prüfen. Preisdetails unten.':'Ohne Datenbanktreffer wird die Karte manuell gespeichert.';
 $('changeMatch').hidden=!selected;
 const steps=$('cardForm').querySelectorAll('.scan-steps span');steps.forEach((el,i)=>el.classList.toggle('done',i===0?!!activePhoto:i===1?!!selected:false));
}
new MutationObserver(syncWorkflow).observe($('selectedCard'),{childList:true,subtree:true,characterData:true});
new MutationObserver(syncWorkflow).observe($('priceResult'),{childList:true,subtree:true,characterData:true});
$('manualReference').addEventListener('input',syncWorkflow);syncWorkflow();
$('startEdit').addEventListener('click',()=>{for(const d of $('editForm').querySelectorAll('details'))d.open=false;$('editForm').scrollIntoView({block:'start'});});
window.albumArranging=false;
let dragState=null,arrangeAlbumId=null;
function orderedAlbum(){const album=albums.find(a=>a.id===currentAlbum);return album?PokeCore.albumCards(cards,album):[];}
function moveAlbumCard(id,index){
 const album=albums.find(a=>a.id===currentAlbum);if(!album)return false;
 const list=orderedAlbum(),cardOrder=PokeCore.moveInAlbum(list,id,index);if(binderMode)binderIndex=Math.floor(Math.max(0,Math.min(index,list.length-1))/9);
 return commit(cards,albums.map(a=>a.id===album.id?{...a,cardOrder}:a));
}
function finishDrag(e){
 if(!dragState||e.pointerId!==dragState.pointer)return;
 const state=dragState;dragState=null;state.handle.classList.remove('dragging');
 const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-album-card]');
 document.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));
 if(e.type!=='pointercancel'&&target&&target.dataset.albumCard!==state.id){const index=orderedAlbum().findIndex(c=>c.id===target.dataset.albumCard);if(moveAlbumCard(state.id,index))toast('Reihenfolge gespeichert');}
}
function decorateAlbum(){
 if(!currentAlbum||arrangeAlbumId!==currentAlbum){window.albumArranging=false;arrangeAlbumId=currentAlbum;}
 const button=$('arrangeAlbum');button.textContent=window.albumArranging?'Anordnen beenden':'Karten anordnen';button.setAttribute('aria-pressed',String(window.albumArranging));
 $('arrangeHint').hidden=!window.albumArranging;
 const list=orderedAlbum();let elements=[...$('albumCards').querySelectorAll('.card-tile')];
 elements.forEach((el,i)=>attachArrange(el,list[i],i));
 if(binderMode){elements=[...$('binderPage').children];elements.forEach((el,i)=>attachArrange(el,list[binderIndex*9+i],binderIndex*9+i));}
 function attachArrange(el,card,index){
  el.querySelector('.arrange-controls')?.remove();el.classList.toggle('arrange-card',window.albumArranging);
  if(!card)return;el.dataset.albumCard=card.id;if(!window.albumArranging)return;
  // Binder slots become containers during arrange mode to avoid nested buttons.
  if(el.tagName==='BUTTON'){
   const replacement=create('div',el.className);replacement.dataset.albumCard=card.id;replacement.append(...el.childNodes);el.replaceWith(replacement);el=replacement;
  }
  if(el.querySelector('.card-open')){el.querySelector('.card-open').onclick=null;el.querySelector('.card-open').tabIndex=-1;}
  const controls=create('div','arrange-controls'),handle=create('button','drag-handle','⠿'),prev=create('button','','←'),next=create('button','','→');
  handle.type=prev.type=next.type='button';handle.setAttribute('aria-label',card.name+' ziehen');handle.title='Ziehen zum Verschieben';
  prev.setAttribute('aria-label',card.name+' eine Position nach vorne');next.setAttribute('aria-label',card.name+' eine Position nach hinten');prev.disabled=index===0;next.disabled=index===list.length-1;
  prev.onclick=()=>{if(moveAlbumCard(card.id,index-1)){toast('Reihenfolge gespeichert');requestAnimationFrame(()=>document.querySelector('[data-album-card="'+CSS.escape(card.id)+'"] .arrange-controls button:nth-child(2)')?.focus());}};
  next.onclick=()=>{if(moveAlbumCard(card.id,index+1)){toast('Reihenfolge gespeichert');requestAnimationFrame(()=>document.querySelector('[data-album-card="'+CSS.escape(card.id)+'"] .arrange-controls button:last-child')?.focus());}};
  handle.onpointerdown=e=>{if(e.button!==0)return;e.preventDefault();dragState={id:card.id,pointer:e.pointerId,handle};handle.classList.add('dragging');handle.setPointerCapture(e.pointerId);};
  handle.onpointermove=e=>{if(!dragState||e.pointerId!==dragState.pointer)return;e.preventDefault();const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-album-card]');document.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));if(target&&target.dataset.albumCard!==card.id)target.classList.add('drop-target');if(e.clientY>innerHeight-100)window.scrollBy(0,12);else if(e.clientY<100)window.scrollBy(0,-12);};
  handle.onpointerup=handle.onpointercancel=finishDrag;
  handle.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();const delta=['ArrowLeft','ArrowUp'].includes(e.key)?-1:1;if(moveAlbumCard(card.id,index+delta))requestAnimationFrame(()=>document.querySelector('[data-album-card="'+CSS.escape(card.id)+'"] .drag-handle')?.focus());};
  controls.append(prev,handle,next);el.append(controls);
 }
}
$('arrangeAlbum').onclick=()=>{window.albumArranging=!window.albumArranging;arrangeAlbumId=currentAlbum;renderAlbums();};
const originalRenderAlbums=renderAlbums;renderAlbums=function(){originalRenderAlbums();decorateAlbum();};
renderAlbums();
