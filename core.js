/* Shared, dependency-free data rules. No network or storage side effects. */
(function (root) {
  'use strict';
  const norm = value => String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]/gu, '');
  const collectorId = value => String(value ?? '').split('/')[0].replace(/\s/g, '').replace(/^0+(?=\d)/, '').toUpperCase();
  function numberFrom(text) {
    const value = String(text || '').replace(/[Ｏ０]/g, '0').replace(/[Ｉｌ]/g, '1').replace(/[／\\]/g, '/');
    const match = value.match(/(?:^|[^A-Z0-9])((?:SV|TG|GG|RC)?\s*\d{1,4}[a-z]?)\s*\/\s*((?:SV|TG|GG|RC)?\s*\d{1,4})(?!\d)/i);
    return match ? (match[1] + '/' + match[2]).replace(/\s/g, '').toUpperCase() : (value.match(/\b(?:SV|TG|GG|RC)\s*\d{1,3}\b/i)?.[0] || '').replace(/\s/g, '').toUpperCase();
  }
  function similarity(a, b) {
    a = norm(a); b = norm(b); if (!a || !b) return 0; if (a === b) return 1;
    const row = Array.from({length:b.length + 1}, (_, i) => i);
    for (let i = 1; i <= a.length; i++) { let prev = row[0]; row[0] = i; for (let j = 1; j <= b.length; j++) { const old = row[j]; row[j] = Math.min(row[j]+1, row[j-1]+1, prev+(a[i-1] === b[j-1] ? 0 : 1)); prev = old; } }
    return 1 - row[b.length] / Math.max(a.length,b.length);
  }
  const edition = c => c.edition || (c.variant === '1st Edition' ? 'first' : 'unlimited');
  const finish = c => ['1st Edition','Shadowless'].includes(c.variant) ? 'Unklar' : (c.variant || 'Unklar');
  const shadowless = c => !!c.shadowless || c.variant === 'Shadowless';
  const duplicateKey = c => [c.tcgdexId || norm(c.name)+'|'+norm(c.set)+'|'+collectorId(c.number),norm(c.language),norm(finish(c)),edition(c),shadowless(c),norm(c.condition),norm(c.grader),c.grade ?? ''].join('|');
  const variantLabel = c => [finish(c),edition(c)==='first'?'1st Edition':'',shadowless(c)?'Shadowless':''].filter(Boolean).join(' · ');
  function priceDate(value){if(value===null||value===undefined)return null;const v=typeof value==='number'?value*(value<1e12?1000:1):value;const d=new Date(v);return Number.isNaN(d.getTime())?null:d.toISOString();}
  function priceQuote(data,c,metric='trend'){
    if(c.grader||edition(c)==='unknown')return null;
    const f=finish(c),type=({'Normal':'normal','Holo':'holo','Reverse Holo':'reverse'})[f];if(!type)return null;
    const details=Array.isArray(data?.variants_detailed)?data.variants_detailed:[],special=edition(c)==='first'||shadowless(c);
    const matching=details.filter(v=>{const first=(v.stamp||[]).includes('1st-edition')||v.subtype==='first-edition',shadow=v.subtype==='shadowless';return v.type===type&&(!v.size||v.size==='standard')&&first===(edition(c)==='first')&&shadow===shadowless(c)&&(!v.subtype||['unlimited','shadowless','first-edition'].includes(v.subtype))&&!(v.stamp||[]).some(x=>x!=='1st-edition');});
    const detailed=matching.length===1?matching[0]:null;
    if(special&&!detailed?.pricing?.cardmarket)return null;
    let cm=detailed?.pricing?.cardmarket||data?.pricing?.cardmarket;if(!cm||(cm.unit||'EUR')!=='EUR')return null;
    if(special&&details.some(v=>v!==detailed&&v.pricing?.cardmarket?.idProduct===cm.idProduct&&JSON.stringify([v.type,v.subtype,v.stamp])!==JSON.stringify([detailed.type,detailed.subtype,detailed.stamp])))return null;
    let suffix='';
    if(detailed?.pricing?.cardmarket){if(type==='reverse'){const shared=details.some(v=>v.type!==type&&v.pricing?.cardmarket?.idProduct===cm.idProduct);suffix=shared?'-holo':'';}}
    else {if(special||data?.variants?.[type]===false)return null;if(type==='reverse'){if(!data?.variants?.reverse||data?.variants?.holo)return null;suffix='-holo';}else if(type==='holo'){if(data?.variants?.holo&&data?.variants?.normal===false)suffix='';else if(data?.variants?.reverse||data?.variants?.normal)return null;else suffix='-holo';}}
    const preferred=['trend','avg7','avg30'].includes(metric)?metric:'trend',keys=[preferred,'trend','avg','avg7','avg30'],used=keys.find(k=>typeof cm[k+suffix]==='number'&&Number.isFinite(cm[k+suffix])&&cm[k+suffix]>0);if(!used)return null;
    const labels={trend:'Trend',avg:'Durchschnitt',avg7:'7-Tage-Mittel',avg30:'30-Tage-Mittel'};
    return{price:cm[used+suffix],source:'TCGdex / Cardmarket · '+variantLabel(c)+' · '+labels[used],date:priceDate(cm.updated),observedAt:new Date().toISOString(),metric:used,low:cm['low'+suffix]??null,avg7:cm['avg7'+suffix]??null,avg30:cm['avg30'+suffix]??null};
  }
  function usdQuote(data,c){if(shadowless(c)||edition(c)==='unknown'||c.grader)return null;const tp=data?.pricing?.tcgplayer;if(!tp||(tp.unit||'USD')!=='USD')return null;const f=finish(c),first=edition(c)==='first';const key=first?(f==='Holo'?'1st-edition-holofoil':f==='Normal'?'1st-edition':null):({'Normal':'normal','Holo':'holofoil','Reverse Holo':'reverse-holofoil'})[f];if(!key)return null;const v=tp[key]?.marketPrice;if(typeof v!=='number'||!Number.isFinite(v)||v<0)return null;return{price:v,currency:'USD',variant:key,date:priceDate(tp.updated)};}
  function ocrName(lines){const reject=/^(basic|basis|stage|phase|stufe|pokemon|pokémon|trainer|supporter|item|hp|kp|weakness|schwäche|resistance|resistenz|retreat|rückzug|ability|fähigkeit|illus|copyright|©|no\.|energy|energie|evolves|entwickelt|from|von|regel)(?:\s|$)/i;return lines.map(x=>x.replace(/^(?:BASIC|BASIS|STAGE\s*[12]|PHASE\s*[12]|STUFE\s*[12])\s*/i,'').replace(/\s*(?:(?:HP|KP|PS)\s*\d+|\d+\s*(?:HP|KP|PS)).*$/i,'').replace(/[^\p{L}\p{N}♀♂'.: −-]/gu,' ').replace(/\s+\d+\s*$/, '').replace(/\s+/g,' ').trim()).find(x=>x.length>=2&&x.length<=48&&!reject.test(x)&&(/[\p{L}]{3}/u.test(x)||/[\p{Script=Han}\p{Script=Hangul}\p{Script=Hiragana}\p{Script=Katakana}]{2}/u.test(x))&&!/^\d|\d{3}/.test(x))||'';}
  function ocrNumber(text){const original=numberFrom(text);if(original)return original;return numberFrom(String(text).replace(/([0-9OIl|]{1,4})\s*\/\s*([0-9OIl|]{1,4})/g,(_,a,b)=>a.replace(/[O]/g,'0').replace(/[Il|]/g,'1')+'/'+b.replace(/[O]/g,'0').replace(/[Il|]/g,'1')));}
  function resolveOCRTitle(reads,index){
    const ranked=reads.map(o=>{
      const exact=index.find(c=>norm(c.name)===norm(o.name));
      const words=o.name.split(/\s+/).map(norm);
      const contained=exact||index.filter(c=>norm(c.name).length>=3&&words.includes(norm(c.name))).sort((a,b)=>norm(b.name).length-norm(a.name).length)[0];
      return {...o,card:contained,exact:!!exact};
    }).filter(o=>o.card).sort((a,b)=>Number(b.exact)-Number(a.exact)||b.confidence-a.confidence);
    return ranked[0]?.card.name||'';
  }
  function albumCards(cards,album){
    const related=cards.filter(c=>c.albumIds?.includes(album.id));
    const order=new Map((Array.isArray(album.cardOrder)?album.cardOrder:[]).map((id,i)=>[id,i]));
    return related.sort((a,b)=>(order.get(a.id)??Infinity)-(order.get(b.id)??Infinity));
  }
  function moveInAlbum(list,id,index){
    const ids=list.map(c=>typeof c==='string'?c:c.id),from=ids.indexOf(id);
    if(from<0||!Number.isFinite(index))return ids;index=Math.trunc(index);ids.splice(from,1);ids.splice(Math.max(0,Math.min(ids.length,index)),0,id);return ids;
  }
  function albumDropIndex(list,id,targetId,after=false){
    const ids=list.map(c=>typeof c==='string'?c:c.id),from=ids.indexOf(id);
    if(from<0)return -1;if(targetId===id)return from;
    const rest=ids.filter(x=>x!==id),target=rest.indexOf(targetId);
    return target<0?-1:target+(after?1:0);
  }
  function validateBackup(data) {
    if (!data || !['pokescan-backup-v1','pokescan-backup-v2','pokescan-backup-v3','pokescan-backup-v4'].includes(data.format) || !Array.isArray(data.cards) || data.cards.length > 15000) throw Error('Unbekanntes oder zu großes Backup.');
    const ids = new Set();
    const cards = data.cards.map(c => {
      if (!c || typeof c.id!=='string' || !c.id || ['__proto__','prototype','constructor'].includes(c.id) || ids.has(c.id) || typeof c.name!=='string' || !c.name.trim() || c.name.length>150 || !Number.isInteger(Number(c.quantity)) || Number(c.quantity)<1 || Number(c.quantity)>9999) throw Error('Backup enthält ungültige oder doppelte Karteneinträge. Es wurde nichts ersetzt.');
      ids.add(c.id);
      return {...c,quantity:Number(c.quantity),price:Number.isFinite(c.price)&&c.price>=0?c.price:null,image:typeof c.image==='string'&&/^https:\/\//.test(c.image)?c.image:null,albumIds:Array.isArray(c.albumIds)?c.albumIds.filter(x=>typeof x==='string'):[],name:c.name.trim()};
    });
    const albumIds = new Set();
    const albums = (data.albums || []).map(a=>{if(!a || typeof a.id!=='string' || albumIds.has(a.id) || typeof a.name!=='string')throw Error('Ungültige Alben im Backup.');albumIds.add(a.id);return {...a,name:a.name.slice(0,40)};});
    const photos = {};
    for(const [id,value] of Object.entries(data.photos || {})) {if(typeof value!=='string'||!/^data:image\/(jpeg|png|webp|gif|avif);base64,[A-Za-z0-9+/=\r\n]+$/.test(value))throw Error('Ungültiges Foto im Backup.');photos[id]=value;}
    const extras = data.extras && typeof data.extras==='object' ? data.extras : null;
    return {cards,albums,photos,extras};
  }
  const api = {norm,collectorId,numberFrom,similarity,edition,finish,shadowless,duplicateKey,variantLabel,priceQuote,priceDate,usdQuote,ocrName,ocrNumber,resolveOCRTitle,albumCards,moveInAlbum,albumDropIndex,validateBackup};
  root.PokeCore = api;
  if(typeof module!=='undefined')module.exports=api;
})(globalThis);
