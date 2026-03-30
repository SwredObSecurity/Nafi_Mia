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
    githubUrl: "https://github.com/SwredObSecurity/CSharp-Fundamentals/tree/master/CSFund",
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
    githubUrl: "https://github.com/SwredObSecurity/SQL-Data-Analysis/tree/master/Practical%20SQL%20A%20Beginners%20Guide%20To%20Storytelling%20With%20Data",
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
  {
    slug: "hospital-appointment",
    title: "Hospital Appointment Booking",
    shortDescription:
      "A hospital appointment booking system that lets users schedule medical appointments. Available in both console and GUI (JOptionPane) versions.",
    fullDescription: [
      "A hospital appointment booking application that allows users to schedule medical appointments through an interactive interface. The system handles appointment selection, date and time management, and booking confirmations.",
      "The project comes in two versions: a console-based version using Scanner for input, and a graphical version using Java's JOptionPane dialog boxes for a more user-friendly experience.",
      "This project demonstrates practical use of Java I/O, user input handling, and the ability to build both CLI and GUI interfaces for the same underlying logic.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/BookHospitalAppointment",
    displayUrl: "Java Console & GUI App",
    image: "/projects/hospital-appointment.svg",
    tags: ["Java", "JOptionPane", "GUI"],
    features: [
      "Appointment scheduling interface",
      "Date and time selection",
      "Console and GUI versions",
      "Booking confirmation system",
      "Input validation",
    ],
    techStack: ["Java", "JOptionPane", "Scanner"],
    category: "Software Engineering",
  },
  {
    slug: "bookmark-manager",
    title: "Bookmark Manager",
    shortDescription:
      "A bookmark management application for saving and organising bookmarks. Features both a console interface and a JOptionPane GUI version.",
    fullDescription: [
      "A bookmark manager that allows users to save, organise, and retrieve bookmarks through a simple interface. Built in Java with both console and graphical dialog versions.",
      "The application provides functionality for adding new bookmarks, viewing saved entries, and managing a personal collection. The dual-interface approach demonstrates how the same logic can power different user experiences.",
      "This project showcases Java fundamentals including string manipulation, collections, and the JOptionPane API for building quick dialog-based GUIs.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/BookMarker",
    displayUrl: "Java Console & GUI App",
    image: "/projects/bookmark-manager.svg",
    tags: ["Java", "JOptionPane", "Utility"],
    features: [
      "Add and save bookmarks",
      "View and manage entries",
      "Console and GUI versions",
      "String manipulation",
      "Simple data management",
    ],
    techStack: ["Java", "JOptionPane", "Scanner"],
    category: "Software Engineering",
  },
  {
    slug: "calculator",
    title: "Calculator",
    shortDescription:
      "A calculator application with 5 progressive versions — from basic arithmetic to advanced operations. Includes console and JOptionPane GUI variants.",
    fullDescription: [
      "A calculator project developed through 5 iterative versions, each building on the previous to add more functionality. Starting from basic addition and subtraction, each iteration introduces new operations, better input handling, and improved user experience.",
      "The progression demonstrates an iterative development approach: Calculator1 handles basic operations, while later versions add multiplication, division, input validation, and error handling for edge cases like division by zero.",
      "The project includes a JOptionPane GUI version that provides a visual dialog-based calculator interface, showing how the same mathematical logic translates from a command-line tool to a graphical application.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/Calculator",
    displayUrl: "Java Console & GUI App",
    image: "/projects/calculator.svg",
    tags: ["Java", "Math", "Iterative Design"],
    features: [
      "5 progressive versions",
      "Basic and advanced arithmetic",
      "Input validation and error handling",
      "Division by zero protection",
      "Console and GUI versions",
      "Iterative development approach",
    ],
    techStack: ["Java", "JOptionPane", "Scanner", "OOP"],
    category: "Software Engineering",
  },
  {
    slug: "equation-generator",
    title: "Equation Generator",
    shortDescription:
      "A math equation generator with 5 versions of increasing complexity. Generates random equations for practice, with both console and GUI interfaces.",
    fullDescription: [
      "A math equation generator built through 5 iterative versions, each adding more complexity and operation types. The system generates random mathematical equations for users to solve, providing immediate feedback on answers.",
      "Early versions focus on simple addition and subtraction, while later versions introduce multiplication, division, mixed operations, and adjustable difficulty levels. The progressive design mirrors a real development workflow of shipping and iterating.",
      "Includes a JOptionPane GUI version for a more interactive quiz-like experience. This is the largest single project in the Java collection with 6 source files total.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/EquationGenerator",
    displayUrl: "Java Console & GUI App",
    image: "/projects/equation-generator.svg",
    tags: ["Java", "Math", "Random Generation"],
    features: [
      "5 progressive versions",
      "Random equation generation",
      "Multiple operation types",
      "Adjustable difficulty",
      "Answer validation with feedback",
      "Console and GUI versions",
    ],
    techStack: ["Java", "JOptionPane", "Random", "Scanner"],
    category: "Software Engineering",
  },
  {
    slug: "file-sorter",
    title: "Categorised File Sorter",
    shortDescription:
      "A file sorting utility that categorises and organises files by type. Demonstrates Java file system operations and automated organisation.",
    fullDescription: [
      "A file sorting utility built in Java that automatically categorises files based on their type, extension, or other attributes. The tool scans directories and organises files into appropriate categories.",
      "The CategorizedFileSorter handles the logic of reading directory contents, identifying file types, and moving or copying files into organised folder structures. It demonstrates practical use of Java's file I/O APIs.",
      "This utility project shows how Java can be used for everyday automation tasks — turning a tedious manual process into a one-click solution.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/FileSorter",
    displayUrl: "Java Console App",
    image: "/projects/file-sorter.svg",
    tags: ["Java", "File I/O", "Automation"],
    features: [
      "Automatic file categorisation",
      "Directory scanning",
      "File type detection",
      "Organised output structure",
      "Java file system APIs",
    ],
    techStack: ["Java", "File I/O", "java.nio"],
    category: "Software Engineering",
  },
  {
    slug: "leap-year-checker",
    title: "Leap Year Checker",
    shortDescription:
      "A leap year checker that determines whether a given year is a leap year using calendar rules. Available in console and JOptionPane GUI versions.",
    fullDescription: [
      "A simple but well-structured leap year checker that applies the standard Gregorian calendar rules: a year is a leap year if divisible by 4, except for century years which must also be divisible by 400.",
      "The project comes in two flavours: a console version using Scanner for command-line interaction, and a JOptionPane version that presents the results through graphical dialog boxes.",
      "While the logic is straightforward, this project demonstrates clean conditional logic, input handling, and the practice of building the same program for different interfaces.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/LeapOrNot",
    displayUrl: "Java Console & GUI App",
    image: "/projects/leap-year-checker.svg",
    tags: ["Java", "Logic", "JOptionPane"],
    features: [
      "Gregorian calendar leap year rules",
      "Console and GUI versions",
      "Input validation",
      "Clean conditional logic",
      "Instant result feedback",
    ],
    techStack: ["Java", "JOptionPane", "Scanner"],
    category: "Software Engineering",
  },
  {
    slug: "mail-system",
    title: "Mail System",
    shortDescription:
      "A mail simulation program for composing and managing email-like messages. Built in Java as a console application.",
    fullDescription: [
      "A mail system simulation built in Java that handles composing, formatting, and displaying email-like messages through a console interface.",
      "The application demonstrates string formatting, message composition workflows, and the fundamentals of how messaging systems structure data — sender, recipient, subject, and body.",
      "This project provided foundational knowledge that was later applied to the Restaurant Ordering System's email confirmation feature using the JavaMail API.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/Mail",
    displayUrl: "Java Console App",
    image: "/projects/mail-system.svg",
    tags: ["Java", "Messaging", "Console"],
    features: [
      "Email composition interface",
      "Message formatting",
      "Sender and recipient handling",
      "Subject and body management",
      "String manipulation",
    ],
    techStack: ["Java", "Scanner", "String Formatting"],
    category: "Software Engineering",
  },
  {
    slug: "make-change",
    title: "Change Calculator",
    shortDescription:
      "A change-making calculator that breaks down payment change into denominations. Available in both console and JOptionPane GUI versions.",
    fullDescription: [
      "A change calculator that determines the optimal breakdown of change into bills and coins given a purchase amount and payment. The system calculates the difference and returns the most efficient denomination split.",
      "The project includes both a console version for quick command-line use and a JOptionPane GUI version that presents the denomination breakdown in a graphical dialog.",
      "This project demonstrates practical arithmetic operations, modular division for denomination calculation, and the kind of real-world math that underpins point-of-sale systems.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/MakeChange",
    displayUrl: "Java Console & GUI App",
    image: "/projects/make-change.svg",
    tags: ["Java", "Math", "JOptionPane"],
    features: [
      "Denomination breakdown",
      "Optimal change calculation",
      "Console and GUI versions",
      "Bills and coins handling",
      "Input validation",
    ],
    techStack: ["Java", "JOptionPane", "Scanner"],
    category: "Software Engineering",
  },
  {
    slug: "coach-reservation",
    title: "Coach Seat Reservation",
    shortDescription:
      "A bus/coach seat reservation system with a seat availability model, booking logic, and both console and JOptionPane GUI interfaces.",
    fullDescription: [
      "A coach seat reservation system that models a bus with a fixed number of seats and allows users to view availability, select seats, and make reservations. The Coach class models the vehicle's seat layout and availability state.",
      "The ReserveCoach class handles the booking workflow — displaying available seats, processing selections, and confirming reservations. The two-class architecture demonstrates separation of data model from business logic.",
      "A JOptionPane GUI version (JOPReserveBus) provides a graphical interface for the same functionality, making seat selection more visual and intuitive.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/ReserveCoach",
    displayUrl: "Java Console & GUI App",
    image: "/projects/coach-reservation.svg",
    tags: ["Java", "OOP", "Reservation System"],
    features: [
      "Seat availability display",
      "Seat selection and booking",
      "Two-class architecture",
      "Console and GUI versions",
      "Reservation confirmation",
      "Data model separation",
    ],
    techStack: ["Java", "JOptionPane", "OOP"],
    category: "Software Engineering",
  },
  {
    slug: "library-reservation",
    title: "Library Book Reservation",
    shortDescription:
      "A library book reservation system for searching and reserving books from a catalog. Features console and JOptionPane GUI versions.",
    fullDescription: [
      "A library book reservation system that allows users to browse a book catalog, search for titles, and reserve available books. The system tracks which books are available and which are currently reserved.",
      "The console version uses Scanner for text-based interaction, while the JOptionPane version provides dialog-based prompts for a more accessible experience.",
      "This project demonstrates inventory management concepts, search functionality, and state tracking — skills that translate directly to real-world library and inventory systems.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/ReserveLibraryBook",
    displayUrl: "Java Console & GUI App",
    image: "/projects/library-reservation.svg",
    tags: ["Java", "Inventory", "JOptionPane"],
    features: [
      "Book catalog browsing",
      "Search functionality",
      "Reservation tracking",
      "Availability status management",
      "Console and GUI versions",
    ],
    techStack: ["Java", "JOptionPane", "Scanner"],
    category: "Software Engineering",
  },
  {
    slug: "times-tables-game",
    title: "Times Tables Game",
    shortDescription:
      "A multiplication quiz game that generates random times-table questions, tracks scores, and provides instant feedback. Console and GUI versions included.",
    fullDescription: [
      "An educational multiplication quiz game that generates random times-table questions for the user to answer. The game tracks correct and incorrect answers, providing a final score at the end of each round.",
      "Questions are randomly generated to ensure variety, and the system provides instant feedback after each answer — reinforcing correct solutions and showing the right answer for mistakes.",
      "Available in both console and JOptionPane GUI versions, the game demonstrates random number generation, score tracking, user input validation, and game loop design patterns.",
    ],
    githubUrl: "https://github.com/SwredObSecurity/Java-Projects/tree/main/Programs%20Written%20By%20Nafi%20-%20Programing%20Language%20JAVA/src/TimesTablesGame",
    displayUrl: "Java Console & GUI App",
    image: "/projects/times-tables-game.svg",
    tags: ["Java", "Education", "Game"],
    features: [
      "Random question generation",
      "Score tracking",
      "Instant answer feedback",
      "Console and GUI versions",
      "Multiple rounds",
      "Times-table practice",
    ],
    techStack: ["Java", "JOptionPane", "Random", "Scanner"],
    category: "Game Development",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
