import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import "./Style/Conversation.css"; 
import Title from "./Components/Title.jsx"; 
import Button from "./Components/Button.jsx"; 

function Conversation() {
  const navigate = useNavigate(); 
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    // halt recording when component unmounts
    return () => {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    }
  }, [mediaRecorder]);

  async function startRecording() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); //request access to microphone using Web API
        const recorder = new MediaRecorder(stream); 
        const chunks = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            // Handle the recorded audio data
            const audioBlob = new Blob([event.data], { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            // You can use the audioUrl to play the audio or send it to a server
            console.log('Audio URL:', audioUrl);
          }
        };

        recorder.onstart = () => {
          setIsRecording(true);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
          setIsRecording(false);
        };

        setMediaRecorder(recorder);
        recorder.start();
      } catch (error) {
        console.error('Error accessing audio devices:', error);
      }
    } else {
      console.error('getUserMedia not supported in this browser.');
    }
  }

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  }

  function backClick() { 
    navigate('/');
  }

  return (
    <>
      <div id="banner">
        <Title hasBio={false}/>
        <Button name="Change Settings" style={{backgroundColor: '#FFC000', border: 'none', width: '18%', marginTop: '-1%', fontSize: '150%', height: '50px'}}  handleClick={backClick}/>
      </div>
      
      <div id="convo-btns">
        <Button onClick={!isRecording ? () => {startRecording()} : () => {stopRecording()}} name={isRecording ? "Stop Recording" : "Start Recording"}/>
        <Button name="End Conversation" />
        <Button name="Show Transcript" />
      </div>
      {
        <div>
          <h3>Recorded Audio:</h3>
          <audio controls src={audioUrl} />
        </div>
      }
    </>
  )
}

export default Conversation;