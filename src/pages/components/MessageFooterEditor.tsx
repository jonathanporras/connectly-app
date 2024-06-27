import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import ErrorIcon from "@mui/icons-material/Error";
import HighlightIcon from "@mui/icons-material/Highlight";
import Switch from "@mui/material/Switch";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageFooterEditor() {
  return (
    <div className={`${styles.messageBuilderContentBox}`}>
      <Typography variant="subtitle2">
        <ImageIcon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />{" "}
        Footer{" "}
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
      <TextField
        fullWidth
        multiline
        maxRows={4}
        defaultValue="👋 Add footer text here."
      ></TextField>
    </div>
  );
}
