import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import ErrorIcon from "@mui/icons-material/Error";
import Switch from "@mui/material/Switch";
import { TextField } from "@mui/material";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageButtonsEditor() {
  return (
    <div className={`${styles.messageBuilderContentBox}`}>
      <Typography variant="subtitle2">
        <ImageIcon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />{" "}
        Buttons{" "}
        <ErrorIcon
          className={`${styles.messageEditorErrrorIcon}`}
          color="action"
          fontSize="small"
        />
      </Typography>
      <Switch
        className={`${styles.messageHeaderEditorSwitch}`}
        {...label}
        defaultChecked
      />
      <Typography variant="body2">Button 1</Typography>
      <TextField fullWidth defaultValue="Enter text"></TextField>
    </div>
  );
}
