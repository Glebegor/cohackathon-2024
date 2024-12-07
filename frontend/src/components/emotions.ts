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

export const emojisComplete: Record<EmojiType, {name: string, czName: string, value: number, animationData: any}> = {
    angel: {
        name: "angel",
        czName: "andílek",
        value: 17,
        animationData: angel
    },
    angry: {
        name: "angry",
        czName: "naštvaný",
        value: 1,
        animationData: angry
    },
    blush: {
        name: "blush",
        czName: "stydlivý",
        value: 14,
        animationData: blush
    },
    cold: {
        name: "cold",
        czName: "zima",
        value: 6,
        animationData: cold
    },
    cool: {
        name: "cool",
        czName: "ve stylu",
        value: 12,
        animationData: cool
    },
    hidden: {
        name: "hidden",
        czName: "schovaný",
        value: 5,
        animationData: hidden
    },
    joy: {
        name: "joy",
        czName: "radost",
        value: 16,
        animationData: joy
    },
    lost: {
        name: "lost",
        czName: "ztracený",
        value: 2,
        animationData: lost
    },
    love: {
        name: "love",
        czName: "láska",
        value: 19,
        animationData: love
    },
    melting: {
        name: "melting",
        czName: "nepochopitelné",
        value: 8,
        animationData: melting
    },
    mindBlown: {
        name: "mindBlown",
        czName: "nechápavý",
        value: 9,
        animationData: mindBlown
    },
    neutral: {
        name: "neutral",
        czName: "neutrální",
        value: 10,
        animationData: neutral
    },
    party: {
        name: "party",
        czName: "party",
        value: 15,
        animationData: party
    },
    sad: {
        name: "sad",
        czName: "smutný",
        value: 3, 
        animationData: sad
    },
    sadWithTear: {
        name: "sadWithTear",
        czName: "velmi smutný",
        value: 1,
        animationData: sadWithTear
    },
    sleep: {
        name: "sleep",
        czName: "spánek",
        value: 13,
        animationData: sleep
    },
    smile: {
        name: "smile",
        czName: "úsměv",
        value: 17,
        animationData: smile
    },
    surprised: {
        name: "surprised",
        czName: "překvapený",
        value: 15,
        animationData: surprised
    },
    tears: {
        name: "tears",
        czName: "smutek",
        value: 3,
        animationData: tears
    },
    think: {
        name: "think",
        czName: "přemýšlení",
        value: 11,
        animationData: think
    },
    updown: {
        name: "updown",
        czName: "zmatený",
        value: 7,
        animationData: updown
    }
}

export const emojis:Record<EmojiType, any> = {
    ...{angel, angry, blush, cold, cool, hidden, joy, lost, love, melting, mindBlown, neutral, party, sad, sadWithTear, sleep, smile, surprised, tears, think, updown}
}