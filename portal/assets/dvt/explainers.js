/* Progressive enhancement: image links remain usable without JavaScript. */
(() => {
  let dialog;
  let opener;
  let copy;
  const labels = {
    de: {close:'Schließen', zoom:'Details vergrößern', fit:'Gesamtbild anzeigen', area:'Vergrößertes Bild – zum Verschieben scrollen'},
    en: {close:'Close', zoom:'Zoom in', fit:'Fit image', area:'Enlarged image – scroll to move'}
  };
  function ensureDialog() {
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.id = 'dvtImageDialog';
    dialog.setAttribute('aria-labelledby','dvtImageTitle');
    dialog.innerHTML = '<div class="dvt-dialog-toolbar"><h2 id="dvtImageTitle"></h2><button type="button" data-dvt-zoom aria-pressed="false"></button><button type="button" data-dvt-close autofocus></button></div><div class="dvt-image-viewport" tabindex="0" role="region"><img alt=""></div><div class="dvt-dialog-caption"></div>';
    document.body.append(dialog);
    dialog.querySelector('[data-dvt-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {if(event.target === dialog) {
      const b=dialog.getBoundingClientRect();
      if(event.clientX<b.left || event.clientX>b.right || event.clientY<b.top || event.clientY>b.bottom) dialog.close();
    }});
    dialog.querySelector('[data-dvt-zoom]').addEventListener('click', event => {
      const enlarged=dialog.classList.toggle('is-zoomed');
      event.currentTarget.textContent=enlarged ? copy.fit : copy.zoom;
      event.currentTarget.setAttribute('aria-pressed',String(enlarged));
      const viewport=dialog.querySelector('.dvt-image-viewport');
      viewport.scrollTop=0; viewport.scrollLeft=0;
    });
    dialog.addEventListener('close', () => {
      dialog.classList.remove('is-zoomed');
      if(opener?.isConnected) opener.focus({preventScroll:true});
    });
    return dialog;
  }
  document.addEventListener('click', event => {
    const link=event.target.closest?.('a[data-dvt-enlarge],a[data-beratung-enlarge]');
    if(!link || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof HTMLDialogElement==='undefined') return;
    const figure=link.closest('.dvt-explainer,.beratung-explainer');
    if(!figure) return;
    const modal=ensureDialog();
    event.preventDefault(); opener=link;
    const lang=figure.dataset.lang==='en' ? 'en' : 'de'; copy=labels[lang]; modal.lang=lang;
    modal.dataset.tone=figure.dataset.tone || 'blue';
    modal.classList.remove('is-zoomed');
    modal.querySelector('#dvtImageTitle').textContent=figure.querySelector('h3').textContent;
    const picture=modal.querySelector('img');picture.src=link.href;picture.alt=link.querySelector('img').alt;
    modal.querySelector('.dvt-dialog-caption').replaceChildren(figure.querySelector('figcaption').cloneNode(true));
    modal.querySelector('[data-dvt-close]').textContent=copy.close;
    const zoom=modal.querySelector('[data-dvt-zoom]');zoom.textContent=copy.zoom;zoom.setAttribute('aria-pressed','false');
    const viewport=modal.querySelector('.dvt-image-viewport');viewport.setAttribute('aria-label',copy.area);
    modal.showModal();modal.scrollTop=0;viewport.scrollTop=0;viewport.scrollLeft=0;
  });
})();
