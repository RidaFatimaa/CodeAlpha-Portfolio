import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
           My name is Rida Fatima.I am a web developer and also an emerging photographer based in Pakistan.
          </StyledParagraph>
          <StyledParagraph>
           I attended <a href="https://www.iba-suk.edu.pk/">Sukkur IBA University</a> school where i pursued full stack web development.
           </StyledParagraph>
          <StyledParagraph>
          I love to create beautiful and responsive solutions.I work with vue and react frameworks for frontend and Django for backend.
          </StyledParagraph>
      
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-rida-fatima"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
