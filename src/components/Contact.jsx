import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import imageOverlay from '../assets/img/earth.jpg';
import { TextField, Button, Alert, Snackbar } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Alex Borchers',
    email: 'amb035@morningside.edu',
    subject: 'Testing Subject',
    message: 'Hello, I am testing the contact form.'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [formErrors, setFormErrors] = useState({});

  function validateForm(data) {
    const errors = {};
    if (!data.name || data.name.length < 2) errors.name = 'Name must be at least 2 characters';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email';
    if (!data.subject || data.subject.length < 4) errors.subject = 'Subject must be at least 4 characters';
    if (!data.message || data.message.length < 10) errors.message = 'Message must be at least 10 characters';
    return errors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug environment variables
    console.log('Environment Variables:', {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      nodeEnv: process.env.NODE_ENV
    });

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // For debugging only - remove in production
      if (!process.env.REACT_APP_EMAILJS_SERVICE_ID) {
        throw new Error('EmailJS Service ID is not configured');
      }
      if (!process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS Template ID is not configured');
      }
      if (!process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS Public Key is not configured');
      }

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
          privateKey: process.env.REACT_APP_EMAILJS_PRIVATE_KEY,
        }
      );

      setNotification({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
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
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <TextField
                            fullWidth
                            name="name"
                            label="Your Name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.subject}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
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
