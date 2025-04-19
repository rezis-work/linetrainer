"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { vapi } from "../../lib/vapi";

const GenerateProgramPage = () => {
  const [callActive, setCallActive] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [callEnded, setCallEnded] = useState<boolean>(false);

  const { user } = useUser();

  const router = useRouter();

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call started");
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };
    const handleCallEnd = () => {
      console.log("Call ended");
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };
    const handleSpeechStart = () => {
      console.log("AI is speaking");
      setIsSpeaking(true);
    };
    const handleSpeechEnd = () => {
      console.log("AI stopped speaking");
      setIsSpeaking(false);
    };
    const handleMessage = (message: string) => {
      console.log("Message received", message);
    };
    const handleError = (error: string) => {
      console.error("VAPI Error", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    // cleanup
    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("speech-start", handleSpeechStart);
      vapi.off("speech-end", handleSpeechEnd);
      vapi.off("message", handleMessage);
      vapi.off("error", handleError);
    };
  }, []);

  // auto-scroll messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // navigate user to profile page after call ends
  useEffect(() => {
    if (callEnded) {
      const redirectTimer = setTimeout(() => {
        router.push("/profile");
      }, 1500);

      return () => clearTimeout(redirectTimer);
    }
  }, [callEnded, router]);

  // setup event listeners
  useEffect(() => {}, []);

  const toggleCall = async () => {
    if (callActive) {
      vapi.stop();
    } else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

        const fullName = user?.firstName
          ? `${user.firstName} ${user.lastName || ""}`.trim()
          : "There";

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
          variableValues: {
            full_name: fullName,
            // TODO: send user_id as well
          },
        });
      } catch (error) {
        console.error("Error starting call", error);
        setConnecting(false);
      }
    }
  };

  return <div>GenerateProgramPage</div>;
};

export default GenerateProgramPage;
