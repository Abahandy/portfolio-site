import {
mobile,
backend,
creator,
web,
javascript,
typescript,
html,
css,
reactjs,
redux,
tailwind,
nodejs,
mongodb,
git,
figma,
docker,
meta,
starbucks,
tesla,
shopify,
carrent,
jobit,
tripguide,
threejs,
} from "../assets";

export const navLinks = [
{
id: "about",
title: "About",
},
{
id: "work",
title: "Work",
},
{
id: "contact",
title: "Contact",
},
];

const services = [
{
title: "AI/ML Engineer",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Example: Python icon
},
{
title: "Data Analyst",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", // Example: MySQL icon
},
{
title: "Web Developer",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // Example: JS icon
},
{
title: "Training & Consulting",
icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", // Example: Business/Entrepreneur icon
},
];
const technologies = [
{
name: "Python",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
},
{
name: "TensorFlow",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
},
{
name: "PyTorch",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
},
{
name: "Pandas",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
},
{
name: "NumPy",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
},
{
name: "SQL",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
},
{
name: "React.js",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
},
{
name: "Next.js",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
},
{
name: "Node.js",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
},
{
name: "Tailwind CSS",
icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
},
{
name: "MongoDB",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
},
{
name: "Docker",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
},
{
name: "Git",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
},
{
name: "TypeScript",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
},
{
name: "Keras",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
},
{
name: "Redux",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
},
{
name: "Matplotlib",
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
},
{
name: "Power BI",
icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg",
},
];

const experiences = [
{
title: "Freelance AI/ML Engineer",
company_name: "Andybext Tech Solutions (Remote)",
icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png", // AI/ML icon
iconBg: "#383E56",
date: "March 2020 – Present",
points: [
"Designed and implemented machine learning models for predictive analytics, recommendation systems, and process automation using Python, TensorFlow, and scikit-learn.",
"Developed AI-powered features including intelligent chatbots, image recognition tools, and natural language processing pipelines.",
"Integrated ML models into production-level applications and APIs using Flask, FastAPI, and Node.js.",
"Led AI architecture design and model deployment for clients across e-commerce, logistics, and financial services.",
],
},
{
title: "Freelance Data Analyst",
company_name: "Andybext Tech Solutions (Remote)",
icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Data analysis icon
iconBg: "#E6DEDD",
date: "March 2020 – Present",
points: [
"Collected, cleaned, and analyzed large datasets to extract actionable business insights using Pandas, NumPy, and SQL.",
"Built interactive dashboards and data visualizations using Power BI, Tableau, and Matplotlib/Seaborn.",
"Conducted exploratory data analysis (EDA) and statistical modeling to support business decision-making.",
"Delivered detailed reports and visual stories to clients to drive process improvements and customer segmentation strategies.",
],
},
{
title: "Freelance Web Developer",
company_name: "Andybext Tech Solutions (Remote)",
icon: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png", // Web development icon
iconBg: "#383E56",
date: "March 2020 – Present",
points: [
"Designed and developed responsive and user-friendly web applications using React.js, Next.js, HTML/CSS, and JavaScript.",
"Built full-stack solutions using Node.js, Express, MongoDB, and Firebase.",
"Ensured optimal performance and cross-browser compatibility for all applications.",
"Worked with multiple high-profile clients.",
],
},
{
title: "Training & Consulting",
company_name: "Andybext Tech Solutions (Remote)",
icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png", // Training/consulting icon
iconBg: "#E6DEDD",
date: "March 2020 – Present",
points: [
"Provided training and mentorship on AI/ML, data analysis, and web development to individuals, startups, and corporate teams.",
"Designed and delivered structured training programs, workshops, and hands-on coding sessions tailored to client needs.",
"Consulted for startups and SMEs on AI integration, data strategy, and scalable tech solutions.",
"Assisted businesses in digital transformation through intelligent automation and custom AI solutions.",
],
},
];

