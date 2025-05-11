import{S as w,i as f,a as c}from"./assets/vendor-BMHzDZyJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a={formEl:document.querySelector(".js-form"),loaderEl:document.querySelector(".loader"),galleryEl:document.querySelector(".gallery"),loadMoreEl:document.querySelector(".load-more-btn")},l={page:1,query:"",totalHits:null,limit:15,getPage(){return this.page},setNewPage(){this.page+=1},getHits(){return this.totalHits},getQuery(){return this.query},setNewQuery(s,t,r){this.query=s,this.page=t,this.totalHits=r},checkPages(){return Math.ceil(this.totalHits/this.limit)},reset(){this.query="",this.page=1,this.totalHits=null,this.loadings=null}},L=new w(".gallery a",{captionDelay:250,captionsData:"title"});function E(){f.warning({title:"Caution!",message:"Looks like you forgot to type something",position:"topRight"})}function g(s){f.error({title:`${s}!`,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:500})}function p(s){a.galleryEl.insertAdjacentHTML("beforeend",b(s)),L.refresh()}function b(s){return s.map(P).join("")}function P(s){const{largeImageURL:t,webformatURL:r,views:i,comments:e,likes:o,downloads:n,tags:d}=s,m=d?d.split(",")[0].trim():"image";return`
    <li class="response-list-item">
      <a class="simplelightbox-img-wrapper" href="${t}">
        <img
          class="response-img"
          src="${r}"
          alt="${m}"
          title="${m}"
        />
      </a>
      <ul class="response-item-des-list">
        <li class="item-desc-element" data-likes>
          Likes
          <p class="item-amount">${o}</p>
        </li>
        <li class="item-desc-element" data-views>
          Views
          <p class="item-amount">${i}</p>
        </li>
        <li class="item-desc-element" data-comments>
          Comments
          <p class="item-amount">${e}</p>
        </li>
        <li class="item-desc-element" data-downloads>
          Downloads
          <p class="item-amount">${n}</p>
        </li>
      </ul>
    </li>`}function M(){a.galleryEl.innerHTML=""}function q(){a.loaderEl.style.display="flex"}function u(){a.loaderEl.style.display="none"}function h(){a.loadMoreEl.classList.add("show")}function v(){a.loadMoreEl.classList.remove("show")}const H="50205845-1a821f8a08bf3bfbd622691da";c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:H,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15};async function y(s,t){try{return await c.get("",{params:{...c.defaults.params,q:s,page:t||1}})}catch(r){console.log(r)}}a.formEl.addEventListener("submit",S);a.loadMoreEl.addEventListener("click",$);function S(s){s.preventDefault(),M(),q(),l.reset();const t=a.formEl.elements["search-text"].value.trim();if(!t||t===""){E(),u();return}y(t).then(r=>{const{data:{hits:i,totalHits:e},config:{params:{page:o}}}=r;if(i.length===0)throw new Error("Oups");p(i),h(),l.setNewQuery(t,o,e)}).catch(r=>{g(r)}).finally(()=>{u()}),a.formEl.reset()}function $(){const s=l.checkPages(),t=l.getPage();if(s<t)throw v(),new Error("We're sorry, but you've reached the end of search results.");const r=l.getQuery(),i=l.setNewPage();y(r,i).then(e=>{console.log(e),p(e.data.hits),h()}).catch(e=>{g(e)}).finally(()=>{u()})}
//# sourceMappingURL=index.js.map
