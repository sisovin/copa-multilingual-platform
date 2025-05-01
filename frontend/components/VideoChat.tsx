import React, { useState, useRef, useEffect } from 'react';

const VideoChat = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const startLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    startLocalStream();
  }, []);

  const handleStartCall = async () => {
    // Implement WebRTC logic to start a call
  };

  const handleEndCall = () => {
    // Implement logic to end a call
  };

  return (
    <div>
      <h2>Video Chat</h2>
      <div>
        <video ref={localVideoRef} autoPlay playsInline muted />
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
      <button onClick={handleStartCall}>Start Call</button>
      <button onClick={handleEndCall}>End Call</button>
    </div>
  );
};

export default VideoChat;
