<<<<<<<< HEAD:docs/assets/chatScreen-xS00Hi5g.js
import"./tailwind-A-Exv5E6.js";import{i as n}from"./insert-yGrdL5nD.js";import{C as c}from"./delay-g6vF19wW.js";import{g as e}from"./index-35H_NU9g.js";const i=new c("https://popcorns.pockethost.io");async function r(){const a=window.location.hash.slice(1),t=await i.collection("community").getOne(a,{expand:"SR_location"});console.log(t);const{SR_location:l,activity:p,category:m,date:g,meetingLocation:u,gender:b,approve:d,headcount:h,age:f,title:o,time:y,expand:x,id:v}=t,s=`
========
import"./tailwind-ouJN7DSI.js";import{i as n}from"./insert-yGrdL5nD.js";import{C as c}from"./delay-g6vF19wW.js";import{g as e}from"./index-35H_NU9g.js";const i=new c("https://popcorns.pockethost.io");async function r(){const a=window.location.hash.slice(1),t=await i.collection("community").getOne(a,{expand:"SR_location"});console.log(t);const{SR_location:l,activity:p,category:m,date:g,meetingLocation:u,gender:b,approve:d,headcount:h,age:f,title:o,time:y,expand:x,id:v}=t,s=`
>>>>>>>> upstream/develop:docs/assets/chatScreen-bPSOBW9-.js
     
  <div>
  <header class="flex justify-between p-2">
    <a class="top-1/2" href="/src/pages/board/index.html"
      ><img src="/public/images/directionL.svg" alt="뒤로가기"
    /></a>
    <strong class="chatScreen-title text-center block"
      >${o}<span
        class="chatScreen-people text-Contents-contentTertiary"
        >1</span
      >
    </strong>
    <img src="/public/images/hamburger.svg" alt="메뉴" />
  </header>
  <div
      class="fixed text-base items-center flex gap-[0.375rem] w-full px-3 bottom-[2.125rem]"
    >
      <button class="chatScreen-option-button" type="button">
        <img src="/public/images/plusChatScreen.svg" alt="추가옵션" />
      </button>
      <form action="/submit" method="post" class="w-full">
        <label for="message" class="sr-only">메세지</label>
        <textarea
          class="resize-none overflow-hidden h-auto translate-y-1 text-nowrap rounded-full px-3 py-2 w-full bg-bluegray-100"
          rows="1"
          id="message"
          name="message"
          placeholder="메시지 보내기"
        ></textarea>
        <button
          class="chatScreen-emoji-button absolute inset-y-2 right-10"
          type="button"
        >
          <img src="/public/images/smile.svg" alt="이모지 선택" />
        </button>
      </form>
      <button class="chatScreen-send-button" type="button">
        <img src="/public/images/send.svg" alt="메세지보내기버튼" />
      </button>
    </div>
  
</div>

  
        
    `;n(".template",s),e.from(".board-container",{opacity:0,stagger:.1}),e.to(".chatScreen-option-button",{y:0,opacity:1,stagger:.1})}r();
