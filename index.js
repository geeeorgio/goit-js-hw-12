import{S as f,i as d,a as n}from"./assets/vendor-BMHzDZyJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i={formEl:document.querySelector(".js-form"),loaderEl:document.querySelector(".loader"),galleryEl:document.querySelector(".gallery")},p=new f(".gallery a",{captionDelay:250,captionsData:"title"});function g(){d.warning({title:"Caution!",message:"Looks like you forgot to type something",position:"topRight"})}function y(r){d.error({title:`${r}!`,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:500})}function h(r){i.galleryEl.insertAdjacentHTML("beforeend",w(r)),p.refresh()}function w(r){return r.map(L).join("")}function L(r){const{largeImageURL:s,webformatURL:o,views:l,comments:e,likes:t,downloads:a,tags:c}=r,m=c?c.split(",")[0].trim():"image";return`
    <li class="response-list-item">
      <a class="simplelightbox-img-wrapper" href="${s}">
        <img
          class="response-img"
          src="${o}"
          alt="${m}"
          title="${m}"
        />
      </a>
      <ul class="response-item-des-list">
        <li class="item-desc-element" data-likes>
          Likes
          <p class="item-amount">${t}</p>
        </li>
        <li class="item-desc-element" data-views>
          Views
          <p class="item-amount">${l}</p>
        </li>
        <li class="item-desc-element" data-comments>
          Comments
          <p class="item-amount">${e}</p>
        </li>
        <li class="item-desc-element" data-downloads>
          Downloads
          <p class="item-amount">${a}</p>
        </li>
      </ul>
    </li>`}function b(){i.galleryEl.innerHTML=""}function E(){i.loaderEl.style.display="flex"}function u(){i.loaderEl.style.display="none"}const $="50205845-1a821f8a08bf3bfbd622691da";n.defaults.baseURL="https://pixabay.com/api/";n.defaults.params={key:$,image_type:"photo",orientation:"horizontal",safesearch:"true"};function x(r){return n.get("",{params:{q:r}}).then(s=>{const o=s.data.hits;if(o.length===0)throw new Error;return o})}i.formEl.addEventListener("submit",S);function S(r){r.preventDefault(),b(),E();const s=i.formEl.elements["search-text"].value.trim();if(!s||s===""){g(),u();return}x(s).then(o=>{h(o)}).catch(o=>{y(o)}).finally(()=>u()),i.formEl.reset()}
//# sourceMappingURL=index.js.map
