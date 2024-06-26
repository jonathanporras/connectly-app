import styles from "@/styles/MessageBuilder.module.scss";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import ErrorIcon from "@mui/icons-material/Error";
import Switch from "@mui/material/Switch";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

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
      <Button variant="outlined">Upload Image</Button>
    </div>
  );
}
