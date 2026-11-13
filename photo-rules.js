/* Pure, bounded image editing values; no browser or network dependencies. */
(function(root){'use strict';
function clamp(n,min,max){return Math.min(max,Math.max(min,Number(n)||0));}
function tone(data,brightness=0,contrast=100){const out=new Uint8ClampedArray(data),b=clamp(brightness,-30,30)*2.55,c=clamp(contrast,70,140)/100;for(let i=0;i<out.length;i+=4)for(let channel=0;channel<3;channel++)out[i+channel]=Math.round((out[i+channel]-127.5)*c+127.5+b);return out;}
function centered(w,h){const ratio=63/88,width=Math.min(w*.88,h*.88*ratio),height=width/ratio,x=(w-width)/2,y=(h-height)/2;return[{x:x/w,y:y/h},{x:(x+width)/w,y:y/h},{x:(x+width)/w,y:(y+height)/h},{x:x/w,y:(y+height)/h}];}
function rotateCorners(points,direction=1){return points.map(p=>direction>0?{x:1-p.y,y:p.x}:{x:p.y,y:1-p.x});}
function nudge(points,index,dx,dy,w,h){if(index<0||index>3||!Number.isFinite(w+h)||w<1||h<1)return points;return points.map((p,i)=>i===index?{x:clamp(p.x+dx/w,0,1),y:clamp(p.y+dy/h,0,1)}:{...p});}
function validCorners(points,w,h){if(!Array.isArray(points)||points.length!==4||points.some(p=>!Number.isFinite(p.x+p.y)||p.x<0||p.y<0||p.x>1||p.y>1))return false;const cross=(a,b,c)=>(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x),turns=points.map((p,i)=>cross(p,points[(i+1)%4],points[(i+2)%4]));if(!turns.every(n=>n>0)&&!turns.every(n=>n<0))return false;const d=(a,b)=>Math.hypot((a.x-b.x)*w,(a.y-b.y)*h),a=(d(points[0],points[1])+d(points[2],points[3]))/2,b=(d(points[1],points[2])+d(points[3],points[0]))/2;return Math.min(a,b)>=25&&a/b>.35&&a/b<1.5;}
const api={tone,centered,rotateCorners,nudge,clamp,validCorners};root.PokePhoto=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
