import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import Crop169Icon from "@mui/icons-material/Crop169";
import Switch from "@mui/material/Switch";
import { TextField } from "@mui/material";
import MessageBuilderSection from "./MessageBuilderSection";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageButtonsEditor() {
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
      <TextField fullWidth defaultValue="Enter text"></TextField>
    </MessageBuilderSection>
  );
}
