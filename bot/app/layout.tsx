import type {ReactNode} from 'react';
export const metadata={title:'Мастерская Ксении · Telegram',description:'Каталог, 3D-подбор и примерка предметов мастерской Ксении.'};
export default function Layout({children}:{children:ReactNode}){return <html lang="ru"><body style={{margin:0,background:'#f5f2eb',color:'#302b25',fontFamily:'Georgia,serif'}}>{children}</body></html>}
