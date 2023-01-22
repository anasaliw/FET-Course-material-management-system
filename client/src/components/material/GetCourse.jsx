import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const BtnContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

function GetCourse() {
  const [dept, setDept] = React.useState("");
  const [semester, setSemester] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const handleChange = (event) => {
    setDept(event.target.value);
  };

  const semesterHandleChange = (event) => {
    setSemester(event.target.value);
  };

  const subjectHandleChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <Box style={{ margin: "30px 70px" }}>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Department</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={dept}
          label='Select Department'
          onChange={handleChange}
        >
          <MenuItem value={"it"}>Information Technology</MenuItem>
          <MenuItem value={"software"}>Software Engineering</MenuItem>
          <MenuItem value={"telecom"}>Telecom Engineering</MenuItem>
          <MenuItem value={"electronics"}>Electronic Engineering</MenuItem>
        </Select>
      </FormControl>

      {/* <MenuItem value={"ITS1"}>1st Semester</MenuItem>
          <MenuItem value={"ITS2"}>2nd Semester</MenuItem>
          <MenuItem value={"ITS3"}>3rd Semester</MenuItem>
          <MenuItem value={"ITS4"}>4th Semester</MenuItem>
          <MenuItem value={"ITS5"}>5th Semester</MenuItem>
          <MenuItem value={"ITS6"}>6th Semester</MenuItem>
          <MenuItem value={"ITS7"}>7th Semester</MenuItem>
        <MenuItem value={"ITS8"}>8th Semester</MenuItem> */}

      {dept === "it" ? (
        <FormControl style={{ marginTop: 50, width: "100%" }}>
          <InputLabel id='demo-simple-select-label'>Select Semester</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={semester}
            label='Select Semester'
            onChange={semesterHandleChange}
          >
            <MenuItem value={"ITS1"}>1st Semester</MenuItem>
            <MenuItem value={"ITS2"}>2nd Semester</MenuItem>
            <MenuItem value={"ITS3"}>3rd Semester</MenuItem>
            <MenuItem value={"ITS4"}>4th Semester</MenuItem>
            <MenuItem value={"ITS5"}>5th Semester</MenuItem>
            <MenuItem value={"ITS6"}>6th Semester</MenuItem>
            <MenuItem value={"ITS7"}>7th Semester</MenuItem>
            <MenuItem value={"ITS8"}>8th Semester</MenuItem>
          </Select>
        </FormControl>
      ) : dept === "software" ? (
        <FormControl style={{ marginTop: 50, width: "100%" }}>
          <InputLabel id='demo-simple-select-label'>Select Semester</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={semester}
            label='Select Semester'
            onChange={semesterHandleChange}
          >
            <MenuItem value={"SWS1"}>1st Semester</MenuItem>
            <MenuItem value={"SWS2"}>2nd Semester</MenuItem>
            <MenuItem value={"SWS3"}>3rd Semester</MenuItem>
            <MenuItem value={"SWS4"}>4th Semester</MenuItem>
            <MenuItem value={"SWS5"}>5th Semester</MenuItem>
            <MenuItem value={"SWS6"}>6th Semester</MenuItem>
            <MenuItem value={"SWS7"}>7th Semester</MenuItem>
            <MenuItem value={"SWS8"}>8th Semester</MenuItem>
          </Select>
        </FormControl>
      ) : dept === "telecom" ? (
        <FormControl style={{ marginTop: 50, width: "100%" }}>
          <InputLabel id='demo-simple-select-label'>Select Semester</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={semester}
            label='Select Semester'
            onChange={semesterHandleChange}
          >
            <MenuItem value={"TLS1"}>1st Semester</MenuItem>
            <MenuItem value={"TLS2"}>2nd Semester</MenuItem>
            <MenuItem value={"TLS3"}>3rd Semester</MenuItem>
            <MenuItem value={"TLS4"}>4th Semester</MenuItem>
            <MenuItem value={"TLS5"}>5th Semester</MenuItem>
            <MenuItem value={"TLS6"}>6th Semester</MenuItem>
            <MenuItem value={"TLS7"}>7th Semester</MenuItem>
            <MenuItem value={"TLS8"}>8th Semester</MenuItem>
          </Select>
        </FormControl>
      ) : dept === "electronics" ? (
        <FormControl style={{ marginTop: 50, width: "100%" }}>
          <InputLabel id='demo-simple-select-label'>Select Semester</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={semester}
            label='Select Semester'
            onChange={semesterHandleChange}
          >
            <MenuItem value={"ELS1"}>1st Semester</MenuItem>
            <MenuItem value={"ELS2"}>2nd Semester</MenuItem>
            <MenuItem value={"ELS3"}>3rd Semester</MenuItem>
            <MenuItem value={"ELS4"}>4th Semester</MenuItem>
            <MenuItem value={"ELS5"}>5th Semester</MenuItem>
            <MenuItem value={"ELS6"}>6th Semester</MenuItem>
            <MenuItem value={"ELS7"}>7th Semester</MenuItem>
            <MenuItem value={"ELS8"}>8th Semester</MenuItem>
          </Select>
        </FormControl>
      ) : null}
      <>
        {semester === "ITS1" ? (
          <FirstSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ITS2" ? (
          <>
            <SecondSemester
              subjectHandleChange={subjectHandleChange}
              subject={subject}
            />
          </>
        ) : semester === "ITS3" ? (
          <ThirdSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ITS4" ? (
          <FourthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ITS5" ? (
          <FifthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ITS6" ? (
          <SixthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ITS7" ? (
          <SeventhSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ITS8" ? (
          <EighthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS1" ? (
          <SWFirstSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS2" ? (
          <>
            <SWSecondSemester
              subjectHandleChange={subjectHandleChange}
              subject={subject}
            />
          </>
        ) : semester === "SWS3" ? (
          <SWThirdSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS4" ? (
          <SWFourthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS5" ? (
          <SWFifthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS6" ? (
          <SWSixthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS7" ? (
          <SWSeventhSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "SWS8" ? (
          <SWEighthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS1" ? (
          <TLFirstSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS2" ? (
          <>
            <TLSecondSemester
              subjectHandleChange={subjectHandleChange}
              subject={subject}
            />
          </>
        ) : semester === "TLS3" ? (
          <TLThirdSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS4" ? (
          <TLFourthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS5" ? (
          <TLFifthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS6" ? (
          <TLSixthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS7" ? (
          <TLSeventhSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "TLS8" ? (
          <TLEighthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS1" ? (
          <ELFirstSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS2" ? (
          <>
            <ELSecondSemester
              subjectHandleChange={subjectHandleChange}
              subject={subject}
            />
          </>
        ) : semester === "ELS3" ? (
          <ELThirdSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS4" ? (
          <ELFourthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS5" ? (
          <ELFifthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS6" ? (
          <ELSixthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS7" ? (
          <ELSeventhSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : semester === "ELS8" ? (
          <ELEighthSemester
            subjectHandleChange={subjectHandleChange}
            subject={subject}
          />
        ) : null}
      </>
      <BtnContainer>
        <Button
          style={{}}
          variant='outlined'
          component={Link}
          to={`/material/getCourse/${dept}/${semester}/${subject}`}
        >
          Search Course Content
        </Button>
      </BtnContainer>
    </Box>
  );
}

export default GetCourse;

// ! IT
function FirstSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"programmingFundamentals"}>
            Programming Fundamentals
          </MenuItem>
          <MenuItem value={"programmingFundamentalsLab"}>
            Programming Fundamentals (Lab)
          </MenuItem>
          <MenuItem value={"informationAndCommunicationTechnologies"}>
            Information and Communication Technologies
          </MenuItem>
          <MenuItem value={"informationAndCommunicationTechnologiesLab"}>
            Information and Communication Technologies (Lab)
          </MenuItem>
          <MenuItem value={"basicElectronics"}>Basic Electronics</MenuItem>
          <MenuItem value={"basicElectronicsLab"}>
            Basic Electronics (Lab)
          </MenuItem>
          <MenuItem value={"calculusAndAnalyticalGeometry"}>
            Calculus and Analytical Geometry
          </MenuItem>
          <MenuItem value={"islamicStudies"}>Islamic Studies</MenuItem>
          <MenuItem value={"englishCompositionAndComprehension"}>
            English Composition and Comprehension
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SecondSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"objectOrientedProgramming"}>
            Object Oriented Programming
          </MenuItem>
          <MenuItem value={"objectOrientedProgrammingLab"}>
            Object Oriented Programming (Lab)
          </MenuItem>
          <MenuItem value={"digitalLogicDesign"}>Digital Logic Design</MenuItem>
          <MenuItem value={"digitalLogicDesignLab"}>
            Digital Logic Design (Lab)
          </MenuItem>
          <MenuItem value={"principlesOfManagement"}>
            Principles of Management{" "}
          </MenuItem>
          <MenuItem value={"probabilityAndStatistics"}>
            Probability and Statistics
          </MenuItem>
          <MenuItem value={"discreteStructures"}>Discrete Structures</MenuItem>
          <MenuItem value={"communicationSkills"}>
            Communication Skills
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ThirdSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"dataStructuresAndAlgorithms"}>
            Data Structures and Algorithms
          </MenuItem>
          <MenuItem value={"dataStructuresAndAlgorithmsLab"}>
            Data Structures and Algorithms (Lab)
          </MenuItem>
          <MenuItem value={"microprocessorAndAssemblyLanguage"}>
            Microprocessor and Assembly Language
          </MenuItem>
          <MenuItem value={"microprocessorAndAssemblyLanguageLab"}>
            Microprocessor and Assembly Language (Lab)
          </MenuItem>
          <MenuItem value={"pakistanStudies"}>Pakistan Studies</MenuItem>
          <MenuItem value={"linearAlgebra"}>Linear Algebra</MenuItem>
          <MenuItem value={"englishTechnicalAndBusinessWriting"}>
            English Technical and Business writing
          </MenuItem>
          <MenuItem value={"softwareEngineering"}>
            Software Engineering
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function FourthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"pythonProgramming"}>Python Programming</MenuItem>
          <MenuItem value={"pythonProgrammingLab"}>
            Python Programming (Lab)
          </MenuItem>
          <MenuItem value={"databaseSystems"}>Database Systems</MenuItem>
          <MenuItem value={"databaseSystemsLab"}>
            Database Systems (Lab)
          </MenuItem>
          <MenuItem value={"objectOrientedAnalysisOrDesign"}>
            Object Oriented Analysis & Design
          </MenuItem>
          <MenuItem value={"objectOrientedAnalysisOrDesignLab"}>
            Object Oriented Analysis & Design (Lab)
          </MenuItem>
          <MenuItem value={"professionalPractices"}>
            Professional Practices
          </MenuItem>
          <MenuItem value={"humanResourceManagement"}>
            Human Resource Management
          </MenuItem>
          <MenuItem value={"computerCommunicationAndNetworks"}>
            Computer Communication and Networks
          </MenuItem>
          <MenuItem value={"computerCommunicationAndNetworksLab"}>
            Computer Communication and Networks
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function FifthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"computerGraphics"}>Computer Graphics</MenuItem>
          <MenuItem value={"computerGraphicsLab"}>
            Computer Graphics (Lab)
          </MenuItem>
          <MenuItem value={"operatingSystems"}>Operating Systems</MenuItem>
          <MenuItem value={"operatingSystemsLab"}>
            Operating Systems (Lab)
          </MenuItem>
          <MenuItem value={"DatabaseAdministrationOrManagement"}>
            DB Administration & Management
          </MenuItem>
          <MenuItem value={"DatabaseAdministrationOrManagementLab"}>
            DB Administration & Management (Lab)
          </MenuItem>
          <MenuItem value={"webSystemsOrTechnologies"}>
            Web Systems & Technologies
          </MenuItem>
          <MenuItem value={"webSystemsOrTechnologiesLab"}>
            Web Systems & Technologies (Lab)
          </MenuItem>
          <MenuItem value={"informationSystems"}>Information Systems</MenuItem>
          <MenuItem value={"internetArchitectureAndProtocols"}>
            Internet Architecture & Protocols
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SixthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"mobileApplicationDevelopment"}>
            Mobile Application Development
          </MenuItem>
          <MenuItem value={"mobileApplicationDevelopmentLab"}>
            Mobile Application Development (Lab)
          </MenuItem>
          <MenuItem value={"ITProjectManagement"}>
            IT Project Management
          </MenuItem>
          <MenuItem value={"ITProjectManagementLab"}>
            IT Project Management (Lab)
          </MenuItem>
          <MenuItem value={"multimediaSystemsAndDesign"}>
            Multimedia Systems and Design
          </MenuItem>
          <MenuItem value={"multimediaSystemsAndDesignLab"}>
            Multimedia Systems and Design (Lab)
          </MenuItem>
          <MenuItem value={"systemAndNetworkAdministration"}>
            System and Network Administration
          </MenuItem>
          <MenuItem value={"systemAndNetworkAdministrationLab"}>
            System and Network Administration (Lab)
          </MenuItem>
          <MenuItem value={"systemIntegrationAndArchitecture"}>
            System Integration and Architecture
          </MenuItem>
          <MenuItem value={"dataScience"}>Data Science</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SeventhSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"cloudComputing"}>Cloud Computing</MenuItem>
          <MenuItem value={"cloudComputingLab"}>Cloud Computing (Lab)</MenuItem>
          <MenuItem value={"humanComputerInteraction"}>
            Human Computer Interaction
          </MenuItem>
          <MenuItem value={"humanComputerInteractionLab"}>
            Human Computer Interaction (Lab)
          </MenuItem>
          <MenuItem value={"technologyManagement"}>
            Technology Management
          </MenuItem>
          <MenuItem value={"dataAndNetworkSecurity"}>
            Data & Network Security
          </MenuItem>
          <MenuItem value={"computerVision"}>Computer Vision</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function EighthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"networkScience"}>Network Science</MenuItem>
          <MenuItem value={"networkScienceLab"}>Network Science (Lab)</MenuItem>
          <MenuItem value={"entrepreneurship"}>Entrepreneurship</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

