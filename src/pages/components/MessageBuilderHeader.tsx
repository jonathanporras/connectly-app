import styles from "@/styles/MessageBuilder.module.scss";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export default function MessageBuilderHeader() {
  return (
    <div className={`${styles.messageBuilderHeader}`}>
      <Typography variant="h5">Edit Message</Typography>
      <Fab size="small" aria-label="add" disabled>
        <CloseIcon color="action" />
      </Fab>
    </div>
  );
}
