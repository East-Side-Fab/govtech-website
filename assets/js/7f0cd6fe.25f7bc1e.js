"use strict";(self.webpackChunkgovhack_website=self.webpackChunkgovhack_website||[]).push([[554],{6676:(e,s,t)=>{t.d(s,{J:()=>r});var i=t(6540);const a={glitchText:"glitchText_GBOR",glitchTextMain:"glitchTextMain_MRdF",glitchTextRed:"glitchTextRed_h0qM",glitchTextBlue:"glitchTextBlue_bJxL","glitch-anim-1":"glitch-anim-1_GGPG","glitch-anim-2":"glitch-anim-2_AhcX"};var n=t(4848);function r(e){let{text:s,element:t="div",className:r=""}=e;const[c,l]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=()=>{l(window.innerWidth<480)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);return(0,i.createElement)(t,{className:`${a.glitchText} ${r}`},(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:a.glitchTextMain,children:s}),(0,n.jsx)("span",{className:a.glitchTextRed,"aria-hidden":"true",children:s}),!c&&(0,n.jsx)("span",{className:a.glitchTextBlue,"aria-hidden":"true",children:s})]}))}},7156:(e,s,t)=>{t.d(s,{B:()=>r});var i=t(6540);const a={particleCanvas:"particleCanvas_EZcZ"};var n=t(4848);function r(){const e=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const s=e.current;if(!s)return;const t=s.getContext("2d");if(!t)return;const i=()=>{s.width=window.innerWidth,s.height=window.innerHeight};i(),window.addEventListener("resize",i);class a{constructor(){this.x=Math.random()*s.width,this.y=Math.random()*s.height,this.size=3*Math.random()+1,this.speedX=.5*(Math.random()-.5),this.speedY=.5*(Math.random()-.5),this.color="#22d3ee"}update(){this.x+=this.speedX,this.y+=this.speedY,this.x>s.width?this.x=0:this.x<0&&(this.x=s.width),this.y>s.height?this.y=0:this.y<0&&(this.y=s.height)}draw(){t&&(t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill())}}const n=[],r=Math.min(150,Math.floor(window.innerWidth*window.innerHeight/1e4));for(let e=0;e<r;e++)n.push(new a);return function e(){if(t){t.clearRect(0,0,s.width,s.height);for(const e of n)e.update(),e.draw();for(let e=0;e<n.length;e++)for(let s=e;s<n.length;s++){const i=n[e].x-n[s].x,a=n[e].y-n[s].y,r=Math.sqrt(i*i+a*a);r<100&&(t.beginPath(),t.strokeStyle=`rgba(34, 211, 238, ${.3-r/333})`,t.lineWidth=.5,t.moveTo(n[e].x,n[e].y),t.lineTo(n[s].x,n[s].y),t.stroke())}requestAnimationFrame(e)}}(),()=>{window.removeEventListener("resize",i)}}),[]),(0,n.jsx)("canvas",{ref:e,className:a.particleCanvas})}},7839:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var i=t(6540),a=t(1410);const n={header:"header_Cm42",gridOverlay:"gridOverlay_jMnU",headerContent:"headerContent_c0DV",headerDescription:"headerDescription_QVsH",bracket:"bracket_zczz",descriptionText:"descriptionText_PDKR",mainContent:"mainContent_naOT",registrationSection:"registrationSection_UyyM",sectionIntro:"sectionIntro_E7lB",sectionOutro:"sectionOutro_IIb9",sectionTitle:"sectionTitle_zZbv",codeFunction:"codeFunction_zIOj",sectionText:"sectionText_IgCm",formContainer:"formContainer_FMgS",terminalHeader:"terminalHeader_yvOV",terminalControls:"terminalControls_I3bL",terminalCircle:"terminalCircle_TqPV",terminalTitle:"terminalTitle_f_c3",formContent:"formContent_C3yS",formRow:"formRow_sJnP",inputField:"inputField_qx56",fieldName:"fieldName_VCrF",requiredMark:"requiredMark_LUDW",inputWrapper:"inputWrapper_a9X1",inputPrefix:"inputPrefix__66N",formActions:"formActions_N_la",submitButton:"submitButton_Laow",buttonNote:"buttonNote_K5il",codeComment:"codeComment_nro4",formStatus:"formStatus_uFVQ",formError:"formError_DIWt",formSuccess:"formSuccess_q1N8",loader:"loader_qL5V",spin:"spin_D_T_",errorIcon:"errorIcon_pz65",successAnimation:"successAnimation_DpJc",checkmark:"checkmark_H7fI",scaleIn:"scaleIn_Be4W",successCode:"successCode_pHn7"};var r=t(6676),c=t(7156),l=t(4848);const o=()=>{const[e,s]=(0,i.useState)(""),[t,a]=(0,i.useState)(""),[r,c]=(0,i.useState)(""),[o,d]=(0,i.useState)(""),[h,m]=(0,i.useState)(""),[u,x]=(0,i.useState)("idle"),[p,f]=(0,i.useState)("");return(0,l.jsxs)("div",{className:n.formContainer,children:[(0,l.jsxs)("div",{className:n.terminalHeader,children:[(0,l.jsxs)("div",{className:n.terminalControls,children:[(0,l.jsx)("span",{className:n.terminalCircle}),(0,l.jsx)("span",{className:n.terminalCircle}),(0,l.jsx)("span",{className:n.terminalCircle})]}),(0,l.jsx)("div",{className:n.terminalTitle,children:"registration.sh"})]}),(0,l.jsxs)("div",{className:n.formContent,children:["sending"===u&&(0,l.jsxs)("div",{className:n.formStatus,children:[(0,l.jsx)("div",{className:n.loader}),(0,l.jsx)("span",{children:"Sending registration data..."})]}),"error"===u&&(0,l.jsxs)("div",{className:n.formError,children:[(0,l.jsx)("span",{className:n.errorIcon,children:"!"}),(0,l.jsx)("div",{children:p})]}),"success"===u&&(0,l.jsxs)("div",{className:n.formSuccess,children:[(0,l.jsx)("div",{className:n.successAnimation,children:(0,l.jsx)("span",{className:n.checkmark,children:"\u2713"})}),(0,l.jsx)("h3",{children:"Registration Successful"}),(0,l.jsx)("p",{children:"You've been added to our hacker database. We'll transmit further instructions soon."}),(0,l.jsx)("pre",{className:n.successCode,children:`curl -X POST -d '{"mail":"${e}", "first_name":"${t}","last_name":"${r}"}' "https://participants-pp4aag1w.fermyon.app/participants" --verbose`})]}),"success"!==u?(0,l.jsxs)("form",{onSubmit:async s=>{if(s.preventDefault(),m(""),f(""),e&&t)try{x("sending");const s={mail:e,first_name:t,last_name:r||""},i=await fetch("https://participants-pp4aag1w.fermyon.app/participants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!i.ok)throw new Error(`Registration failed: ${i.statusText}`);await i.json();x("success"),f("Registration successful! You've been added to our hacker database.")}catch(i){console.error("Registration error:",i),x("error"),f(i.message||"Registration failed. Please try again later.")}else m("Please fill in the required fields")},children:[(0,l.jsxs)("div",{className:n.formRow,children:[(0,l.jsxs)("div",{className:n.inputField,children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{className:n.fieldName,children:"FIRST_NAME"}),(0,l.jsx)("span",{className:n.requiredMark,children:"*"})]}),(0,l.jsxs)("div",{className:n.inputWrapper,children:[(0,l.jsx)("span",{className:n.inputPrefix,children:">"}),(0,l.jsx)("input",{type:"text",value:t,onChange:e=>a(e.target.value),placeholder:"John",required:!0})]})]}),(0,l.jsxs)("div",{className:n.inputField,children:[(0,l.jsx)("label",{children:(0,l.jsx)("span",{className:n.fieldName,children:"LAST_NAME"})}),(0,l.jsxs)("div",{className:n.inputWrapper,children:[(0,l.jsx)("span",{className:n.inputPrefix,children:">"}),(0,l.jsx)("input",{type:"text",value:r,onChange:e=>c(e.target.value),placeholder:"Doe"})]})]})]}),(0,l.jsxs)("div",{className:n.inputField,children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{className:n.fieldName,children:"EMAIL"}),(0,l.jsx)("span",{className:n.requiredMark,children:"*"})]}),(0,l.jsxs)("div",{className:n.inputWrapper,children:[(0,l.jsx)("span",{className:n.inputPrefix,children:">"}),(0,l.jsx)("input",{type:"email",value:e,onChange:e=>s(e.target.value),placeholder:"your@email.com",required:!0})]})]}),(0,l.jsxs)("div",{className:n.inputField,children:[(0,l.jsx)("label",{children:(0,l.jsx)("span",{className:n.fieldName,children:"ORGANIZATION"})}),(0,l.jsxs)("div",{className:n.inputWrapper,children:[(0,l.jsx)("span",{className:n.inputPrefix,children:">"}),(0,l.jsx)("input",{type:"text",value:o,onChange:e=>d(e.target.value),placeholder:"Your organization"})]})]}),h&&(0,l.jsxs)("div",{className:n.formError,children:[(0,l.jsx)("span",{className:n.errorIcon,children:"!"}),(0,l.jsx)("span",{children:h})]}),(0,l.jsxs)("div",{className:n.formActions,children:[(0,l.jsx)("button",{type:"submit",className:n.submitButton,children:"./register.sh"}),(0,l.jsx)("div",{className:n.buttonNote,children:(0,l.jsx)("span",{className:n.codeComment,children:"// Hit Enter to Execute"})})]})]}):null]})]})};function d(){return(0,l.jsxs)(a.A,{title:"Register | GovTech Hackathon",description:"Register for the GovTech Hackathon \u2013 Boost the Public Sector",children:[(0,l.jsx)(c.B,{}),(0,l.jsxs)("header",{className:n.header,children:[(0,l.jsx)("div",{className:n.gridOverlay}),(0,l.jsxs)("div",{className:n.headerContent,children:[(0,l.jsx)(r.J,{text:"Registration Portal",element:"h1"}),(0,l.jsxs)("div",{className:n.headerDescription,children:[(0,l.jsx)("span",{className:n.bracket,children:"{"}),(0,l.jsx)("span",{className:n.descriptionText,children:"Join the Public Sector Transformation"}),(0,l.jsx)("span",{className:n.bracket,children:"}"})]})]})]}),(0,l.jsx)("main",{className:n.mainContent,children:(0,l.jsxs)("section",{className:n.registrationSection,children:[(0,l.jsxs)("div",{className:n.sectionIntro,children:[(0,l.jsxs)("h2",{className:n.sectionTitle,children:[(0,l.jsx)("span",{className:n.codeFunction,children:"function"})," ","joinHackathon() ","{"]}),(0,l.jsx)("p",{className:n.sectionText,children:"Register for the GovTech Hackathon and become part of our hacker community. We'll notify you about upcoming events, challenges, and important information."})]}),(0,l.jsx)(o,{}),(0,l.jsx)("div",{className:n.sectionOutro,children:(0,l.jsx)("h2",{className:n.sectionTitle,children:"}"})})]})})]})}}}]);