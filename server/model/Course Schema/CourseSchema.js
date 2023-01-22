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

const ITS1Subjects = mongoose.Schema(
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
const ITS2Subjects = mongoose.Schema(
  {
    objectOrientedProgramming: SubjectDescription,
    objectOrientedProgrammingLab: SubjectDescription,
    digitalLogicDesign: SubjectDescription,
    digitalLogicDesignLab: SubjectDescription,
    principlesOfManagement: SubjectDescription,
    probabilityAndStatistics: SubjectDescription,
    discreteStructures: SubjectDescription,
    communicationSkills: SubjectDescription,
  },
  { timestamps: true }
);
const ITS3Subjects = mongoose.Schema(
  {
    dataStructuresAndAlgorithms: SubjectDescription,
    dataStructuresAndAlgorithmsLab: SubjectDescription,
    microprocessorAndAssemblyLanguage: SubjectDescription,
    microprocessorAndAssemblyLanguageLab: SubjectDescription,
    pakistanStudies: SubjectDescription,
    linearAlgebra: SubjectDescription,
    englishTechnicalAndBusinessWriting: SubjectDescription,
    softwareEngineering: SubjectDescription,
  },
  { timestamps: true }
);
const ITS4Subjects = mongoose.Schema(
  {
    pythonProgramming: SubjectDescription,
    pythonProgrammingLab: SubjectDescription,
    databaseSystems: SubjectDescription,
    databaseSystemsLab: SubjectDescription,
    objectOrientedAnalysisOrDesign: SubjectDescription,
    objectOrientedAnalysisOrDesignLab: SubjectDescription,
    professionalPractices: SubjectDescription,
    humanResourceManagement: SubjectDescription,
    computerCommunicationAndNetworks: SubjectDescription,
    computerCommunicationAndNetworksLab: SubjectDescription,
  },
  { timestamps: true }
);
const ITS5Subjects = mongoose.Schema(
  {
    computerGraphics: SubjectDescription,
    computerGraphicsLab: SubjectDescription,
    operatingSystems: SubjectDescription,
    operatingSystemsLab: SubjectDescription,
    DatabaseAdministrationOrManagement: SubjectDescription,
    DatabaseAdministrationOrManagementLab: SubjectDescription,
    webSystemsOrTechnologies: SubjectDescription,
    webSystemsOrTechnologiesLab: SubjectDescription,
    informationSystems: SubjectDescription,
    internetArchitectureAndProtocols: SubjectDescription,
  },
  { timestamps: true }
);
const ITS6Subjects = mongoose.Schema(
  {
    mobileApplicationDevelopment: SubjectDescription,
    mobileApplicationDevelopmentLab: SubjectDescription,
    ITProjectManagement: SubjectDescription,
    ITProjectManagementLab: SubjectDescription,
    multimediaSystemsAndDesign: SubjectDescription,
    multimediaSystemsAndDesignLab: SubjectDescription,
    systemAndNetworkAdministration: SubjectDescription,
    systemAndNetworkAdministrationLab: SubjectDescription,
    systemIntegrationAndArchitecture: SubjectDescription,
    dataScience: SubjectDescription,
  },
  { timestamps: true }
);
const ITS7Subjects = mongoose.Schema(
  {
    cloudComputing: SubjectDescription,
    cloudComputingLab: SubjectDescription,
    humanComputerInteraction: SubjectDescription,
    humanComputerInteractionLab: SubjectDescription,
    technologyManagement: SubjectDescription,
    dataAndNetworkSecurity: SubjectDescription,
    computerVision: SubjectDescription,
  },
  { timestamps: true }
);
const ITS8Subjects = mongoose.Schema(
  {
    networkScience: SubjectDescription,
    networkScienceLab: SubjectDescription,
    entrepreneurship: SubjectDescription,
  },
  { timestamps: true }
);
const ITCourse_Schema = mongoose.Schema(
  {
    ITS1: [ITS1Subjects],
    ITS2: [ITS2Subjects],
    ITS3: [ITS3Subjects],
    ITS4: [ITS4Subjects],
    ITS5: [ITS5Subjects],
    ITS6: [ITS6Subjects],
    ITS7: [ITS7Subjects],
    ITS8: [ITS8Subjects],
  },
  { timestamps: true }
);

const ITCourseSchema = mongoose.model("InformationTechnology", ITCourse_Schema);

export default ITCourseSchema;
