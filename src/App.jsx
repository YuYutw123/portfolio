import { FaReact, FaNodeJs, FaGitAlt, FaUnity   } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import Header from './components/Header'
import Work from './components/Work'

import './App.css'

function App() {
    const iconList1 = [
        <FaReact size={50}/>,
        <SiVite size={50} />,
        <FaNodeJs size={50} />, 
        <DiMongodb size={50} />,
        <RiTailwindCssFill size={50} />,
        <FaGitAlt size={50} />
    ];
    const iconList2 = [
        <FaReact size={50}/>,
        <SiVite size={50} />,
        <RiTailwindCssFill size={50} />,
        <FaGitAlt size={50} />
    ];
    const iconList3 = [
        <TbBrandCSharp size={50}/>,
        <FaUnity size={50} />,
    ];


    return (
        <div className='min-h-[100vh] bg-white'>
            <Header></Header>
            <Work
                title={"書籍資訊管理系統 全端"}
                description={"出版書籍的資訊統整網站，供使用者查詢特定分類書籍資訊，站方也可從後台更新書籍資料。\n\n\n與他人合作之專案，合作方僅提供資料，網站由我一人開發，前端使用React + Vite ，後端使用Node.js + Express，資料庫使用MongoDB Altas，網頁設計使用Figma"}
                iconList={iconList1}
                pictureList={["https://i.imgur.com/QoDsgPl.png", "https://i.imgur.com/Gna31PP.png"]}
                bgColor={"bg-blue-100"}
            />
            <Work
                title={"商家點餐系統 前端"}
                description={"商家點餐、取餐系統，可供商家使用者編輯菜單、管理訂單、查看評分；顧客使用者查看菜看、下訂單、評分餐點。\n\n\n學校課程專案，多人協作專案，我負責前端開發、UI設計、系統設計"}
                iconList={iconList2}
                pictureList={["https://i.imgur.com/Oryq5gk.png", "https://i.imgur.com/7T2Usmk.png"]}
                bgColor={"bg-blue-200"}
            />
            <Work
                title={"遊戲模組開發"}
                description={"替換遊戲內角色模型之模組，個性化遊戲內容\n\n\n個人開發，累積安裝次數 1300餘次，使用C#編寫模組，使用Unity進行模型替換"}
                iconList={iconList3}
                pictureList={["https://i.imgur.com/qjymNb8.png", "https://i.imgur.com/Q1ofbLS.png"]}
                bgColor={"bg-blue-100"}
            />
        </div>
    )
}

export default App
