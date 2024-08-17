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
  const [audioContext, setAudioContext] = useState(null);
  const [analyzer, setAnalyzer] = useState(null);

  useEffect(() => {
    if (audioContext && analyzer) {
      const bufferLength = analyzer.frequencyBinCount;
      setDataArray(new Uint8Array(bufferLength));
    }
  }, [audioContext, analyzer]);

  useEffect(() => {
    return () => {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    };
  }, [mediaRecorder]);

  async function startRecording() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        recorder.onstart = () => {
          setIsRecording(true);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: 'audio/webm' });
          const url = URL.createObjectURL(audioBlob);
          setAudioUrl(url);
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
        <Button handleClick={isRecording ? stopRecording : startRecording} name={isRecording ? "Stop Recording" : "Start Recording"}/>
        <Button name="Show Transcript" />
      </div>
      
      <div>
        <div id="convo-btns-bottom">
        <Button name="End Conversation" />
        </div>
      </div>

      <div>
        <h3>Recorded Audio:</h3>
        {audioUrl && <audio controls src={audioUrl} />}
      </div>
    </>
  )
}

export default Conversation;