// ! SOftware
function SWFirstSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"programmingFundamentals"}>
            Programming Fundamentals
          </MenuItem>
          <MenuItem value={"programmingFundamentalsLab"}>
            Programming Fundamentals (Lab)
          </MenuItem>
          <MenuItem value={"informationAndCommunicationTechnologies"}>
            Information and Communication Technologies
          </MenuItem>
          <MenuItem value={"informationAndCommunicationTechnologiesLab"}>
            Information and Communication Technologies (Lab)
          </MenuItem>
          <MenuItem value={"basicElectronics"}>Basic Electronics</MenuItem>
          <MenuItem value={"basicElectronicsLab"}>
            Basic Electronics (Lab)
          </MenuItem>
          <MenuItem value={"calculusAndAnalyticalGeometry"}>
            Calculus and Analytical Geometry
          </MenuItem>
          <MenuItem value={"islamicStudies"}>Islamic Studies</MenuItem>
          <MenuItem value={"englishCompositionAndComprehension"}>
            English Composition and Comprehension
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWSecondSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"objectOrientedProgramming"}>
            Object Oriented Programming
          </MenuItem>
          <MenuItem value={"objectOrientedProgrammingLab"}>
            Object Oriented Programming (Lab)
          </MenuItem>
          <MenuItem value={"digitalLogicDesign"}>Digital Logic Design</MenuItem>
          <MenuItem value={"digitalLogicDesignLab"}>
            Digital Logic Design (Lab)
          </MenuItem>
          <MenuItem value={"principlesOfManagement"}>
            Principles of Management{" "}
          </MenuItem>
          <MenuItem value={"probabilityAndStatistics"}>
            Probability and Statistics
          </MenuItem>
          <MenuItem value={"discreteStructures"}>Discrete Structures</MenuItem>
          <MenuItem value={"communicationSkills"}>
            Communication Skills
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWThirdSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"dataStructuresAndAlgorithms"}>
            Data Structures and Algorithms
          </MenuItem>
          <MenuItem value={"dataStructuresAndAlgorithmsLab"}>
            Data Structures and Algorithms (Lab)
          </MenuItem>
          <MenuItem value={"microprocessorAndAssemblyLanguage"}>
            Microprocessor and Assembly Language
          </MenuItem>
          <MenuItem value={"microprocessorAndAssemblyLanguageLab"}>
            Microprocessor and Assembly Language (Lab)
          </MenuItem>
          <MenuItem value={"englishTechnicalAndBusinessWriting"}>
            English Technical and Business writing
          </MenuItem>
          <MenuItem value={"pakistanStudies"}>Pakistan Studies</MenuItem>
          <MenuItem value={"linearAlgebra"}>Linear Algebra</MenuItem>
          <MenuItem value={"entrepreneurship"}>Entrepreneurship</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWFourthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"databaseSystems"}>Database Systems</MenuItem>
          <MenuItem value={"databaseSystemsLab"}>
            Database Systems (Lab)
          </MenuItem>
          <MenuItem value={"computerCommunicationAndNetworks"}>
            Computer Communication and Networks
          </MenuItem>
          <MenuItem value={"computerCommunicationAndNetworksLab"}>
            Computer Communication and Networks (Lab)
          </MenuItem>
          <MenuItem value={"pythonProgramming"}>Python Programming</MenuItem>
          <MenuItem value={"pythonProgrammingLab"}>
            Python Programming (Lab)
          </MenuItem>
          <MenuItem value={"humanResourceManagement"}>
            Human Resource Management
          </MenuItem>
          <MenuItem value={"professionalPractices"}>
            Professional Practices
          </MenuItem>
          <MenuItem value={"softwareEngineering"}>
            Software Engineering
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWFifthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"webSystemsOrTechnologies"}>
            Web Systems & Technologies
          </MenuItem>
          <MenuItem value={"webSystemsOrTechnologiesLab"}>
            Web Systems & Technologies (Lab)
          </MenuItem>
          <MenuItem value={"operatingSystems"}>Operating Systems</MenuItem>
          <MenuItem value={"operatingSystemsLab"}>
            Operating Systems (Lab)
          </MenuItem>
          <MenuItem value={"computerGraphics"}>Computer Graphics</MenuItem>
          <MenuItem value={"computerGraphicsLab"}>
            Computer Graphics (Lab)
          </MenuItem>
          <MenuItem value={"objectOrientedSoftwareEngineering"}>
            Object Oriented Software Engineering
          </MenuItem>
          <MenuItem value={"objectOrientedSoftwareEngineeringLab"}>
            Computer Object Oriented Software Engineering (Lab)
          </MenuItem>
          <MenuItem value={"DatabaseAdministrationOrManagement"}>
            DB Administration & Management
          </MenuItem>
          <MenuItem value={"DatabaseAdministrationOrManagementLab"}>
            DB Administration & Management (Lab)
          </MenuItem>
          <MenuItem value={"softwareRequirementAndSpecifications"}>
            Software Requirement And Specifications
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWSixthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"mobileApplicationDevelopment"}>
            Mobile Application Development
          </MenuItem>
          <MenuItem value={"mobileApplicationDevelopmentLab"}>
            Mobile Application Development (Lab)
          </MenuItem>
          <MenuItem value={"softwareProjectManagement"}>
            Software Project Management
          </MenuItem>
          <MenuItem value={"softwareProjectManagementLab"}>
            Software Project Management (Lab)
          </MenuItem>
          <MenuItem value={"multimediaSystemsAndDesign"}>
            Multimedia Systems and Design
          </MenuItem>
          <MenuItem value={"multimediaSystemsAndDesignLab"}>
            Multimedia Systems and Design (Lab)
          </MenuItem>
          <MenuItem value={"dataScience"}>Data Science</MenuItem>
          <MenuItem value={"secureSoftwareDevelopment"}>
            Secure Software Development
          </MenuItem>

          <MenuItem value={"softwareDesignAndArchitecture"}>
            Software Design And Architecture
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWSeventhSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"cloudComputing"}>Cloud Computing</MenuItem>
          <MenuItem value={"cloudComputingLab"}>Cloud Computing (Lab)</MenuItem>
          <MenuItem value={"humanComputerInteraction"}>
            Human Computer Interaction
          </MenuItem>
          <MenuItem value={"humanComputerInteractionLab"}>
            Human Computer Interaction (Lab)
          </MenuItem>
          <MenuItem value={"serviceOrientedArchitecture"}>
            Service Oriented Architecture
          </MenuItem>
          <MenuItem value={"serviceOrientedArchitectureLab"}>
            Service Oriented Architecture (Lab)
          </MenuItem>
          <MenuItem value={"formalMethods"}>Formal Methods</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function SWEighthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"softwareVerificationAndValidation"}>
            Software Verification And Validation
          </MenuItem>
          <MenuItem value={"softwareVerificationAndValidationLab"}>
            Software Verification And Validation (Lab)
          </MenuItem>
          <MenuItem value={"pervasiveComputing"}>Pervasive Computing</MenuItem>
          <MenuItem value={"pervasiveComputingLab"}>
            Pervasive Computing (Lab)
          </MenuItem>
          <MenuItem value={"softwareEngineeringEconomics"}>
            Software Engineering Economics
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

