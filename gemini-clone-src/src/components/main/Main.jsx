// import React, { useContext } from 'react'
// import './Main.css'
// import {assets} from '../../assets/assets'
// import { Context } from '../../context/context'

// const Main = () => {

//     const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

//   return (
//     <div className='main'>

//         <div className="nav">
//             <p>Gemini</p>
//             <img src={assets.user_icon} alt="" />
//         </div>

//         <div className="main-container">

//             {!showResult
//             ? <>
//             <div className="greet">
//                 <p><span>Hello, Angad.</span></p>
//                 <p>How can i help you, today?</p>
//             </div>

//             <div className="cards">

//                 <div className="card">
//                     <p>Suggest beautiful places to see mountains</p>
//                     <img src={assets.compass_icon} alt="" />
//                 </div>

//                 <div className="card">
//                     <p>Briefly summarize urban planning concepts</p>
//                     <img src={assets.bulb_icon} alt="" />
//                 </div>

//                 <div className="card">
//                     <p>Brainstorm team bonding activites for our work retreat</p>
//                     <img src={assets.message_icon} alt="" />
//                 </div>

//                 <div className="card">
//                     <p>Improve the readibility of the following code</p>
//                     <img src={assets.code_icon} alt="" />
//                 </div>

//             </div>
//             </>
//             : <div className='result'>
//                 <div className="result-title">
//                     <img src={assets.user_icon} alt="" />
//                     <p>{recentPrompt}</p>
//                 </div>
//                 <div className="result-data">
//                     <img src={assets.gemini_icon} alt="" />
//                     {loading
//                     ? <div className='loader'>
//                         <hr />
//                         <hr />
//                         <hr />
//                     </div>
//                     :
//                     <p dangerouslySetInnerHTML={{__html:resultData}}></p>
//                     }   
//                 </div>
//             </div>
//             }

//             <br />
//             <br />

//             <div className="main-bottom">

//                 <div className="search-box">

//                     <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
//                     <div>
//                         <img src={assets.gallery_icon} alt="" />
//                         <img src={assets.mic_icon} alt="" />
//                         {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
//                     </div>

//                 </div>

//                 <p className="bottom-info">
//                         Gemini may display inacurate info, including about people, so double-check its responses.
//                 </p>

//             </div>

//         </div>

//     </div>
//   )
// }

// export default Main

import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  // NEW: use a card’s text as the prompt immediately
  const useCardPrompt = (text) => {
    setInput(text);     // so it appears in the input box (optional but nice)
    onSent(text);       // fire the request
  };

  return (
    <div className='main'>

      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">

        {!showResult ? <>
          <div className="greet">
            <p><span>Hello, Angad.</span></p>
            <p>How can i help you, today?</p>
          </div>

          <div className="cards">

            <div
              className="card"
              onClick={() => useCardPrompt("Suggest beautiful places to see mountains")}
              role="button"
              tabIndex={0}
            >
              <p>Suggest beautiful places to see mountains</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div
              className="card"
              onClick={() => useCardPrompt("Briefly summarize urban planning concepts")}
              role="button"
              tabIndex={0}
            >
              <p>Briefly summarize urban planning concepts</p>
              <img src={assets.bulb_icon} alt="" />
            </div>

            <div
              className="card"
              onClick={() => useCardPrompt("Brainstorm team bonding activities for our work retreat")}
              role="button"
              tabIndex={0}
            >
              <p>Brainstorm team bonding activites for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>

            <div
              className="card"
              onClick={() => useCardPrompt("Improve the readability of the following code")}
              role="button"
              tabIndex={0}
            >
              <p>Improve the readibility of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>

          </div>
        </> : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <br />
        <br />

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a prompt here'
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inacurate info, including about people, so double-check its responses.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Main
