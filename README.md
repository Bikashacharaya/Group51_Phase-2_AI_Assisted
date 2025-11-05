🧠 School Equipment Lending Portal – Phase 2 (AI-Assisted Development)
📘 Project Overview

This project is the Phase 2 continuation of the School Equipment Lending Portal, originally built using Flask (Python), MongoDB, and ReactJS in Phase 1.
In this phase, the system is refactored, enhanced, and partially rebuilt using AI-assisted development tools, primarily ChatGPT (GPT-5).

🧩 Objective

The goal of Phase 2 is to:

Utilize AI tools to refactor and optimize the existing system.

Improve performance, structure, and user experience.

Document AI usage, benefits, and limitations.

Compare manual development (Phase 1) vs AI-assisted development (Phase 2) workflows.

🧰 Tech Stack
Component  Technology
Frontend  ReactJS (Functional Components, Hooks, Axios)
Backend  Flask (Python) with JWT authentication
Database  MongoDB
AI Tool Used  Copilot (GPT-5)
Other Tools  Postman, VS Code, Git
🧠 AI Tools & Usage

ChatGPT (GPT-5) was used for:

Refactoring Flask backend into modular Blueprints (auth, equipment, loans).

Generating and improving React components (Dashboard, PendingRequests, ApprovedLoans, etc.).

Creating reusable frontend utilities (useFetch, NotificationBar, api.js).

Improving UI layout and error handling.

Auto-generating documentation (API Docs, Architecture Diagram, DB Schema).

Debugging issues in JWT authentication and MongoDB integration.

⚙️ System Architecture
Client (React)
   |
   |---> /v1/auth        → Authentication (Login/Signup)
   |---> /v1/equipment    → Equipment CRUD APIs
   |---> /v1/loans        → Loan request/approval/return flow
   |
Backend (Flask + JWT)
   |
   |---> MongoDB (Collections: users, equipment, loans)


💡 Key Enhancements (Phase 2)

✅ Added centralized API handler (api.js) with JWT token management.

✅ Integrated NotificationBar for contextual success/error feedback.

✅ Added “Mark Returned” and “View Approved Loans” features for Admin.

✅ Introduced modular Flask Blueprints (auth.py, equipment.py, loans.py).

✅ Improved UI styling and responsiveness.

✅ Enhanced error handling and message display consistency.

✅ Added AI-generated documentation and architecture visuals.

🧩 AI Usage Reflection Summary

AI Benefits

Reduced development and documentation time by ~40%.

Improved modularity and readability.

Helped resolve code mismatches and optimize structure.

AI Limitations

Occasional syntax or route prefix mismatches.

Needed manual debugging for JWT and MongoDB logic.

Some UI behavior logic required human correction.

📄 Deliverables

✅ Phase 2 Enhanced System Code (Backend + Frontend)

✅ AI Usage Log & Reflection Report (PDF/Word)

✅ Updated Documentation (Architecture, DB, APIs)

✅ Demonstration Recording