const testimonials = [
{
testimonial:
"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
name: "Sara Lee",
designation: "CFO",
company: "Acme Co",
image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
testimonial:
"I've never met a web developer who truly cares about their clients' success like Rick does.",
name: "Chris Brown",
designation: "COO",
company: "DEF Corp",
image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
testimonial:
"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
name: "Lisa Wang",
designation: "CTO",
company: "456 Enterprises",
image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
// Web Development Projects
{
name: "Digital Training Platform",
description: "Designed and deployed a scalable digital training website for online courses and interactive learning.",
tags: [
{ name: "react", color: "blue-text-gradient" },
{ name: "nodejs", color: "green-text-gradient" },
{ name: "mongodb", color: "pink-text-gradient" },
],
image: mobile,
source_code_link: "https://github.com/yourusername/digital-training-platform",
},
{
name: "Personal Portfolio Website",
description: "Developed a fully responsive, interactive portfolio using Next.js and Tailwind CSS to showcase professional experience, projects, and technical skills, optimized for SEO and performance.",
tags: [
{ name: "nextjs", color: "blue-text-gradient" },
{ name: "tailwind", color: "green-text-gradient" },
{ name: "seo", color: "pink-text-gradient" },
],
image: creator,
source_code_link: "https://github.com/yourusername/portfolio",
},
{
name: "Netflix Clone",
description: "Built a high-fidelity replica of the Netflix UI with dynamic content rendering, responsive design, and API-driven media streaming simulation using React.js and Firebase.",
tags: [
{ name: "react", color: "blue-text-gradient" },
{ name: "firebase", color: "green-text-gradient" },
{ name: "api", color: "pink-text-gradient" },
],
image: web,
source_code_link: "https://github.com/yourusername/netflix-clone",
},
{
name: "Tesla Model Y Configurator",
description: "Engineered a 3D car customization experience inspired by Tesla, using Three.js, React, and advanced state management to allow users to configure the Model Y in real time.",
tags: [
{ name: "threejs", color: "blue-text-gradient" },
{ name: "react", color: "green-text-gradient" },
{ name: "redux", color: "pink-text-gradient" },
],
image: carrent,
source_code_link: "https://github.com/yourusername/tesla-configurator",
},
{
name: "Full-Stack E-commerce Platform",
description: "Developed a production-grade e-commerce website with product listings, cart, Stripe payments, and admin dashboard using the MERN stack.",
tags: [
{ name: "mern", color: "blue-text-gradient" },
{ name: "stripe", color: "green-text-gradient" },
{ name: "dashboard", color: "pink-text-gradient" },
],
image: figma,
source_code_link: "https://github.com/yourusername/ecommerce-platform",
},

// AI & Machine Learning Projects
{
name: "Product Recommendation Engine",
description: "Implemented a content- and collaborative-filtering recommendation system using scikit-learn and Pandas, increasing personalized engagement for an e-commerce demo.",
tags: [
{ name: "scikit-learn", color: "blue-text-gradient" },
{ name: "pandas", color: "green-text-gradient" },
{ name: "recommendation", color: "pink-text-gradient" },
],
image: backend,
source_code_link: "https://github.com/yourusername/recommendation-engine",
},
{
name: "AI-Powered Chatbot",
description: "Developed a smart conversational AI using Rasa and Dialogflow for real-time customer support, integrated with WhatsApp and web apps.",
tags: [
{ name: "rasa", color: "blue-text-gradient" },
{ name: "dialogflow", color: "green-text-gradient" },
{ name: "nlp", color: "pink-text-gradient" },
],
image: jobit,
source_code_link: "https://github.com/yourusername/ai-chatbot",
},
{
name: "Intelligent AI Assistant",
description: "Built a task-automation assistant using OpenAI's GPT API and Python, capable of handling emails, scheduling, reminders, and web search.",
tags: [
{ name: "openai", color: "blue-text-gradient" },
{ name: "python", color: "green-text-gradient" },
{ name: "automation", color: "pink-text-gradient" },
],
image: css,
source_code_link: "https://github.com/yourusername/ai-assistant",
},
{
name: "Gold Price Prediction Model",
description: "Engineered a time-series forecasting model using XGBoost and LSTM to accurately predict gold prices, achieving high performance on validation datasets.",
tags: [
{ name: "xgboost", color: "blue-text-gradient" },
{ name: "lstm", color: "green-text-gradient" },
{ name: "forecasting", color: "pink-text-gradient" },
],
image: html,
source_code_link: "https://github.com/yourusername/gold-price-prediction",
},
{
name: "Facial Recognition & Verification System",
description: "Created a facial recognition model using OpenCV and FaceNet, capable of identifying and verifying users in real time, with potential applications in security and biometrics.",
tags: [
{ name: "opencv", color: "blue-text-gradient" },
{ name: "facenet", color: "green-text-gradient" },
{ name: "security", color: "pink-text-gradient" },
],
image: nodejs,
source_code_link: "https://github.com/yourusername/facial-recognition",
},

// Data Analysis Projects
{
name: "Car Sales Data Analysis",
description: "Comprehensive analysis of car sales datasets using Pandas, identifying key trends, top-selling brands, and revenue drivers with visualizations in Matplotlib and Seaborn.",
tags: [
{ name: "pandas", color: "blue-text-gradient" },
{ name: "matplotlib", color: "green-text-gradient" },
{ name: "seaborn", color: "pink-text-gradient" },
],
image: javascript,
source_code_link: "https://github.com/yourusername/car-sales-analysis",
},
{
name: "Advanced Power BI Dashboard with DAX",
description: "Designed an interactive Power BI dashboard using DAX formulas to enable deep business insights across multiple KPIs, sales channels, and user segments.",
tags: [
{ name: "powerbi", color: "yellow-text-gradient" },
{ name: "dax", color: "green-text-gradient" },
{ name: "dashboard", color: "pink-text-gradient" },
],
image: docker,
source_code_link: "https://github.com/yourusername/powerbi-dashboard",
},
{
name: "SQL-Based Data Cleaning Pipeline",
description: "Built automated SQL scripts to clean, normalize, and transform raw datasets, improving data quality and consistency for downstream analytics.",
tags: [
{ name: "sql", color: "blue-text-gradient" },
{ name: "data-cleaning", color: "green-text-gradient" },
{ name: "etl", color: "pink-text-gradient" },
],
image: reactjs,
source_code_link: "https://github.com/yourusername/sql-data-cleaning",
},
{
name: "Road Accident Trend Analysis",
description: "Analyzed multi-year road accident data to identify patterns, high-risk zones, and contributing factors, using Python and Geospatial Mapping libraries.",
tags: [
{ name: "python", color: "blue-text-gradient" },
{ name: "geopandas", color: "green-text-gradient" },
{ name: "mapping", color: "pink-text-gradient" },
],
image: mongodb,
source_code_link: "https://github.com/yourusername/road-accident-analysis",
},
{
name: "Exploratory Data Analysis (EDA) with Pandas",
description: "Performed in-depth EDA on structured datasets using Pandas, revealing hidden patterns and guiding feature selection for machine learning pipeline.",
tags: [
{ name: "pandas", color: "blue-text-gradient" },
{ name: "eda", color: "green-text-gradient" },
{ name: "feature-selection", color: "pink-text-gradient" },
],
image: typescript,
source_code_link: "https://github.com/yourusername/eda-pandas",
},
];
export { services, technologies, experiences, testimonials, projects };