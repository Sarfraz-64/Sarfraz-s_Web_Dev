let vid = document.getElementById("back");
    if (vid) {
        vid.playbackRate = 0.5;
    }

    
    const portfolioData = {
        projects: [
            {
                title: "Chess Game in C++",
                description: "Developed a fully functional chess game using C++, incorporating all chess rules including castling, en passant, and pawn promotion. The game features a clean console interface and allows two players to play in turn.",
                features: [
                    "Turn-based gameplay with legal move validation.",
                    "Implementation of key chess rules.",
                    "Console-based interface with clear representation of the chessboard."
                ],
                technologies: ["C++", "Object-Oriented Programming", "Algorithm Design"]
            },
            {
                title: "Ludo Game in C++",
                description: "Created a simplified version of Ludo in C++, allowing multiple players to compete in a race to the finish. The game manages player movements, dice rolls, and winning conditions.",
                features: [
                    "Multiplayer functionality.",
                    "Random dice rolls using C++'s random library.",
                    "Well-structured game flow with win condition handling."
                ],
                technologies: ["C++", "Game Logic", "Random Number Generation"]
            },
            {
                title: "Calculator in C++",
                description: "Built a basic calculator that can perform arithmetic operations like addition, subtraction, multiplication, and division. The project focuses on user-friendly input handling and efficient computation.",
                features: [
                    "Supports basic arithmetic operations.",
                    "Error handling for invalid inputs and division by zero.",
                    "User-friendly console interface."
                ],
                technologies: ["C++", "Input/Output Handling", "Control Flow Structures"]
            }
        ]
    };

    // Get the element where the projects will be inserted
    const projectsList = document.getElementById('projects-list');

    if (projectsList) {
        // Iterate over the projects array and create HTML for each project
        portfolioData.projects.forEach(project => {
            // Create a new div element for each project
            const projectDiv = document.createElement('div');
            
            // Populate the div with project details
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <strong>Key Features:</strong>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <strong>Technologies Used:</strong>
                <ul>
                    ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            `;
            
            // Append the project div to the projects list section
            projectsList.appendChild(projectDiv);
        });
    } else {
        console.error('Element with ID "projects-list" not found.');
    }
;

