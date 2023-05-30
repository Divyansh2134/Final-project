import React from 'react'
import img_1 from './images/image.png'

const Part_1 = () => {
  return (
    <div style={container}>
      <div style={AbtUs}>About India</div>
      <img style={Image_Styles} src ={img_1}></img>
      <div style={HistoryOfIndia}>History Of India</div>
      <div style={text}>{text1}</div>
      <div style={SubHeading}>Ancient History</div>
      <div style={text}>{text2}</div>
      <div style={SubHeading}>Medival History</div>
      <div style={text}>{text3}</div>
      <div style={SubHeading}>Freedom Struggle</div>
      <div style={text}>{text4}</div>
    </div>
  )
}

export default Part_1;
const text1=`The Indian Peninsula stands apart from the rest of Asia, bordered as it is by mountains and the sea, which gives the country a distinct geographical entity. Based on the phases of evolution of the country and its people the history of India can be categorised in three major categories:`
const text2=`India's history and culture is dynamic, spanning back to the beginning of human civilization. It begins with a mysterious culture along the Indus River and in farming communities in the southern lands of India. The history of India is punctuated by constant integration of migrating people with the diverse cultures that surround India. Available evidence suggests that the use of iron, copper and other metals was widely prevalent in the Indian sub-continent at a fairly early period, which is indicative of the progress that this part of the world had made. By the end of the fourth millennium BC, India had emerged as a region of highly developed civilization.
Know more (http://knowindia.gov.in/culture-and-heritage/ancient-history.php)`;
const text3=`For a period that has come to be so strongly associated with the Islamic influence and rule in India, Medieval Indian history went for almost three whole centuries under the so-called indigenous rulers, that included the Chalukyas, the Pallavas, the Pandyas, the Rashtrakutas, the Muslims rulers and finally the Mughal Empire. The most important dynasty to emerge in the middle of the 9th century was that of the Cholas.
Know more ( http://knowindia.gov.in/culture-and-heritage/medieval-history.php )`
const text4=`In ancient times, people from all over the world were keen to come to India. ThePersians followed by the Iranians and Parsis immigrated to India. Then came theMoghuls and they too settled down permanently in India. Chengis Khan, the Mongolian, invaded and looted India many times. Alexander the Great too, came to conquer India but went back after a battle with Porus. He-en Tsang from China came in pursuit of knowledge and to visit the ancient Indian universities of Nalanda and Takshila. Columbus wanted to come to India, but instead landed on the shores of America. Vasco da Gama from Portugal came to trade his country's goods in return for Indian spices. The French came and established their colonies in India.
Lastly, the Britishers came and ruled over India for nearly 200 years. After the battle of Plassey in 1757, the British achieved political power in India. And their paramountcy was established during the tenure of Lord Dalhousie, who became the Governor- General in 1848. He annexed Punjab, Peshawar and the Pathan tribes inthe north-west of India. And by 1856, the British conquest and its authority were firmly established. And while the British power gained its heights during the middle of the 19th century, the discontent of the local rulers, the peasantry, the intellectuals, common masses as also of the soldiers who became unemployed due to the disbanding of the armies of various states that were annexed by the British, became widespread. This soon broke out into a revolt which assumed the dimensions of the 1857 Mutiny.
Know more( http://knowindia.gov.in/culture-and-heritage/freedom-struggle.php)`
const container={
    width: '100vw',
    maxWidth:'100%',
    marginTop:'8.188rem'
}
const Image_Styles ={
width: '76%',
height: '65%',
margin: '3% 12% 2% 12%',

background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(alpesh-jogia-PcxKrY3l0-w-unsplash.jpg)',
borderRadius: '2%'
}
const AbtUs={
    margin: '1% 12% 1vh 12%',
    width: '76%',
    height: '4%',
    fontFamily: 'Mulish',
    fontWeight: '800',
    fontSize: '40px',
    fontStyle: 'normal',
    lineHeight: '80px',
    color: '#737373'
    };

const HistoryOfIndia=
{
width: '76%',
height: '40px',
margin: '1vh 12vw 1vh 12vw',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '800',
fontSize: '32px',
lineHeight: '40px',
textTransform: 'uppercase',
color: '#555555'
    }

const text={
    margin:'1vh 12vw 1vh 12vw'
}

const SubHeading={
width: '76%',
height: '33px',
margin: '1vh 12vw 1vh 12vw',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '800',
fontSize: '26px',
lineHeight: '33px',
/* identical to box height */


color: '#808080',

}