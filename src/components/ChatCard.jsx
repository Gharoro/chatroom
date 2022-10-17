import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  CardActions,
  CardContent,
  CardHeader,
  Card,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import { Messages } from "./Messages";

export const ChatCard = () => {
  return (
    <Card sx={{ width: "25rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="current-user">
            <PersonIcon />
          </Avatar>
        }
        title="John Doe"
        style={{ background: "#2d4c6e", color: "#fff" }}
      />
      <CardContent
        style={{ background: blue[50], height: 400, overflowY: "auto" }}
      >
        <Messages />
      </CardContent>
      <CardActions disableSpacing style={{ background: grey[50] }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          sx={{ width: "20rem" }}
          placeholder="Message"
        />
        <Button aria-label="send-message">
          <SendIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
