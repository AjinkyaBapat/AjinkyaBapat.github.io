
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ajinkya Bapat",
  title: "Hello, I'm Ajinkya",
  subTitle: emoji("A passionate DevOps Engineer 🚀 experienced in architecting, automating and optimizing mission critical deployments over large infrastructure."),
  resumeLink: "https://iamajinkya.me/techwisdom/"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/AjinkyaBapat",
  linkedin: "https://www.linkedin.com/in/ajinkyabapat/",
  gmail: "ajinkyabapat12@gmail.com",
  twitter: "https://twitter.com/ajinkyab12",
  //facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/6202024/ajinkya-bapat"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I do DevOps, that's it!",
  skills: [
    emoji("⚡ Actively manage, improve, and monitor cloud infrastructure on AWS, GCP & AZURE"),
    emoji("⚡ Leveraging configuration management, CI/CD, IaC, and other DevOps processes"),
    emoji("⚡ Orchestrating Docker containers using Kubernetes & Swarm for Microservices.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "ci/cd",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fab fa-adn"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },    
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "scripting",
      fontAwesomeClassname: "fas fa-terminal"
    },
/*     {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
 */  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Databases",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming/Scripting",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",  
      company: "Ignite",
      companylogo: require("./assets/images/ignitelogo.png"),
      date: "Apr 2018",
      desc: "Handling end to end DevOps Responsibilities.",
      descBullets: [
        "Arrange, build, deploy and sustain virtual infrastructure environments",
        "Cloud Development, Installation & Management."
      ]
    },
    {
      role: "DevOps Engineer",   
      company: "DXC",
      companylogo: require("./assets/images/dxclogo.png"),
      date: "Apr 2017 – Apr 2018",
      desc: "Handled IaaS offerings to Client through Private Cloud."
    },
    {
      role: "DevOps Engineer",  
      company: "HP/HPE",
      companylogo: require("./assets/images/hplogo.jpg"),
      date: "Nov 2015 – Apr 2017",
      desc: "Handled Enterprise Application Deployments, IaC, CI/CD on Private Cloud."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "AjinkyaBapat", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

/*const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};
*/

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Azure Certification",
      subtitle: "Microsoft Azure Administrator Associate.",
      image: require("./assets/images/azbadge.png"),
      footerLink: [
        { name: "Certificate", url: "" },
        { name: "Verify Badge", url: "https://www.youracclaim.com/badges/79f868a7-d52f-460d-9927-aa6dd1b31b0b/public_url" },
        { name: "Exam Page", url: "https://docs.microsoft.com/en-us/learn/certifications/exams/az-104" }
      ]
    }, 
    {
      title: "Microsoft Certified Trainer",
      subtitle: "Microsoft Certified Trainer.",
      image: require("./assets/images/mctbadge.png"),
      footerLink: [
        { name: "Certificate", url: "" },
        { name: "Verify Badge", url: "https://www.youracclaim.com/badges/1c180dd5-6f96-4f6d-b507-6900a600d1ff/public_url" },
        { name: "Program Page", url: "https://docs.microsoft.com/en-us/learn/certifications/mct-certification"}
      ]
    },
    {
      title: "Terraform Certification",
      subtitle: "Hashicorp Certified Terraform Associate.",
      image: require("./assets/images/tfbadge.png"),
      footerLink: [
        { name: "Certificate", url: "" },
        { name: "Verify Badge", url: "https://www.youracclaim.com/badges/7f9c2d3e-d396-467d-861f-8e469d928056/public_url" },
        { name: "Exam Page", url: "https://www.hashicorp.com/certification/terraform-associate" }
      ]
    },
    {
      title: "MongoDB Certification",
      subtitle: "Certified MongoDB Database Administrator Associate.",
      image: require("./assets/images/mongodbbadge.png"),
      footerLink: [
        { name: "Certificate", url: "https://university.mongodb.com/certification/display_certificate?license1=399&license2=908&license3=863" },
        { name: "Verify Badge", url: "https://university.mongodb.com/certified_professional_finder/certified_professionals/940824" },
        { name: "Exam Page", url: "https://university.mongodb.com/certification/dba/about" }
      ]
    },
    {
      title: "Cassandra Certification",
      subtitle: "Certified Apache Cassandra Administrator Associate.",
      image: require("./assets/images/cassandrabadge.png"),
      footerLink: [
        { name: "Certificate", url: "" },
        { name: "Verify Badge", url: "https://certification.mettl.com/datastax/applicant/verify-certification-with-qr?email=ajinkyabapat12%40gmail.com&assessment=Cassandra%20Administrator%20Exam%20v1&date=Sep%2015,%202020" },
        { name: "Exam Page", url: "https://www.datastax.com/dev/certifications" }   
      ]
    },
    {
      title: "Alibaba Certifications",
      subtitle: "4x Certified ACA - Cloud, BigData, Security & Cloud Native.",
      image: require("./assets/images/acabadge.png"),
      footerLink: [
        { name: "ACA-Cloud", url: "https://xuecdn2.aliyunedu.net/img_edcebd8ff1e53e90d7263527cd18c8d6.png" },
        { name: "ACA-Cloud-Native", url: "https://xuecdn2.aliyunedu.net/img_5595b387cfd3eb7b69753f1ee345b737.png" },
        { name: "ACA-Security", url: "https://xuecdn2.aliyunedu.net/img_b682b1ede9b8c6ffbf0186eb4fb010f0.png" },
        { name: "ACA-BigData", url: "https://xuecdn2.aliyunedu.net/img_b9781aff03d5c771d89b6d90fc1771a2.png" }
      ]
    },
    {
      title: "Aviatrix Certification",
      subtitle: "Aviatrix Certified Multi-Cloud Networking Associate.",
      image: require("./assets/images/acebadge.png"),
      footerLink: [
        { name: "Certificate", url: "" },
        { name: "Verify Badge", url: "https://www.youracclaim.com/badges/275a1101-6131-4126-8051-ba5999acec7c/public_url"},
        { name: "Exam Page", url: "https://aviatrix.com/ace/"}
      ]
    },
    {
      title: "Scrum Certification",
      subtitle: "Scrum Foundation Certified Professional.",
      image: require("./assets/images/scrumbadge.png"),
      footerLink: [
        { name: "Certificate", url: "" },
        { name: "Verify Badge", url: "https://www.youracclaim.com/badges/a793045a-410d-44ab-a440-d721e09fc2fb/public_url"},
        { name: "Exam Page", url: "https://certiprof.com/pages/scrum-foundation-professional-certificate-sfpc-en-sp"}
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://iamajinkya.me/techwisdom/mongodbcert/",
      title: "Passing MongoDB Certified DBA Exam (Part 1)",
      description: "Everything you need to know about the MongoDB Certified DBA (C100DBA) Exam!"
    },
    {
      url: "https://iamajinkya.me/techwisdom/aviatrix-ace-certification/",
      title: "Passing Aviatrix Certified Engineer Exam",
      description: "The Aviatrix Certified Engineer (ACE) Program is the first multi-cloud networking and security certification available to technical professionals and cloud practitioners."
    },
    {
      url: "https://iamajinkya.me/techwisdom/",
      title: "Link to my Blog",
      description: "Head over to my blog site to read more articles on DevOps."
    }
  ]
};

// Talks Sections
/*
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};
*/

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project, Work opportunity or just want to say hi? My Inbox is open for all.",
  //number: "+92-3243454077",
  email_address: "ajinkyabapat12@gmail.com"
};

//Twitter Section
/*
const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
*/

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, blogSection, contactInfo };
