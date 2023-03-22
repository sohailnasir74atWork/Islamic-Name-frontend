import React from 'react'
import ExtractData from '../../Common/DataExtracter'
import Translate from '../../Common/Translat'
import TranslateObject from '../../Common/TranslateObject'
import ABCsection from './ABCsection'
import Banner from './Banner'
import PostArtical from './PostArtical'
import PoweredbyCommunity from './PoweredbyCommunity'
import TrendingSection from './TrendingSection'

const names = [
  {
      "name": "Aafaaq",
      "englishMeaning": "The Edge of the Sky",
      "urduName": ""
  },
  {
      "name": "Aafiya",
      "englishMeaning": "good health, bin ayyub had this name, he was a narrator of hadith",
      "urduName": ""
  },
  {
      "name": "Aala",
      "englishMeaning": "bounties",
      "urduName": ""
  },
  {
      "name": "Aiman",
      "englishMeaning": "to congratulate",
      "urduName": ""
  },
  {
      "name": "Amina",
      "englishMeaning": "trustee",
      "urduName": ""
  },
  {
      "name": "Aminah",
      "englishMeaning": "honest,trustworthy",
      "urduName": ""
  },
  {
      "name": "Aqiba",
      "englishMeaning": "result, consequence.",
      "urduName": ""
  },
  {
      "name": "Ayaat",
      "englishMeaning": "many signs & proofs, verses in the quran",
      "urduName": ""
  },
  {
      "name": "Ayah",
      "englishMeaning": "a verse from quran or a sign from god",
      "urduName": ""
  },
  {
      "name": "Ayat",
      "englishMeaning": "mark, sign",
      "urduName": ""
  },
  {
      "name": "Dunya",
      "englishMeaning": "world",
      "urduName": ""
  },
  {
      "name": "Hajra",
      "englishMeaning": "to emigrate",
      "urduName": ""
  },
  {
      "name": "Hasana",
      "englishMeaning": "good deed, kind act, favour",
      "urduName": ""
  },
  {
      "name": "Ilm",
      "englishMeaning": "in sindhi meaning is slave girl belonging to zubaydah, wife of harun al-rashid had this name.",
      "urduName": ""
  },
  {
      "name": "Jannat",
      "englishMeaning": "Paradise, a garden, heaven",
      "urduName": ""
  },
  {
      "name": "Kalima",
      "englishMeaning": "speaker, mouthpiece.",
      "urduName": ""
  },
  {
      "name": "Kanz",
      "englishMeaning": "treasure",
      "urduName": ""
  },
  {
      "name": "Maidah",
      "englishMeaning": "table spread blessing",
      "urduName": ""
  },
  {
      "name": "Marib",
      "englishMeaning": "pl. of marab, wish.",
      "urduName": ""
  },
  {
      "name": "Maryam",
      "englishMeaning": "virgin, figurative, pious, devout, chaste",
      "urduName": ""
  },
  {
      "name": "Mawadda",
      "englishMeaning": "friendship, intimacy",
      "urduName": ""
  },
  {
      "name": "Naima",
      "englishMeaning": "comfort, tranquillity",
      "urduName": ""
  },
  {
      "name": "Rahmah",
      "englishMeaning": "in sindhi meaning is compassion, mercy.",
      "urduName": ""
  },
  {
      "name": "Samaah",
      "englishMeaning": "in muslim meaning is generosity",
      "urduName": ""
  },
  {
      "name": "Sumaira",
      "englishMeaning": "brownish",
      "urduName": ""
  },
  {
      "name": "Tayyiba",
      "englishMeaning": "good, good-natured, sweet",
      "urduName": ""
  },
  {
      "name": "Wahida",
      "englishMeaning": "alone, lone, single, lonely, by oneself, solitary,",
      "urduName": ""
  },
  {
      "name": "Wardah",
      "englishMeaning": "variant of warda rose.",
      "urduName": ""
  },
  {
      "name": "Zahina",
      "englishMeaning": "a very sharp mind",
      "urduName": ""
  },
  {
      "name": "Zahra",
      "englishMeaning": "radiant, resplendent",
      "urduName": ""
  }
  ]
const Home = () => {
  return (
    <div>
        <Banner/>
        <ABCsection/>
        <TrendingSection/>
        <PoweredbyCommunity/>
        <PostArtical/>
        {/* <ExtractData/> */}
        {/* <TranslateObject data={names}/> */}
    </div>
  )
}

export default Home