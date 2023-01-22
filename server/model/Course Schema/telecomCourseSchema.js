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

const TLS1Subjects = mongoose.Schema(
  {
    appliedPhysics: SubjectDescription,
    appliedPhysicsLab: SubjectDescription,
    electricWorkshop: SubjectDescription,
    electricWorkshopLab: SubjectDescription,
    circuitAnalysis: SubjectDescription,
    circuitAnalysisLab: SubjectDescription,
    functionalEnglish: SubjectDescription,
    introductionToComputing: SubjectDescription,
    calculusAndAnalyticalGeometry: SubjectDescription,
  },
  { timestamps: true }
);

// Schema of IT
const TLS2Subjects = mongoose.Schema(
  {
    objectOrientedProgramming: SubjectDescription,
    objectOrientedProgrammingLab: SubjectDescription,
    electronicDevicesAndCircuits: SubjectDescription,
    electronicDevicesAndCircuitsLab: SubjectDescription,
    computerAidedEngineeringDesign: SubjectDescription,
    computerAidedEngineeringDesignLab: SubjectDescription,
    probabilityAndStatistics: SubjectDescription,
    islamicStudies: SubjectDescription,
    differentialEquation: SubjectDescription,
  },
  { timestamps: true }
);
const TLS3Subjects = mongoose.Schema(
  {
    electricalNetworkAnalysis: SubjectDescription,
    electricalNetworkAnalysisLab: SubjectDescription,
    dataStructureAndAlgorithms: SubjectDescription,
    dataStructureAndAlgorithmsLab: SubjectDescription,
    engineeringEconomics: SubjectDescription,
    pakistanStudies: SubjectDescription,
    linearAlgebra: SubjectDescription,
    engineeringEconomics: SubjectDescription,
  },
  { timestamps: true }
);
const TLS4Subjects = mongoose.Schema(
  {
    amplifiersAndOscillators: SubjectDescription,
    amplifiersAndOscillatorsLab: SubjectDescription,
    digitalLogicDesign: SubjectDescription,
    digitalLogicDesignLab: SubjectDescription,
    signalAndSystems: SubjectDescription,
    technicalReportWritingAndPresentation: SubjectDescription,
    humanResourceManagement: SubjectDescription,
    probabilityMethodsInEngineering: SubjectDescription,
  },
  { timestamps: true }
);
const TLS5Subjects = mongoose.Schema(
  {
    computerCommunicationNetworks: SubjectDescription,
    computerCommunicationNetworksLab: SubjectDescription,
    microprocessorsAndMicrocontrollers: SubjectDescription,
    microprocessorsAndMicrocontrollersLab: SubjectDescription,
    controlSystems: SubjectDescription,
    controlSystemsLab: SubjectDescription,
    communicationSystems: SubjectDescription,
    communicationSystemsLab: SubjectDescription,
    electromagneticTheory: SubjectDescription,
  },
  { timestamps: true }
);
const TLS6Subjects = mongoose.Schema(
  {
    digitalCommunications: SubjectDescription,
    digitalCommunicationsLab: SubjectDescription,
    antennasAndWavePropagation: SubjectDescription,
    antennasAndWavePropagationLab: SubjectDescription,
    digitalSignalProcessing: SubjectDescription,
    digitalSignalProcessingLab: SubjectDescription,
    databaseManagementSystems: SubjectDescription,
    databaseManagementSystemsLab: SubjectDescription,
  },
  { timestamps: true }
);
const TLS7Subjects = mongoose.Schema(
  {
    multimediaSystems: SubjectDescription,
    multimediaSystemsLab: SubjectDescription,
    mobileAndWirelessCommunications: SubjectDescription,
    mobileAndWirelessCommunicationsLab: SubjectDescription,
    satelliteCommunication: SubjectDescription,
    satelliteCommunicationLab: SubjectDescription,
    opticalFiberCommunication: SubjectDescription,
    opticalFiberCommunicationLab: SubjectDescription,
    telecomNetworksManagement: SubjectDescription,
  },
  { timestamps: true }
);
const TLS8Subjects = mongoose.Schema(
  {
    spreadSpectrumCommunications: SubjectDescription,
    radarSystems: SubjectDescription,
  },
  { timestamps: true }
);
const ITCourse_Schema = mongoose.Schema(
  {
    TLS1: [TLS1Subjects],
    TLS2: [TLS2Subjects],
    TLS3: [TLS3Subjects],
    TLS4: [TLS4Subjects],
    TLS5: [TLS5Subjects],
    TLS6: [TLS6Subjects],
    TLS7: [TLS7Subjects],
    TLS8: [TLS8Subjects],
  },
  { timestamps: true }
);

const TLCourseSchema = mongoose.model("Telecommunication", ITCourse_Schema);

export default TLCourseSchema;
