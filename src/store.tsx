import { atom } from "jotai";

const messageBuilderAtom = atom({
  messageHeader: "",
  messageBody: "",
  messageFooter: "",
  messageButton: "",
});

export { messageBuilderAtom };
