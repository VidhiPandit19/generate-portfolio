document.addEventListener("DOMContentLoaded", function () {
    const exportButton = document.getElementById("exportBtn");

    exportButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const summary = document.getElementById("summary").value;
        const skills = document.getElementById("skills").value;
        const experience = document.getElementById("experience").value;
        const education = document.getElementById("education").value;

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}'s Portfolio</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
                .container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; }
                h1 { text-align: center; color: #1b3753; }
                p { line-height: 1.6; }
                h2 { color: #1b3753; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${name}'s Portfolio</h1>
                <h2>Summary</h2>
                <p>${summary}</p>
                <h2>Skills</h2>
                <p>${skills}</p>
                <h2>Experience</h2>
                <p>${experience}</p>
                <h2>Education</h2>
                <p>${education}</p>
            </div>
        </body>
        </html>`;

        const blob = new Blob([htmlContent], { type: "text/html" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${name}_Portfolio.html`;
        a.click();
    });
});
