/* A compact mobile workflow and album-local card order. */
'use strict';
$('changeMatch').onclick=()=>{$('matchesDisclosure').open=true;$('matchesDisclosure').scrollIntoView({behavior:'smooth',block:'start'});};
function syncWorkflow(){
 const summary=$('quickPrice'),usd=selected?._market?.usd;summary.textContent=$('manualReference').value!==''?'Eigene Schätzung: '+money(Number($('manualReference').value)):quote?'EUR-Referenz: '+money(quote.price)+(usd?' · US: '+Number(usd.price).toLocaleString('de-DE',{style:'currency',currency:'USD'}):''):selected?(finish(draftVariant())==='Unklar'?'Oberfläche wählen – verfügbare Referenzen stehen hier.':'Für diese Variante kein eindeutiger EUR-Preis.'):'Ohne Datenbanktreffer wird die Karte manuell gespeichert.';
 $('changeMatch').hidden=!selected;
 const steps=$('cardForm').querySelectorAll('.scan-steps span');steps.forEach((el,i)=>el.classList.toggle('done',i===0?!!activePhoto:i===1?!!selected:false));
}
new MutationObserver(syncWorkflow).observe($('selectedCard'),{childList:true,subtree:true,characterData:true});
new MutationObserver(syncWorkflow).observe($('priceResult'),{childList:true,subtree:true,characterData:true});
$('manualReference').addEventListener('input',syncWorkflow);syncWorkflow();
$('startEdit').addEventListener('click',()=>{for(const d of $('editForm').querySelectorAll('details'))d.open=false;$('editForm').scrollIntoView({block:'start'});});
