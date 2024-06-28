import styles from "@/styles/MessageBuilder.module.scss";
import MessageBuilderHeader from "./MessageBuilderHeader";
import MessageBuilderContent from "./MessageBuilderContent";
import MessageBuilderButtons from "./ MessageBuilderButtons";

export default function MessageBuilder() {
  return (
    <div className={`${styles.messageBuilderWrapper}`}>
      <MessageBuilderHeader />
      <MessageBuilderContent />
      <MessageBuilderButtons />
    </div>
  );
}
