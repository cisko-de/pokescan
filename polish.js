/* Consistent favorites, short navigation and readable details. */
'use strict';
function toggleFavorite(id){const c=cards.find(c=>c.id===id);if(!c)return false;const on=!c.favorite;if(!updateCard(id,{favorite:on},'Favorit geändert'))return false;toast(on?'Zu Favoriten hinzugefügt':'Favorit entfernt');return true;}
function syncDetailFavorite(){const c=detailCard();if(!c)return;$('detailHeart').replaceChildren(icon(c.favorite?'heart-filled':'heart'));$('detailHeart').classList.toggle('liked',!!c.favorite);$('detailHeart').setAttribute('aria-pressed',String(!!c.favorite));$('detailHeart').setAttribute('aria-label',c.favorite?'Favorit entfernen':'Als Favorit markieren');$('detailHeart').title=c.favorite?'Favorit entfernen':'Als Favorit markieren';}
const baseShowDetail=showDetail;
showDetail=function(){$('cardDialog').classList.remove('is-editing');baseShowDetail();if(!detailCard())return;const read=$('detailRead'),rows=[...read.querySelectorAll(':scope>.detail-line')],more=create('details','detail-extra fold-section'),body=create('div');more.append(create('summary','','Weitere Kartendaten'),body);
 const extrasLabels=new Set(['Seltenheit','Status','Grading','Kaufpreis / Karte','Alben','Tags']),priceLabels=new Set(['Preisquelle','Preisstand','Letzter Abruf']);const pricing=create('details','detail-extra fold-section'),priceBody=create('div');pricing.append(create('summary','','Preisquelle & Stand'),priceBody);
 for(const row of rows){const label=row.querySelector('span')?.textContent,value=row.querySelector('strong')?.textContent;if(extrasLabels.has(label)||priceLabels.has(label)){row.remove();if(!['–','Nicht verfügbar','Nicht erfasst','Unbekannt','Nicht bewertet'].includes(value)&&(label!=='Status'||value!=='Sammlung'))(priceLabels.has(label)?priceBody:body).append(row);}}
 const anchor=read.querySelector('.history-list');if(body.children.length)read.insertBefore(more,anchor);if(priceBody.children.length)read.insertBefore(pricing,anchor);
 const actionFold=$('detailActions').querySelector('details');if(actionFold)actionFold.open=false;syncDetailFavorite();
};
let editSnapshot=null;
const editValues=()=>JSON.stringify([...$('editForm').querySelectorAll('input,textarea,select')].map(el=>[el.id||el.value,el.type==='checkbox'?el.checked:el.value]));
window.hasUnsavedCardEdit=()=>!$('editForm').classList.contains('hidden')&&editSnapshot!==null&&editSnapshot!==editValues();
$('startEdit').addEventListener('click',()=>{$('cardDialog').classList.add('is-editing');editSnapshot=editValues();});
async function discardEdit(){if(!window.hasUnsavedCardEdit())return true;return confirmAction('Änderungen verwerfen?','Deine Änderungen an dieser Karte wurden noch nicht gespeichert.','Verwerfen');}
async function requestDetailClose(){if(await discardEdit()){$('cardDialog').close();editSnapshot=null;}}
$('closeDetail').onclick=requestDetailClose;$('cardDialog').addEventListener('cancel',e=>{e.preventDefault();requestDetailClose();});
$('cardDialog').addEventListener('click',e=>{if(e.target!==$('cardDialog'))return;const r=$('cardDialog').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)requestDetailClose();});
$('cancelEdit').onclick=async()=>{if(await discardEdit()){showDetail();editSnapshot=null;}};
$('detailHeart').onclick=()=>{const editing=!$('editForm').classList.contains('hidden');if(toggleFavorite(detailId)){if(editing)syncDetailFavorite();else showDetail();}};
window.addEventListener('beforeunload',e=>{if(window.hasUnsavedCardEdit()){e.preventDefault();e.returnValue='';}});
// A filtered empty collection should help remove filters, not send users to an unrelated form.
const baseFill=fill;fill=function(node,list,title,message){baseFill(node,list,title,message);if(node.id==='cards'&&cards.length&&!list.length){const button=node.querySelector('button');if(button){button.textContent='Filter zurücksetzen';button.onclick=()=>$('resetFilters').click();}}};
// Favorites are reachable in one tap and show a count.
const baseRender=render;render=function(){baseRender();const count=cards.filter(c=>c.favorite).length,quick=document.querySelector('[data-go="favorites"] small');if(quick)quick.textContent=count?count+' '+(count===1?'markierte Karte':'markierte Karten'):'Mit dem Herz markieren';$('favorites').querySelector('.eyebrow').textContent=count+' '+(count===1?'LIEBLINGSKARTE':'LIEBLINGSKARTEN');};
// All filter languages already supported by recognition should also be selectable here.
const languageFilter=$('filterLanguage'),previous=languageFilter.value;languageFilter.replaceChildren(new Option('Alle Sprachen',''),...PokeLanguages.entries.map(([name])=>new Option(name,name)),new Option('Andere','Andere'),new Option('Unklar','Unklar'));languageFilter.value=previous;
// Match thumbnails always keep a useful alt label; keyboard focus is visible across the app.
render();window.refreshCustomSelects?.();
