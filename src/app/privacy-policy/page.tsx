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
            Welcome to TextClip, a macOS app developed by Vegar Berentsen. This Privacy Policy outlines how we handle your information when you use TextClip, particularly in relation to its screen recording functionality. We are committed to protecting your privacy and ensuring transparency in compliance with applicable data protection laws and Apple’s App Store guidelines.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Screen Recording Data Section */}
      <Section>
        <SectionTitle className="font-heading">Screen Recording Data</SectionTitle>
        <SectionContent>
          <PolicyText>
            TextClip uses screen recording to enable its core functionality: capturing a user-selected region of the screen to perform optical character recognition (OCR) and extract text. Below, we detail how screen recording data is collected, used, and protected.
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>Features Using Screen Recording</strong>: When you select "Capture Text" from the menu bar or use the Cmd+Shift+2 shortcut, TextClip displays a selection window that allows you to drag and select a rectangular region on the screen. This region is captured using macOS’s ScreenCaptureKit framework, processed with Apple’s Vision framework for OCR, and the recognized text is copied to your clipboard.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Data Collected</strong>: TextClip collects a screenshot of the user-selected screen region, which may contain any visible content within that area (e.g., text, images, or UI elements). No additional metadata about the screen content is collected beyond the pixel data necessary for OCR processing.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Purpose of Collection</strong>: The screenshot data is collected solely to perform OCR and extract text, enabling you to copy the recognized text to the clipboard for use in other applications. The process involves capturing the selected region, preprocessing the image (e.g., scaling and adjusting contrast) to improve OCR accuracy, recognizing text with the Vision framework, and copying the text to the clipboard.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Sharing with Third Parties</strong>: The screenshot data is not shared with any third parties. The entire process occurs locally on your device using Apple’s native frameworks (ScreenCaptureKit and Vision). No data is transmitted off-device.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Storage</strong>: The screenshot data is temporarily stored in memory during the OCR process and is discarded immediately after the recognized text is copied to the clipboard. No screenshot data is persistently stored on your device or elsewhere. The recognized text is stored only in the system clipboard, which is managed by macOS and cleared when you copy new content.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Retention</strong>: As the screenshot data is only held in memory during processing, it is not retained after the OCR process completes. The recognized text remains in the clipboard until overwritten by new content, as per macOS clipboard behavior.
            </PolicyListItem>
          </PolicyList>
        </SectionContent>
      </Section>

      {/* Other Data We Collect Section */}
      <Section>
        <SectionTitle className="font-heading">Other Data We Collect</SectionTitle>
        <SectionContent>
          <PolicyText>
            TextClip is designed to operate entirely offline and does not collect additional user data beyond what is necessary for its screen recording functionality. Specifically:
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>No Analytics or Tracking</strong>: TextClip does not use analytics services or collect usage data, such as IP addresses, device information, or browsing behavior.
            </PolicyListItem>
            <PolicyListItem>
              <strong>No User Input Data</strong>: The app does not collect personal information through user inputs, as it does not include features like contact forms or user accounts.
            </PolicyListItem>
          </PolicyList>
        </SectionContent>
      </Section>

      {/* Data Protection Section */}
      <Section>
        <SectionTitle className="font-heading">Data Protection</SectionTitle>
        <SectionContent>
          <PolicyText>
            We implement reasonable security measures to protect your data. Since TextClip operates entirely offline, the screenshot data collected during screen recording is processed locally on your device and is not transmitted over the internet. The temporary in-memory storage of screenshot data is managed securely by macOS, and we do not persistently store or back up this data.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Your Rights Section */}
      <Section>
        <SectionTitle className="font-heading">Your Rights</SectionTitle>
        <SectionContent>
          <PolicyText>
            Since TextClip does not collect or store personal information beyond temporary in-memory processing of screen recording data, there is no user data to access, correct, or delete. However, you have the following rights regarding your privacy:
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>Transparency</strong>: We provide full disclosure of our screen recording practices, as outlined in this policy.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Control</strong>: You can revoke screen recording permissions at any time via System Settings Privacy & Security Screen Recording, which will disable TextClip’s ability to capture screen regions.
            </PolicyListItem>
          </PolicyList>
          <PolicyText>
            To exercise these rights or for any privacy-related inquiries, contact us at the details below.
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