"use client";

import React, { useEffect, useState } from "react";
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
  User,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import UserInput from "./UserInput";

import "@stream-io/video-react-sdk/dist/css/styles.css";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const token = process.env.NEXT_PUBLIC_TOKEN;
if (!apiKey || !token) {
  throw new Error("API key and token must be provided");
}
const userId = process.env.NEXT_PUBLIC_USERID || "defaultUserId";
const callId = process.env.NEXT_PUBLIC_CALLID || " ";

const user: User = {
  id: userId,
  name: "",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
  type: "authenticated",
};

const VideoCall: React.FC = () => {
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<ReturnType<
    StreamVideoClient["call"]
  > | null>(null);
  const [isJoined, setIsJoined] = useState(false);
  const router = useRouter();

  const handleJoin = (name: string) => {
    user.name = name;
    const newClient = new StreamVideoClient({ apiKey, user, token });
    setClient(newClient);
    const newCall = newClient.call("default", callId);
    setCall(newCall);
    newCall.join({ create: true }).then(() => setIsJoined(true));
  };

  useEffect(() => {
    if (call) {
      const handleLeave = () => {
        router.push("/"); // Navigate to home
      };
      call.on("call.session_participant_left", handleLeave);
      call.on("call.ended", handleLeave);

      return () => {
        call.off("call.session_participant_left", handleLeave);
        call.off("call.ended", handleLeave);
      };
    }
  }, [call, router]);

  if (!client || !call) {
    return <UserInput onJoin={handleJoin} />;
  }

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout isJoined={isJoined} />
      </StreamCall>
    </StreamVideo>
  );
};

interface MyUILayoutProps {
  isJoined: boolean;
}

const MyUILayout: React.FC<MyUILayoutProps> = ({ isJoined }) => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (!isJoined || callingState !== CallingState.JOINED) {
    return <Loader />;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
    </StreamTheme>
  );
};

export default VideoCall;
