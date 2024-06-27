import styles from "@/styles/MessageBuilder.module.scss";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import CloseIcon from "@mui/icons-material/Close";

const label = { inputProps: { "aria-label": "Message Header Switch" } };

export default function MessageBuilderTooltip({
  tooltipHeader,
  tooltipBody,
}: {
  tooltipHeader: string;
  tooltipBody: string;
}) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  return (
    <>
      {isTooltipOpen && (
        <div className={`${styles.messageEditorTip}`}>
          <Typography variant="body2">
            <HighlightIcon fontSize="small" />
            {tooltipHeader}
          </Typography>
          <CloseIcon
            className={`${styles.messageEditorClose}`}
            color="action"
            onClick={() => {
              setIsTooltipOpen(!isTooltipOpen);
            }}
          />
          <Typography variant="caption">{tooltipBody}</Typography>
        </div>
      )}
    </>
  );
}
