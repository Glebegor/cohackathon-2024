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

export const emojisComplete: Record<EmojiType, {name: string, czName: string, animationData: any}> = {
    angel: {
        name: "angel",
        czName: "andílek",
        animationData: angel
    },
    angry: {
        name: "angry",
        czName: "naštvaný",
        animationData: angry
    },
    blush: {
        name: "blush",
        czName: "stydlivý",
        animationData: blush
    },
    cold: {
        name: "cold",
        czName: "zima",
        animationData: cold
    },
    cool: {
        name: "cool",
        czName: "ve stylu",
        animationData: cool
    },
    hidden: {
        name: "hidden",
        czName: "schovaný",
        animationData: hidden
    },
    joy: {
        name: "joy",
        czName: "radost",
        animationData: joy
    },
    lost: {
        name: "lost",
        czName: "ztracený",
        animationData: lost
    },
    love: {
        name: "love",
        czName: "láska",
        animationData: love
    },
    melting: {
        name: "melting",
        czName: "nepochopitelné",
        animationData: melting
    },
    mindBlown: {
        name: "mindBlown",
        czName: "nechápavý",
        animationData: mindBlown
    },
    neutral: {
        name: "neutral",
        czName: "neutrální",
        animationData: neutral
    },
    party: {
        name: "party",
        czName: "party",
        animationData: party
    },
    sad: {
        name: "sad",
        czName: "smutný",
        animationData: sad
    },
    sadWithTear: {
        name: "sadWithTear",
        czName: "velmi smutný",
        animationData: sadWithTear
    },
    sleep: {
        name: "sleep",
        czName: "spánek",
        animationData: sleep
    },
    smile: {
        name: "smile",
        czName: "úsměv",
        animationData: smile
    },
    surprised: {
        name: "surprised",
        czName: "překvapený",
        animationData: surprised
    },
    tears: {
        name: "tears",
        czName: "smutek",
        animationData: tears
    },
    think: {
        name: "think",
        czName: "přemýšlení",
        animationData: think
    },
    updown: {
        name: "updown",
        czName: "zmatený",
        animationData: updown
    }
}

export const emojis:Record<EmojiType, any> = {
    ...{angel, angry, blush, cold, cool, hidden, joy, lost, love, melting, mindBlown, neutral, party, sad, sadWithTear, sleep, smile, surprised, tears, think, updown}
}