# 🌱 Skill Bloom — Peer-to-Peer College Learning Platform

> *"Share Your Skills. Grow Together."*

Skill Bloom is a modern, responsive, and student-first peer-to-peer learning platform designed exclusively for college students. Students can teach subjects they understand well and receive personalized 1-on-1 mentorship in subjects they find challenging.

**Skill Bloom is NOT a traditional tutor-finding or paid-class platform.** It is an equitable academic collaboration network powered by smart compatibility matching, verifiable skill evidence, connection safety gates, and Google Meet-style integrated WebRTC video learning rooms.

---

## 🛠️ Technology Stack

- **Frontend**:
  - React 18 with Vite
  - Tailwind CSS with custom emerald (`#10b981`), fresh green (`#16a34a`), and soft purple (`#8b5cf6`) accents
  - Lucide React icon suite
  - Native WebRTC Audio/Video & Screen Sharing client
  - Responsive mobile, tablet, and desktop design

- **Backend**:
  - Python 3.13 with FastAPI
  - SQLAlchemy ORM with SQLite (pre-configured for instant development, easily switchable to PostgreSQL)
  - JWT Authentication (HS256) & Passlib Bcrypt password hashing
  - WebSockets for private real-time chat & WebRTC signaling
  - Aiofiles & Multipart file upload handling with strict MIME/size validation

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Python 3.10+** (tested on Python 3.13)
- **Node.js 18+** & **npm**

### 2. Launch Entire App with One Click (Windows)
Double-click `run_app.bat` or run:
```cmd
run_app.bat
```
This will automatically launch the backend server on `http://127.0.0.1:8000` and the frontend Vite app on `http://localhost:5173`.

---

### 3. Manual Step-by-Step Setup

#### Backend Setup:
```bash
# Navigate to backend directory
cd backend

# Create virtual environment (if not already created)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server (database will be automatically created & seeded with demo students)
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```
- Interactive Swagger API Documentation: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Health Check: [http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)

