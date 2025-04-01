'use client';

import { useState } from 'react';
import styled from 'styled-components';

// Styled components
const ContactContainer = styled.div`
  padding: 50px 20px;
  background-color: #cad9e4; /* Soft blue-gray background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 40px); /* Account for 20px padding on each side */
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 30px 10px; /* Reduce padding on smaller screens */
    width: calc(100% - 20px); /* Adjust for smaller padding */
  }
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionContent = styled.div`
  background-color: #e1e9f0; /* Tinted blue background */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: #292a2d; /* Black text */
  margin-bottom: 0.5rem;
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
  background-color: #fddeb4; /* Tinted yellow background */
  color: #292a2d; /* Black text */
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #e6c79c; /* Slightly darker yellow on hover */
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., send to an API)
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a placeholder action)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <ContactTitle className="font-heading">Contact Me</ContactTitle>

      {/* Contact Information Section */}
      <Section>
        <SectionTitle className="font-heading">Get in Touch</SectionTitle>
        <SectionContent>
          <ContactInfo>Email: VegarBerentsen@gmail.com</ContactInfo>
          <ContactInfo>Phone: +47 485 96 755</ContactInfo>
          <ContactInfo>Address: Ovenbakken 31 A, Østerås, Norway</ContactInfo>
        </SectionContent>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <SectionTitle className="font-heading">Send a Message</SectionTitle>
        <SectionContent>
          <ContactForm onSubmit={handleSubmit}>
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
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </SectionContent>
      </Section>
    </ContactContainer>
  );
}