'use client';

import styled from 'styled-components';
import Link from 'next/link';

// Styled components
const CVContainer = styled.div`
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

const CVTitle = styled.h1`
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

const Entry = styled.div`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const EntryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #292a2d; /* Black text */
  margin-bottom: 0.5rem;
`;

const EntryDetails = styled.p`
  font-size: 1rem;
  color: #292a2d; /* Black text */
  margin-bottom: 0.25rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: #cad9e4; /* Slightly darker blue for contrast */
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  color: #292a2d; /* Black text */
`;

export default function CV() {
  return (
    <CVContainer>
      <CVTitle className="font-heading">Curriculum Vitae</CVTitle>

      {/* Education Section */}
      <Section>
        <SectionTitle className="font-heading">Education</SectionTitle>
        <SectionContent>
          <Entry>
            <EntryTitle>Tjenestedesign</EntryTitle>
            <EntryDetails>2022 - 2023</EntryDetails>
            <EntryDetails>Høyskolen Kristiania</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Påbygg, Generell Studiekompetanse</EntryTitle>
            <EntryDetails>2019 - 2020</EntryDetails>
            <EntryDetails>Bjørknes Privatskole</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Fagbrev Elektrofag, BM</EntryTitle>
            <EntryDetails>2015</EntryDetails>
            <EntryDetails>Bærum Elektropartner AS</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Electrician</EntryTitle>
            <EntryDetails>2010 - 2012</EntryDetails>
            <EntryDetails>Rud Vgs</EntryDetails>
          </Entry>
        </SectionContent>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle className="font-heading">Experience</SectionTitle>
        <SectionContent>
          <Entry>
            <EntryTitle>Studio 51</EntryTitle>
            <EntryDetails>2024</EntryDetails>
            <EntryDetails>Worked as a Web Designer and Developer using React and Swift.</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>AppStore</EntryTitle>
            <EntryDetails>2023</EntryDetails>
            <EntryDetails>Developed and published apps on the AppStore, including Mapr.</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Nøsen Yoga & Fjellhotell</EntryTitle>
            <EntryDetails>2021 & 2022</EntryDetails>
            <EntryDetails>Contributed to digital solutions for the hotel.</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Travel</EntryTitle>
            <EntryDetails>2018 - 2019</EntryDetails>
            <EntryDetails>Explored various cultures and gained inspiration for design projects.</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Electrician at Bærum Elektropartner AS</EntryTitle>
            <EntryDetails>2012 - 2017</EntryDetails>
            <EntryDetails>Worked as an electrician, specializing in electrical installations and maintenance.</EntryDetails>
          </Entry>
          <Entry>
            <EntryTitle>Sail Instructor at Bærum Seilforening</EntryTitle>
            <EntryDetails>2010 - 2016</EntryDetails>
            <EntryDetails>Taught sailing techniques and safety practices to beginners and intermediates.</EntryDetails>
          </Entry>
        </SectionContent>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle className="font-heading">Skills</SectionTitle>
        <SectionContent>
          <SkillsList>
            <SkillItem>LLM</SkillItem>
            <SkillItem>SwiftUI</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>UX Design</SkillItem>
            <SkillItem>Next.js</SkillItem>
            <SkillItem>Styled Components</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>Figma</SkillItem>
            <SkillItem>Prompt Engineering</SkillItem>
            <SkillItem>Web Design</SkillItem>
            <SkillItem>Swift</SkillItem>
            <SkillItem>iOS Development</SkillItem>
            <SkillItem>VisionOS Development</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>HTML/CSS</SkillItem>
            <SkillItem>Git</SkillItem>
          </SkillsList>
        </SectionContent>
      </Section>
    </CVContainer>
  );
}