// ! Telecom
function TLFirstSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"appliedPhysics"}>Applied Physics</MenuItem>
          <MenuItem value={"appliedPhysicsLab"}>Applied Physics (Lab)</MenuItem>
          <MenuItem value={"electricWorkshop"}>Electric Workshop</MenuItem>
          <MenuItem value={"electricWorkshopLab"}>
            Electric Workshop (Lab)
          </MenuItem>
          <MenuItem value={"circuitAnalysis"}>Circuit Analysis</MenuItem>
          <MenuItem value={"circuitAnalysisLab"}>
            Circuit Analysis (Lab)
          </MenuItem>
          <MenuItem value={"functionalEnglish"}>Functional English</MenuItem>
          <MenuItem value={"introductionToComputing"}>
            Introduction To Computing
          </MenuItem>
          <MenuItem value={"calculusAndAnalyticalGeometry"}>
            Calculus And Analytical Geometry
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLSecondSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"objectOrientedProgramming"}>
            Object Oriented Programming
          </MenuItem>
          <MenuItem value={"objectOrientedProgrammingLab"}>
            Object Oriented Programming (Lab)
          </MenuItem>
          <MenuItem value={"electronicDevicesAndCircuits"}>
            Electronic Devices and Circuits
          </MenuItem>
          <MenuItem value={"electronicDevicesAndCircuitsLab"}>
            Electronic Devices and Circuits (Lab)
          </MenuItem>
          <MenuItem value={"computerAidedEngineeringDesign"}>
            Computer-Aided Engineering Design
          </MenuItem>
          <MenuItem value={"computerAidedEngineeringDesignLab"}>
            Computer-Aided Engineering Design (Lab)
          </MenuItem>
          <MenuItem value={"probabilityAndStatistics"}>
            Probability And Statistics
          </MenuItem>
          <MenuItem value={"islamicStudies"}>Islamic Studies</MenuItem>
          <MenuItem value={"differentialEquation"}>
            Differential Equation
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLThirdSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"electricalNetworkAnalysis"}>
            Electrical Network Analysis
          </MenuItem>
          <MenuItem value={"electricalNetworkAnalysisLab"}>
            Electrical Network Analysis (Lab)
          </MenuItem>
          <MenuItem value={"dataStructureAndAlgorithms"}>
            Data Structure and Algorithms
          </MenuItem>
          <MenuItem value={"dataStructureAndAlgorithmsLab"}>
            Data Structure and Algorithms (Lab)
          </MenuItem>
          <MenuItem value={"engineeringEconomics"}>
            Engineering Economics
          </MenuItem>
          <MenuItem value={"pakistanStudies"}>Pakistan Studies</MenuItem>
          <MenuItem value={"linearAlgebra"}>Linear Algebra</MenuItem>
          <MenuItem value={"engineeringEconomics"}>
            Engineering Economics
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLFourthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"amplifiersAndOscillators"}>
            Amplifiers and Oscillators
          </MenuItem>
          <MenuItem value={"amplifiersAndOscillatorsLab"}>
            Amplifiers and Oscillators (Lab)
          </MenuItem>
          <MenuItem value={"digitalLogicDesign"}>Digital Logic Design</MenuItem>
          <MenuItem value={"digitalLogicDesignLab"}>
            Digital Logic Design (Lab)
          </MenuItem>
          <MenuItem value={"signalAndSystems"}>Signal and Systems</MenuItem>
          <MenuItem value={"technicalReportWritingAndPresentation"}>
            Technical Report Writing and Presentation
          </MenuItem>
          <MenuItem value={"humanResourceManagement"}>
            Human Resource Management
          </MenuItem>
          <MenuItem value={"probabilityMethodsInEngineering"}>
            Probability Methods In Engineering
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLFifthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"computerCommunicationNetworks"}>
            Computer Communication Networks
          </MenuItem>
          <MenuItem value={"computerCommunicationNetworksLab"}>
            Computer Communication Networks (Lab)
          </MenuItem>
          <MenuItem value={"microprocessorsAndMicrocontrollers"}>
            Microprocessors and Microcontrollers
          </MenuItem>
          <MenuItem value={"microprocessorsAndMicrocontrollersLab"}>
            Microprocessors and Microcontrollers (Lab)
          </MenuItem>
          <MenuItem value={"controlSystems"}>Control Systems</MenuItem>
          <MenuItem value={"controlSystemsLab"}>Control Systems (Lab)</MenuItem>
          <MenuItem value={"communicationSystems"}>
            Communication Systems
          </MenuItem>
          <MenuItem value={"communicationSystemsLab"}>
            Communication Systems (Lab)
          </MenuItem>
          <MenuItem value={"electromagneticTheory"}>
            Electromagnetic Theory
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLSixthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"digitalCommunications"}>
            Digital Communications
          </MenuItem>
          <MenuItem value={"digitalCommunicationsLab"}>
            Digital Communications (Lab)
          </MenuItem>
          <MenuItem value={"antennasAndWavePropagation"}>
            Antennas and Wave Propagation
          </MenuItem>
          <MenuItem value={"antennasAndWavePropagationLab"}>
            Antennas and Wave Propagation (Lab)
          </MenuItem>
          <MenuItem value={"digitalSignalProcessing"}>
            Digital Signal Processing
          </MenuItem>
          <MenuItem value={"digitalSignalProcessingLab"}>
            Digital Signal Processing (Lab)
          </MenuItem>
          <MenuItem value={"databaseManagementSystems"}>
            Database Management Systems
          </MenuItem>
          <MenuItem value={"databaseManagementSystemsLab"}>
            Database Management Systems (Lab)
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLSeventhSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"multimediaSystems"}>Multimedia Systems</MenuItem>
          <MenuItem value={"multimediaSystemsLab"}>
            Multimedia Systems (Lab)
          </MenuItem>
          <MenuItem value={"mobileAndWirelessCommunications"}>
            Mobile and Wireless Communications
          </MenuItem>
          <MenuItem value={"mobileAndWirelessCommunicationsLab"}>
            Mobile and Wireless Communications (Lab)
          </MenuItem>
          <MenuItem value={"satelliteCommunication"}>
            Satellite Communication
          </MenuItem>
          <MenuItem value={"satelliteCommunicationLab"}>
            Satellite Communication (Lab)
          </MenuItem>
          <MenuItem value={"opticalFiberCommunication"}>
            Optical Fiber Communication
          </MenuItem>
          <MenuItem value={"opticalFiberCommunicationLab"}>
            Optical Fiber Communication (Lab)
          </MenuItem>
          <MenuItem value={"telecomNetworksManagement"}>
            Telecom Networks Management
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function TLEighthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"spreadSpectrumCommunications"}>
            Spread Spectrum Communications
          </MenuItem>
          <MenuItem value={"radarSystems"}>Radar Systems</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
