import React from 'react'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Assets from './components/Assets'
import blue from '../../images/blue.jpeg'
import cliff from '../../images/cliff.jpeg'
import jumeirah from '../../images/Jumeirah.jpeg'
import resort from '../../images/resort.jpeg'
import resortBad from "../../images/resortBad.jpeg"
import resortKitcen from "../../images/resortKitchen.jpeg"
import resortLivingRoom from "../../images/resortLivingRoom.jpeg"
import resort2 from "../../images/resort2.jpeg"
import resort3 from "../../images/resort3.jpeg"
import resort4 from "../../images/resort4.jpeg"
import resort5 from "../../images/resort5.jpeg"
import resort6 from "../../images/resort6.jpeg"
import resort7 from "../../images/resort7.jpeg"
import resort8 from "../../images/resort8.jpeg"
import resort9 from "../../images/resort9.jpeg"
import breeze from "../../images/breeze.jpeg"
import breezeBad from "../../images/breezeBad.jpeg"
import breezeBat from "../../images/breezeBat.jpeg"
import breezeLivingRoom from "../../images/breezeLivingRoom.jpeg"
import breeze2 from "../../images/breeze2.jpeg"
import breeze3 from "../../images/breeze3.jpeg"
import breeze4 from "../../images/breeze4.jpeg"
import breeze5 from "../../images/breeze5.jpeg"
import blueKitchen from '../../images/blueKitcen.jpeg'
import blueBat from '../../images/blueBat.jpeg'
import blueLivingRoom from '../../images/blueLivingRoom.jpeg'
import blue2 from '../../images/blue2.jpeg'
import blue3 from '../../images/blue3.jpeg'
import blue4 from '../../images/blue4.jpeg'
import blue5 from '../../images/blue5.jpeg' 
import blue6 from '../../images/blue6.jpeg'
import blue7 from '../../images/blue7.jpeg'
import blue8 from '../../images/blue8.jpeg'
import cliffKitchen from '../../images/cliffKitchen.jpeg'
import cliffYard from '../../images/cliffYard.jpeg'
import cliffLivingRoom from '../../images/cliffLivingRoom.jpeg'
import cliff2 from '../../images/cliff2.jpeg'
import cliff3 from '../../images/cliff3.jpeg'
import cliff4 from '../../images/cliff4.jpeg'
import cliff5 from '../../images/cliff5.jpeg'
import cliff6 from '../../images/cliff6.jpeg'
import cliff7 from '../../images/cliff7.jpeg'
import cliff8 from '../../images/cliff8.jpeg'
import logo from "../../images/archaeological.png"
import HeroImg from "../../images/beach.jpg"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MapIcon from '@mui/icons-material/Map';
import TollIcon from '@mui/icons-material/Toll';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Footer from '../general/Footer'
const Home = () => {
  const bluePics=[blueKitchen,blueBat,blueLivingRoom,blue2,blue3,blue4,blue5,blue6,blue7,blue8]
  const cliffPics=[cliffKitchen,cliffYard,cliffLivingRoom,cliff2,cliff3,cliff4,cliff5,cliff6,cliff7,cliff8]
  const resortPics=[resortBad,resortKitcen,resortLivingRoom,resort2,resort3,resort4,resort5,resort6,resort7,resort8,resort9]
  const breezePics=[breezeBad,breezeBat,breezeLivingRoom,breeze2,breeze3,breeze4,breeze5]
  return (
    <div className='text-center '>
        <Hero logo={logo} HeroImg={HeroImg}/>
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
        <div className={`grid gap-4 grid-cols-2 max-md:grid-cols-1 mt-4 bg-[url('./images/cover2.jpg')]`}>

        <Assets 
        pic={blue} 
        pics={bluePics}
        info={"דירות למכירה במתחם  Blue - פרויקט מגורים יוקרתי הממוקם במיקום מצוין ומציע נוחות וקרובות לחוף הים ולאטרקציות מקומיות. המתחם מציע שירותי ניהול נכסים ומתחמי פעילות עבור כל המשפחה, וכן פארק מים ענקי לנוחיות התושבים. מבצע תשואה מובטחת של עד 8% בשנה."}
        title={"Blue"}
        price={"כניסה עכשיו \n סטודיו החל מ590000 ש״ח \n חדר שינה 1 החל מ650000 ש״ח \n 2 חדרי שינה  החל מ863000 ש״ח \n 3 חדרי שינה פֶּנטהָאוּז החל מ1750000 ש״ח \n ווילה 2 חדרי שינה החל מ1135000 ש״ח \n ווילה 3 חדרי שינה החל מ1266000 ש״ח \n תשלום ראשון 30% אחרי תשלומים עד 48 חודשים  "}
        lat={35.328538235240785}
        lng={33.97347626091933}
        video={"https://www.instagram.com/reel/Cq6M79qoJDz/?igshid=NTNjZTY1NDU="}
        size={"סטודיו-50 מ'+9 מ'\n+1-65 מ'+20 מ'\n2 חדרי שינה-80 מ'+20 מ'\n וילה-182 מ'+14 מ'\n קוואטרו-127+27"}
        />
       
        <Assets 
        pic={cliff} 
        pics={cliffPics}
        info={"חדשות טובות לחובבי החלומות! מתחם מגורים חדש ומודרני קורא לכם לחיות את החלום היוקרתי ביותר! פרויקט  CLIFF 2 הוא מתחם מגורים מודרני הממוקם בכפר Esentepe בצפון קפריסין. המתחם מציע דירות ווילות דו-מפלסיות מפנקות, הממוקמות במרחק קצר מחוף עוצר נשימה ומציעות אקלים ים תיכוני נעים לאורך כל השנה. הפרויקט פותח ותוכנן במיוחד על ידי קבוצת אפיק ומבטיח חוויה מפנקת ויוקרתית לכל הדיירים."}
        title={"Cliff 2"}
        price={"כניסה מעכשיו עד 2026 \n סטודיו החל מ 522000 ש״ח \n חדר שינה 1 החל מ 658000 ש״ח \nווילה 3 חדרי שינה החל מ 1357000 ש״ח \nתשלום ראשון 30% אחרי תשלומים ל 48 חודשים "}
        lat={35.34651751313956}
        lng={33.57861175748122}
        video={"https://www.instagram.com/reel/CqpfNnKIaeI/?img_index=1"}
        size={"סטודיו-40 מ'+9 מ'\nחדר שינה 1-61 מ'+9 מ'\n קוואטרו-120 מ'+27 מ'\n וילה-120 מ'+40 מ'"}
       />
        <Assets 
        pic={jumeirah} 
        pics={breezePics}
        info={"דירות יוקרתיות במתחם דור חדש ומיני דובאי בצפון קפריסין, רק 10 דקות הליכה מהים. המתחם מציע מגוון מתקני פנאי כגון בריכת שחייה מרעננת, גן שעשועים, וחדר משחקים. כל יחידת הדיור מאובזרת במטבחון עם מיקרוגל ומקרר, טלוויזיה עם מסך שטוח וערוצי כבלים, פינת ישיבה עם ספה, ארון בגדים, מתקני גיהוץ וחדר רחצה פרטי עם מוצרי טיפוח חינם.        "}
        price={"דזומאירא כניסה 2025\n שלוש אופציות לתשלומים \n 1)תשלום ראשון 40%, אחרי 20% עד קבלת המפתח, 24% תשלום משכר דירה מופתח 8% לשלושה שנים, אחרי סיום שכר דירה מופתח 12% תוך שנה אחד \n2)תשלום ראשון 30%, תשלומים ל 84 חודשים \n3)75% תשלום ראשון, 25% עד קבלת המפתח, קאשבק 6% כל שנה עד סיום הבנייה. \n סטודיו החל 500000 ש״ח\nחדר שינה 1 החל מ 608000 ש״ח\n 2 חדרי שינה החל מ 954000 ש״ח"}
        title={"Palm Jumeirah"}
        lat={35.33111873963431}
        lng={33.98011041914425}
        video={false}
        size={"סטודיו-45 מ'+7 מ' מרפסת\n מרפסת חדר שינה 1-60 מ'+12.5 מ'\n מרפסת 2 חדרי שינה-92 מ'+19.5 מ'"}
        />
       
        <Assets 
        pic={resort} 
        pics={resortPics}
        info={"Resort  הוא מתחם יוקרתי השוכן במיקום מצויין בטריקומו ומציע יחידות דיור מפנקות ומאובזרות בכל הנדרש לחווית שהייה מפנקת ונעימה. המתקנים הפנאי המגוונים הכוללים בריכת שחייה מרעננת, גן שעשועים צבעוני וחדר משחקים מספקים תפנות והנאה לילדים ולמבוגרים כאחד. כל יחידת הדיור כוללת מטבחון המצוייד במיקרוגל ומקרר, טלוויזיה עם מסך שטוח וערוצי כבלים, מתקני גיהוץ, ארון בגדים, פינת ישיבה עם ספה וחדר רחצה פרטי ומאובזר במלואו עם בידה ומוצרי טיפוח בחינם."}
        title={"Resort"}
        price={"סיזר ריזורט כניסה מעכשיו עד 2026\n תשלום ראשון 30% אחרי תשלומים עד 48 חודשים \n סטודיו החל מ376000 ש״ח \nחדר שינה 1 החל 482000 ש״ח \n2 חדרי שינה החל מ 640000 ש״ח \n יש גם אופציה לדירות 3 חדרי שינה ו4+1  "}
        lat={35.262729029457304}
        lng={33.903171222838914}
        video={false}
        size={"סטודיו-50 מ'+8 מ'\nחדר שינה 1-60 מ'+15 מ'\n2 חדרי שינה-80 מ'+20 מ'"}
       />
     
        <Assets 
        pic={breeze} 
        pics={breezePics}
        info={"הפרויקט נמצא בצפון קפריסין, בסמוך לבירה התוססת קירנייה, על מפרץ סנטה פה, עם נוף מרהיב אל הים הקסום וסמוך למפרץ הצבים ושכונת הגולף הגדולה ביותר במזרח התיכון. צפי הכנסות והשבחה גבוהים במיוחד, לצד חופשות חלומיות בדירה משלכם במקום הנחשב לאחד מהיפים בעולם – 40 דקות מתל-אביב!"}
        title={"Breeze"}
        price={"סיזר בריז כניסה 2026\n תשלום ראשון 30% אחרי תשלומים עד 48 חודשים \n סטודיו החל מ 522000 ש״ח\nחדר שינה 1 החל מ 692000 ש״ח\n2 חדרי שינה החל מ 926000 ש״ח\n ווילה 2 חדרי שינה החל מ 1022000 ש״ח\n ווילה 3 חדרי שינה החל 1203000 ש״ח\n ווילה 3-4-5 חדרי שינה החל מ 3405000 ש״ח"}
        lat={35.38613969873495}
        lng={33.711748500000006}
        video={"https://www.instagram.com/reel/CqudCoHIoRy/?igshid=NTNjZTY1NDU%3D"}
        size={"סטודיו-37 מ'+10 מ'\n חדר שינה 1-55 מ'+7.4 מ'\n2 חדרי שינה-60 מ'+19 מ'\n קוואטרו-110 מ'+27 מ'\n וילה-277 מ'+100 מ'"}
       /></div>  
    <Footer/>    
    </div>
  )
}

export default Home