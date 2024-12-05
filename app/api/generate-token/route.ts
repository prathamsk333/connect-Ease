import {  NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY || "";
    const apiSecret = process.env.NEXT_PUBLIC_CHAT_TOKEN || "";
    if (!apiKey || !apiSecret) {
      return NextResponse.json(
        { error: "Stream Chat credentials are missing" },
        { status: 500 }
      );
    }

    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    const userId = `user-${uuidv4()}`;
    const userName = `User-${Math.floor(Math.random() * 1000)}`;

    await serverClient.upsertUser({
      id: userId,
      name: userName,
      role: "admin",
    });

    const channel = serverClient.channel("messaging", "unique_chat_channel", {
      name: "Talk about React",
      created_by: { id: userId },
    });

    await channel.create();

    const token = serverClient.createToken(userId);

    return NextResponse.json({
      token,
      userId,
      userName,
      channelId: "unique_chat_channel",
    });
  } catch (error) {
    console.error("Token generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate user token" },
      { status: 500 }
    );
  }
}
