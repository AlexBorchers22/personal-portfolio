import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import imageOverlay from '../assets/img/earth.jpg';
import { TextField, Button, Alert, Snackbar } from '@mui/material';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [formErrors, setFormErrors] = useState({});

  function validateForm(formData) {
    const errors = {};
    const email = formData.get('email');
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email';
    if (!subject || subject.length < 4) errors.subject = 'Subject must be at least 4 characters';
    if (!message || message.length < 10) errors.message = 'Message must be at least 10 characters';

    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      form.current.reset();
      setFormErrors({});
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${imageOverlay})`, minHeight: "90vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2 w-100">
                      <h5 className="title-left w-100">Send A Message</h5>
                    </div>
                    <form ref={form} onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <TextField
                            fullWidth
                            name="name"
                            label="Your Name"
                            variant="outlined"
                            error={!!formErrors.name}
                            helperText={formErrors.name}
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <TextField
                            fullWidth
                            name="email"
                            type="email"
                            label="Your Email"
                            variant="outlined"
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <TextField
                            fullWidth
                            name="subject"
                            label="Subject"
                            variant="outlined"
                            error={!!formErrors.subject}
                            helperText={formErrors.subject}
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <TextField
                            fullWidth
                            name="message"
                            label="Message"
                            multiline
                            rows={5}
                            variant="outlined"
                            error={!!formErrors.message}
                            helperText={formErrors.message}
                          />
                        </div>
                        <div className="col-md-12">
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            sx={{ mt: 2 }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0 w-100">
                      <h5 className="title-left w-100">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the form and send me an email.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert severity={notification.severity} onClose={() => setNotification({ ...notification, open: false })}>
          {notification.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
