   // Portfolio data (experience removed as per your request)
        const portfolioData = {
            about: `Hello! I'm Shantanu Kale, a passionate Java Backend Developer 
currently pursuing a B.E. in Information Technology at D.Y. Patil College of Engineering, Pune (CGPA: 7.64).

Previously, I completed my Higher Secondary education at Rajiv Gandhi Mahavidyalaya, Chandrapur (Percentage: 80%).

I specialize in building robust, scalable server-side Java applications, with hands-on experience in Spring Boot, Hibernate, RESTful APIs, and both SQL and NoSQL databases.

When I'm not coding, I enjoy contributing to open source, mentoring peers, and exploring new technologies. My goal is to build software that is not only efficient but also maintainable and secure.
`,

            skills: `💻 Programming Languages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Java (Strong command of core & advanced concepts)
• SQL, MySQL, PostgreSQL
• MongoDB (NoSQL experience)

🛠️ Frameworks & Tools
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Spring Boot (microservices, REST APIs, Spring Security)
• Hibernate (ORM)
• JWT, OAuth, RESTful API design
• Jakarta (build tools)
• JDBC, H2 Database (in-memory & persistent storage)
• Maven/Gradle (dependency management)

🌐 Web Development
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Basics of ReactJS, Bootstrap (for full-stack apps)
• Responsive frontend integration

🔧 Concepts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Object-Oriented Programming (OOP)
• Data Structures & Algorithms (DSA)
• Microservices architecture
• API optimization & caching

🧠 Soft Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Leadership & Team Management
• Communication (written & oral)
• Problem-solving under pressure`,

            projects: `🚀 Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Uber Clone — Spring Boot, Spring Security, REST APIs (Ongoing)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Developed backend for an Uber-like ride-booking platform.
• Integrated Spring Security for robust authentication.
• Managed the complete ride flow: ride requests, driver matching, payment processing.
• Applied design patterns for maintainable, extensible code.

CredSafe — Java, Spring Boot, MySQL, JWT, OAuth, ReactJS (2025)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Built a full-stack authentication app for secure user registration, login, and profile management.
• Implemented JWT-based login and OTP email verification.
• Integrated MySQL for persistent user data.
• Developed a responsive frontend with React & Bootstrap 5.
• Focused on clean API design and role-based access control.

Bank Management System — Java, MySQL, JDBC, Swing GUI (2025)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Desktop-based banking app for account, transaction, and history management.
• Integrated MySQL with JDBC for secure storage.
• Designed a user-friendly Swing GUI for customers and staff.
• Implemented role-based access and robust input validation.

🔗 All projects are on my GitHub with details!`,

            certifications: `🎓 Certifications
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Master Java Programming — GeeksforGeeks
• The Design and Analysis of Algorithm Masterclass — Up Degree (Udemy)
• Spring Boot 0 to 100 Course — With Microservices, Kafka, Docker, Kubernetes — Coding Shuttle`,

            contact: `📬 Let’s Connect!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email: kaleshantanu2260@gmail.com
💼 LinkedIn: linkedin.com/in/shantanu-kale-2s20
🐱 GitHub: github.com/Shantanux0

📍 Location: Pune, India

I'm always open to new opportunities, collaborations. Looking forward to connecting!`
        };

        // TerminalTyper class
        class TerminalTyper {
            constructor() {
                this.output = document.getElementById('output');
                this.input = document.getElementById('terminal-input');
                this.loadingScreen = document.getElementById('loadingScreen');
                this.typingSpeed = 10; // milliseconds per character
                this.commands = {
                    help: () => this.showHelp(),
                    about: () => this.typeOutput(portfolioData.about),
                    skills: () => this.typeOutput(portfolioData.skills),
                    projects: () => this.typeOutput(portfolioData.projects),
                    certifications: () => this.typeOutput(portfolioData.certifications),
                    contact: () => this.typeOutput(portfolioData.contact),
                    clear: () => this.clearTerminal(),
                    theme: () => this.toggleThemeCommand(),
                    whoami: () => this.typeOutput('shantanu'),
                    pwd: () => this.typeOutput('/home/shantanu/portfolio'),
                    date: () => this.typeOutput(new Date().toString()),
                    ls: () => this.typeOutput('about.txt  skills.txt  projects.txt  certifications.txt  contact.txt'),
                    matrix: () => this.matrixEffect(),
                    sudo: () => this.typeOutput('Nice try! 😄 Root access denied.', 'error-text'),
                    exit: () => this.typeOutput('There\'s no escape from this portfolio!', 'error-text'),
                };
                this.commandHistory = [];
                this.historyIndex = -1;
                this.isProcessing = false;
            }

            init() {
                setTimeout(() => {
                    this.loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        this.loadingScreen.style.display = 'none';
                        this.showWelcomeMessage();
                        this.focusInput();
                    }, 1000);
                }, 3500);

                this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
                this.input.addEventListener('focus', (e) => this.focusInput());
                this.input.addEventListener('blur', (e) => this.blurInput());
                document.querySelector('.terminal-content').addEventListener('click', () => this.focusInput());
                this.output.addEventListener('contextmenu', (e) => e.preventDefault());
            }

            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async typeText(text, target, isCursor = true) {
                for (let i = 0; i < text.length; i++) {
                    target.innerHTML = text.substring(0, i + 1) + (isCursor ? '<span class="typing-cursor">█</span>' : '');
                    this.scrollToBottom();
                    await this.sleep(this.typingSpeed);
                }
                target.innerHTML = text;
                this.scrollToBottom();
            }

            focusInput() {
                if (!this.isProcessing) {
                    this.input.focus();
                }
            }
            blurInput() { this.input.blur(); }

            handleKeyDown(e) {
                if (this.isProcessing && ![ 'ArrowUp', 'ArrowDown', 'Tab' ].includes(e.key)) {
                    e.preventDefault();
                    return;
                }
                switch(e.key) {
                    case 'Enter': e.preventDefault(); this.processCommand(); break;
                    case 'ArrowUp': e.preventDefault(); this.navigateHistory('up'); break;
                    case 'ArrowDown': e.preventDefault(); this.navigateHistory('down'); break;
                    case 'Tab': e.preventDefault(); this.showAutocomplete(); break;
                }
            }

            async processCommand() {
                if (this.isProcessing) return;
                const originalCommand = this.input.value.trim();
                const command = originalCommand.toLowerCase();
                if (originalCommand) {
                    this.commandHistory.push(originalCommand);
                    this.historyIndex = this.commandHistory.length;
                }
                const promptLine = document.createElement('div');
                promptLine.className = 'prompt-line';
                const prompt = document.createElement('span');
                prompt.className = 'prompt';
                prompt.textContent = 'shantanu@portfolio:~$';
                const userInput = document.createElement('span');
                userInput.className = 'user-input';
                promptLine.appendChild(prompt);
                promptLine.appendChild(userInput);
                this.output.appendChild(promptLine);
                await this.typeText(originalCommand, userInput, true);
                this.isProcessing = true;
                this.input.value = '';
                await this.sleep(this.typingSpeed * 2);
                if (command === '') {
                    this.isProcessing = false;
                    this.focusInput();
                    return;
                }
                if (this.commands[command]) {
                    await this.commands[command]();
                } else {
                    await this.typeOutput(`Command not found: ${command}. Type 'help' for available commands.`, 'error-text');
                }
                this.isProcessing = false;
                this.focusInput();
            }

            async typeOutput(text, className = 'output-text') {
                const lines = text.split('\n');
                for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                    const line = document.createElement('div');
                    line.className = `terminal-line ${className}`;
                    this.output.appendChild(line);
                    await this.typeText(lines[lineIndex], line, true);
                }
                this.output.appendChild(document.createElement('div'));
                this.scrollToBottom();
            }

            async showWelcomeMessage() {
                await this.typeOutput(`System initialized successfully! ✅

Welcome to Shantanu Kale's Interactive Terminal Portfolio 🚀
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type 'help' to see available commands or try:

  'about'          
  'skills'         
  'projects'      
  'certifications' 
  'contact'        


Ready to explore? Start typing...`);
            }

            async showHelp() {
                await this.typeOutput(`
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 help           – Show this help message
👤 about          – Learn about my background
🛠️ skills         – View my technical skills
🚀 projects       – Explore my featured projects
🎓 certifications – My courses & certifications
📧 contact        – Get my contact information

🧹 clear          – Clear the terminal screen
🎨 theme          – Toggle light/dark theme

Basic Commands:
─────────────────────────────────────────────────────
🔍 whoami         – Display current user
📁 pwd            – Show current directory
📅 date           – Show current date/time
📂 ls             – List directory contents

Fun Commands:
─────────────────────────────────────────────────────
🕶️ matrix         – Enter the Matrix
🔒 sudo           – Try to get root access
🚪 exit           – Attempt to escape

💡 Pro tips:
• Use ↑/↓ arrows for command history
• All commands are case-insensitive
• Try typing invalid commands for fun error messages!`);
            }

            async clearTerminal() {
                this.output.innerHTML = '';
                await this.typeOutput('Terminal cleared. Ready for more commands!', 'output-text');
            }

            toggleThemeCommand() {
                toggleTheme();
                this.typeOutput('Theme toggled! 🎨', 'output-text');
            }
            navigateHistory(direction) {
                if (this.isProcessing) return;
                if (direction === 'up' && this.historyIndex > 0) {
                    this.historyIndex--;
                } else if (direction === 'down' && this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                } else if (direction === 'down' && this.historyIndex === this.commandHistory.length - 1) {
                    this.historyIndex = this.commandHistory.length;
                    this.input.value = '';
                    return;
                }
                this.input.value = this.commandHistory[this.historyIndex] || '';
                this.input.setSelectionRange(this.input.value.length, this.input.value.length);
            }
            showAutocomplete() {
                const input = this.input.value.toLowerCase();
                const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(input));
                if (matches.length === 1) {
                    this.input.value = matches[0];
                } else if (matches.length > 1) {
                    this.typeOutput(`Did you mean: ${matches.join(', ')}? (Press Tab to autocomplete)`);
                }
            }
            async matrixEffect() {
                const line = document.createElement('div');
                line.className = 'terminal-line';
                this.output.appendChild(line);
                line.style.color = 'var(--text-primary)';
                const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                const loops = 7 + Math.floor(Math.random() * 6);
                for (let i = 0; i < loops; i++) {
                    let matrixText = '';
                    const len = 45 + Math.floor(Math.random() * 20);
                    for (let j = 0; j < len; j++) {
                        matrixText += chars[Math.floor(Math.random() * chars.length)];
                        if (j % 5 === 4) matrixText += ' ';
                    }
                    if (i < loops - 1) matrixText += '<span class="typing-cursor">█</span>';
                    line.innerHTML = matrixText;
                    await this.sleep(Math.max(50, 200 - i * 10));
                }
                line.innerHTML = 'Welcome to the Matrix... the simulation is all around you.';
                await this.sleep(500);
                await this.typeOutput('Type "clear" to reset terminal.', 'output-text');
            }
            scrollToBottom() {
                this.output.scrollTo(0, this.output.scrollHeight);
            }
        }

        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            if (body.getAttribute('data-theme') === 'dark') {
                body.setAttribute('data-theme', 'light');
                themeToggle.textContent = '☀️';
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '🌙';
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            window.terminal = new TerminalTyper();
            terminal.init();
        });