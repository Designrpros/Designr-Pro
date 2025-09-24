'use client';

import styled from 'styled-components';

// --- Styled Components (Theme matched with your Privacy Policy) ---

const PageContainer = styled.main`
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

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 3rem; /* Spacing below the title */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem; /* Spacing between sections */
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1.5rem; /* Spacing below section title */

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
  margin: 0;
  
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// --- The Main Page Component ---

export default function TermsOfServicePage() {
  const termsSections = [
    {
      title: '1. Acceptance of Terms',
      content: "By downloading, accessing, or using the Mapr Atlas mobile application ('Service'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, do not use the Service.",
    },
    {
      title: '2. Use of the Service',
      content: "Mapr Atlas provides users with access to global data visualizations, data analysis tools, and AI-powered insights. The Service is provided for informational and educational purposes. You agree to use the Service in compliance with all applicable laws and not for any unlawful purpose.",
    },
    {
      title: '3. Subscriptions',
      content: "Certain features of the Service may be available only through a paid subscription ('Pro'). Subscription fees are billed in advance on a recurring basis. All payments are handled through the App Store and are subject to their terms and conditions. Subscriptions will automatically renew unless canceled by you.",
    },
    {
      title: '4. Third-Party Data',
      content: "The data presented in the Service is sourced from third-party providers, including The World Bank and Wikipedia. We do not own this data and cannot guarantee its accuracy, completeness, or timeliness. Your use of this data is subject to the terms and licenses of the original providers, as detailed in our Acknowledgments section.",
    },
    {
      title: '5. Disclaimer of Warranties',
      content: "The Service is provided on an 'as is' and 'as available' basis. We make no warranties, express or implied, regarding the operation or availability of the Service or the information, content, or materials included therein. You expressly agree that your use of the Service is at your sole risk.",
    },
    {
      title: '6. Limitation of Liability',
      content: "In no event shall Mapr Atlas, its developers, or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.",
    },
    {
      title: '7. Governing Law',
      content: "These Terms shall be governed and construed in accordance with the laws of Norway, without regard to its conflict of law provisions.",
    },
    {
      title: '8. Contact Us',
      content: "If you have any questions about these Terms, you can contact us at designr.pros@gmail.com.",
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Terms of Service</PageTitle>

      {termsSections.map((section) => (
        <Section key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          <SectionContent>
            <PolicyText>{section.content}</PolicyText>
          </SectionContent>
        </Section>
      ))}
    </PageContainer>
  );
}

