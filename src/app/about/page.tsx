'use client';

import styled from 'styled-components';

// Styled components
const AboutContainer = styled.div`
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

const AboutTitle = styled.h1`
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

const BioText = styled.p`
  font-size: 1rem;
  color: #292a2d; /* Black text */
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle className="font-heading">About Me</AboutTitle>

      {/* Bio Section */}
      <Section>
        <SectionTitle className="font-heading">Who I Am</SectionTitle>
        <SectionContent>
          <BioText>
            I specialize in building dynamic and interactive web experiences using technologies like React and SwiftUI. My journey in tech has been complemented by diverse experiences, from working as an electrician at Bærum Elektropartner AS to teaching sailing at Bærum Seilforening, which have taught me the value of precision, adaptability, and collaboration.
          </BioText>
        </SectionContent>
      </Section>

      {/* About Designr.Pro Section */}
      <Section>
        <SectionTitle className="font-heading">About Designr.Pro</SectionTitle>
        <SectionContent>
          <BioText>
            Designr.Pro is my digital home, a space where I showcase my skills, creativity, and dedication to the craft of web development. Built with React in Visual Studio Code, this site serves as both a personal portfolio and a playground for exploring the vast capabilities of React.
          </BioText>
          <BioText>
            It’s a space where new ideas are born, tested, and refined, demonstrating the power of React in building dynamic and interactive web experiences. From developing apps like Mapr to creating platforms for local initiatives like Lydhagen, Designr.Pro reflects my commitment to innovation and design excellence.
          </BioText>
        </SectionContent>
      </Section>

      {/* Work Philosophy Section */}
      <Section>
        <SectionTitle className="font-heading">Work Philosophy</SectionTitle>
        <SectionContent>
          <BioText>
            I believe in the power of design to solve real-world problems and enhance user experiences. My approach is user-centered, focusing on creating solutions that are not only functional but also visually appealing and intuitive.
          </BioText>
          <BioText>
            I’m passionate about continuous learning and experimentation, which is why I use Designr.Pro as a testing ground for new ideas and technologies. Whether I’m building a web app, designing a VR experience, or contributing to community initiatives, my goal is to make a positive impact through thoughtful design and development.
          </BioText>
        </SectionContent>
      </Section>
    </AboutContainer>
  );
}