'use client';

import { useState } from 'react';
import styled from 'styled-components';

// Define type for openSections
interface ToggleState {
  [key: string]: boolean;
}

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
  margin-bottom: 3rem; /* Increased spacing below the title */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem; /* Increased spacing between sections */
  width: 100%;
`;

const SectionHeader = styled.div`
  background-color: #e1e9f0;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d1dde8;
  }
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align title to the left like CategoryHeader in Home.tsx */
`;

const SectionTitle = styled.h2`
  font-size: 2rem; /* Match CategoryTitle font-size from Home.tsx */
  font-weight: 700;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 0.5rem; /* Add spacing below the title like CategoryDescription */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #292a2d;
  margin-top: 0; /* Remove default margin to match CategoryDescription */
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #292a2d;
  cursor: pointer;
  font-weight: 600;
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
  const [openSections, setOpenSections] = useState<ToggleState>({
    'General Privacy Information': false,
    'TextClip Privacy': false,
    'Mapr Privacy': false,
  });

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const privacySections = [
    {
      name: 'General Privacy Information',
      description: 'Overview of privacy practices for the Designr.Pro website and its applications.',
      content: (
        <>
          <PolicyText>
            Welcome to Designr.Pro, the professional portfolio of Vegar Berentsen, showcasing apps like TextClip, Mapr, and other projects. This Privacy Policy outlines how we handle your information across our website and applications. We are committed to protecting your privacy and ensuring transparency in compliance with applicable data protection laws and Apple’s App Store guidelines.
          </PolicyText>
          <PolicyText>
            Our website (Designr.Pro) serves as a portfolio to display projects and provide contact information. We do not collect personal data through the website itself, as it does not include features like contact forms, user accounts, or analytics tracking.
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>No Analytics or Tracking</strong>: Designr.Pro does not use analytics services or collect usage data, such as IP addresses, device information, or browsing behavior.
            </PolicyListItem>
            <PolicyListItem>
              <strong>No User Input Data</strong>: The website does not collect personal information through user inputs, as it is a static portfolio site.
            </PolicyListItem>
          </PolicyList>
          <PolicyText>
            For app-specific privacy details, please expand the sections below.
          </PolicyText>
        </>
      ),
    },
    {
      name: 'TextClip Privacy',
      description: 'Privacy details for TextClip, a macOS app that uses screen recording for OCR.',
      content: (
        <>
          <PolicyText>
            TextClip is a macOS app that uses screen recording to enable its core functionality: capturing a user-selected region of the screen to perform optical character recognition (OCR) and extract text. Below, we detail how screen recording data is collected, used, and protected.
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
            <PolicyListItem>
              <strong>Other Data</strong>: TextClip does not collect additional user data, such as analytics, usage data, or personal information, as it operates entirely offline.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Control</strong>: You can revoke screen recording permissions at any time via System Settings <span></span> Privacy & Security <span></span> Screen Recording, which will disable TextClip’s ability to capture screen regions.
            </PolicyListItem>
          </PolicyList>
        </>
      ),
    },
    {
      name: 'Mapr Privacy',
      description: 'Privacy details for Mapr, a project management tool with a map-based interface.',
      content: (
        <>
          <PolicyText>
            Mapr is a project management tool for tradesmen, available on iOS, macOS, and visionOS, with a map-based interface for managing projects, contacts, and time tracking. Below, we detail how Mapr handles your data.
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>Data Collected</strong>: Mapr collects project-related data entered by the user, such as project names, locations, descriptions, contacts, and time logs. If location services are enabled, Mapr may access your device’s location to display projects on a map.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Purpose of Collection</strong>: The data is collected to provide Mapr’s core functionality:
              <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Project data (names, descriptions, contacts, time logs) is used to manage and organize your projects within the app.</li>
                <li>Location data is used to display project locations on a map-based interface, helping you visualize the geographical distribution of your ongoing projects.</li>
              </ul>
            </PolicyListItem>
            <PolicyListItem>
              <strong>Sharing with Third Parties</strong>: Mapr does not share your project or location data with third parties. All data is processed locally on your device, except when using Apple’s MapKit for map rendering, which may involve transmitting location data to Apple as part of the mapping service. This is governed by Apple’s privacy policy.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Storage</strong>: Project data is stored locally on your device in the app’s secure storage. If iCloud syncing is enabled, project data may be stored in iCloud to sync across your devices, using Apple’s encrypted iCloud storage.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Retention</strong>: Project data is retained on your device until you delete it within the app. If iCloud syncing is enabled, data is retained in iCloud until you delete it from all synced devices.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Location Permissions</strong>: Mapr requests location permissions only when necessary for map-based features. You can disable location access at any time via your device’s settings, and Mapr will continue to function without location data, though map features will be limited.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Other Data</strong>: Mapr does not collect analytics, usage data, or other personal information beyond what is necessary for its project management features.
            </PolicyListItem>
          </PolicyList>
        </>
      ),
    },
  ];

  return (
    <PrivacyContainer>
      <PrivacyTitle className="font-heading">Privacy Policy</PrivacyTitle>

      {/* Introduction Section */}
      <Section>
        <SectionTitle className="font-heading">Introduction</SectionTitle>
        <SectionContent>
          <PolicyText>
            Welcome to Designr.Pro, the professional portfolio of Vegar Berentsen, showcasing apps like TextClip, Mapr, and other projects. This Privacy Policy outlines how we handle your information across our website and applications. We are committed to protecting your privacy and ensuring transparency in compliance with applicable data protection laws and Apple’s App Store guidelines.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Toggled Privacy Sections */}
      {privacySections.map((section) => (
        <Section key={section.name}>
          <SectionHeader onClick={() => toggleSection(section.name)}>
            <SectionTitleWrapper>
              <SectionTitle className="font-heading">{section.name}</SectionTitle>
              <SectionDescription className="font-sans">{section.description}</SectionDescription>
            </SectionTitleWrapper>
            <ToggleButton aria-label={`Toggle ${section.name} section`}>
              {openSections[section.name] ? 'Collapse' : 'Expand'}
            </ToggleButton>
          </SectionHeader>
          {openSections[section.name] && (
            <SectionContent>
              {section.content}
            </SectionContent>
          )}
        </Section>
      ))}

      {/* Data Protection Section */}
      <Section>
        <SectionTitle className="font-heading">Data Protection</SectionTitle>
        <SectionContent>
          <PolicyText>
            We implement reasonable security measures to protect your data. Designr.Pro operates as a static website and does not collect or store user data. Our apps, TextClip and Mapr, process data locally on your device whenever possible:
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              TextClip processes screen recording data locally using Apple’s native frameworks, with no data transmission off-device.
            </PolicyListItem>
            <PolicyListItem>
              Mapr stores project data locally or in iCloud (if enabled), using Apple’s encrypted storage, and only shares location data with Apple for map rendering via MapKit.
            </PolicyListItem>
          </PolicyList>
          <PolicyText>
            We do not use third-party analytics or tracking services across our website or apps, ensuring your data remains private.
          </PolicyText>
        </SectionContent>
      </Section>

      {/* Your Rights Section */}
      <Section>
        <SectionTitle className="font-heading">Your Rights</SectionTitle>
        <SectionContent>
          <PolicyText>
            You have the following rights regarding your privacy across Designr.Pro and our apps:
          </PolicyText>
          <PolicyList>
            <PolicyListItem>
              <strong>Transparency</strong>: We provide full disclosure of our data practices, as outlined in this policy.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Control</strong>: For TextClip, you can revoke screen recording permissions via System Settings <span></span> Privacy & Security <span></span> Screen Recording. For Mapr, you can disable location access via your device’s settings.
            </PolicyListItem>
            <PolicyListItem>
              <strong>Access, Correction, Deletion</strong>: Since Designr.Pro does not collect user data, and our apps store data locally, you can manage your data directly within each app (e.g., delete projects in Mapr). For iCloud data in Mapr, you can manage it via your iCloud settings.
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