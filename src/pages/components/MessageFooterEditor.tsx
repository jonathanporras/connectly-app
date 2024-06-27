import styles from "@/styles/MessageBuilder.module.scss";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { TextField } from "@mui/material";
import MessageBuilderSection from "./MessageBuilderSection";

export default function MessageFooterEditor() {
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
      />
    </MessageBuilderSection>
  );
}
