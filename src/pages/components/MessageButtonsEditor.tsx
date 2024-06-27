import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import Crop169Icon from "@mui/icons-material/Crop169";
import { TextField } from "@mui/material";
import MessageBuilderSection from "./MessageBuilderSection";
import { useAtom } from "jotai";
import { messageBuilderAtom } from "./../../store";

export default function MessageButtonsEditor() {
  const [message, setMessage] = useAtom(messageBuilderAtom);

  return (
    <MessageBuilderSection
      icon={
        <Crop169Icon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />
      }
      isRequired={false}
      sectionHeader="Buttons"
    >
      <Typography variant="body2">Button 1</Typography>
      <TextField
        fullWidth
        defaultValue="Enter text"
        value={message.messageButton ? message.messageButton : null}
        onChange={(e) => {
          setMessage({
            ...message,
            messageButton: e.target.value,
          });
        }}
      ></TextField>
    </MessageBuilderSection>
  );
}
