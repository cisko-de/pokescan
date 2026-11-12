/* Appearance preferences are independent of collection data. */
'use strict';
function applyStudioDesign(){const p=extras.ui||{};document.documentElement.dataset.skin=['vault','minimal','glass','contrast'].includes(p.skin)?p.skin:'vault';document.documentElement.dataset.density=p.density==='compact'?'compact':'comfortable';document.documentElement.dataset.text=p.text==='large'?'large':'normal';for(const [id,key,fallback]of [['appSkin','skin','vault'],['appDensity','density','comfortable'],['appText','text','normal'],['appStart','start','home']])$(id).value=p[key]||fallback;}
for(const [id,key]of [['appSkin','skin'],['appDensity','density'],['appText','text'],['appStart','start']])$(id).onchange=()=>{const next={...extras,ui:{...(extras.ui||{}),[key]:$(id).value}};if(commit(cards,albums,next)){applyStudioDesign();toast('Darstellung gespeichert');}};
const themeBeforeStudio=applyTheme;applyTheme=function(){themeBeforeStudio();applyStudioDesign();};
for(const [value,label]of [['teal','Lagune'],['orange','Kupfer'],['slate','Graphit']])if(![...$('profileTheme').options].some(o=>o.value===value))$('profileTheme').add(new Option(label,value));
applyStudioDesign();window.refreshCustomSelects?.();if(!location.hash||location.hash==='#home'){const start=extras.ui?.start;if(start&&['home','collection','add','market','albums'].includes(start))go(start);}
