import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import Switch from "@mui/material/Switch";
import { Chip } from "@mui/material";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageBuilderSection({
  children,
  sectionHeader,
  icon,
  isRequired,
}: {
  children: JSX.Element[] | JSX.Element;
  sectionHeader: string;
  icon: JSX.Element;
  isRequired: boolean;
}) {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  return (
    <div className={`${styles.messageBuilderContentBox}`}>
      <Typography
        className={`${styles.messageBuilderSectionHeader}`}
        variant="subtitle2"
      >
        {icon}
        {sectionHeader}
        <ErrorIcon
          className={`${styles.messageEditorErrrorIcon}`}
          color="action"
          fontSize="small"
        />
      </Typography>
      {!isRequired ? (
        <Switch
          className={`${styles.messageHeaderEditorSwitch}`}
          defaultChecked={true}
          {...label}
          onClick={() => {
            setIsSectionOpen(!isSectionOpen);
          }}
        />
      ) : (
        <Chip className={`${styles.messageEditorChip}`} label="Required" />
      )}
      {(isRequired || isSectionOpen) && <>{children}</>}
    </div>
  );
}
