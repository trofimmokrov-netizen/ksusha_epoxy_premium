export const APP_URL='https://trofimmokrov-netizen.github.io/ksusha_epoxy_premium/miniapp.html';
export const CONTACT='https://t.me/ZZZz777z';
export const COMMANDS=[['start','Приветствие и главное меню'],['catalog','Коллекция работ'],['design','Собрать предмет в 3D'],['room','Примерить в своей комнате'],['about','О Ксении и мастерской'],['order','Как заказать и узнать стоимость'],['contacts','Связаться с Ксенией'],['help','Помощь и навигация'],['privacy','Фото комнаты и данные']].map(([command,description])=>({command,description}));
export const DESCRIPTION='Мастерская Ксении · ZEMLYANOVVA EPOXY. Столы и предметы из дерева и смолы. Выберите работу, соберите 3D-концепцию и примерьте её в своей комнате. Для начала нажмите Старт.';
export const SHORT_DESCRIPTION='Мастерская Ксении: дерево и смола, каталог, 3D-подбор и примерка в интерьере. Связь с мастером: @ZZZz777z.';
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const app=(text,view='catalog')=>({text,web_app:{url:APP_URL+'?view='+view}});
export function keyboard(){return {inline_keyboard:[[app('Открыть мастерскую')],[app('Собрать в 3D','configure'),app('Примерить в комнате','showroom')],[{text:'О мастерской',callback_data:'about'},{text:'Как заказать',callback_data:'order'}],[{text:'Написать Ксении',url:CONTACT},{text:'Помощь',callback_data:'help'}],[{text:'Главное меню',callback_data:'menu'}]]}}
export function content(command,firstName=''){
 switch(command){
 case 'start':case 'menu':return `<b>${firstName?'Здравствуйте, '+esc(firstName)+'!':'Здравствуйте!'}</b>\n\nВы в мастерской Ксении — <b>ZEMLYANOVVA EPOXY</b>. Здесь дерево, смола и природные композиции становятся предметами интерьера.\n\nВыберите работу, соберите свою 3D-концепцию или примерьте предмет на фото комнаты.\n\nНажмите <b>«Открыть мастерскую»</b> — начнём с коллекции.`;
 case 'catalog':return '<b>Коллекция мастерской</b>\n\nБотаника · Осенний сад · Фиолетовый гербарий · Светлая река · Розовая тумба.\n\nВ мини-приложении собраны реальные фотографии работ. Разные ракурсы одного стола объединены в один образец. Откройте коллекцию и выберите характер своего предмета.';
 case 'design':return '<b>Ваш предмет — в восьми шагах</b>\n\nОбразец → материал → форма → размеры → заливка → опоры → финиш → итог.\n\nЖивая 3D-модель меняется вместе с выбором. В конце появится бриф для обсуждения с Ксенией.\n\n3D — концепция, размеры образцов предварительные. Рисунок дерева и ботаники, возможность исполнения и стоимость подтверждаются мастером.';
 case 'room':return '<b>Примерьте предмет в своём интерьере</b>\n\n1. Откройте студию примерки.\n2. Выберите стол или тумбу.\n3. Загрузите фото комнаты или включите камеру.\n4. Измените положение, поворот и масштаб.\n\nФото и изображение камеры обрабатываются локально. Камера доступна с вашего разрешения, если её поддерживает Telegram на телефоне. Это визуальный ориентир: масштаб не измеряется автоматически, реальную посадку нужно проверить по размерам.';
 case 'about':return '<b>Ксения · ZEMLYANOVVA EPOXY</b>\n\nМастерская столов и предметов интерьера из дерева и эпоксидной смолы. Природный рисунок дерева, ботанические композиции и детали определяют характер каждой работы.\n\nВ приложении можно познакомиться с коллекцией и сформулировать свой замысел. Материал, конструкцию и окончательный проект Ксения согласует с вами лично.\n\nСвязь с мастером: @ZZZz777z.';
 case 'order':return '<b>Как заказать</b>\n\n1. Выберите образец или собственную идею.\n2. Пройдите 8 шагов в 3D-конструкторе.\n3. Проверьте итоговый бриф.\n4. Откройте черновик сообщения Ксении или заполните форму заявки.\n\nТочная стоимость и сроки — после согласования материалов, размеров и конструкции. Цена «от» относится к образцу и не является расчётом новой конфигурации.\n\n<b>Бот не пересылает сообщения мастеру.</b> Для личного разговора используйте кнопку «Написать Ксении».';
 case 'contacts':return '<b>Напрямую с Ксенией</b>\n\nTelegram: @ZZZz777z\nТелефон: +7 995 045-33-22\nInstagram: @zemlyanovva_epoxy\n\nДля обращения с параметрами проекта подготовьте бриф в конструкторе. Отправку сообщения или заявки подтверждаете вы.';
 case 'privacy':return '<b>Фото комнаты и данные</b>\n\nФото комнаты и изображение камеры обрабатываются локально в студии примерки и не отправляются этому боту. Камера включается только с вашего разрешения и выключается при выходе из примерки.\n\nБот получает ваши команды и сообщения через Telegram и отвечает справочными текстами; история переписки не записывается в базу приложения. Не присылайте сюда конфиденциальные документы.\n\nКонтакты и бриф передаются через форму только после вашей отправки. Сообщения мастеру отправляются отдельно в личную переписку с Ксенией.';
 case 'help':return '<b>Навигация по мастерской</b>\n\n/start — главное меню\n/catalog — коллекция\n/design — 3D-конструктор\n/room — примерка на фото\n/about — о мастерской\n/order — как заказать\n/contacts — контакты\n/privacy — фото и данные\n\nКнопка «Открыть мастерскую» запускает мини-приложение. Внизу приложения — коллекция, подбор, примерка и связь с Ксенией. Стрелка назад возвращает к предыдущему разделу.\n\nЕсли экран не загрузился, нажмите «Повторить загрузку» или откройте мастерскую в браузере.';
 default:return 'Я помогу открыть коллекцию, 3D-конструктор и примерку, а также расскажу, как заказать предмет.\n\nВыберите кнопку ниже или используйте /help. Для разговора с Ксенией нажмите «Написать Ксении» — сообщения из этого чата ей автоматически не пересылаются.';
 }
}
export async function handleUpdate(update,api){
 const callback=update.callback_query,message=callback?.message||update.message;
 if(!message||message.chat?.type!=='private')return;
 const user=callback?.from||message.from;
 if(!user||user.is_bot||message.chat.id!==user.id)return;
 if(callback){const command=['about','order','help','contacts','privacy','menu'].includes(callback.data)?callback.data:null;await api('answerCallbackQuery',{callback_query_id:callback.id});if(!command)return;try{await api('editMessageText',{chat_id:message.chat.id,message_id:message.message_id,text:content(command),parse_mode:'HTML',reply_markup:keyboard(),link_preview_options:{is_disabled:true}})}catch(e){if(e?.code!=='not_modified')throw e}return}
 const text=message.text||'';
 const command=text.match(/^\/([a-z_]+)(?:@Drevesny3D_Bot)?(?:\s|$)/i)?.[1]?.toLowerCase()||'unknown';
 const markup=keyboard();
 if(command==='design')markup.inline_keyboard.unshift([app('Открыть 3D-конструктор','configure')]);
 if(command==='room')markup.inline_keyboard.unshift([app('Открыть примерку','showroom')]);
 await api('sendMessage',{chat_id:message.chat.id,text:content(command,user.first_name?.slice(0,80)),parse_mode:'HTML',reply_markup:markup,link_preview_options:{is_disabled:true}});
}
export function makeAPI(token,fetcher=fetch){return async(method,data)=>{let response;try{response=await fetcher('https://api.telegram.org/bot'+token+'/'+method,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(12000)})}catch{throw new Error('Telegram temporarily unavailable')};let body;try{body=await response.json()}catch{throw new Error('Telegram response unavailable')}if(!response.ok||!body.ok){const e=new Error('Telegram API request failed');e.code=body.error_code===400&&String(body.description).includes('message is not modified')?'not_modified':body.error_code;throw e}return body.result}}
const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
export async function webhook(request,env,apiOverride){
 if(request.method!=='POST')return json({error:'Method not allowed'},405);
 if(!env.TELEGRAM_BOT_TOKEN||!env.TELEGRAM_WEBHOOK_SECRET)return json({error:'Service not configured'},503);
 if(request.headers.get('X-Telegram-Bot-Api-Secret-Token')!==env.TELEGRAM_WEBHOOK_SECRET)return json({error:'Forbidden'},403);
 if(Number(request.headers.get('content-length'))>65536)return json({error:'Request too large'},413);
 let update;try{const raw=await request.text();if(raw.length>65536)return json({error:'Request too large'},413);update=JSON.parse(raw);if(!update||typeof update!=='object'||!Number.isSafeInteger(update.update_id))return json({error:'Invalid update'},400)}catch{return json({error:'Invalid update'},400)}
 try{await handleUpdate(update,apiOverride||makeAPI(env.TELEGRAM_BOT_TOKEN));return json({ok:true})}catch(e){if(e?.code===403||e?.code===400)return json({ok:true});return json({error:'Temporary delivery failure'},503)}
}
