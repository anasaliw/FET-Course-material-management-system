import mongoose from "mongoose";
const { Schema } = mongoose;

const WeekDescription = mongoose.Schema(
  {
    teacherId: Schema.Types.ObjectId,
    teacherName: String,
    teacherFiles: String,
  },
  { timestamps: true }
);

const SubjectDescription = mongoose.Schema(
  {
    courseContent: String,
    courseDescription: String,
    week1: String,
    week2: String,
    week3: String,
    week4: String,
    week5: String,
    week6: String,
    week7: String,
    week8: String,
    week9: String,
    week10: String,
  },
  { timestamps: true }
);
// week1: [WeekDescription],
// week2: [WeekDescription],
// week3: [WeekDescription],
// week4: [WeekDescription],
// week5: [WeekDescription],
// week6: [WeekDescription],
// week7: [WeekDescription],
// week8: [WeekDescription],
// week9: [WeekDescription],
// week10: [WeekDescription],

const SWS1Subjects = mongoose.Schema(
  {
    programmingFundamentals: SubjectDescription,
    programmingFundamentalsLab: SubjectDescription,
    informationAndCommunicationTechnologies: SubjectDescription,
    informationAndCommunicationTechnologiesLab: SubjectDescription,
    basicElectronics: SubjectDescription,
    basicElectronicsLab: SubjectDescription,
    calculusAndAnalyticalGeometry: SubjectDescription,
    islamicStudies: SubjectDescription,
    englishCompositionAndComprehension: SubjectDescription,
  },
  { timestamps: true }
);

// Schema of IT
const SWS2Subjects = mongoose.Schema(
  {
    objectOrientedProgramming: SubjectDescription,
    objectOrientedProgrammingLab: SubjectDescription,
    digitalLogicDesign: SubjectDescription,
    digitalLogicDesignLab: SubjectDescription,
    probabilityAndStatistics: SubjectDescription,
    discreteStructures: SubjectDescription,
    principlesOfManagement: SubjectDescription,
    communicationSkills: SubjectDescription,
  },
  { timestamps: true }
);
const SWS3Subjects = mongoose.Schema(
  {
    dataStructuresAndAlgorithms: SubjectDescription,
    dataStructuresAndAlgorithmsLab: SubjectDescription,
    microprocessorAndAssemblyLanguage: SubjectDescription,
    microprocessorAndAssemblyLanguageLab: SubjectDescription,
    englishTechnicalAndBusinessWriting: SubjectDescription,
    pakistanStudies: SubjectDescription,
    linearAlgebra: SubjectDescription,
    entrepreneurship: SubjectDescription,
  },
  { timestamps: true }
);
const SWS4Subjects = mongoose.Schema(
  {
    databaseSystems: SubjectDescription,
    databaseSystemsLab: SubjectDescription,
    computerCommunicationAndNetworks: SubjectDescription,
    computerCommunicationAndNetworksLab: SubjectDescription,
    pythonProgramming: SubjectDescription,
    pythonProgrammingLab: SubjectDescription,
    humanResourceManagement: SubjectDescription,
    professionalPractices: SubjectDescription,
    softwareEngineering: SubjectDescription,
  },
  { timestamps: true }
);
const SWS5Subjects = mongoose.Schema(
  {
    webSystemsOrTechnologies: SubjectDescription,
    webSystemsOrTechnologiesLab: SubjectDescription,
    operatingSystems: SubjectDescription,
    operatingSystemsLab: SubjectDescription,
    computerGraphics: SubjectDescription,
    computerGraphicsLab: SubjectDescription,
    objectOrientedSoftwareEngineering: SubjectDescription,
    objectOrientedSoftwareEngineeringLab: SubjectDescription,
    DatabaseAdministrationOrManagement: SubjectDescription,
    DatabaseAdministrationOrManagementLab: SubjectDescription,
    softwareRequirementAndSpecifications: SubjectDescription,
  },
  { timestamps: true }
);
const SWS6Subjects = mongoose.Schema(
  {
    mobileApplicationDevelopment: SubjectDescription,
    mobileApplicationDevelopmentLab: SubjectDescription,
    softwareProjectManagement: SubjectDescription,
    softwareProjectManagementLab: SubjectDescription,
    multimediaSystemsAndDesign: SubjectDescription,
    multimediaSystemsAndDesignLab: SubjectDescription,
    dataScience: SubjectDescription,
    secureSoftwareDevelopment: SubjectDescription,
    softwareDesignAndArchitecture: SubjectDescription,
  },
  { timestamps: true }
);
const SWS7Subjects = mongoose.Schema(
  {
    cloudComputing: SubjectDescription,
    cloudComputingLab: SubjectDescription,
    humanComputerInteraction: SubjectDescription,
    humanComputerInteractionLab: SubjectDescription,
    serviceOrientedArchitecture: SubjectDescription,
    serviceOrientedArchitectureLab: SubjectDescription,
    formalMethods: SubjectDescription,
  },
  { timestamps: true }
);
const SWS8Subjects = mongoose.Schema(
  {
    softwareVerificationAndValidation: SubjectDescription,
    softwareVerificationAndValidationLab: SubjectDescription,
    pervasiveComputing: SubjectDescription,
    pervasiveComputingLab: SubjectDescription,
    softwareEngineeringEconomics: SubjectDescription,
  },
  { timestamps: true }
);
const ITCourse_Schema = mongoose.Schema(
  {
    SWS1: [SWS1Subjects],
    SWS2: [SWS2Subjects],
    SWS3: [SWS3Subjects],
    SWS4: [SWS4Subjects],
    SWS5: [SWS5Subjects],
    SWS6: [SWS6Subjects],
    SWS7: [SWS7Subjects],
    SWS8: [SWS8Subjects],
  },
  { timestamps: true }
);

const SWCourseSchema = mongoose.model("Software", ITCourse_Schema);

export default SWCourseSchema;
