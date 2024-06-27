import styles from "@/styles/MessageBuilder.module.scss";
import ImageIcon from "@mui/icons-material/Image";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import MessageBuilderSection from "./MessageBuilderSection";
import MessageBuilderTooltip from "./MessageBuilderTooltip";

export default function MessageHeaderEditor() {
  return (
    <MessageBuilderSection
      icon={
        <ImageIcon
          className={`${styles.messageEditorIcon}`}
          color="action"
          fontSize="medium"
        />
      }
      isRequired={false}
      sectionHeader="Header"
    >
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={"Image"}
          onChange={() => null}
          autoWidth
        >
          <MenuItem value="Image">Image</MenuItem>
        </Select>
        <FormHelperText>
          Image size recommendation: 800 x 418 pixel.
        </FormHelperText>
      </FormControl>
      <Button component="label" variant="outlined">
        Upload Image
        <input type="file" hidden />
      </Button>
      <MessageBuilderTooltip
        tooltipHeader="Image header tips"
        tooltipBody="Images can enrich the message experience and help maintain engagement.
          Use eye-catching images that summarize the message (eg discounts,
          gifts etc.)"
      />
    </MessageBuilderSection>
  );
}
