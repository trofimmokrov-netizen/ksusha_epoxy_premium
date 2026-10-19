/* Native Bitrix24 contact widget, loaded on demand and once per top-level page. */
(() => {
  'use strict';
  const params=new URLSearchParams(location.search);
  if(window.top!==window.self||params.get('embed')==='1'||params.get('mini')==='1')return;
  function init(){
    if(document.querySelector('#bitrix-contact-launcher'))return;
    const button=document.createElement('button');button.id='bitrix-contact-launcher';button.type='button';button.textContent='Связаться · Bitrix24';button.title='Открыть внешний виджет Bitrix24';button.setAttribute('aria-describedby','bitrix-contact-status');
    const status=document.createElement('span');status.id='bitrix-contact-status';status.className='bitrix-widget-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
    document.body.append(button,status);
    function position(){const banner=document.querySelector('#privacy-banner');const offset=Math.max(105,banner?innerHeight-banner.getBoundingClientRect().top+16:0);document.documentElement.style.setProperty('--bitrix-widget-offset',offset+'px')}
    position();addEventListener('resize',position);new MutationObserver(position).observe(document.body,{childList:true});const banner=document.querySelector('#privacy-banner');if(banner&&window.ResizeObserver)new ResizeObserver(position).observe(banner);
    button.addEventListener('click',()=>{
      if(document.querySelector('#bitrix-contact-script'))return;
      button.disabled=true;status.textContent='Подключаем виджет Bitrix24…';
      const script=document.createElement('script');script.id='bitrix-contact-script';script.async=true;script.src='https://cdn-ru.bitrix24.ru/b38606320/crm/site_button/loader_1_mxd7ow.js?'+Math.floor(Date.now()/60000);
      const timer=setTimeout(()=>{status.textContent='Виджет загружается дольше обычного. Можно оставить заявку в форме на сайте.'},20000);
      script.onload=()=>{clearTimeout(timer);if(window.BX?.SiteButton){button.remove();status.textContent='';window.BX.SiteButton.buttons?.show?.()}else{button.disabled=false;script.remove();status.textContent='Виджет не запустился. Повторите или используйте форму заявки.'}};
      script.onerror=()=>{clearTimeout(timer);script.remove();button.disabled=false;status.textContent='Не удалось загрузить Bitrix24. Нажмите ещё раз или используйте форму заявки.'};
      document.head.append(script);
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
