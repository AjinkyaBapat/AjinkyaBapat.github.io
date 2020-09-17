
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ajinkya Bapat",
  title: "Hello, I'm Ajinkya",
  subTitle: emoji("A passionate DevOps Engineer 🚀 having an experience in architecting, automating and optimizing mission critical deployments over large infrastructure."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/AjinkyaBapat",
  linkedin: "https://www.linkedin.com/in/ajinkyabapat/",
  gmail: "ajinkyabapat12@gmail.com",
  twitter: "https://twitter.com/ajinkyab12",
  facebook: "https://www.facebook.com/saad.pasta7",
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
      companylogo: require("./assets/images/facebookLogo.png"),
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
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Apr 2017 – Apr 2018",
      desc: "Handled IaaS offerings to Client through Private Cloud."
    },
    {
      role: "DevOps Engineer",  
      company: "HP/HPE",
      companylogo: require("./assets/images/airbnbLogo.png"),
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

const bigProjects = {
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

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "MongoDB Certification",
      subtitle: "A certified MongoDB Database Administrator Associate.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Cassandra Certification",
      subtitle: "Certified Apache Cassandra Administrator Associate.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "Alibaba Cloud Certifications",
      subtitle: "Certified ACA - Cloud, BigData, Security & Cloud Native.",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    },

    {
      title: "Rancher Certification",
      subtitle: "Certified Rancher Operator.",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }, 

    {
      title: "Aviatrix Certification",
      subtitle: "Aviatrix Certified Multi-Cloud Networking Associate.",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }

    {
      title: "Scrum Certification",
      subtitle: "Certified Scrum Foundation Professional.",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

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

/* const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
}; */

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

/* const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
}; */
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
