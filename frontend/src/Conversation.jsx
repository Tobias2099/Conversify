import React, { useState, useEffect } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom'; 
import "./Style/Conversation.css"; 
import Title from "./Components/Title.jsx"; 
import Button from "./Components/Button.jsx";
import AudioIcon from "./Components/AudioIcon.jsx"; 
import 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Transcript from "./Components/Transcript.jsx"
import settings from './helpers/helpers.js'
//import AudioPlayer from "./Components/AudioPlayer.jsx";

function Conversation() {
  const navigate = useNavigate(); 
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyzer, setAnalyzer] = useState(null);
  const [amplitude, setAmplitude] = useState(0);
  const [animationId, setAnimationId] = useState(null); // useful for cancelling animation
  const [conversationHistory, setConversationHistory] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState(["English", "en-US"]);
  const [prompt, setPrompt] = useState("");
  // fetch settings user chose
  const location = useLocation();


  useEffect(() => {
    const { language, proficiency } = location.state || {};
    console.log("Language:", language);
    console.log("Proficiency:", proficiency);
    let code = "";
    let prompt = "";
    switch (language) {
      case "English":
        code = "en-US"
        prompt += settings[0][0].english
        break;
      case "French":
        code = "fr-FR"
        prompt += settings[0][1].french
        break;
      case "Spanish":
        code = "es-US"
        prompt += settings[0][2].spanish
        break;
    }
    switch (proficiency) {
      case "Beginner":
        prompt += settings[1][0].beginner
        break;
      case "Intermediate":
        prompt += settings[1][1].intermediate;
        break;
      case "Advanced":
        prompt += settings[1][2].advanced;
        break;
    }
    setCurrentLanguage([language, code]);
    setPrompt(prompt);
    console.log(prompt);
  }, []);

  // setup recognizer object
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  function textToSpeech(text, lang = currentLanguage[1]) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    // Event when the speech starts
    utterance.onstart = () => {
      console.log('Speech has started.');
      // You can perform actions here when speech starts
    };

    // Event when the speech ends
    utterance.onend = () => {
      console.log('Speech has ended.');
      // You can perform actions here when speech ends
    };

    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (isRecording && audioContext && analyzer) {
      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateDataArray = () => {
        analyzer.getByteFrequencyData(dataArray);

        //calculating average amplitude
        const sum = dataArray.reduce((a, b) => a + b, 0);
        const averageAmplitude = sum / dataArray.length;
        setAmplitude(averageAmplitude);


        const id = requestAnimationFrame(updateDataArray);
        setAnimationId(id);
      };
      updateDataArray();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId); // Stop the animation when recording stops
      }
    };
  }, [isRecording, audioContext, analyzer]);

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

        // Create AudioContext and AnalyserNode
        const context = new AudioContext();
        const analyzer = context.createAnalyser();
        const source = context.createMediaStreamSource(stream);
        source.connect(analyzer);

        // Set state
        setAudioContext(context);
        setAnalyzer(analyzer);

        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        recorder.onstart = () => {
          setIsRecording(true);
          SpeechRecognition.startListening({ language: currentLanguage[1] });
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
    SpeechRecognition.stopListening();
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }

    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null); // Clear the animation ID
    }
        
      // set prompt to blank if its not our first time making request.
      if (prompt !== "") {
        setPrompt("");
      }
      // Send the transcript to the backend
      
      fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: prompt + transcript, // send transcript (** TODO: prepend a prompt depending on proficiency level **)
          conversation_history: conversationHistory, // send current conversation history.
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from backend:', data);
          // update the conversation history with new response
          setConversationHistory(data.new_history);
          textToSpeech(data.text); // convert response to speech
        })
        .catch(error => console.error('Error:', error));
  }

  function backClick() { 
    navigate('/');
  }

  function transcriptBtn(event) {
    const chatBox = document.getElementById('chat-box');
    const btn = event.target;
    if (event.target.innerText === "Show Transcript") {
      btn.innerText = "Hide Transcript";
      btn.name = "Hide Transcript";
      document.getElementById('audio-icon-container').style.marginLeft = "0%";
      chatBox.style.display = "flex";  // Show the transcript
    } else {
      btn.innerText = "Show Transcript";
      btn.name = "Show Transcript";
      chatBox.style.display = "none";  // Hide the transcript
      document.getElementById('audio-icon-container').style.marginLeft = "18%";
    }
  }

  function endConversation() { 
    if(isRecording){ 
      stopRecording(); 
    }

    resetTranscript(); 

    setConversationHistory([]); 

    if (window.speechSynthesis) { 
      window.speechSynthesis.cancel(); 
    }

  }

  return (
    <>
      <div id="banner">
        <Title hasBio={false}/>
        <Button name="Change Settings" style={{backgroundColor: '#FFC000', border: 'none', width: '18%', marginTop: '-1%', fontSize: '150%', height: '50px'}}  handleClick={backClick}/>
      </div>
      
      <div id="main-content">
        <div id="icon-chat-container">
          <div id="audio-icon-container">
            <AudioIcon amplitude={amplitude} />
            <div id="recorded-audio-container">
              {audioUrl && <audio controls src={audioUrl} />}
            </div>
          </div>
          <div id="transcript-container">
            <Transcript conversation={conversationHistory}/>
          </div>   
        </div>
      </div>

      <div id="convo-btns">
        <Button handleClick={isRecording ? stopRecording : startRecording} name={isRecording ? "Stop Recording" : "Start Recording"}/>
        <Button handleClick={transcriptBtn} name="Hide Transcript" />
        <Button name="End Conversation" handleClick={endConversation}/>
      </div>

      
      <p>Transcript: {transcript}</p>

      <ul>
        {conversationHistory.map(item => {
          return <li>{item}</li>
        })}
      </ul>
      
    </>
  ); 
} 

export default Conversation;