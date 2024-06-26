import styles from "@/styles/MessageBuilder.module.scss";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import ErrorIcon from "@mui/icons-material/Error";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageHeaderEditor() {
  return (
    <div className={`${styles.messageBuilderContentBox}`}>
      <Typography variant="subtitle2">
        <ImageIcon
          className={`${styles.messageHeaderEditorImageIcon}`}
          color="action"
          fontSize="medium"
        />{" "}
        Header{" "}
        <ErrorIcon
          className={`${styles.messageHeaderEditorErrrorIcon}`}
          color="action"
          fontSize="small"
        />
      </Typography>
      <Switch
        className={`${styles.messageHeaderEditorSwitch}`}
        {...label}
        defaultChecked
      />
    </div>
  );
}
