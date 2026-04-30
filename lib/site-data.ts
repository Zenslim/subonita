export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/board", label: "Leadership" },
   { label: "News", href: "/news-events" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export const registration = {
  companyRegistration: "354319/81/82",
  socialWelfareCouncil: "57434",
  pan: "621236367",
  website: "www.subonitafoundation.org",
};

export const contacts = {
  phone: "+977-970542-7958",
  email: "subonitahealthfoundation@gmail.com",
};

export const donation = {
  accountNumber: "01701017503846",
  accountName: "Subonita Health Foundation Nepal",
  swiftCode: "NARBNPKA",
  bankAddress: "Nabil Bank Limited, Teendhara, Kathmandu",
};

export const originStory = `Subonita Health Foundation Nepal is a profit non-distributing company founded by Dr. Subodh Mallik and his wife, Anita Mallik, based in the USA, with the mission to improve health care globally. Subonita Health Foundation Nepal works closely with the Subonita Foundation USA in terms of technical assistance and funds. The foundation’s dream of nationwide comprehensive trauma hub, is inspired by a life-changing event they faced at the beginning of 2020 in New Zealand during a head-on collision. They experienced a profound metaphysical journey and encountered the best prompt trauma care that was crucial to their recovery. This experience led to a visionary idea of primary action in the critical moments of road traffic accidents, an idea that could save countless lives. Driven by their newfound inspiration and a deep desire to make a positive impact in the health care of Nepal, Subonita Foundation was born.`;

export const overview = `Dr. Subodh Mallik and Anita Mallik embarked on a mission to ensure that every trauma victim can access the same immediate and life-saving level of care. The foundation stands as a beacon of hope, aiming to innovate and revolutionize trauma care through its trauma hubs initiative. With strategic locations along major highways in Nepal, these trauma hubs will be equipped with facilities and staffed with highly trained healthcare professionals, providing timely and efficient care to trauma victims.`;

export const introduction = `Subonita Foundation is not just an organization but a symbol of inspiration, hope, and the power to turn adversity into meaningful change. Their commitment to dreaming beyond possibilities fuels their determination to create a world where trauma victims receive the care they need, fostering a safer and healthier future for all.`;

export const purpose = `The Trauma Hub Project aims to help establish a network of trauma care hubs along Nepal’s major highways to provide immediate and life-saving care to trauma victims. This initiative addresses the high mortality and morbidity rates associated with road traffic accidents by ensuring efficient and timely responses to trauma incidents. Services at the hubs will be provided free of charge for emergency trauma care, prioritizing accessibility and equity for all.`;

export const background = `Nepal’s road infrastructure, including major highways such as the East-West Highway, Prithvi Highway, and others, experiences high rates of road traffic accidents. Over the past decade, road accidents have claimed approximately 24,095 lives and left more than 50,000 individuals with severe injuries. In the fiscal year 2080/81 alone, 2,369 people lost their lives due to road accidents, equating to a daily death toll of seven. Despite the government’s policy declaration in FY 2077/78 to expand trauma services along major highways, implementation has lagged due to inadequate planning, lack of resources, and fragmented budget allocation.`;

export const vision = `To create a trauma care network that ensures no life is lost due to delays in emergency medical care along Nepal’s highways.`;

export const mission = `To support and establish strategically located trauma hubs at various locations for efficient travel time along major highways, offering immediate trauma care services.`;

export const interventions = [
  {
    title: "Pilot Trauma Hubs",
    body: "Support establish pilot trauma hubs in high-priority locations, utilizing existing healthcare facilities and human resource. Equip these hubs with essential trauma care equipment, including ventilators, monitors, spinal boards, and emergency drugs.",
  },
  {
    title: "Collaboration with Stakeholders",
    body: "Engage with the Ministry of Health, Provincial and Local governments, and other stakeholders for coordinated efforts. Partner with ambulance services and first responders for seamless patient transfer.",
  },
  {
    title: "Capacity Building",
    body: "Train healthcare workers, including doctors, nurses, and paramedics, in trauma care protocols. Develop and distribute trauma response kits for first responders.",
  },
  {
    title: "Awareness Campaigns",
    body: "Launch public awareness campaigns on road safety and the availability of trauma hubs. Engage communities in accident-prone areas for quicker reporting and response.",
  },
];

export const conclusion = `The Subonita Health Foundation Nepal’s Trauma Hub Project seeks to address a critical gap in emergency trauma care along Nepal’s highways. By categorizing interventions into short, medium, and long-term goals, the initiative ensures a structured and sustainable approach to reducing road accident fatalities and injuries. With strategic planning, stakeholder collaboration, and phased implementation, this project aims to transform trauma care accessibility and save countless lives.`;

export const currentProject = `Trauma Hub Project in Nepal (May 2026 - May 2031) is funded by Subonita Foundation USA and implemented by BNMT Nepal. The project is oversight and coordinated by Subonita Health Foundation Nepal. Currently two Trauma Hubs in Nawalparasi East and Rautahat districts is being started with cooperation and coordination with local municipalities in their respective City Hospitals.`;

export const relationshipText = {
  usa: "Subonita Foundation USA generates funds for the project activities in Nepal and USA.",
  nepal: "Subonita Health Foundation Nepal (profit non-distributing company) is a sister organization of Subonita Foundation USA. This company coordinates and oversights all the health related projects in Nepal.",
};

export const externalLinks = {
  drSubodhProfile: "https://globalwhoiswho.com/philanthropy-is-in-my-heart-dr-subodh-k-mallik/",
};

export type BoardMember = {
  slug: string;
  name: string;
  honorific?: string;
  role: string;
  organization: string;
  image: string;
  summary: string;
  detail: string[];
  pressLink?: string;
};

export const boardMembers: BoardMember[] = [
  {
    slug: "anit-mallik",
    name: "Anit Mallik",
    honorific: "Ms.",
    role: "President",
    organization: "Subonita Foundation USA",
    image: "/board/anit-mallik.svg",
    summary: "Listed in the presentation as President of Subonita Foundation USA.",
    detail: [
      "The presentation identifies Ms. Anit Mallik as President of Subonita Foundation USA.",
      "The USA foundation is described as generating funds for project activities in Nepal and the USA.",
      "The origin of the trauma hub vision is tied to the experience shared by Dr. Subodh Mallik and Anita Mallik in New Zealand in early 2020.",
    ],
  },
  {
    slug: "subodh-kumar-mallik",
    name: "Subodh Kumar Mallik",
    honorific: "Dr.",
    role: "Vice President",
    organization: "Subonita Foundation USA",
    image: "/board/subodh-kumar-mallik.svg",
    summary: "Listed in the presentation as Vice President of Subonita Foundation USA and one of the founders behind the trauma hub vision.",
    detail: [
      "The presentation identifies Dr. Subodh Kumar Mallik as Vice President of Subonita Foundation USA.",
      "It also states that Subonita Health Foundation Nepal was founded by Dr. Subodh Mallik and his wife, Anita Mallik, based in the USA, with a mission to improve health care globally.",
      "The trauma hub vision is described as being inspired by the life-changing head-on collision they faced in New Zealand at the beginning of 2020 and by the prompt trauma care that was crucial to their recovery.",
    ],
    pressLink: externalLinks.drSubodhProfile,
  },
  {
    slug: "heem-sunder-shakya",
    name: "Heem Sunder Shakya",
    honorific: "Mr.",
    role: "President",
    organization: "Subonita Health Foundation Nepal",
    image: "/board/heem-sunder-shakya.svg",
    summary: "Listed in the presentation as President of Subonita Health Foundation Nepal.",
    detail: [
      "The presentation identifies Mr. Heem Sunder Shakya as President of Subonita Health Foundation Nepal.",
      "Subonita Health Foundation Nepal is presented as a sister organization of Subonita Foundation USA.",
      "The Nepal entity is described as coordinating and overseeing health related projects in Nepal.",
    ],
  },
  {
    slug: "mritunjaya-shrestha",
    name: "Mritunjaya Shrestha",
    honorific: "Dr.",
    role: "Member",
    organization: "Subonita Health Foundation Nepal",
    image: "/board/mritunjaya-shrestha.svg",
    summary: "Listed in the presentation as a board member of Subonita Health Foundation Nepal.",
    detail: [
      "The presentation identifies Dr. Mritunjaya Shrestha as a member of the Nepal board.",
      "The board page preserves the organizational listing exactly as presented in the deck.",
    ],
  },
  {
    slug: "bhupendra-b-shakya",
    name: "Bhupendra B. Shakya",
    honorific: "Mr.",
    role: "Member",
    organization: "Subonita Health Foundation Nepal",
    image: "/board/bhupendra-b-shakya.svg",
    summary: "Listed in the presentation as a board member of Subonita Health Foundation Nepal.",
    detail: [
      "The presentation identifies Mr. Bhupendra B. Shakya as a member of the Nepal board.",
      "This site keeps the board role and entity exactly aligned with the deck content.",
    ],
  },
  {
    slug: "deependra-b-pradhan",
    name: "Deependra B. Pradhan",
    honorific: "Mr.",
    role: "Member",
    organization: "Subonita Health Foundation Nepal",
    image: "/board/deependra-b-pradhan.svg",
    summary: "Listed in the presentation as a board member of Subonita Health Foundation Nepal.",
    detail: [
      "The presentation identifies Mr. Deependra B. Pradhan as a member of the Nepal board.",
      "The leadership section is structured as an institutional directory rather than a promotional team carousel.",
    ],
  },
  {
    slug: "rambalak-shah",
    name: "RamBalak Shah",
    honorific: "Mr.",
    role: "Treasurer",
    organization: "Subonita Health Foundation Nepal",
    image: "/board/rambalak-shah.svg",
    summary: "Listed in the presentation as Treasurer of Subonita Health Foundation Nepal.",
    detail: [
      "The presentation identifies Mr. RamBalak Shah as Treasurer of the Nepal board.",
      "His listing is preserved in the dedicated leadership directory and detail page.",
    ],
  },
];

export const usaBoard = boardMembers.filter((member) => member.organization === "Subonita Foundation USA");
export const nepalBoard = boardMembers.filter((member) => member.organization === "Subonita Health Foundation Nepal");
