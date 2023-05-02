import React from 'react'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Assets from './components/Assets'
import blue from '../../images/blue.jpeg'
import cliff from '../../images/blue2.jpeg'
import jumeirah from '../../images/Jumeirah.jpeg'
import resort from '../../images/resort.jpeg'
import resortBad from "../../images/resortBad.jpeg"
import resortKitcen from "../../images/resortKitchen.jpeg"
import resortLivingRoom from "../../images/resortLivingRoom.jpeg"
import breeze from "../../images/breeze.jpeg"
import breezeBad from "../../images/breezeBad.jpeg"
import breezeBat from "../../images/breezeBat.jpeg"
import breezeLivingRoom from "../../images/breezeLivingRoom.jpeg"
import blueKitchen from '../../images/blueKitcen.jpeg'
import blueBat from '../../images/blueBat.jpeg'
import blueLivingRoom from '../../images/blueLivingRoom.jpeg'
import cliffKitchen from '../../images/cliffKitchen.jpeg'
import cliffYard from '../../images/cliffYard.jpeg'
import cliffLivingRoom from '../../images/cliffLivingRoom.jpeg'
import logo from "../../images/archaeological.png"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MapIcon from '@mui/icons-material/Map';
import TollIcon from '@mui/icons-material/Toll';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Footer from '../general/Footer'
const Home = () => {
  const bluePics=[blueKitchen,blueBat,blueLivingRoom]
  const cliffPics=[cliffKitchen,cliffYard,cliffLivingRoom]
  const resortPics=[resortBad,resortKitcen,resortLivingRoom]
  const breezePics=[breezeBad,breezeBat,breezeLivingRoom]
  return (
    <div className='text-center'>
        <Hero logo={logo}/>
        <h1 className='text-6xl font-mono font-bold ' id='start'>מה תמצאו אצלנו?</h1>
        <div className='grid grid-cols-7 max-lg:grid-cols-3 max-sm:gris-cols-1 gap-2 text-lg flex justify-center'>
        <Advantages content={"תשואה של עד כ-8%"} icon={<AttachMoneyIcon/>}/>
        <Advantages content={"תשלום בכל מטבע כולל BitCoin"} icon={<CurrencyBitcoinIcon/>}/>
        <Advantages content={"40 דקות טיסה מישראל"} icon={<FlightTakeoffIcon/>}/>
        <Advantages content={"תשלומים עד כ-7 שנים"} icon={<LocalAtmIcon/>}/>
        <Advantages content={"ליווי מלא עד קבלת המפתח"} icon={<PeopleOutlineIcon/>}/>
        <Advantages content={"סיור חינם של כ-3 לילות"} icon={<MapIcon/>}/>
        <Advantages content={"מחיר ללא תיווך"} icon={<TollIcon/>}/>
        </div>        

        <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1 mt-4">

        <Assets 
        pic={blue} 
        pics={bluePics}
        info={"דירות למכירה במתחם  BLUE - פרויקט מגורים יוקרתי הממוקם במיקום מצוין ומציע נוחות וקרובות לחוף הים ולאטרקציות מקומיות. המתחם מציע שירותי ניהול נכסים ומתחמי פעילות עבור כל המשפחה, וכן פארק מים ענקי לנוחיות התושבים. מבצע תשואה מובטחת של עד 8% בשנה."}
        title={"Blue"}
        price={"כניסה עכשיו \n סטודיו החל מ590000 ש״ח \n 1+1 החל מ650000 ש״ח \n 2+1  החל מ863000 ש״ח \n 3+1 פֶּנטהָאוּז החל מ1750000 ש״ח \n ווילה 2+1 החל מ1135000 ש״ח \n ווילה 3+1 החל מ1266000 ש״ח \n תשלום ראשון 30% אחרי תשלומים עד 48 חודשים  "}
        lat={35.328538235240785}
        lng={33.97347626091933}
        video={"https://www.instagram.com/reel/Cq6M79qoJDz/?igshid=NTNjZTY1NDU="}
        />
       
        <Assets 
        pic={cliff} 
        pics={cliffPics}
        info={"חדשות טובות לחובבי החלומות! מתחם מגורים חדש ומודרני קורא לכם לחיות את החלום היוקרתי ביותר! פרויקט  CLIFF 2 הוא מתחם מגורים מודרני הממוקם בכפר Esentepe בצפון קפריסין. המתחם מציע דירות ווילות דו-מפלסיות מפנקות, הממוקמות במרחק קצר מחוף עוצר נשימה ומציעות אקלים ים תיכוני נעים לאורך כל השנה. הפרויקט פותח ותוכנן במיוחד על ידי קבוצת אפיק ומבטיח חוויה מפנקת ויוקרתית לכל הדיירים."}
        title={"CLIFF 2"}
        price={"כניסה מעכשיו עד 2026 \n סטודיו החל מ 522000 ש״ח \n 1+1 החל מ 658000 ש״ח \nווילה 3+1 החל מ 1357000 ש״ח \nתשלום ראשון 30% אחרי תשלומים ל 48 חודשים "}
        lat={35.34651751313956}
        lng={33.57861175748122}
        video={"https://www.instagram.com/reel/CqpfNnKIaeI/?img_index=1"}
       />
        <Assets 
        pic={jumeirah} 
        pics={breezePics}
        info={"דור חדש, מיני דובאי בצפון קפריסין, 10דק מהים, בריכות מקורות, בניינים רב קומות עד 20 קומות"}
        price={"דזומאירא כניסה 2025\n שלוש אופציות לתשלומים \n 1)תשלום ראשון 40%, אחרי 20% עד קבלת המפתח, 24% תשלום משכר דירה מופתח 8% לשלושה שנים, אחרי סיום שכר דירה מופתח 12% תוך שנה אחד \n2)תשלום ראשון 30%, תשלומים ל 84 חודשים \n3)75% תשלום ראשון, 25% עד קבלת המפתח, קאשבק 6% כל שנה עד סיום הבנייה. \n סטודיו החל 500000 ש״ח\n1+1 החל מ 608000 ש״ח\n 2+1 החל מ 954000 ש״ח"}
        title={"Palm Jumeirah"}
        lat={35.33111873963431}
        lng={33.98011041914425}
        video={"https://www.instagram.com/reel/Cq6M79qoJDz/?igshid=NTNjZTY1NDU="}
        />
       
        <Assets 
        pic={resort} 
        pics={resortPics}
        info={"Resort  הוא מתחם יוקרתי השוכן במיקום מצויין בטריקומו ומציע יחידות דיור מפנקות ומאובזרות בכל הנדרש לחווית שהייה מפנקת ונעימה. המתקנים הפנאי המגוונים הכוללים בריכת שחייה מרעננת, גן שעשועים צבעוני וחדר משחקים מספקים תפנות והנאה לילדים ולמבוגרים כאחד. כל יחידת הדיור כוללת מטבחון המצוייד במיקרוגל ומקרר, טלוויזיה עם מסך שטוח וערוצי כבלים, מתקני גיהוץ, ארון בגדים, פינת ישיבה עם ספה וחדר רחצה פרטי ומאובזר במלואו עם בידה ומוצרי טיפוח בחינם."}
        title={"Resort"}
        price={"סיזר ריזורט כניסה מעכשיו עד 2026\n תשלום ראשון 30% אחרי תשלומים עד 48 חודשים \n סטודיו החל מ376000 ש״ח \n1+1 החל 482000 ש״ח \n2+1 החל מ 640000 ש״ח \n יש גם אופציה לדירות 3+1 ו4+1  "}
        lat={35.262729029457304}
        lng={33.903171222838914}
        video={"https://www.instagram.com/reel/CqpfNnKIaeI/?img_index=1"}
       />
    </div>   
        <Assets 
        pic={breeze} 
        pics={breezePics}
        info={""}
        title={"Breeze"}
        price={"סיזר בריז כניסה 2026\n תשלום ראשון 30% אחרי תשלומים עד 48 חודשים \n סטודיו החל מ 102500 ש״ח\n1+1 החל מ 692000 ש״ח\n2+1 החל מ 926000 ש״ח\n ווילה 2+1 החל מ 1022000 ש״ח\n ווילה 3+1 החל 1203000 ש״ח\n ווילה 3-4-5 חדרי שינה החל מ 3405000 ש״ח"}
        lat={35.38613969873495}
        lng={33.711748500000006}
        video={"https://www.instagram.com/reel/CqudCoHIoRy/?igshid=NTNjZTY1NDU%3D"}
       />
    <Footer/>    
    </div>
  )
}

export default Home