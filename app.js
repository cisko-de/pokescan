'use strict';
const KEY='pokescan.collection.v1';let cards=[];
try{const data=JSON.parse(localStorage.getItem(KEY)||'[]');if(Array.isArray(data))cards=data;}catch(e){console.warn('Storage unreadable',e)}
const $=id=>document.getElementById(id);
function persist(){try{localStorage.setItem(KEY,JSON.stringify(cards));return true}catch(e){alert('Speichern fehlgeschlagen. Bitte Speicherplatz prüfen.');return false}}
function show(view){document.querySelectorAll('.view').forEach(el=>el.classList.toggle('hidden',el.id!==view));document.querySelectorAll('nav button').forEach(el=>el.classList.toggle('active',el.dataset.view===view));if(view==='collection')render()}
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));
function render(){const list=$('cards');list.replaceChildren();const q=$('search').value.toLocaleLowerCase();const filtered=cards.filter(c=>(c.name+' '+c.set+' '+c.number).toLocaleLowerCase().includes(q));$('count').textContent=cards.reduce((a,c)=>a+c.quantity,0);$('unique').textContent=cards.length;if(!filtered.length){const empty=document.createElement('div');empty.className='empty';empty.textContent=cards.length?'Keine passenden Karten gefunden.':'Noch keine Karten gespeichert. Tippe auf „+ Karte“. ';list.append(empty)}for(const c of filtered){const item=document.createElement('div');item.className='card';const symbol=document.createElement('span');symbol.className='symbol';symbol.textContent='✦';const detail=document.createElement('div');detail.className='detail';const title=document.createElement('strong');title.textContent=c.name;const meta=document.createElement('small');meta.textContent=[c.set,c.number,c.variant,c.condition,'×'+c.quantity].filter(Boolean).join(' · ');detail.append(title,meta);const del=document.createElement('button');del.textContent='Löschen';del.addEventListener('click',()=>{if(confirm('Karte löschen?')){cards=cards.filter(x=>x.id!==c.id);persist();render()}});item.append(symbol,detail,del);list.append(item)}}
$('search').addEventListener('input',render);
$('photo').addEventListener('change',()=>{const f=$('photo').files[0];if(!f)return;const img=$('preview');img.src=URL.createObjectURL(f);img.classList.remove('hidden');img.onload=()=>URL.revokeObjectURL(img.src)});
$('cardForm').addEventListener('submit',e=>{e.preventDefault();const c={id:crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random(),name:$('name').value.trim(),set:$('set').value.trim(),number:$('number').value.trim(),language:$('language').value,variant:$('variant').value,condition:$('condition').value,quantity:Number($('quantity').value)};if(!c.name||!Number.isInteger(c.quantity)||c.quantity<1)return;if(!persistWith(c))return;$('cardForm').reset();$('preview').classList.add('hidden');show('collection')});
function persistWith(c){cards.push(c);if(!persist()){cards.pop();return false}return true}
$('export').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({format:'pokescan-backup-v1',cards},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='pokescan-backup-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)});
$('import').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>5e6)throw Error('Datei zu groß');const data=JSON.parse(await f.text());if(data.format!=='pokescan-backup-v1'||!Array.isArray(data.cards))throw Error('Ungültiges Backup');const safe=data.cards.filter(c=>c&&typeof c.name==='string'&&c.name.length<=100&&Number.isInteger(c.quantity)&&c.quantity>0).map(c=>({id:String(c.id||Math.random()),name:c.name,set:String(c.set||''),number:String(c.number||''),language:String(c.language||''),variant:String(c.variant||''),condition:String(c.condition||''),quantity:c.quantity}));if(!confirm('Aktuelle Sammlung durch '+safe.length+' importierte Karten ersetzen?'))return;const previous=cards;cards=safe;if(!persist())cards=previous;else{alert('Backup importiert.');render()}}catch(err){alert('Import fehlgeschlagen: '+err.message)}finally{e.target.value=''}});
$('refresh').addEventListener('click',async()=>{if('serviceWorker'in navigator){const reg=await navigator.serviceWorker.getRegistration();if(reg){await reg.update();$('updateStatus').textContent='Updateprüfung abgeschlossen. Bei neuer Version die App neu öffnen.';return}}$('updateStatus').textContent='Kein Service Worker aktiv. Bitte über HTTPS öffnen.'});
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));render();

// Optional OCR beta: Tesseract.js is loaded on demand. No image is uploaded by our app.
// The library and recognition models are fetched from third-party CDNs; use only with consent.
$('scan').addEventListener('click', async () => {
 const file=$('photo').files[0];const status=$('scanStatus');
 if(!file){status.textContent='Bitte zuerst ein Kartenfoto auswählen.';return}
 if(!navigator.onLine){status.textContent='Texterkennung benötigt eine Internetverbindung.';return}
 if(!confirm('Für die Texterkennung werden Tesseract.js und Sprachmodelle von externen Servern geladen. Fortfahren?'))return;
 $('scan').disabled=true;status.textContent='Texterkennung wird geladen…';
 try{
  if(!window.Tesseract){await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';script.onload=resolve;script.onerror=()=>reject(Error('OCR-Bibliothek konnte nicht geladen werden'));document.head.appendChild(script)})}
  status.textContent='Foto wird gelesen. Das kann etwas dauern…';
  const result=await Tesseract.recognize(file,'eng');
  const lines=result.data.text.split(/\n/).map(x=>x.trim()).filter(Boolean);
  const number=(result.data.text.match(/\b\d{1,3}\s*\/\s*\d{2,3}\b/)||[])[0];
  if(number)$('number').value=number.replace(/\s/g,'');
  if(lines.length && !$('name').value)$('name').value=lines.find(x=>/[A-Za-zÀ-ÿ]{3}/.test(x))?.slice(0,100)||'';
  status.textContent='Erkennung abgeschlossen. Bitte Name, Set und Nummer kontrollieren. OCR kann Fehler machen.';
 }catch(err){status.textContent='OCR fehlgeschlagen: '+err.message+'. Du kannst die Karte manuell eintragen.'}
 finally{$('scan').disabled=false}
});
