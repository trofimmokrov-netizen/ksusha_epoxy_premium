/* Register before the Bitrix loader. No submission and no credentials in the browser. */
(() => {
  'use strict';
  let text='',forms=[];
  const listeners=new Set();
  function emit(state){listeners.forEach(fn=>fn(state))}
  function fill(form){
    if(!text||typeof form.setValues!=='function')return false;
    try{form.setValues({DEAL_COMMENTS:text});return true}catch{return false}
  }
  window.addEventListener('b24:form:init',event=>{
    const form=event.detail?.object;
    if(!form||String(form.identification?.id)!=='1')return;
    if(!forms.includes(form))forms.push(form);
    if(fill(form))emit('prefilled');
  });
  window.KSUSHA_CRM={
    setBrief(value){text=String(value||'').slice(0,8000);let filled=false;forms.forEach(form=>{if(fill(form))filled=true});emit(filled?'prefilled':'waiting');return filled},
    getBrief(){return text},
    onState(fn){listeners.add(fn);return()=>listeners.delete(fn)}
  };
  document.addEventListener('DOMContentLoaded',()=>{const brief=document.querySelector('#brief-text');if(!brief)return;const sync=()=>window.KSUSHA_CRM.setBrief(brief.textContent);new MutationObserver(sync).observe(brief,{childList:true,characterData:true,subtree:true});window.KSUSHA_CRM.onState(state=>{const el=document.querySelector('#crm-inline-status');if(el)el.textContent=state==='prefilled'?'Описание подставлено в комментарий формы. Проверьте его перед отправкой.':'Если описание не появилось в форме, скопируйте его кнопкой слева.'});sync()});
})();
