import React, { ChangeEvent, FormEvent, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface Message {
  name: string;
  email: string;
  message: string;
}

const emptyMessage: Message = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [message, setMessage] = useState<Message>(emptyMessage);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Submit");
  const [errors, setErrors] = useState<Message>(emptyMessage);

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    let formErrors: Message = { ...emptyMessage };
    formErrors.name = message.name ? "" : "Name is required";
    formErrors.email = message.email ? (validateEmail(message.email) ? "" : "Email is not valid") : "Email is required";
    formErrors.message = message.message ? "" : "Message is required";
    setErrors(formErrors);
    return !Object.values(formErrors).some((error) => error.length > 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitDisabled(true);
    setButtonText("Sending... may take a second... 😴");
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL || "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(message),
      }
    );
    await response.json();

    setMessage(emptyMessage);
    setSubmitDisabled(false);
    setButtonText("Submit");
  };

  return (
    <section id="contact">
      <Card
        style={{ margin: "0 auto", maxWidth: 800 }}
        className="contact-form"
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <h3>Send me an email</h3>
                <p>I like to read. 👀 Email me@adienunn.com or use the form.</p>
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
                  error={Boolean(errors.name)}
                  helperText={errors.name}
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
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  className="form-message"
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
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<SendIcon />}
                  style={
                    submitDisabled
                      ? {
                        backgroundColor: "#cccccc",
                        color: "black",
                        cursor: "not-allowed",
                      }
                      : { backgroundColor: "#f54996" }
                  }
                  disabled={submitDisabled}
                >
                  {buttonText}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
