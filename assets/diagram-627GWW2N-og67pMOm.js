import{p as w}from"./chunk-K2ZEYYM2-DgagqHDW.js";import{p as B}from"./gitGraph-YCYPL57B-5MQDGNWY-PshnJSW1.js";import{_ as n,s as S,g as F,o as z,p as P,a as T,b as W,as as v,aT as D,e as _,y as A,at as E,au as N,l as x}from"./md-DBkV45QJ.js";import"./chunk-TGZYFRKZ-roA9FxdI.js";import"./index-xa4W7G5W.js";import"./modules/vue-Quq115F5.js";import"./modules/shiki-DNpHxEZ6.js";import"./modules/file-saver-C8BEGaqa.js";import"./default.vue_vue_type_script_setup_true_lang-DHXvuRVe.js";import"./slidev/context-D4h7BCUq.js";import"./layoutHelper-i0GnwPnK.js";var C={packet:[]},h=structuredClone(C),L=N.packet,Y=n(()=>{const t=v({...L,...E().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),I=n(()=>h.packet,"getPacket"),M=n(t=>{t.length>0&&h.packet.push(t)},"pushWord"),O=n(()=>{A(),h=structuredClone(C)},"clear"),u={pushWord:M,getPacket:I,getConfig:Y,clear:O,setAccTitle:W,getAccTitle:T,setDiagramTitle:P,getDiagramTitle:z,getAccDescription:F,setAccDescription:S},G=1e4,H=n(t=>{w(t,u);let e=-1,o=[],s=1;const{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=i+1&&u.getPacket().length<G;){const[b,c]=K({start:a,end:r,label:p},s,i);if(o.push(b),b.end+1===s*i&&(u.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),K=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),R={parse:n(async t=>{const e=await B("packet",t);x.debug(e),H(e)},"parse")},U=n((t,e,o,s)=>{const i=s.db,a=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=a,m=i.getPacket(),l=i.getDiagramTitle(),g=r+p,d=g*(m.length+1)-(l?0:r),k=b*c+2,f=D(e);f.attr("viewbox",`0 0 ${k} ${d}`),_(f,d,k,a.useMaxWidth);for(const[y,$]of m.entries())X(f,$,y,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=n((t,e,o,{rowHeight:s,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),m=o*(s+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",m).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",m+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!b)continue;const k=l.end===l.start,f=m-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=n(({packet:t}={})=>{const e=v(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),it={parser:R,db:u,renderer:j,styles:J};export{it as diagram};
