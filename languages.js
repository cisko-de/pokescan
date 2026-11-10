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
 function languageHint(text){if(/[\uac00-\ud7af]/.test(text))return 'Koreanisch';if(/[\u3040-\u30ff]/.test(text))return 'Japanisch';if(/[\u0e00-\u0e7f]/.test(text))return 'Thailändisch';if(/[\u0400-\u04ff]{3}/.test(text))return 'Russisch';if(/[\u4e00-\u9fff]/.test(text))return 'Chinesisch / Japanisch – bitte prüfen';if(/Schwäche|Rückzug|Kraftpunkte|entwickelt sich|Basis/i.test(text))return 'Deutsch';if(/weakness|retreat|evolves from|basic/i.test(text))return 'Englisch';if(/faiblesse|retraite|évolue/i.test(text))return 'Französisch';if(/debilidad|retirada|básico/i.test(text))return 'Spanisch';if(/debolezza|ritirata/i.test(text))return 'Italienisch';if(/fraqueza|recuo|básico/i.test(text))return 'Portugiesisch';return '';}
 const api={entries,info,models,languageHint};root.PokeLanguages=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
