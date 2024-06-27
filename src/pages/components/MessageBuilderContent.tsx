import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import MessageHeaderEditor from "./MessageHeaderEditor";
import MessageBodyEditor from "./MessageBodyEditor";
import MessageFooterEditor from "./MessageFooterEditor";
import MessageButtonsEditor from "./MessageButtonsEditor";

export default function MessageBuilderContent() {
  return (
    <div className={`${styles.messageBuilderContent}`}>
      <Typography variant="subtitle2">Content</Typography>
      <MessageHeaderEditor />
      <MessageBodyEditor />
      <MessageFooterEditor />
      <MessageButtonsEditor />
    </div>
  );
}
