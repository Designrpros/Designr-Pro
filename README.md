Designr-Pro
Designr-Pro is a personal portfolio website built by Vegar Berentsen, a web designer and developer based in Østerås, Norway. This project showcases a collection of professional work, including mobile apps, web applications, and community initiatives, developed using modern technologies like Next.js, React, Swift, and TypeScript. Explore projects like Mapr (a map-based project management tool for tradesmen) and QRHue (a vibrant QR code generator), alongside educational resources and portfolios.
The site features a responsive design with categorized portfolio sections, collapsible navigation, and a skills showcase highlighting expertise in web and iOS development. Built with Next.js and deployed on Vercel, Designr-Pro serves as a digital home for Vegar’s creative and technical achievements.
Features

Categorized Portfolio: Browse projects organized into categories like AppStore Apps, Web Apps, Learning Resources, Portfolios, Community Initiatives, Business Websites, and Miscellaneous Projects.
Collapsible Sections: Expand or collapse portfolio categories for a streamlined user experience, with accessibility features like aria-label for screen readers.
Typewriter Effect: A dynamic hero section with a typewriter animation introducing Vegar as a Designer & Developer.
Skills Showcase: Highlights 16 skills, including Next.js, React, SwiftUI, TypeScript, Figma, and Prompt Engineering, reflecting expertise from work at Studio 51.
Responsive Design: Optimized for desktop, tablet, and mobile devices, ensuring a seamless experience across screen sizes.
Vercel Deployment: Hosted on Vercel for fast, reliable access to the portfolio and CV pages.

Getting Started
To run Designr-Pro locally, follow these steps:
Prerequisites

Node.js: Version 16.x or 18.x (recommended for Next.js 14).
npm: Included with Node.js, or use yarn, pnpm, or bun as preferred.
Git: To clone the repository.

Installation

Clone the Repository:
git clone https://github.com/Designrpros/Designr-Pro.git
cd Designr-Pro


Install Dependencies:
npm install
# or
yarn install
# or
pnpm install
# or
bun install


Run the Development Server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Open the Site:

Visit http://localhost:3000 to see the portfolio homepage.
Visit http://localhost:3000/cv to view the CV page with the skills section.


Edit Pages:

Modify src/app/page.tsx to update the portfolio homepage (e.g., add projects or adjust categories).
Modify src/app/cv/page.tsx to update the CV page (e.g., expand skills or experience entries).
The site auto-updates as you edit files.



Notes

This project uses TypeScript for type safety. Run npm run build to check for TypeScript errors before deployment.
The site uses next/font to optimize and load Geist, a font family by Vercel.
Ensure you have a stable internet connection for Vercel deployments or external font loading.

Technologies Used

Next.js: Framework for server-side rendering and static site generation.
React: Frontend library for building interactive UI components.
TypeScript: Static typing for improved code reliability.
Styled Components: CSS-in-JS for component-level styling.
Swift/SwiftUI: For iOS and visionOS app development (e.g., Mapr, QRHue).
Figma: For prototyping and design (referenced in Composition project).
Git: Version control, hosted on GitHub.
Vercel: Deployment platform for hosting the live site.

Learn More
To deepen your understanding of the technologies used in Designr-Pro, explore these resources:

Next.js Documentation - Learn about Next.js features and APIs.
Learn Next.js - An interactive Next.js tutorial.
React Documentation - Understand React’s component-based architecture.
TypeScript Documentation - Get started with TypeScript.
Styled Components Documentation - Style components with CSS-in-JS.
SwiftUI Documentation - Build apps for iOS and visionOS.
Vercel Documentation - Deploy and manage Next.js apps.

Check out the Next.js GitHub repository for feedback and contributions.
Deploy on Vercel
The easiest way to deploy Designr-Pro is with the Vercel Platform from the creators of Next.js.

Push your changes to GitHub:
git add .
git commit -m "Update project files"
git push origin main


Import the repository in Vercel:

Go to Vercel Dashboard.
Select Import Git Repository and choose Designrpros/Designr-Pro.
Configure the project (defaults are usually fine for Next.js).


Deploy and access:

Once deployed, visit the generated URL (e.g., https://designr-pro.vercel.app).
Check / for the portfolio and /cv for the skills section.



For more details, see the Next.js deployment documentation.
Contributing
Contributions to Designr-Pro are welcome! To contribute:

Fork the repository: https://github.com/Designrpros/Designr-Pro.
Create a branch:git checkout -b feature/your-feature


Make changes and commit:git commit -m "Add your feature"


Push to your fork:git push origin feature/your-feature


Open a pull request on GitHub.

Please ensure your code follows the project’s TypeScript and styled-components conventions. Contact VegarBerentsen@gmail.com for questions or feedback.
Contact

Author: Vegar Berentsen
Email: VegarBerentsen@gmail.com
Phone: +47 485 96 755
Location: Ovenbakken 31 A, Østerås, Norway

Visit the live site at https://designr-pro.vercel.app (update with your actual Vercel URL if different).
