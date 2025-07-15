/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manasvi Kirti",
  title: "Hi all, I'm Manasvi",
  subTitle: emoji(
    "I'm a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent systems and solving real-world problems through data-driven solutions."
  ),
  // resumeLink: "https://your-resume-link.com", // Set your resume link or leave it empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Manasvi-kirti",
  linkedin: "https://www.linkedin.com/in/manasvi-kirti-3965b3347/",
  gmail: "manasvikirti12@gmail.com",
  // kaggle: "https://www.kaggle.com/manasvikirti",
  // Instagram, Twitter and other platforms are supported too!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm currently exploring areas like:",
  skills: [
    emoji("⚡ Machine Learning & Deep Learning"),
    emoji("⚡ R & Python for Statistical Computing"),
    emoji("⚡ Computer Vision & Natural Language Processing"),
    emoji("⚡ Data Science & Exploratory Data Analysis"),
    emoji("⚡ Research on Ethical AI and Cultural Misclassification")
  ],

  /* Make sure to include correct Font Awesome classname to view your icon
   https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "R Programming",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amity University",
      logo: require("./assets/images/amity.png"), // Put your school logo here
      duration: "2023-2027"
      // You can add desc and descBullets if needed
    },
    {
      schoolName: "Goethals Public School",
      logo: require("./assets/images/gt.webp"), // Put your school logo here
      duration: "2020-2022"
      // You can add desc and descBullets if needed
    },
    {
      schoolName: "Mount Assisi School",
      logo: require("./assets/images/mt.webp"), // Put your school logo here
      duration: "2015-2020"
      // You can add desc and descBullets if needed
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section (change username in src/containers/skillProgress/skillProgress.js), defaults to false
};

// Work experience section

const workExperiences = {
  display: false, // Set to true to show workExperiences Section
  experience: [
    // Add your work experience here if needed
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get Github key look at README.md */

const openSource = {
  showGithubProfile: "true", // Set true to show Github Contact profile section, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some major projects I've contributed to",
  projects: [
    // Add your projects here or leave empty if display is false
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters and Cool Stuff I have done!",
  achievementsCards: [
    // Add your certifications or achievements here
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love writing about tech and AI concepts.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Add your blogs here if needed
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Section

const talkSection = {
  title: "Talks",
  subtitle: emoji("I enjoy sharing knowledge and speaking at events."),
  talks: [
    // Add your talks here
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love talking about AI, Tech and Society.",
  podcast: [
    // Add your podcast links here
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume.",
  display: false // Set false to hide this section
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  email_address: "manasvikirti12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace with your Twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Hireable Status

const isHireable = false; // Set false if you are not looking for a job. Displays "Open for opportunities: Yes/No" in the Github footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
