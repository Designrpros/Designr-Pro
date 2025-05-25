'use client';

import styled from 'styled-components';

// Styled components
const PrivacyContainer = styled.div`
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

const PrivacyTitle = styled.h1`
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

const PolicyText = styled.p`
  font-size: 1rem;
  color: #292a2d; /* Black text */
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const PolicyList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

const PolicyListItem = styled.li`
  font-size: 1rem;
  color: #292a2d; /* Black text */
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

export default function PrivacyPolicy() {
  return (
    <PrivacyContainer>
      <PrivacyTitle className="font-heading">Privacy Policy</PrivacyTitle>

      {/* Introduction Section */}
      <Section>
        <SectionTitle className="font-heading">Introduction</SectionTitle>
        <SectionContent>
          <PolicyText>
            Welcome to Designr.Pro, a portfolio website operated by Vegar Berentsen. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our site or interact with its features, such as the contact form. Your privacy is important to us, and we are committed to ensuring transparency and compliance with applicable data protection laws.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Data Collection Section */}
      <Section>
        <SectionTitle className="font-heading">Data We Collect</SectionTitle>
        <SectionContent>
          <PolicyText>We may collect the following types of information:</PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>Contact Form Data</strong>: When you submit the contact form on the /contact page, we collect your name, email address, and message content to respond to your inquiries.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Analytics Data</strong>: We use Google Analytics (ID: G-9Z5EH0V3ZQ) to collect anonymized data about your visit, such as pages viewed, time spent, and device information. This helps us improve the site’s performance and user experience.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Usage Data</strong>: We may collect technical data, such as IP addresses, browser types, and operating systems, to monitor site functionality and security.
            </PolicyListItem>
          </PolicyList>
        </SectionContent>
      </Section>

      {/* Data Usage Section */}
      <Section>
        <SectionTitle className="font-heading">How We Use Your Data</SectionTitle>
        <SectionContent>
          <PolicyText>Your data is used for the following purposes:</PolicyText>
          <PolicyList>
            <PolicyListItem>
              To respond to inquiries submitted via the contact form.
            </PolicyListItem>
            <PolicyListItem>
              To analyze site usage through Google Analytics, enabling us to optimize content and navigation.
            </PolicyListItem>
            <PolicyListItem>
              To ensure the security and functionality of the website, such as detecting and preventing fraudulent activity.
            </PolicyListItem>
          </PolicyList>
          <PolicyText>
            We do not sell, trade, or share your personal information with third parties, except as required by law or to fulfill services (e.g., Google Analytics processing anonymized data).
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Data Protection Section */}
      <Section>
        <SectionTitle className="font-heading">Data Protection</SectionTitle>
        <SectionContent>
          <PolicyText>
            We implement reasonable security measures to protect your data, including secure hosting via Vercel and encryption for data transmission where applicable. However, no online system is completely secure, and we cannot guarantee absolute security.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Your Rights Section */}
      <Section>
        <SectionTitle className="font-heading">Your Rights</SectionTitle>
        <SectionContent>
          <PolicyText>You have the following rights regarding your personal information:</PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>Access</strong>: Request a copy of the data we hold about you.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Correction</strong>: Request corrections to inaccurate or incomplete data.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Deletion</strong>: Request deletion of your data, subject to legal obligations.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Opt-Out</strong>: Opt out of Google Analytics tracking by disabling cookies in your browser or using tools like the Google Analytics Opt-out Browser Add-on.
            </PolicyListItem>
          </PolicyList>
          <PolicyText>
            To exercise these rights, contact us at VegarBerentsen@gmail.com.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Contact Information Section */}
      <Section>
        <SectionTitle className="font-heading">Contact Us</SectionTitle>
        <SectionContent>
          <PolicyText>
            If you have questions about this Privacy Policy or our data practices, please reach out:
          </PolicyText>
          <PolicyList>
            <PolicyListItem>Email: VegarBerentsen@gmail.com</PolicyListItem>
            <PolicyListItem>Phone: +47 485 96 755</PolicyListItem>
            <PolicyListItem>Address: Ovenbakken 31 A, Østerås, Norway</PolicyListItem>
          </PolicyList>
        </SectionContent>
      </Section>

      {/* Updates Section */}
      <Section>
        <SectionTitle className="font-heading">Updates to This Policy</SectionTitle>
        <SectionContent>
          <PolicyText>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page, and the effective date will be revised accordingly.
          </PolicyText>
          <PolicyText><strong>Effective Date</strong>: May 25, 2025</PolicyText>
        </SectionContent>
      </Section>
    </PrivacyContainer>
  );
}