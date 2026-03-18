'use client';

import { useState, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const sendGaEvent = (eventName: string, eventParams: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

const ContactContainer = styled.div`
  padding: 50px 20px;
  background-color: #cad9e4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 40px);
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 30px 10px;
    width: calc(100% - 20px);
  }
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

const SectionContent = styled.div`
  background-color: #e1e9f0;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: #292a2d;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: #0d9488;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #b0c4d1;
  border-radius: 4px;
  background-color: #fff;
  color: #292a2d;
  &:focus {
    outline: none;
    border-color: #fddeb4;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #b0c4d1;
  border-radius: 4px;
  background-color: #fff;
  color: #292a2d;
  min-height: 150px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #fddeb4;
  }
`;

const SubmitButton = styled.button`
  background-color: #fddeb4;
  color: #292a2d;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #e6c79c;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p<{ success?: boolean }>`
  padding: 1rem;
  border-radius: 4px;
  background-color: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
  margin-top: 1rem;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStarted, setFormStarted] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formStarted) {
      sendGaEvent('form_start', {
        form_name: 'Contact Form',
        form_id: 'contact_me_form',
      });
      setFormStarted(true);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    sendGaEvent('form_submit_attempt', {
      form_name: 'Contact Form',
      form_id: 'contact_me_form',
    });

    try {
      // Send to Formspage API
      const response = await fetch('https://formspree.io/f/mjgajbab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({ success: true, message: 'Thanks! Your message has been sent. I will reply as soon as possible!' });
        setFormData({ name: '', email: '', message: '' });
        setFormStarted(false);
        sendGaEvent('form_submit_success', {
          form_name: 'Contact Form',
          form_id: 'contact_me_form',
        });
      } else {
        setStatus({ success: false, message: 'Noe gikk galt. Prøv igjen eller send mail direkte.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Noe gikk galt. Prøv igjen eller send mail direkte.' });
    }

    setIsSubmitting(false);
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>

      <Section>
        <SectionTitle>Get in Touch</SectionTitle>
        <SectionContent>
          <ContactInfo>
            Email: <ContactLink href="mailto:vegarberentsen@gmail.com">designrpros@gmail.com</ContactLink>
          </ContactInfo>
          <ContactInfo>
            // Phone: +47 485 96 755 (see contact form)
          </ContactInfo>
          <ContactInfo>Address: Ovenbakken 31 A, Østerås, Norway</ContactInfo>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Send a Message</SectionTitle>
        <SectionContent>
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormTextarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sender...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          {status && (
            <StatusMessage success={status.success}>
              {status.message}
            </StatusMessage>
          )}
        </SectionContent>
      </Section>
    </ContactContainer>
  );
}
