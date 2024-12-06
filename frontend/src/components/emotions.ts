import angel from "./emojis/angel.json";
import angry from "./emojis/angry.json";
import blush from "./emojis/blush.json";
import cold from "./emojis/cold.json";
import cool from "./emojis/cool.json";
import hidden from "./emojis/hidden.json";
import joy from "./emojis/joy.json";
import lost from "./emojis/lost.json";
import love from "./emojis/love.json";
import melting from "./emojis/melting.json";
import mindBlown from "./emojis/mindBlown.json";
import neutral from "./emojis/neutral.json";
import party from "./emojis/party.json";
import sad from "./emojis/sad.json";
import sadWithTear from "./emojis/sadWithTear.json";
import sleep from "./emojis/sleep.json";
import smile from "./emojis/smile.json";
import surprised from "./emojis/surprised.json";
import tears from "./emojis/tears.json";
import think from "./emojis/think.json";
import updown from "./emojis/updown.json";

export type EmojiType = "angel" | "angry" | "blush" | "cold" | "cool" | "hidden" | "joy" | "lost" | "love" | "melting" | "mindBlown" | "neutral" | "party" | "sad" | "sadWithTear" | "sleep" | "smile" | "surprised" | "tears" | "think" | "updown";

export const emojis:Record<EmojiType, any> = {
    ...{angel, angry, blush, cold, cool, hidden, joy, lost, love, melting, mindBlown, neutral, party, sad, sadWithTear, sleep, smile, surprised, tears, think, updown}
}