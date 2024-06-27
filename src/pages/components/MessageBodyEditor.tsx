import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ErrorIcon from "@mui/icons-material/Error";
import HighlightIcon from "@mui/icons-material/Highlight";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageBodyEditor() {
  return (
    <div className={`${styles.messageBuilderContentBox}`}>
      <Typography variant="subtitle2">
        <TextFieldsIcon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />{" "}
        Body Message{" "}
        <ErrorIcon
          className={`${styles.messageEditorErrrorIcon}`}
          color="action"
          fontSize="small"
        />
      </Typography>
      <Chip className={`${styles.messageEditorChip}`} label="Required" />
      <TextField
        fullWidth
        multiline
        maxRows={4}
        defaultValue="👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? "
      ></TextField>
      <Button variant="text">Add Variable</Button>
      <div className={`${styles.messageEditorTip}`}>
        <Typography variant="body2">
          <HighlightIcon fontSize="small" />
          What are variables?
        </Typography>
        <CloseIcon className={`${styles.messageEditorClose}`} color="action" />
        <Typography variant="caption">
          Variables are dynamic content that help personalize your campaign, for
          example: customer names or coupon codes.
        </Typography>
      </div>
    </div>
  );
}
