import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  const elementRef = useRef(null);

  useEffect(() => {
    let myMeeting = async () => {
      // generate Kit Token
      const appID = 1831398222;
      const serverSecret = "c95ab8bb01c2d6ee033b85e78f8bbceb";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Sahanur"
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: elementRef.current,
        sharedLinks: [
          {
            name: "Copy link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    };

    myMeeting();
  }, [roomID]);

  return <div ref={elementRef}></div>;
};

export default VideoPage;
