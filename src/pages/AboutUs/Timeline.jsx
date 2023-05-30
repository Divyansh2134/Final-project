import React,{useState } from "react";
import { Chrono} from "react-chrono";
// import img2 from '../../../../public/images/AboutUs/image1.jpg'
import timeline_data from "./timeline_data"; 




export default function App() {
  const [imgurl, setimgurl] = useState(timeline_data[3]);
  const [n,setn]=useState(4);
  function getContent(){
    let x=imgurl;
    // console.log(imgurl.media.source.url);
    return(
      <div style={content}>
        <div style={box1}><div style={content_head}>{imgurl.title}</div><div style={{margin:'6% auto auto auto'}}>{imgurl.cardDetailedText}</div> </div>
      <div style={box2}><img style={contentImg}  src={imgurl.media.source.url}></img></div>
      </div>
       
    )
  }
  return (
    <div style={container}>
      <div style={{ width: "76%",maxWidth :'76vw', height: "35vh", margin: "4vh 10% 0 10%" }}>
        <Chrono items={timeline_data} mode="HORIZONTAL"
          // slideShow='true' slideItemDuration={1000}
          className ={content}
          maxWidth="76vw"
          cardLess='true'
          theme={{
            primary: 'grey',
            secondary: 'black',
            cardBgColor: 'black',
            cardForeColor: 'white',
            titleColor: 'black',
            titleColorActive: 'white',
          }}
            onItemSelected={x=>setimgurl(x)}
          buttonTexts={{
            first: 'Jump to First',
            last: 'Jump to Last',
            next: 'Next',
            previous: 'Previous',
          }}
          itemWidth={122}
          activeItemIndex={n}><div className={content}>hellllloooo</div>
            </Chrono>
           <div> {getContent()}</div>
      </div>
    </div>
  );
}

const container = {
  margin: "2vh 0% 1% 0%",
  width: '100vw',
  maxWidth:'100%',
  height:'100vh',
  // border: '2px solid black'
}
const content={ 
  // background:'red',
  margin:'-1% 0px 0px 0px',
  // border:'2px solid red',
  height:'60vh',
  width:'76vw',
  maxWidth:'76vw',
  display:'flex'
}


const box1={
  display:'inline',
  // margin:'auto 20% 4% 0%',
  padding:'2% 5% 5% 0%',
  width:'40%',
  height:'80.2%',
// border:'2px solid green',
// background:'red'
}
const box2={
  
  display:'inlines',
  margin:'0% 0% 0% 10%',
  width:'50%',
  height:'100%',
  // border:'2px solid green'
  }

  const contentImg={
   width:'38vw',
  //  height:'80%',
  //  margin:'8.5% 0% 5% 30%',
   borderRadius:'3%'

   
  }
  const content_head={
    margin:'10% 0% 5% 0%',
    display:'inline',
    // width:'10%',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: '800',
fontSize: '6vw',
lineHeight: '15vh',
/* identical to box height */

textTransform: 'uppercase',

color: '#555555',

  }