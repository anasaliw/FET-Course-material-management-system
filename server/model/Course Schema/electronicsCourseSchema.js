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

const ELS1Subjects = mongoose.Schema(
  {
    linearCircuitAnalysis: SubjectDescription,
    linearCircuitAnalysisLab: SubjectDescription,
    computerFundamentalsAndProgramming: SubjectDescription,
    computerFundamentalsAndProgrammingLab: SubjectDescription,
    appliedPhysics: SubjectDescription,
    appliedPhysicsLab: SubjectDescription,
    electronicsWorkbenchLab: SubjectDescription,
    calculusAndAnalyticalGeometry: SubjectDescription,
    functionalEnglish: SubjectDescription,
  },
  { timestamps: true }
);

// Schema of IT
const ELS2Subjects = mongoose.Schema(
  {
    electronicDevicesAndCircuits: SubjectDescription,
    electronicDevicesAndCircuitsLab: SubjectDescription,
    objectOrientedProgramming: SubjectDescription,
    objectOrientedProgrammingLab: SubjectDescription,
    linearAlgebra: SubjectDescription,
    pakistanStudies: SubjectDescription,
    communicationSkills: SubjectDescription,
  },
  { timestamps: true }
);
const ELS3Subjects = mongoose.Schema(
  {
    electronicCircuitDesign: SubjectDescription,
    electronicCircuitDesignLab: SubjectDescription,
    instrumentationAndMeasurements: SubjectDescription,
    instrumentationAndMeasurementsLab: SubjectDescription,
    digitalLogicDesign: SubjectDescription,
    digitalLogicDesignLab: SubjectDescription,
    computerAidedEngineeringDesignLab: SubjectDescription,
    differentialEquations: SubjectDescription,
  },
  { timestamps: true }
);
const ELS4Subjects = mongoose.Schema(
  {
    microprocessorsAndMicrocontrollers: SubjectDescription,
    microprocessorsAndMicrocontrollersLab: SubjectDescription,
    electricalNetworkAnalysis: SubjectDescription,
    electricalNetworkAnalysisLab: SubjectDescription,
    integratedElectronics: SubjectDescription,
    integratedElectronicsLab: SubjectDescription,
    complexVariablesAndTransforms: SubjectDescription,
    islamicStudies: SubjectDescription,
  },
  { timestamps: true }
);
const ELS5Subjects = mongoose.Schema(
  {
    electricalMachines: SubjectDescription,
    electricalMachinesLab: SubjectDescription,
    signalsAndSystems: SubjectDescription,
    signalsAndSystemsLab: SubjectDescription,
    probabilityAndRandomVariables: SubjectDescription,
    organizationalBehavior: SubjectDescription,
    electromagneticFieldTheory: SubjectDescription,
  },
  { timestamps: true }
);
const ELS6Subjects = mongoose.Schema(
  {
    technicalReportWritingAndPresentationSkills: SubjectDescription,
    digitalSignalProcessing: SubjectDescription,
    digitalSignalProcessingLab: SubjectDescription,
    controlSystems: SubjectDescription,
    controlSystemsLab: SubjectDescription,
    analogAndDigitalCommunications: SubjectDescription,
    analogAndDigitalCommunicationsLab: SubjectDescription,
    professionalPractice: SubjectDescription,
    networkAnalysis: SubjectDescription,
  },
  { timestamps: true }
);
const ELS7Subjects = mongoose.Schema(
  {
    controlSystems: SubjectDescription,
    controlSystemsLab: SubjectDescription,
    mobileAndWirelessCommunications: SubjectDescription,
    mobileAndWirelessCommunicationsLab: SubjectDescription,
    embeddedSystemsDesign: SubjectDescription,
    computerVisionAndImageProcessing: SubjectDescription,
    VLSIDesign: SubjectDescription,
  },
  { timestamps: true }
);
const ELS8Subjects = mongoose.Schema(
  {
    robotics: SubjectDescription,
    FPGAbasedSystemDesign: SubjectDescription,
  },
  { timestamps: true }
);
const ITCourse_Schema = mongoose.Schema(
  {
    ELS1: [ELS1Subjects],
    ELS2: [ELS2Subjects],
    ELS3: [ELS3Subjects],
    ELS4: [ELS4Subjects],
    ELS5: [ELS5Subjects],
    ELS6: [ELS6Subjects],
    ELS7: [ELS7Subjects],
    ELS8: [ELS8Subjects],
  },
  { timestamps: true }
);

const ELCourseSchema = mongoose.model("Electronics", ITCourse_Schema);

export default ELCourseSchema;
