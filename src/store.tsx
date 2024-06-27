import { atom } from "jotai";

const messageBuilderAtom = atom({
  messageHeader: "",
  messageBody:
    "👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? ",
  messageFooter: "👋 Add footer text here.",
  messageButton: "Enter text",
});

export { messageBuilderAtom };