// ! ELectronics
function ELFirstSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"linearCircuitAnalysis"}>
            Linear Circuit Analysis
          </MenuItem>
          <MenuItem value={"linearCircuitAnalysisLab"}>
            Linear Circuit Analysis (Lab)
          </MenuItem>
          <MenuItem value={"computerFundamentalsAndProgramming"}>
            Computer Fundamentals and Programming
          </MenuItem>
          <MenuItem value={"computerFundamentalsAndProgrammingLab"}>
            Computer Fundamentals and Programming (Lab)
          </MenuItem>
          <MenuItem value={"appliedPhysics"}>Applied Physics</MenuItem>
          <MenuItem value={"appliedPhysicsLab"}>Applied Physics (Lab)</MenuItem>
          <MenuItem value={"electronicsWorkbenchLab"}>
            Electronics Workbench (Lab)
          </MenuItem>
          <MenuItem value={"calculusAndAnalyticalGeometry"}>
            Calculus and Analytical Geometry
          </MenuItem>
          <MenuItem value={"functionalEnglish"}>Functional English</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELSecondSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"electronicDevicesAndCircuits"}>
            Electronic Devices and Circuits
          </MenuItem>
          <MenuItem value={"electronicDevicesAndCircuitsLab"}>
            Electronic Devices and Circuits (Lab)
          </MenuItem>
          <MenuItem value={"objectOrientedProgramming"}>
            Object Oriented Programming
          </MenuItem>
          <MenuItem value={"objectOrientedProgrammingLab"}>
            Object Oriented Programming (Lab)
          </MenuItem>
          <MenuItem value={"linearAlgebra"}>Linear Algebra</MenuItem>
          <MenuItem value={"pakistanStudies"}>Pakistan Studies</MenuItem>
          <MenuItem value={"communicationSkills"}>
            Communication Skills
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELThirdSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"electronicCircuitDesign"}>
            Electronic Circuit Design
          </MenuItem>
          <MenuItem value={"electronicCircuitDesignLab"}>
            Electronic Circuit Design (Lab)
          </MenuItem>
          <MenuItem value={"instrumentationAndMeasurements"}>
            Instrumentation and Measurements
          </MenuItem>
          <MenuItem value={"instrumentationAndMeasurementsLab"}>
            Instrumentation and Measurements (Lab)
          </MenuItem>
          <MenuItem value={"digitalLogicDesign"}>Digital Logic Design</MenuItem>
          <MenuItem value={"digitalLogicDesignLab"}>
            Digital Logic Design (Lab)
          </MenuItem>
          <MenuItem value={"computerAidedEngineeringDesignLab"}>
            Computer-Aided Engineering Design (Lab)
          </MenuItem>
          <MenuItem value={"differentialEquations"}>
            Differential Equations
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELFourthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"microprocessorsAndMicrocontrollers"}>
            Microprocessors and Microcontrollers
          </MenuItem>
          <MenuItem value={"microprocessorsAndMicrocontrollersLab"}>
            Microprocessors and Microcontrollers (Lab)
          </MenuItem>
          <MenuItem value={"electricalNetworkAnalysis"}>
            Electrical Network Analysis
          </MenuItem>
          <MenuItem value={"electricalNetworkAnalysisLab"}>
            Electrical Network Analysis (Lab)
          </MenuItem>
          <MenuItem value={"integratedElectronics"}>
            Integrated Electronics
          </MenuItem>
          <MenuItem value={"integratedElectronicsLab"}>
            Integrated Electronics (Lab)
          </MenuItem>
          <MenuItem value={"complexVariablesAndTransforms"}>
            Complex Variables and Transforms
          </MenuItem>
          <MenuItem value={"islamicStudies"}>Islamic Studies</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELFifthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"electricalMachines"}>Electrical Machines</MenuItem>
          <MenuItem value={"electricalMachinesLab"}>
            Electrical Machines (Lab)
          </MenuItem>
          <MenuItem value={"signalsAndSystems"}>Signals and Systems</MenuItem>
          <MenuItem value={"signalsAndSystemsLab"}>
            Signals and Systems (Lab)
          </MenuItem>
          <MenuItem value={"probabilityAndRandomVariables"}>
            Probability and Random Variables
          </MenuItem>
          <MenuItem value={"organizationalBehavior"}>
            Organizational Behavior
          </MenuItem>
          <MenuItem value={"electromagneticFieldTheory"}>
            Electromagnetic Field Theory
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELSixthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"technicalReportWritingAndPresentationSkills"}>
            Technical ReportWriting and Presentation Skills
          </MenuItem>
          <MenuItem value={"digitalSignalProcessing"}>
            Digital Signal Processing
          </MenuItem>
          <MenuItem value={"digitalSignalProcessingLab"}>
            Digital Signal Processing (Lab)
          </MenuItem>
          <MenuItem value={"controlSystems"}>Control Systems</MenuItem>
          <MenuItem value={"controlSystemsLab"}>Control Systems (Lab)</MenuItem>
          <MenuItem value={"analogAndDigitalCommunications"}>
            Analog and Digital Communications
          </MenuItem>
          <MenuItem value={"analogAndDigitalCommunicationsLab"}>
            Analog and Digital Communications (Lab)
          </MenuItem>
          <MenuItem value={"professionalPractice"}>
            Professional Practice
          </MenuItem>
          <MenuItem value={"networkAnalysis"}>Network Analysis</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELSeventhSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"controlSystems"}>Control Systems</MenuItem>
          <MenuItem value={"controlSystemsLab"}>Control Systems (Lab)</MenuItem>
          <MenuItem value={"mobileAndWirelessCommunications"}>
            Mobile and Wireless Communications
          </MenuItem>
          <MenuItem value={"mobileAndWirelessCommunicationsLab"}>
            Mobile and Wireless Communications (Lab)
          </MenuItem>
          <MenuItem value={"embeddedSystemsDesign"}>
            Embedded Systems Design
          </MenuItem>
          <MenuItem value={"computerVisionAndImageProcessing"}>
            Computer Vision and Image Processing
          </MenuItem>
          <MenuItem value={"VLSIDesign"}>VLSI Design</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
function ELEighthSemester({ subjectHandleChange, subject }) {
  return (
    <>
      <FormControl style={{ marginTop: 50, width: "100%" }}>
        <InputLabel id='demo-simple-select-label'>Select Subject</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={subject}
          label='Select Semester'
          onChange={subjectHandleChange}
        >
          <MenuItem value={"robotics"}>Robotics</MenuItem>
          <MenuItem value={"FPGAbasedSystemDesign"}>
            FPGA Based System Design
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