#### Frontend Setup:
```bash
# Navigate to frontend directory in another terminal
cd frontend

# Install npm dependencies
npm install

# Start Vite dev server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎭 Pre-Configured Demo Accounts (Instant 1-Click Login)

For fast evaluation, demo accounts are pre-seeded with realistic college courses, subjects taught, learning goals, certificates, and ratings. You can log in manually or use the **"Demo Student" switcher** in the top navbar:

| Student Name | College Email | Password | Role / Specialization | Avatar |
|---|---|---|---|---|
| **Dev Test Student** | `test@demo.edu` | `password123` | CS 4th Sem (Tester account with sample connections) | 🦉 Wise Owl |
| **Aarav Sharma** | `aarav@demo.edu` | `password123` | DSA & Python Expert (Rating: 4.9, 14 sessions) | 💻 Tech Prodigy |
| **Priya Patel** | `priya@demo.edu` | `password123` | Discrete Math & DBMS Mentor (Rating: 5.0) | 🧙 Math Wizard |
| **Rohan Verma** | `rohan@demo.edu` | `password123` | Web Development & React Peer (Rating: 4.85) | 🚀 Explorer |
| **Ananya Gupta** | `ananya@demo.edu` | `password123` | Operating Systems & Networks (Rating: 4.95) | 🦊 Clever Fox |
| **Kabir Mehta** | `kabir@demo.edu` | `password123` | C Programming & Academic English (Rating: 4.75) | 🤖 AI Builder |

---

## 🌟 Key Features & Architectural Highlights

### 1. Smart Subject Matching & Ranking Algorithm
- When a student picks a subject to learn, Skill Bloom ranks available peer mentors using a modular rule-based engine:
  - **Subject Proficiency**: Advanced (+30 pts), Intermediate (+20 pts), Beginner (+10 pts)
  - **Verified Evidence & Assessments**: Institution Verified (+25 pts), Assessment Passed (+20 pts), Project Reviewed (+16 pts), Certificate Uploaded (+10 pts)
  - **Peer Reviews & Ratings**: Scaled out of 15 pts based on student review averages
  - **Completed Sessions**: Up to 10 pts based on real 1-on-1 teaching experience
  - **Language Compatibility**: +10 pts for identical preferred learning languages
  - **Availability Overlap**: +5 pts for matching study windows (evenings, weekends)
  - **College Synergy**: +5 pts bonus when mentors attend the same college
- **Transparency**: Compatibility is clearly labeled as an *Estimated Match Score (not a guarantee of teaching ability)* with an expandable breakdown explaining every point factor.
- **Filters**: Filter by proficiency, course, language, minimum rating, and availability keywords.

### 2. Academic Verification & Proof Vault
Skill Bloom strictly enforces distinct proof labels to protect academic honesty:
- 🛡️ **Institution Verified**: Officially verified via university transcript or institutional assessment.
- 🏆 **Assessment Passed**: Standardized subject quiz passed with recorded score.
- 💻 **Project Reviewed**: GitHub repository and code architecture evaluated.
- 📄 **Certificate Uploaded**: Certificate document uploaded by student.
- *Strict Rule: Uploading a file never grants automatic institution verification.*
- **Document Privacy Settings**: Students can set documents to `Connections Only` (default), `Public`, or `Private`.

### 3. Mutual Connection Request System (Zero-Spam Policy)
- **Direct calling and private messaging strangers are strictly forbidden.**
- A student must send a connection request with an intro note.
- Only upon mutual acceptance by the other peer are private chat and video room scheduling unlocked.
- Supports accepting, rejecting, cancelling pending requests, disconnecting, and blocking/reporting.

### 4. Google Meet-Style WebRTC Video Learning Room
- Integrated video classroom with:
  - Microphone mute/unmute
  - Camera on/off
  - Screen sharing (`getDisplayMedia`)
  - In-call live chat & notes drawer
  - Active call timer
  - Session leave button prompting review submission
- **How to test live 2-way video locally**:
  1. Open Chrome window #1 and log in as `test@demo.edu`.
  2. Open an Incognito window or Firefox/Edge window #2 and log in as `aarav@demo.edu`.
  3. Go to **Sessions** and join the same scheduled session room (or click Video Call in their accepted chat).
  4. Both browsers establish a direct WebRTC peer connection via FastAPI WebSocket signaling!

### 5. Private Real-Time Chat & Calendar Scheduling
- Exchanged messages with read indicators, timestamps, and active socket delivery.
- Integrated calendar for scheduling 1-on-1 sessions with custom dates, duration, role (teaching or learning), and notes.
- Review modal with 5-star rating, teaching clarity, helpfulness, and punctuality ratings.

### 6. Student Dashboard & Gamification
- Welcome banner with student profile summary.
- Recommended peers based on current learning goals.
- Achievement Badges:
  - 🌱 *Welcome to Skill Bloom*
  - 🤝 *Connected Peer*
  - 🌸 *First Bloom* (First completed session)
  - 🚀 *Active Peer* (5+ sessions)
  - ⭐ *Five-Star Mentor* (High trust ratings)

---

## 🧪 Automated Testing

A full suite of automated tests is included in `backend/tests/test_skillbloom.py`.
To run tests:
```bash
cd backend
venv\Scripts\python -m pytest -v tests/test_skillbloom.py
```
**Test Results: 9/9 Passed (100% pass rate)**:
- `test_health_check`
- `test_login_demo_user`
- `test_login_invalid_credentials`
- `test_get_avatars_catalog`
- `test_list_subjects`
- `test_smart_matching_and_ranking`
- `test_prevent_messaging_strangers_without_accepted_connection`
- `test_connection_flow_and_subsequent_chat`
- `test_session_lifecycle_and_review`

---

## 📄 License
Designed and developed for collegiate peer learning empowerment.
Tagline: **"Share Your Skills. Grow Together."**
