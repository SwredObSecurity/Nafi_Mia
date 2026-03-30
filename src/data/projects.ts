export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  liveUrl?: string;
  githubUrl?: string;
  displayUrl: string;
  image: string;
  tags: string[];
  features: string[];
  techStack: string[];
  category: string;
}

export const projects: Project[] = [
  {
    slug: "laptops-ecom-shop",
    title: "Laptops E-Commerce Shop",
    shortDescription:
      "A fully functional e-commerce web application for browsing and purchasing laptops. Built with modern web technologies, featuring a clean UI, product filtering, and seamless checkout experience.",
    fullDescription: [
      "A complete e-commerce platform designed for browsing, comparing, and purchasing laptops. The application features a modern, responsive interface built with current web technologies and deployed on Vercel for fast global delivery.",
      "The store includes product listing pages with filtering and sorting capabilities, detailed product pages with specifications, a shopping cart system, and a streamlined checkout flow. The UI is clean and minimal, prioritising the shopping experience.",
      "This project was built to demonstrate full-stack web development skills, from frontend design and interactivity to deployment and production-readiness.",
    ],
    liveUrl: "http://laptops-ecom-shop.vercel.app/",
    githubUrl: "https://github.com/SwredObSecurity/Laptops_Ecom.Shop",
    displayUrl: "laptops-ecom-shop.vercel.app",
    image: "/projects/laptops-ecom-shop.svg",
    tags: ["E-Commerce", "Web App", "Vercel"],
    features: [
      "Product browsing with filtering and sorting",
      "Detailed product pages with specifications",
      "Shopping cart with quantity management",
      "Responsive design across all devices",
      "Fast global delivery via Vercel CDN",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    category: "Web Development",
  },
  {
    slug: "atm-banking-system",
    title: "ATM Banking System",
    shortDescription:
      "A full-featured banking ATM application with member registration, card-based PIN authentication, balance checking, deposits, withdrawals, transfers, and account management.",
    fullDescription: [
      "A comprehensive banking ATM simulation that models real-world banking operations. Users can register as members, receive virtual card numbers, and perform a full range of financial transactions through an intuitive command-line interface.",
      "The system implements secure authentication using card number and PIN combinations. All member data including balances, transaction history, and account details are persisted using file-based storage, allowing data to survive between sessions.",
      "Key operations include checking balances, depositing and withdrawing funds, transferring money between accounts, changing PINs, and cancelling cards. The system includes input validation and error handling to prevent invalid operations.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/ATM",
    displayUrl: "Java Console App",
    image: "/projects/atm-banking-system.svg",
    tags: ["Java", "File I/O", "Authentication"],
    features: [
      "Member registration with card number generation",
      "PIN-based authentication system",
      "Deposit, withdrawal, and balance enquiry",
      "Account-to-account fund transfers",
      "PIN change and card cancellation",
      "File-based data persistence",
      "Input validation and error handling",
    ],
    techStack: ["Java", "File I/O", "OOP"],
    category: "Software Engineering",
  },
  {
    slug: "restaurant-ordering-system",
    title: "Restaurant Ordering System",
    shortDescription:
      "A restaurant order management and payment system with menu-driven ordering, cash and card payment integration, email confirmations, and debug logging.",
    fullDescription: [
      "NurRest is a full-featured restaurant ordering and payment system that simulates a real dining experience. Customers can browse a menu, place orders for multiple items, choose collection points, and pay using cash or card.",
      "The system integrates with the ATM Banking System for card-based payments, validating card numbers against stored member data. For cash payments, it calculates change automatically. Upon successful payment, order confirmations are sent via email.",
      "A built-in debug logging system tracks all transactions for auditing purposes. The modular design separates concerns between ordering, payment processing, and notification, demonstrating clean software architecture principles.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/Restaurant",
    displayUrl: "Java Console App",
    image: "/projects/restaurant-ordering-system.svg",
    tags: ["Java", "Email API", "Payment Integration"],
    features: [
      "Interactive menu-driven ordering interface",
      "Multiple item ordering with pricing",
      "Cash payment with automatic change calculation",
      "Card payment with ATM system integration",
      "Email order confirmations",
      "Transaction debug logging",
      "Collection point selection",
    ],
    techStack: ["Java", "JavaMail API", "File I/O", "OOP"],
    category: "Software Engineering",
  },
  {
    slug: "javascript-games",
    title: "JavaScript Games Collection",
    shortDescription:
      "A collection of 15+ browser-based games built with vanilla JavaScript and HTML5 Canvas. Includes UFO collector, maze navigator, snake, tennis, space shooter, and more.",
    fullDescription: [
      "A diverse collection of over 15 browser-based games built entirely with vanilla JavaScript, HTML5, and CSS3 — no frameworks or libraries. Each game explores different game development concepts from sprite animation and collision detection to keyboard input handling and real-time scoring.",
      "The collection spans multiple genres: action games (UFO collector, space shooter, rock storm), puzzle and navigation (maze, submarine explorer), classic arcade remakes (snake, tennis, balloon pop), and skill-based challenges (fish catching, star collection, donut dodge).",
      "Every game features audio effects, image sprites, real-time score tracking, and time-based challenges. The project demonstrates deep understanding of DOM manipulation, event handling, game loops, and the HTML5 Canvas API.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/JavaScript-Games-Collection",
    displayUrl: "HTML5 / Vanilla JS",
    image: "/projects/javascript-games.svg",
    tags: ["JavaScript", "HTML5 Canvas", "Game Dev"],
    features: [
      "15+ fully playable browser games",
      "Keyboard and mouse input controls",
      "Real-time scoring and timer systems",
      "Audio effects and background music",
      "Sprite-based animations",
      "Collision detection algorithms",
      "No frameworks — pure vanilla JS",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
    category: "Game Development",
  },
  {
    slug: "csharp-fundamentals",
    title: "C# Fundamentals",
    shortDescription:
      "A structured learning project covering C# programming fundamentals including variables, arrays, type casting, arithmetic operations, comparison and logical operators, and conditional statements.",
    fullDescription: [
      "A hands-on C# learning project built on .NET 9.0, organised into individual concept files that each focus on a specific programming fundamental. The project serves as both a reference guide and a progression through core C# concepts.",
      "Topics covered include variable declaration and data types, constants, arithmetic and string operations, arrays, type casting and conversion, comparison operators, logical operators (AND, OR, NOT), and conditional statements (if/else, switch).",
      "Each file is self-contained with examples and comments, making it easy to revisit specific concepts. The project demonstrates a methodical approach to learning a new language by isolating and practising individual building blocks.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/CSharp-Fundamentals/tree/main/CSFund",
    displayUrl: ".NET 9.0 Console App",
    image: "/projects/csharp-fundamentals.svg",
    tags: ["C#", ".NET", "Fundamentals"],
    features: [
      "Organised by concept — one file per topic",
      "Variables, constants, and data types",
      "Arithmetic and string operations",
      "Arrays and type casting",
      "Comparison and logical operators",
      "Conditional statements",
      "Built on .NET 9.0",
    ],
    techStack: ["C#", ".NET 9.0", "Console Application"],
    category: "Learning & Fundamentals",
  },
  {
    slug: "sql-data-analysis",
    title: "SQL Data Analysis",
    shortDescription:
      "A comprehensive SQL curriculum working through real-world datasets including U.S. Census data, earthquake records, and GIS shapefiles. Covers queries, joins, statistics, text mining, and spatial analysis.",
    fullDescription: [
      "A complete 19-chapter SQL learning journey based on 'Practical SQL: A Beginner's Guide to Storytelling with Data'. Each chapter builds progressively from basic queries to advanced data analysis techniques using real-world datasets.",
      "The project works with substantial real data including U.S. Census population records, earthquake JSON datasets (9MB+), geographic shapefiles for roads, water bodies, and county boundaries. This grounding in real data makes the SQL skills immediately transferable to professional work.",
      "Advanced topics include statistical analysis and aggregation, multi-table joins, data cleaning and validation, text mining with pattern matching, spatial/GIS data analysis, JSON data handling, views, functions, triggers, and command-line database management.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/SQL-Data-Analysis/tree/main/Practical%20SQL%20A%20Beginners%20Guide%20To%20Storytelling%20With%20Data",
    displayUrl: "PostgreSQL",
    image: "/projects/sql-data-analysis.svg",
    tags: ["SQL", "PostgreSQL", "Data Analysis"],
    features: [
      "19 progressive chapters",
      "Real-world datasets (Census, earthquake, GIS)",
      "Basic to advanced SQL queries",
      "Multi-table joins and aggregation",
      "Text mining and pattern matching",
      "Spatial/GIS data analysis",
      "JSON data handling",
      "Views, functions, and triggers",
    ],
    techStack: ["PostgreSQL", "SQL", "GIS Tools"],
    category: "Data & Databases",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
