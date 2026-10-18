import handler from 'vinext/server/fetch-handler';
import {webhook} from '../server/bot.mjs';
export default {fetch(request:Request,env:any,ctx:any){const url=new URL(request.url);if(url.pathname==='/telegram/webhook')return webhook(request,env);if(url.pathname==='/health')return new Response(JSON.stringify({ok:true,service:'ksenia-telegram-bot'}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});return handler.fetch(request,env,ctx)}};
