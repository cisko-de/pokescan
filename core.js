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
  function priceQuote(data, c) {
    if (edition(c) === 'first' || shadowless(c) || !['Normal','Holo'].includes(finish(c)) || c.grader) return null;
    const cm = data?.pricing?.cardmarket;
    if (!cm || (cm.unit || 'EUR') !== 'EUR') return null;
    const value = finish(c)==='Holo' ? (cm['trend-holo'] ?? cm['avg-holo']) : (cm.trend ?? cm.avg);
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) return null;
    return {price:value,source:'TCGdex / Cardmarket · '+finish(c),date:cm.updated ? String(cm.updated).slice(0,10) : null,observedAt:new Date().toISOString()};
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
  const api = {norm,collectorId,numberFrom,similarity,edition,finish,shadowless,duplicateKey,variantLabel,priceQuote,validateBackup};
  root.PokeCore = api;
  if(typeof module!=='undefined')module.exports=api;
})(globalThis);
