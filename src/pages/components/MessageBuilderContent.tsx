import styles from "@/styles/MessageBuilder.module.scss";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import MessageHeaderEditor from "./MessageHeaderEditor";

export default function MessageBuilderContent() {
  return (
    <div className={`${styles.messageBuilderContent}`}>
      <Typography variant="subtitle2" gutterBottom>
        Content
      </Typography>
      <MessageHeaderEditor />
    </div>
  );
}
