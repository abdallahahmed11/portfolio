import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  "name": "Abdallah Soliman",
  "initials": "AS",
  "url": "https://abdallahsoliman.com", /* Replace with your actual website URL if you have one */
  "location": "Sheikh Zayed City,  Egypt",
  "locationLink": "https://www.google.com/maps/place/Sheikh+Zayed+City,+Egypt",
  "description": "Medical Software Engineer",
  "summary": "Highly motivated and experienced Medical Software Engineer with a robust academic foundation and extensive hands-on expertise in AI technologies, particularly in deep learning, machine learning, and computer vision. Skilled in applying these technologies and digital signal processing (DSP) to solve complex healthcare challenges. Proficient in web development, including advanced website creation using Next.js, and dedicated to driving innovation in healthcare technology and delivering impactful solutions.",
  avatarUrl: "/profile-image.jpg",
  skills: [
    "C/C++",
    "Python",
    "Pandas",
    "NumPy",
    "Seaborn",
    "Matplotlib",
    "Scikit-learn",
    "Keras",
    "MONAI",
    "OpenCV",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Prisma",
    "Next.js",
    "Qt",
    "Git",
    "GitHub",
    "SQL",
    "OpenGL",
    "DSP",
    "Jira"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abdullasoliman03@gmail.com",
    tel: "+20 1111598412",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abdallahahmed11",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdallah-ahmed-482300255/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      "company": "Lytic Lab",
      "href": "",
      "badges": [],
      "location": "Cairo, Egypt",
      "title": "Part-time Software Engineer Intern",
      "logoUrl": "", /* No logo URL provided */
      "start": "Dec 2023",
      "end": "August 2024",
      "description": "Served as a full-stack engineer in the development of a personal brand SaaS template. Contributed to TAM integrated solutions website development using Next.js."
    },
    {
      "company": "Vellore Institute of Technology",
      "href": "", /* No URL provided in the CV */
      "badges": [],
      "location": "India",
      "title": "ML Research Intern",
      "logoUrl": "/VIT.png", /* No logo URL provided */
      "start": "June 2023",
      "end": "August 2023",
      "description": "Contributed to a research paper for Antimicrobial Peptides prediction. Utilized deep learning and machine learning for classification. Developed presentation and teamwork skills."
    },

  ],
  education: [
    {
      "school": "Cairo University Faculty of Engineering",
      "href": "https://cu.edu.eg/Home", /* No URL provided in the CV */
      "degree": "BSc. Systems and Biomedical Engineering",
      "logoUrl": "/cairo.png", /* No logo URL provided */
      "start": "2020",
      "end": "2025", /* Expected graduation year */
      "gpa": "3.6"
    }
  ],
  projects: [
    {
      title: "A Comprehensive and Self-configuring Deep Learning-based System for Abdomen Medical Image Analysis",
      href: "",
      dates: "June 2023 - present",
      active: false,
      description:
          "Trained a deep learning model using MONAI for segmentation and contributed to the development of the Open Health Imaging Foundation (OHIF) platform.",
      technologies: [
        "Deep Learning",
        "MONAI",
        "OHIF"
      ],
      links: [
      ],
      image: "/Grad.jpg",
      video:"",
    },
    {
      title: "TAM integrated solutions",
      href: "https://tam-integrated-solutions.com/en\"",
      dates: "July 2024 - Sept 2024",
      active: true,
      description:
          "Developed a personal brand SaaS template for TAM integrated solutions. Contributed to the development of the TAM integrated solutions website using Next.js.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Prisma"
      ],
      links: [
        {
          type: "Website",
          href: "https://tam-integrated-solutions.com/en",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/tam.png",
      video: "/",
    },
    {
      title: "Comprehensive Computer Vision Toolbox",
      href: "https://github.com/abdallahahmed11/Computer_Vision-Toolbox",
      dates: "May 2023 ",
      active: false,
      description:
          "project involves enhancing images through filtering, noise addition, histogram adjustments, and edge detection; analyzing images with the Hough Transform and active contouring; performing feature detection and matching; and applying segmentation and thresholding techniques.",
      technologies: [
        "Computer Vision",
        "pyqt5",
        "python",
        "opencv",

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdallahahmed11/Computer_Vision-Toolbox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ComputervVision.jpg",
      video: "",
    },


    {
      title: "Image Frequency Explorer",
      href:"https://github.com/abdallahahmed11/Image-Frequency-Explorer", /* REPLACE WITH PROJECT URL */
      dates: "Feb 2023",
      active: false,
      description: "OOP-crafted desktop suite for streamlined Fourier Transform visualization.",
      technologies: [
        "OOP",
        "Fourier Transform" ,
        "python",
        "pyqt5"// Add any other relevant technologies
      ],
      links: [{
        type: "Source",
        href: "https://github.com/abdallahahmed11/Image-Frequency-Explorer",
        icon: <Icons.github className="size-3" />,
      }],
      image:"/FreqExplorer.png",
      video: "",
    },
    {
      title: "VoiceLock Access Manager",
      href: "https://github.com/abdallahahmed11/Voice-Lock-Access-Manager", /* REPLACE WITH PROJECT URL */
      dates: "Jan 2023",
      active: false,
      description: "Secure Voice and Phrase Recognition Entry System, powered by machine learning for precision authentication.",
      technologies: [
        "Machine Learning",
        "Voice Recognition" // Add any other relevant technologies
      ],
      links: [{
        type: "Source",
        href: "https://github.com/abdallahahmed11/Voice-Lock-Access-Manager",
        icon: <Icons.github className="size-3" />,
      }],
      image: "/AccessManager.jpg",
      video: "",
    },
    {
      title: "SignalScope Pro",
      href: "https://github.com/abdallahahmed11/SignalScope-Pro", /* REPLACE WITH PROJECT URL */
      dates: "Nov 2022",
      active: false,
      description: "Advanced application for real-time, multi-channel signal analysis using Python and PyQt5.",
      technologies: [
        "Python",
        "PyQt5"
      ],
      links: [ {
        type: "Source",
        href: "hhttps://github.com/abdallahahmed11/SignalScope-Pro",
        icon: <Icons.github className="size-3" />,
      }
      ],
      image:"/signalpro.png",
      video: "",
    },
  ],
  hackathons: []

} as const;
