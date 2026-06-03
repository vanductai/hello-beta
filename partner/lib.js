/* ============================================================
   THODIA — shared library for all design directions
   Inline Carbon icons (offline) + scroll reveal + count-up + calculator.
   Markup: <i class="ic" data-ic="wallet"></i>  (sized via font-size)
   ============================================================ */
(function(){
  'use strict';
  var ICONS = {"arrow-right":"<path fill=\"currentColor\" d=\"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z\"/>","partnership":"<path fill=\"currentColor\" d=\"M8 9a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m16 6a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m2 27h-4a2 2 0 0 1-2-2v-7h2v7h4v-9h2v-6a1 1 0 0 0-1-1h-6.42L16 20l-4.58-8H5a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h7.58L16 16l3.42-6H27a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2\"/>","chart-line-smooth":"<path fill=\"currentColor\" d=\"M13 15c1.485 0 2.554 1.497 3.686 3.081C17.998 19.918 19.486 22 22 22c5.67 0 7.78-10.79 8-12l-1.968-.358C27.55 12.282 25.394 20 22 20c-1.485 0-2.554-1.497-3.686-3.081C17.002 15.082 15.514 13 13 13c-4.186 0-7.445 7.404-9 11.762V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H5.044c1.51-5.143 4.92-13 7.956-13\"/>","time":"<path fill=\"currentColor\" d=\"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4\"/><path fill=\"currentColor\" d=\"M20.59 22L15 16.41V7h2v8.58l5 5.01z\"/>","idea":"<path fill=\"currentColor\" d=\"M11 24h10v2H11zm2 4h6v2h-6zm3-26A10 10 0 0 0 6 12a9.19 9.19 0 0 0 3.46 7.62c1 .93 1.54 1.46 1.54 2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2 7.2 0 0 1 8 12a8 8 0 0 1 16 0a7.2 7.2 0 0 1-2.82 6.14c-1.07 1-2.18 2-2.18 3.86h2c0-.92.53-1.45 1.54-2.39A9.18 9.18 0 0 0 26 12A10 10 0 0 0 16 2\"/>","infinity-symbol":"<path fill=\"currentColor\" d=\"M23 23c-5.656 0-7.858-6.41-7.949-6.684C15.034 16.265 13.208 11 9 11c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.588 0 3.013-.732 4.237-2.176l1.526 1.293C13.164 22.003 11.172 23 9 23c-3.86 0-7-3.14-7-7s3.14-7 7-7c5.656 0 7.858 6.41 7.949 6.684C16.966 15.735 18.792 21 23 21c2.757 0 5-2.243 5-5s-2.243-5-5-5c-1.588 0-3.013.732-4.237 2.176l-1.526-1.293C18.836 9.997 20.828 9 23 9c3.86 0 7 3.14 7 7s-3.14 7-7 7\"/>","wallet":"<path fill=\"currentColor\" d=\"M22 17h2v2h-2z\"/><path fill=\"currentColor\" d=\"M28 8H4V5h22V3H4a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26V10h24v3h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8v3Zm24-11v6h-8v-6Z\"/>","document-signed":"<path fill=\"currentColor\" d=\"M19.414 30H15v-4.414l5.034-5.034A5 5 0 0 1 20 20a5 5 0 1 1 4.448 4.966ZM17 28h1.586l5.206-5.206l.54.124a3.035 3.035 0 1 0-2.25-2.25l.124.54L17 26.414Z\"/><circle cx=\"25\" cy=\"20\" r=\"1\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M8 6h12v2H8zm0 4h12v2H8zm0 4h6v2H8zm0 10h4v2H8z\"/><path fill=\"currentColor\" d=\"M12 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9h-2V4H6v24h6Z\"/>","settings-adjust":"<path fill=\"currentColor\" d=\"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3\"/>","checkmark-outline":"<path fill=\"currentColor\" d=\"m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z\"/><path fill=\"currentColor\" d=\"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12\"/>","repeat":"<path fill=\"currentColor\" d=\"M6 6h20.172l-3.586-3.586L24 1l6 6l-6 6l-1.414-1.414L26.172 8H6v7H4V8a2 2 0 0 1 2-2m3.414 14.414L5.828 24H26v-7h2v7a2 2 0 0 1-2 2H5.828l3.586 3.586L8 31l-6-6l6-6Z\"/>","calendar":"<path fill=\"currentColor\" d=\"M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H6V12h20zm0-16H6V6h4v2h2V6h8v2h2V6h4z\"/>","renew":"<path fill=\"currentColor\" d=\"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8Zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8Z\"/>","chart-stepper":"<path fill=\"currentColor\" d=\"M14 22v-8h8V6h8V4H20v8h-8v8H4V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H4v-6Z\"/>","gift":"<path fill=\"currentColor\" d=\"M26 10h-2.762A4.487 4.487 0 0 0 16 4.707A4.487 4.487 0 0 0 8.762 10H6a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2v10a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V18a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2m-9-2.5a2.5 2.5 0 1 1 2.5 2.5H17ZM12.5 5A2.503 2.503 0 0 1 15 7.5V10h-2.5a2.5 2.5 0 0 1 0-5M6 12h9v4H6Zm2 6h7v10H8Zm16.001 10H17V18h7ZM17 16v-4h9l.001 4Z\"/>","growth":"<path fill=\"currentColor\" d=\"M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z\"/>","calculator":"<path fill=\"currentColor\" d=\"M26 4v24H6V4zm0-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2\"/><path fill=\"currentColor\" d=\"M9 23h2v2H9zm12 0h2v2h-2zM9 18h2v2H9zm12 0h2v2h-2zM9 13h2v2H9zm6 10h2v2h-2zm0-5h2v2h-2zm0-5h2v2h-2zm6 0h2v2h-2zM9 7h14v3H9z\"/>","information":"<path fill=\"currentColor\" d=\"M17 22v-8h-4v2h2v6h-3v2h8v-2zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8\"/><path fill=\"currentColor\" d=\"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4\"/>","rule":"<path fill=\"currentColor\" d=\"M10 16h12v2H10zm0-6h12v2H10z\"/><path fill=\"currentColor\" d=\"m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z\"/>","meter":"<path fill=\"currentColor\" d=\"M26 16a9.9 9.9 0 0 0-1.14-4.618l-1.495 1.496A7.95 7.95 0 0 1 24 16Zm-2.586-6L22 8.586L17.285 13.3A3 3 0 0 0 16 13a3 3 0 1 0 3 3a3 3 0 0 0-.3-1.285ZM16 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0-9a8 8 0 0 1 3.122.635l1.496-1.496A9.986 9.986 0 0 0 6 16h2a8.01 8.01 0 0 1 8-8\"/><path fill=\"currentColor\" d=\"M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4\"/>","arrow-up-right":"<path fill=\"currentColor\" d=\"M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z\"/>","bullhorn":"<path fill=\"currentColor\" d=\"M26 6v2.17l-20.36 3.7a2 2 0 0 0-1.64 2v4.34a2 2 0 0 0 1.64 2l2.36.35V24a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.26l6 1.09V26h2V6Zm-8 18h-8v-3.07l8 1.45ZM6 18.17v-4.34l20-3.63v11.6Z\"/>","star":"<path fill=\"currentColor\" d=\"m16 6.52l2.76 5.58l.46 1l1 .15l6.16.89l-4.38 4.3l-.75.73l.18 1l1.05 6.13l-5.51-2.89L16 23l-.93.49l-5.51 2.85l1-6.13l.18-1l-.74-.77l-4.42-4.35l6.16-.89l1-.15l.46-1zM16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z\"/>","rocket":"<path fill=\"currentColor\" d=\"m7.288 23.292l7.997-7.997l1.414 1.414l-7.997 7.997z\"/><path fill=\"currentColor\" d=\"M17 30a1 1 0 0 1-.37-.07a1 1 0 0 1-.62-.79l-1-7l2-.28l.75 5.27L21 24.52V17a1 1 0 0 1 .29-.71l4.07-4.07A8.94 8.94 0 0 0 28 5.86V4h-1.86a8.94 8.94 0 0 0-6.36 2.64l-4.07 4.07A1 1 0 0 1 15 11H7.48l-2.61 3.26l5.27.75l-.28 2l-7-1a1 1 0 0 1-.79-.62a1 1 0 0 1 .15-1l4-5A1 1 0 0 1 7 9h7.59l3.77-3.78A10.92 10.92 0 0 1 26.14 2H28a2 2 0 0 1 2 2v1.86a10.92 10.92 0 0 1-3.22 7.78L23 17.41V25a1 1 0 0 1-.38.78l-5 4A1 1 0 0 1 17 30\"/>","meter-alt":"<path fill=\"currentColor\" d=\"M30 20a13.85 13.85 0 0 0-2.23-7.529l-1.444 1.445A11.9 11.9 0 0 1 28 20ZM28 9.414L26.586 8l-8.567 8.567A3.95 3.95 0 0 0 16 16a4 4 0 1 0 4 4a3.95 3.95 0 0 0-.567-2.02ZM16 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m0-14a11.9 11.9 0 0 1 6.083 1.674l1.454-1.453A13.977 13.977 0 0 0 2 20h2A12.014 12.014 0 0 1 16 8\"/>","favorite":"<path fill=\"currentColor\" d=\"M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.5 7.5 0 0 0 22.45 4\"/>","checkmark-filled":"<path fill=\"currentColor\" d=\"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z\"/><path fill=\"none\" d=\"m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z\"/>"};

  function svgFor(name){
    var body = ICONS[name];
    if(!body) return '';
    return '<svg viewBox="0 0 32 32" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" style="display:inline-block;vertical-align:-0.125em">'+body+'</svg>';
  }
  function paintIcons(root){
    (root||document).querySelectorAll('[data-ic]').forEach(function(el){
      if(el.__painted) return;
      var s = svgFor(el.getAttribute('data-ic'));
      if(s){ el.innerHTML = s; el.__painted = true; }
    });
  }

  /* ---- count-up ---- */
  function countUp(el){
    if(el.__counted) return; el.__counted = true;
    var target = parseFloat(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1100, t0 = null;
    function step(ts){
      if(!t0) t0 = ts;
      var k = Math.min((ts - t0)/dur, 1);
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = prefix + Math.round(target * e).toLocaleString('vi-VN') + suffix;
      if(k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---- reveal ---- */
  function setupReveal(){
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var staticMode = /[?&]static\b/.test(location.search) || window.self !== window.top;
    var targets = document.querySelectorAll('.reveal, [data-count]');
    var fire = function(el){
      if(el.classList.contains('in')) return;
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(countUp);
      if(el.hasAttribute('data-count')) countUp(el);
    };
    if(reduce || staticMode){ targets.forEach(fire); return; }
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ fire(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function(el){ io.observe(el); });
    var inView = function(){
      var vh = window.innerHeight || document.documentElement.clientHeight || 800;
      targets.forEach(function(el){
        var r = el.getBoundingClientRect();
        if(r.top < vh*0.96 && r.bottom > 0){ fire(el); io.unobserve(el); }
      });
    };
    inView(); requestAnimationFrame(inView); window.addEventListener('load', inView);
    setTimeout(function(){ targets.forEach(fire); }, 1800);
  }

  /* ---- income calculator (guarded) ---- */
  function setupCalc(){
    var custEl = document.getElementById('cCust');
    var feeEl  = document.getElementById('cFee');
    var mixEl  = document.getElementById('cMix');
    if(!(custEl && feeEl && mixEl)) return;
    var vCust=document.getElementById('vCust'), vFee=document.getElementById('vFee');
    var oY1=document.getElementById('oY1'), oY2=document.getElementById('oY2');
    var vSign=document.getElementById('vSign'), vSetup=document.getElementById('vSetup'), vRec=document.getElementById('vRec');
    var fSign=document.getElementById('fSign'), fSetup=document.getElementById('fSetup'), fRec=document.getElementById('fRec');
    var fracLarge=0.5, M=1e6, shownY1=159;
    function tier(t){ return t>=4?0.05 : t===3?0.04 : t===2?0.03 : t>=1?0.02 : 0; }
    function trieu(v){ return Math.round(v/M); }
    function compute(){
      var T=parseInt(custEl.value,10), F=parseInt(feeEl.value,10)*M;
      var L=Math.round(T*fracLarge), S=T-L, p=tier(T);
      var sign=L*5*M + S*2*M, setup=0.03*(2*F)*T, rec=p*F*T*8;
      var y1=sign+setup+rec; return {sign:sign,setup:setup,rec:rec,y1:y1,y2:y1*2.4};
    }
    function bars(r){
      var mx=Math.max(r.sign,r.setup,r.rec,1);
      if(fSign) fSign.style.width=(r.sign/mx*100)+'%';
      if(fSetup) fSetup.style.width=(r.setup/mx*100)+'%';
      if(fRec) fRec.style.width=(r.rec/mx*100)+'%';
      if(vSign) vSign.textContent=trieu(r.sign)+'tr';
      if(vSetup) vSetup.textContent=trieu(r.setup)+'tr';
      if(vRec) vRec.textContent=trieu(r.rec)+'tr';
    }
    function animY1(tg){
      var st=shownY1, t0=null;
      function step(ts){ if(!t0)t0=ts; var k=Math.min((ts-t0)/420,1); var e=1-Math.pow(1-k,3);
        oY1.textContent=Math.round(st+(tg-st)*e).toLocaleString('vi-VN'); if(k<1)requestAnimationFrame(step); else shownY1=tg; }
      requestAnimationFrame(step);
    }
    function render(){
      if(vCust) vCust.textContent=custEl.value;
      if(vFee) vFee.textContent=feeEl.value;
      var r=compute();
      if(oY1) animY1(trieu(r.y1));
      if(oY2) oY2.textContent=trieu(r.y2).toLocaleString('vi-VN')+' triệu₫';
      bars(r);
    }
    custEl.addEventListener('input',render);
    feeEl.addEventListener('input',render);
    mixEl.addEventListener('click',function(e){
      var b=e.target.closest('button'); if(!b)return;
      mixEl.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
      b.classList.add('on'); fracLarge=parseFloat(b.dataset.v); render();
    });
    render();
  }

  function init(){ paintIcons(); setupReveal(); setupCalc(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.ThodiaLib = { paintIcons: paintIcons };
})();
