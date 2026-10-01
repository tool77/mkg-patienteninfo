/* Progressive enhancement: static category links and all cards work without JS. */
(() => {
  const params = new URLSearchParams(location.search);
  let lang = params.get('lang') === 'en' ? 'en' : 'de';
  const form = document.querySelector('.search');
  const input = document.querySelector('#topic-search');
  const results = document.querySelector('#search-results');
  const cards = document.querySelector('#result-cards');
  const browse = document.querySelector('#browse-content');
  const noResults = document.querySelector('#no-results');
  const count = document.querySelector('#result-count');
  const norm = text => text.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(el => {
      if (!el.hasAttribute('data-de')) el.dataset.de = el.textContent;
      el.textContent = lang === 'en' ? el.dataset.en : el.dataset.de;
    });
    document.querySelectorAll('[data-href-en]').forEach(el => {
      if (!el.dataset.hrefDe) el.dataset.hrefDe = el.getAttribute('href');
      el.setAttribute('href', lang === 'en' ? el.dataset.hrefEn : el.dataset.hrefDe);
    });
    document.querySelectorAll('a[href]').forEach(a => {
      if (a.hasAttribute('data-language')) {
        const url = new URL(location.href); url.searchParams.set('lang',a.dataset.language);
        a.href = url.href; a.setAttribute('aria-current',String(a.dataset.language === lang)); return;
      }
      const url = new URL(a.getAttribute('href'),document.baseURI);
      // Category links keep language. Document URLs retain their supported language.
      if (url.origin === location.origin && !a.hasAttribute('data-topic') && !url.pathname.includes('/portal/') && !url.pathname.includes('/downloads/')) {
        if (lang === 'en') url.searchParams.set('lang','en'); else url.searchParams.delete('lang');
        a.href = url.href;
      }
    });
    input.placeholder = lang === 'en' ? input.dataset.placeholderEn : 'z. B. Weisheitszahn, Implantat, Botox';
    document.querySelector('.category-nav').setAttribute('aria-label',lang === 'en' ? 'Topic areas' : 'Themenbereiche');
    const active = document.querySelector('.category-nav .active'); if(active) active.setAttribute('aria-current','page');
  }
  function resultCard(t) {
    const c = lang === 'en' ? t.en : t;
    const a = document.createElement('a'); a.className = 'topic-card'; a.href = c.href; a.dataset.topic=t.id;
    const img = document.createElement('img'); img.src=t.image; img.alt=''; img.width=640; img.height=426; img.loading='lazy';
    const body=document.createElement('div'); body.className='card-copy';
    const h=document.createElement('h3');h.textContent=c.title;
    const p=document.createElement('p');p.textContent=c.short;
    body.append(h,p);
    if(lang==='en'&&!c.href.includes('lang=en')){const n=document.createElement('small');n.className='language-note';n.textContent='Information in German';body.append(n);}
    const arrow=document.createElement('span');arrow.className='card-arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');body.append(arrow);
    a.append(img,body);return a;
  }
  function search() {
    const query=norm(input.value); const terms=query.split(' ').filter(Boolean);
    if(!terms.length){results.hidden=true;browse.hidden=false;cards.replaceChildren();return;}
    const score=t=>terms.reduce((n,s)=>n+(norm(t.title+' '+t.en.title).includes(s)?3:0)+(norm(t.aliases).includes(s)?1:0),0);
    const found=window.patientTopics.filter(t=>{const hay=norm([t.title,t.text,t.en.title,t.en.text,t.aliases].join(' '));return terms.every(s=>hay.includes(s));}).sort((a,b)=>score(b)-score(a));
    cards.replaceChildren(...found.map(resultCard));results.hidden=false;noResults.hidden=found.length>0;browse.hidden=found.length>0;
    count.textContent=lang==='en'?`${found.length} matching topic${found.length===1?'':'s'}`:`${found.length} passende${found.length===1?'s Thema':' Themen'}`;
  }
  document.querySelectorAll('[data-language]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();lang=a.dataset.language;const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');history.replaceState(null,'',u);applyLanguage();search();
  }));
  form.hidden=false;form.addEventListener('submit',e=>e.preventDefault());input.addEventListener('input',search);
  document.querySelector('#clear-search').addEventListener('click',()=>{input.value='';search();input.focus();});
  applyLanguage();search();
})();
