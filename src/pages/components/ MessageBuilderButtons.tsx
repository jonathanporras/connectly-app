import styles from "@/styles/MessageBuilder.module.scss";
import Button from "@mui/material/Button";
import { useAtom } from "jotai";
import { messageBuilderAtom } from "./../../store";

export default function MessageBuilderButtons() {
  const [message, setMessage] = useAtom(messageBuilderAtom);

  return (
    <div className={`${styles.messageBuilderButtons}`}>
      <Button variant="contained" disableElevation fullWidth>
        Save
      </Button>
      <Button
        onClick={() => {
          setMessage({
            messageHeader: "",
            messageBody: "",
            messageFooter: "",
            messageButton: "",
          });
        }}
        variant="outlined"
        disableElevation
        fullWidth
      >
        Delete
      </Button>
    </div>
  );
}
