"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[158],{7137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(5893),a=n(1151);const o={title:"Scanner Usage"},i=void 0,r={id:"boards/HS_laser_software",title:"Scanner Usage",description:"If you want the plastic scanner to identify material for you, it needs to know what measurements corrospond to which material. This is done by taking a measurement of a known material and then taking measurements of unknown materials. The software will then compare the measurements and try to find the best match. In practice the workflow looks something like this:",source:"@site/docs/boards/HS_laser_software.md",sourceDirName:"boards",slug:"/boards/HS_laser_software",permalink:"/boards/HS_laser_software",draft:!1,unlisted:!1,editUrl:"https://github.com/Plastic-Scanner/documentation/tree/main/docs/boards/HS_laser_software.md",tags:[],version:"current",frontMatter:{title:"Scanner Usage"},sidebar:"docsSidebar",previous:{title:"Firmware installation",permalink:"/boards/HS_laser_firmware"},next:{title:"Revision history",permalink:"/revision_history"}},l={},c=[{value:"Step 1: Scan plastic of known types",id:"step-1-scan-plastic-of-known-types",level:3},{value:"Step 2: Train machine learning model on these scans",id:"step-2-train-machine-learning-model-on-these-scans",level:3},{value:"Step 3: Upload model to scanner",id:"step-3-upload-model-to-scanner",level:3},{value:"Step 4: Scan plastic of unknown types",id:"step-4-scan-plastic-of-unknown-types",level:3},{value:"Step 5: Identify plastic!",id:"step-5-identify-plastic",level:3}];function d(e){const t={a:"a",br:"br",h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you want the plastic scanner to identify material for you, it needs to know what measurements corrospond to which material. This is done by taking a measurement of a known material and then taking measurements of unknown materials. The software will then compare the measurements and try to find the best match. In practice the workflow looks something like this:\nFirst scan plastic of known types, Upload these scans and train a machine learning model on these scans, upload the trained model to the scanner, scan plastic of unknown types, identify plastic!",(0,s.jsx)(t.br,{}),"\n","The goal is to make a general model that can be distributed to other plastic scanners. this would make step 1 and 2 redundant for the end user."]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-scan-plastic-of-known-types",children:"Step 1: Scan plastic of known types"}),"\n",(0,s.jsx)(t.p,{children:"The firmware has a feature to enter the collection mode. To enter this mode press and hold the button for longer than 1 second when the scanner is turned on and asks to press the button for calibration. In this collection mode known samples of plastic are scanned and the data is uploaded to google sheets. This data is then used to train the machine learning model."}),"\n",(0,s.jsx)(t.h3,{id:"step-2-train-machine-learning-model-on-these-scans",children:"Step 2: Train machine learning model on these scans"}),"\n",(0,s.jsxs)(t.p,{children:["In this Google Colab ",(0,s.jsx)(t.a,{href:"https://colab.research.google.com/drive/1wfOuVHbrcoFD7YLNErialoZrMzzZKGtq#scrollTo=7Yi6WbVLPnDz",children:"file"})," we import the scans from the google sheets and train a machine learning model. This model is then saved to the computer"]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-upload-model-to-scanner",children:"Step 3: Upload model to scanner"}),"\n",(0,s.jsx)(t.p,{children:"The model is a .h header file and can be included in the original firmware and thus can be uploaded to the scanner using PlatformIO."}),"\n",(0,s.jsx)(t.h3,{id:"step-4-scan-plastic-of-unknown-types",children:"Step 4: Scan plastic of unknown types"}),"\n",(0,s.jsx)(t.p,{children:"The scanner is now ready to scan plastic of unknown types. When the scanner is turned on it will ask to calibrate, and buttonpress shorter than 1 second puts it in the scanning mode.The scanner will take a measurement and compare it to the model. It will then output the most likely type of plastic. This will be done continously until the button is pressed for longer than 1 second."}),"\n",(0,s.jsx)(t.h3,{id:"step-5-identify-plastic",children:"Step 5: Identify plastic!"}),"\n",(0,s.jsx)(t.p,{children:"The scanner will output the most likely type of plastic. This is not always correct, but it is a good indication. If your situation asks for other plastics you can follow steps 1 and 2 to build your own model. Note: this is only tested with lasercut plastic types, so no guarentees for other types of plastic."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);