import{i as o}from"./delay-g6vF19wW.js";const{localStorage:s}=window;function a(e,t){return new Promise((r,n)=>{o(e)?(s.setItem(e,JSON.stringify(t)),r()):n({message:"key는 문자 타입 이어야 합니다."})})}function g(e){return new Promise((t,r)=>{o(e)?t(JSON.parse(s.getItem(e))):r({message:"key는 문자 타입 이어야 합니다."})})}function m(e){return new Promise((t,r)=>{e?s.removeItem(e):s.clear(),t()})}export{m as d,g,a as s};
