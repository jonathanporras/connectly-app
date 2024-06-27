import styles from "@/styles/MessageBuilder.module.scss";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import MessageHeaderEditor from "./MessageHeaderEditor";
import MessageBodyEditor from "./MessageBodyEditor";
import MessageFooterEditor from "./MessageFooterEditor";

export default function MessageBuilderContent() {
  return (
    <div className={`${styles.messageBuilderContent}`}>
      <Typography variant="subtitle2">Content</Typography>
      <MessageHeaderEditor />
      <MessageBodyEditor />
      <MessageFooterEditor />
    </div>
  );
}
