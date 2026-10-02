export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Approach {
  code: string;
  title: string;
  description: string;
}

export interface ConcernItem {
  id: string;
  text: string;
}

export const servicesData: Service[] = [
  {
    id: "anxiety",
    number: "01",
    title: "Anxiety Therapy in Santa Monica",
    description:
      "Anxiety therapy can help with constant worry, overthinking, stress, and difficulty sleeping. Dr. Maya Reynolds offers practical, evidence-based support to help adults feel more grounded and in control.",
    tags: ["Constant Worry", "Panic", "Overthinking", "Difficulty Sleeping"],
  },
  {
    id: "trauma",
    number: "02",
    title: "Trauma Therapy in Santa Monica",
    description:
      "Trauma therapy provides a safe, supportive space to work through difficult experiences at your own pace. Dr. Maya Reynolds uses CBT, EMDR, mindfulness, and body-oriented techniques in her approach.",
    tags: ["EMDR Therapy", "Past Experiences", "Safe Processing", "Nervous System Safe"],
  },
  {
    id: "burnout",
    number: "03",
    title: "Burnout Therapy in Santa Monica",
    description:
      "Burnout therapy can support adults dealing with professional stress, perfectionism, and the pressure to keep pushing. Dr. Maya Reynolds helps clients slow down, reconnect, and develop more sustainable ways of living and working.",
    tags: ["Perfectionism", "Workplace Stress", "High Internal Pressure", "Sustainable Living"],
  },
];

export const approachesData: Approach[] = [
  {
    code: "CBT",
    title: "Cognitive Behavioral Therapy",
    description:
      "Focuses on identifying relationships between thoughts, feelings, and behavioral patterns, creating practical strategies to navigate worry and stressful thinking cycles.",
  },
  {
    code: "EMDR",
    title: "EMDR Therapy",
    description:
      "A structured, evidence-based modality that supports processing difficult experiences and traumatic memories at your own pace safely.",
  },
  {
    code: "MBP",
    title: "Mindfulness-Based Practices",
    description:
      "Develops present-moment awareness, helping you step back from automatic overthinking cycles and regain emotional equilibrium.",
  },
  {
    code: "BOT",
    title: "Body-Oriented Techniques",
    description:
      "Focuses on calming the physical nervous system, releasing tension, and restoring bodily ease through somatic grounding exercises.",
  },
];

export const concernsData: ConcernItem[] = [
  { id: "1", text: "Anxiety and chronic worry" },
  { id: "2", text: "Panic and sudden overwhelm" },
  { id: "3", text: "Trauma and past experiences" },
  { id: "4", text: "Burnout and work exhaustion" },
  { id: "5", text: "Perfectionism and self-criticism" },
  { id: "6", text: "High internal pressure to perform" },
  { id: "7", text: "Overthinking and racing thoughts" },
  { id: "8", text: "Difficulty sleeping and resting" },
  { id: "9", text: "Emotional overwhelm" },
  { id: "10", text: "Difficulty feeling grounded or safe" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Formats", href: "#formats" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];
