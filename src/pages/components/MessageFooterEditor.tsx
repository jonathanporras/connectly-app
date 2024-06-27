import styles from "@/styles/MessageBuilder.module.scss";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { TextField } from "@mui/material";
import MessageBuilderSection from "./MessageBuilderSection";
import { useAtom } from "jotai";
import { messageBuilderAtom } from "./../../store";

export default function MessageFooterEditor() {
  const [message, setMessage] = useAtom(messageBuilderAtom);

  return (
    <MessageBuilderSection
      icon={
        <TextFieldsIcon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />
      }
      isRequired={false}
      sectionHeader="Footer"
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        defaultValue="👋 Add footer text here."
        value={message.messageFooter ? message.messageFooter : null}
        onChange={(e) => {
          setMessage({
            ...message,
            messageFooter: e.target.value,
          });
        }}
      />
    </MessageBuilderSection>
  );
}
