export const ABOUT_CONTENT = {
    title: "Meet Sanjeev!",
    description: [
        "Sanjeev is a Computer Science grad student at the University of Florida with a passion for AI and software development.",
        "Sanjeev currently serves as a Workshop lead for UF ACM where he helps develop college students' technical skills and prepares them for successful careers in tech.",
        "He also serves as a project lead for GatorAI where he leads a team in developing travel solutions for the new era.",
        "When he's not coding, you'll find Sanjeev exploring new hiking trails, experimenting in the kitchen, or planning his next travel adventure."
    ],
    image: "/assets/headshot_2025_2.jpeg",
};

export const EXPERIENCE_DATA = [
    {
        company: "Google",
        role: "Technical Program Manager Intern (Incoming)",
        period: "Summer 2026",
        description: ["Technical Program Management"],
        logo: "/assets/experience/google.png"
    },
    {
        company: "ChatArmin",
        role: "Software Engineering Intern",
        period: "Summer 2025",
        description: ["TypeScript", "API Architecture", "Auth Systems"],
        logo: "/assets/experience/chatarmin.png"
    },
    {
        company: "ABB",
        role: "R&D Software Engineering Intern",
        period: "Summer 2024",
        description: ["Firmware Security", "Automation", "Leadership"],
        logo: "/assets/experience/abb.png"
    },
    {
        company: "Unilever",
        role: "Corporate Strategy and Tech Intern",
        period: "May 2024",
        description: ["Corporate Strategy", "AI Innovation", "Stakeholder Engagement"],
        logo: "/assets/experience/unilever.png"
    }
];

export const PROJECTS_DATA = [
    {
        title: "SafeTrip IQ",
        description: "ML-Powered Travel Safety Advisor",
        tags: ["NLP", "Clustering", "Data Visualization"],
        link: "https://safetripiq.vercel.app/",
        image: "/assets/projects/safetrip.png"
    },
    {
        title: "MLOps Soccer Detection System",
        description: "Built a soccer/football detection platform using a pretrained YOLOv5 model. Productionized with PyTorch & Hugging Face Spaces for continuous deployment.",
        tags: ["Python", "PyTorch", "YOLOv5", "CI/CD"],
        link: "https://huggingface.co/spaces/sanjeevkamath/MLops",
        image: "/assets/projects/soccer.webp"
    },
    {
        title: "Solace Mental Wellness",
        description: "A mental wellness app powered by generative AI to help users achieve daily goals, maintain a journal, and interact with an AI therapist.",
        tags: ["React", "Node.js", "Firebase", "GenAI"],
        link: "https://github.com/sanjeevkamath/Solace",
        image: "/assets/projects/solace.jpg"
    },
    {
        title: "WHOOP vs OURA Analysis",
        description: "Analyzed 30 nights of sleep data from Oura Ring and WHOOP devices to identify trends and insights, presenting findings at a symposium.",
        tags: ["Python", "Jupyter", "Pandas", "Data Science"],
        link: "https://github.com/sanjeevkamath/WHOOPvsOURA",
        image: "/assets/projects/whoop.png"
    },
    {
        title: "Medical Crossword Search",
        description: "Created an educational medical crossword game with varying difficulties and pop-up definitions to help students learn terminology.",
        tags: ["Python", "Pygame", "Education"],
        link: "https://github.com/sanjeevkamath/crossword-designathon",
        image: "/assets/projects/medsearch.png"
    },
    {
        title: "NBA Data Analysis",
        description: "Analyzed NBA player performance using shot data, featuring interactive leaderboards for shooting percentages and shot distances.",
        tags: ["C++", "Algorithms", "Data Structures"],
        link: "https://github.com/sanjeevkamath/NBA-Data-Center",
        image: "/assets/projects/basketball.jpg"
    },
    {
        title: "Minesweeper",
        description: "Developed a customizable Minesweeper game with dynamic board dimensions, mine counts, and a local leaderboard system.",
        tags: ["C++", "SFML", "Game Dev"],
        image: "/assets/projects/minesweeper.png"
    },
];

export const CONTACT_DATA = {
    title: "Get in Touch",
    email: "sanjeev.kamath@example.com",
    socials: [
        { platform: "GitHub", url: "https://github.com/sanjeevkamath" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/sanjeev-kamath" },
        { platform: "Email", url: "mailto:sanjeev.k.kamath@gmail.com" },
    ]
};
