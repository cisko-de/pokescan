/* OCR model identifiers from Tesseract; database coverage varies by language/set. */
(function(root){
 const entries=[
  ['Deutsch','de','deu'],['Englisch','en','eng'],['Japanisch','ja','jpn'],
  ['Chinesisch (vereinfacht)','zh-cn','chi_sim'],['Chinesisch (traditionell)','zh-tw','chi_tra'],['Koreanisch','ko','kor'],
  ['Französisch','fr','fra'],['Spanisch','es','spa'],['Italienisch','it','ita'],['Portugiesisch','pt','por'],
  ['Niederländisch','nl','nld'],['Polnisch','pl','pol'],['Russisch','ru','rus'],['Thailändisch','th','tha'],['Indonesisch','id','ind']
 ];
 function info(label){return entries.find(e=>e[0]===label);}
 function models(label){const code=info(label)?.[2]||'eng';return ['eng','jpn','chi_sim','chi_tra','kor','tha'].includes(code)?[code]:[code,'eng'];}
 function languageHint(text){
  if(/[\uac00-\ud7af]/.test(text))return 'Koreanisch';
  if(/[\u3040-\u30ff]/.test(text))return 'Japanisch';
  if(/[\u0e00-\u0e7f]/.test(text))return 'Thailändisch';
  if(/[\u0400-\u04ff]{3}/.test(text))return 'Russisch';
  const rules=[
   ['Deutsch',/schwäche|rückzug|kraftpunkte|entwickelt sich|basis|resistenz/ig],
   ['Englisch',/weakness|retreat|evolves from|basic|resistance/ig],
   ['Französisch',/faiblesse|retraite|évolue|résistance/ig],
   ['Spanisch',/debilidad|retirada|evoluciona|resistencia/ig],
   ['Italienisch',/debolezza|ritirata|evolve da|resistenza/ig],
   ['Portugiesisch',/fraqueza|recuo|evolui|resistência/ig],
   ['Niederländisch',/zwakte|terugtrek|weerstand/ig],
   ['Polnisch',/słabość|odwrót|odporność/ig],
   ['Indonesisch',/kelemahan|mundur|resistansi/ig]
  ];
  const ranked=rules.map(([language,pattern])=>({language,hits:(String(text).match(pattern)||[]).length})).sort((a,b)=>b.hits-a.hits);
  return ranked[0].hits>=2&&ranked[0].hits>ranked[1].hits?ranked[0].language:'';
 }
 function scriptLanguage(script){
  const value=String(script||'').toLowerCase();
  if(/japan|hiragana|katakana/.test(value))return 'Japanisch';
  if(/hangul|korean/.test(value))return 'Koreanisch';
  if(/han|chinese/.test(value))return 'Chinesisch (vereinfacht)';
  if(/thai/.test(value))return 'Thailändisch';
  if(/cyrillic/.test(value))return 'Russisch';
  return '';
 }
 const api={entries,info,models,languageHint,scriptLanguage};root.PokeLanguages=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
