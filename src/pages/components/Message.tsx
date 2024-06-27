import styles from "@/styles/Message.module.scss";
import { useAtom } from "jotai";
import { messageBuilderAtom } from "./../../store";

export default function Message() {
  const [message] = useAtom(messageBuilderAtom);
  return (
    <div className={`${styles.messageWrapper}`}>
      <p>{message.messageBody}</p>
      <p>{message.messageFooter}</p>
      <p>{message.messageButton}</p>
    </div>
  );
}
