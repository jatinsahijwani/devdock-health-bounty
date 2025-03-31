"use client";
import { useEffect, useRef } from 'react';

// Assuming you have a way to generate a random ID or you can import it
function randomID(length: number) {
 let result = '';
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 const charactersLength = characters.length;
 for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

export default function VideoCallPage() {
 const element = useRef(null);

 useEffect(() => {
    const initializeVideoCall = async () => {
      const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
      const appID = 860018851; // Replace with your actual app ID
      const serverSecret = '51480767a8a997ef0663ada34684e11f'; // Replace with your actual server secret
      const roomID = 'your_room_id'; // Replace with your actual room ID
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    };

    initializeVideoCall();
 }, []);

 return (
    <div>
      <div ref={element} style={{ width: '100%', height: '100vh' }}></div>
    </div>
 );
}