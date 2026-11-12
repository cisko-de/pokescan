/* Cardmarket reverse/primary-holo series resolution. */
(function(root){const PokeCore=root.PokeCore||(typeof require==='function'?require('./core.js'):null);
function normalizePricingData(data){if(!data)return data;const words={'normal':'normal','holo':'holo','reverse':'reverse','standard':'standard','unbegrenzt':'unlimited','schattenlos':'shadowless','1. auflage':'1st-edition'};const word=v=>typeof v==='string'?(words[v.toLowerCase()]||v.toLowerCase()):v;return{...data,variants_detailed:data.variants_detailed?.map(v=>({...v,type:word(v.type),size:word(v.size),subtype:word(v.subtype),stamp:v.stamp?.map(word)}))};}
const legacyPriceQuote=PokeCore.priceQuote;
PokeCore.priceQuote=function(data,c,metric='trend'){
 data=normalizePricingData(data);const direct=legacyPriceQuote(data,c,metric);if(direct)return{...direct,currency:'EUR',salesCount:null,cached:!!data?._cached,observedAt:data?._fetchedAt||(data?._cached?direct.date:direct.observedAt)};
 // Cardmarket's foil column represents reverse for a product whose base printing is already holo.
 if(c.grader||PokeCore.edition(c)!=='unlimited'||PokeCore.shadowless(c))return null;
 const f=PokeCore.finish(c),cm=data?.pricing?.cardmarket,v=data?.variants;if(!cm||(cm.unit||'EUR')!=='EUR'||!v)return null;
 if(data?.variants_detailed?.some(v=>v.type===({'Holo':'holo','Reverse Holo':'reverse'})[f]&&v.pricing?.cardmarket))return null;let suffix;if(f==='Holo'&&v.holo===true&&v.normal===false)suffix='';else if(f==='Reverse Holo'&&v.reverse===true&&v.holo===true&&v.normal===false)suffix='-holo';else return null;
 const keys=[metric,'trend','avg7','avg30','avg'],key=keys.find(k=>Number.isFinite(cm[k+suffix])&&cm[k+suffix]>0);if(!key)return null;
 return{price:cm[key+suffix],currency:'EUR',source:'TCGdex / Cardmarket · '+f+' · '+({trend:'Trend',avg7:'7-Tage-Mittel',avg30:'30-Tage-Mittel',avg:'Durchschnitt'}[key]||key),date:PokeCore.priceDate(cm.updated),observedAt:data._fetchedAt||(data._cached?PokeCore.priceDate(cm.updated):new Date().toISOString()),metric:key,low:cm['low'+suffix]??null,avg7:cm['avg7'+suffix]??null,avg30:cm['avg30'+suffix]??null,salesCount:null,cached:!!data._cached};
};

PokeCore.normalizePricingData=normalizePricingData;const legacyUSD=PokeCore.usdQuote;PokeCore.usdQuote=function(data,c){data=normalizePricingData(data);const tp=data?.pricing?.tcgplayer;if(!tp)return null;const clean={...tp};if(!clean.normal&&clean.unlimited)clean.normal=clean.unlimited;if(!clean.holofoil&&clean['unlimited-holofoil'])clean.holofoil=clean['unlimited-holofoil'];if(!clean['reverse-holofoil']&&clean.reverse)clean['reverse-holofoil']=clean.reverse;if(!clean.holofoil&&clean.holo)clean.holofoil=clean.holo;return legacyUSD({...data,pricing:{...data.pricing,tcgplayer:clean}},c);};
if(typeof module!=='undefined')module.exports=PokeCore.priceQuote;
})(globalThis);
