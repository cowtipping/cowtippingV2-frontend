import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const emptyMessage = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [message, setMessage] = useState(emptyMessage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response = await fetch("https://cowtipping-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(message),
    });
    await response.json();
    setMessage(emptyMessage);
  };

  return (
    <>
      <Card style={{ margin: "0 auto", maxWidth: 800 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <h3>Send me an email</h3>
                <p>I like to read. 👀</p>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  placeholder="Your name..."
                  fullWidth
                  required
                  value={message.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Your email address..."
                  fullWidth
                  required
                  value={message.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="message"
                  name="message"
                  type="text"
                  label="Message"
                  placeholder="Your message..."
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={message.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<SendIcon />}
                  style={{ backgroundColor: "#f54996" }}
                  // TODO: hacky temporary solution to colour issue. also, needs a hover style
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
