import{S as E,i as g,a as u}from"./assets/vendor-BMHzDZyJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const i={formEl:document.querySelector(".js-form"),loaderEl:document.querySelector(".loader"),galleryEl:document.querySelector(".gallery"),loadMoreEl:document.querySelector(".load-more-btn")},n={page:1,query:"",totalHits:null,limit:15,getPage(){return this.page},setNewPage(){this.page+=1},getQuery(){return this.query},setNewQuery(e,s,o){this.query=e,this.page=s,this.totalHits=o},hitsLeft(){return this.totalHits-this.page*this.limit},reset(){this.query="",this.page=1,this.totalHits=null}},b=new E(".gallery a",{captionDelay:250,captionsData:"title"});function q(e=1){g.success({timeout:3333,title:"Nice!",message:`You found ${e} images`,position:"topRight"})}function m(e=""){g.warning({timeout:3333,title:"Caution!",message:`${e}`,position:"topRight"})}function c(e=""){g.error({timeout:3333,title:"Oups!",message:`${e}`,position:"topRight",maxWidth:450})}function y(e){!e||e.length===0||(i.galleryEl.insertAdjacentHTML("beforeend",M(e)),b.refresh())}function M(e=[]){return e.map(P).join("")}function P(e={}){const{largeImageURL:s,webformatURL:o,views:a,comments:t,likes:r,downloads:l,tags:h}=e,p=h?h.split(",")[0].trim():"image";return`
    <li class="response-list-item">
      <a class="simplelightbox-img-wrapper" href="${s}">
        <img
          class="response-img"
          src="${o}"
          alt="${p}"
          title="${p}"
        />
      </a>
      <ul class="response-item-des-list">
        <li class="item-desc-element" data-likes>
          Likes
          <p class="item-amount">${r}</p>
        </li>
        <li class="item-desc-element" data-views>
          Views
          <p class="item-amount">${a}</p>
        </li>
        <li class="item-desc-element" data-comments>
          Comments
          <p class="item-amount">${t}</p>
        </li>
        <li class="item-desc-element" data-downloads>
          Downloads
          <p class="item-amount">${l}</p>
        </li>
      </ul>
    </li>`}function v(){i.galleryEl.innerHTML=""}function w(){i.loaderEl.style.display="flex"}function d(){i.loaderEl.style.display="none"}function $(){i.loadMoreEl.classList.add("show")}function f(){i.loadMoreEl.classList.remove("show")}function I(e={}){return e.getBoundingClientRect()}function S(e={}){return e.height}function H(e=1){window.scrollBy({top:e*2,behavior:"smooth"})}const N="50205845-1a821f8a08bf3bfbd622691da";u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:N,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15};async function L(e="",s=1){try{return await u.get("",{params:{...u.defaults.params,q:e,page:s||1}})}catch(o){console.log(o),c(o)}}i.formEl.addEventListener("submit",x);i.loadMoreEl.addEventListener("click",R);async function x(e){try{e.preventDefault(),v(),f(),w(),n.reset();const s=i.formEl.elements["search-text"].value.trim();if(!s||s===""){m("Looks like you forgot to type something"),d();return}const{data:{hits:o,totalHits:a},config:{params:{page:t}}}=await L(s);if(o.length===0){c("There are no images matching your search query. Please try again!");return}if(n.setNewQuery(s,t,a),y(o),q(a),o.length<n.limit){m("These are all results found.");return}$()}catch(s){c(s)}finally{d()}i.formEl.reset()}async function R(){try{if(w(),n.hitsLeft()<=0){f(),m("No more images to load.");return}const e=n.getQuery();n.setNewPage();const s=n.getPage(),{data:{hits:o}}=await L(e,s);y(o);const a=document.querySelector(".gallery .response-list-item "),t=I(a),r=S(t);H(r),o.length<n.limit&&(f(),c("We're sorry, but you've reached the end of search results."))}catch(e){c(e)}finally{d()}}
//# sourceMappingURL=index.js.map
