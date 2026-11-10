/* Decode camera blobs even when Android provides no MIME type. */
'use strict';
async function decodePhoto(blob){
 if(!blob||!blob.size)throw Error('Das Foto ist leer. Bitte erneut aufnehmen.');
 if(typeof createImageBitmap==='function'){
  try{return await createImageBitmap(blob,{imageOrientation:'from-image'});}catch{}
 }
 const url=URL.createObjectURL(blob),img=new Image();
 try{await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Bild konnte nicht geladen werden')),18000);img.onload=()=>{clearTimeout(timer);resolve();};img.onerror=()=>{clearTimeout(timer);reject(Error('Bildformat wird von diesem Browser nicht unterstützt. In der Kamera JPG verwenden oder ein Galeriebild wählen.'));};img.src=url;});
  if(!img.naturalWidth||!img.naturalHeight)throw Error('Bild enthält keine lesbaren Bilddaten.');
  // HTMLImageElement.width/height are the intrinsic size when no CSS is applied.
  img.width=img.naturalWidth;img.height=img.naturalHeight;img.close=()=>{};return img;
 }finally{URL.revokeObjectURL(url);}
}
