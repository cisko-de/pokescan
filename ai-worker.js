/* Optional local image embedding worker. No photos are uploaded. */
import {pipeline,env} from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js';
env.allowLocalModels=false;env.backends.onnx.wasm.numThreads=1;
let extractor;
self.onmessage=async e=>{const {id,url}=e.data;try{if(!extractor)extractor=await pipeline('image-feature-extraction','Xenova/clip-vit-base-patch32',{quantized:true,progress_callback:p=>self.postMessage({id,progress:p.status==='progress'?Math.round(p.progress):null,status:p.status})});const result=await extractor(url);const values=Array.from(result.data);const length=Math.hypot(...values);if(!length||values.length!==512)throw Error('Ungültige Bildmerkmale');self.postMessage({id,vector:values.map(v=>v/length)});}catch(err){self.postMessage({id,error:err.message||String(err)});}};
