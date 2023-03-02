import addExampleData from './Components/addExampleData';
import submitUser from "./Components/submitUser";
import readDocument from "./Components/readDocument";

import GameMap from "./Components/GameMap";
import DisplayTime from "./Components/DisplayTime";
import ReadPlayerList from "./Components/ReadPlayerList";

import React, {useState } from 'react';
import Modal from "react-overlays/Modal";

const App = () => {

  addExampleData();

  const [gameOn, setGameOn] = useState(false);
  const [player_name, setPlayer_name] = useState("default player");
  const handleChange=(e)=>{
    setPlayer_name(e.currentTarget.value);
  }
  const handleSubmit=(time_diff)=>{
    submitUser(player_name, time_diff);
  }

   // timer 
   let temp_start_time = new Date().getTime() ;
   const [start_time, setStart_time] = useState ( temp_start_time );

   const StartGame = ()=>{

    temp_start_time = new Date().getTime() ;
    setStart_time( temp_start_time );
    setGameOn(true);
  }

  //  Every time the state changes, the variable will be reassigned.
   let end_time = undefined;

   const [temp_time_stamp, setTemp_time_stamp] = useState(undefined);
   let time_diff = temp_time_stamp;
 
   const Timer_Stop = ()=>{

       end_time = new Date().getTime();
       time_diff =  
           (
               (end_time - start_time ) / 1000 )
           .toFixed(2);
      setTemp_time_stamp(time_diff);
   } 


  // modal 
  const [showModal, setShowModal] = useState(false);
  const [modal_info, setModal_info] = useState(undefined);
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  var handleClose = () => setShowModal(false);

  const checkAnswer = async (e) =>{
    const document_name = e.currentTarget.alt;
    const result = await readDocument(document_name);
    const turtle_info = {
      answer: result.answer,
      name: result.name,
      pic: result.pic,
      intro: result.intro
    }
    setModal_info(turtle_info);
    setShowModal(true);

    if(result.answer) {
      Timer_Stop();
      setGameOn(false);
    }
  }
 
  return (
    <div>
      <h1>Find the Leonard</h1>
      <p className='game-instruction'>Leonard is the turtle depicted as wearing a blue bandanna, his signature weapons are two swords.</p>
        
        {gameOn? 
          <div className='general-view'>
            <button onClick={
              ()=>{ 
                setGameOn(false);
              }
           }>Play Again</button>
            <div>
              <GameMap checkAnswer={checkAnswer}/>
              <DisplayTime start_time={start_time}/>
            </div>
          </div> 
          :
          <div className='general-view'>
            <button onClick={()=>{ StartGame(); }}>Start</button>
            <ReadPlayerList/>
          </div>
        }

        <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
            >
            {
              Boolean(modal_info)
              ?
                <div>
                  <div className="modal-header">
                  <div className="modal-title">{modal_info.answer?<span className='correct'>Correct</span>:<span className='incorrect'>Incorrect</span>}</div>
                  <div>
                      <span className="close-button" onClick={handleClose}>
                      x
                      </span>
                  </div>
                  </div>
                    
                    {
                      modal_info.answer?
                      <div className="modal-desc">
                        <p>You have used {time_diff} second(s)</p>
                        <form onSubmit={()=>{handleSubmit(time_diff)}}  id='info_form'>
                          <label htmlFor='player_name'>Enter your name here: </label>
                          <input type="text" name="player_name" id="player_name" onChange={handleChange} value={player_name} ></input>
                        </form>
                        <img className='modal-img' src={modal_info.pic} />
                      </div> :
                      <div className="modal-desc">
                        <p>This is {modal_info.name}.</p>
                        <p>{modal_info.intro}</p>
                        <img className='modal-img' src={modal_info.pic} />
                      </div>
                    }

                  <div className="modal-footer">
                    {modal_info.answer? <button type='submit' className='submit-button' form="info_form">Submit</button>: <span></span>}
                    <button className="secondary-button" onClick={handleClose}>
                        Close
                    </button>
                  </div>
               </div>
              : <div></div>
            }
        </Modal>
    </div>
  );
}

export default App;
