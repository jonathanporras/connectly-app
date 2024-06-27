import styles from "@/styles/MessageBuilder.module.scss";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MessageBuilderSection from "./MessageBuilderSection";
import MessageBuilderTooltip from "./MessageBuilderTooltip";

export default function MessageBodyEditor() {
  return (
    <MessageBuilderSection
      icon={
        <TextFieldsIcon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />
      }
      isRequired={true}
      sectionHeader="Body Message"
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        defaultValue="👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? "
      ></TextField>
      <Button variant="text">Add Variable</Button>
      <MessageBuilderTooltip
        tooltipHeader="What are variables?"
        tooltipBody="Variables are dynamic content that help personalize your campaign, for
        example: customer names or coupon codes."
      />
    </MessageBuilderSection>
  );
}
