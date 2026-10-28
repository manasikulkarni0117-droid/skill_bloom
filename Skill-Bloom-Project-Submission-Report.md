# Skill Bloom — Peer-to-Peer College Learning Platform
## Project Submission & Technical Report

**Tagline:** "Share Your Skills. Grow Together."  
**Platform Category:** Educational Technology / Collaborative Peer Learning  
**Target Audience:** College & University Students  

---

### 1. Executive Summary & Objective

Skill Bloom is an exclusive peer-to-peer knowledge exchange web platform designed for college students. The platform solves the fundamental mismatch where students excel in certain subjects (like Data Structures or Web Development) while struggling in others (like Operating Systems or Discrete Mathematics).

Unlike traditional paid-tutoring directories or commercial course websites:
- Skill Bloom is completely peer-driven and free from paid class commercials.
- Students teach what they master and learn what they find difficult directly from fellow college peers.
- Students build genuine, verifiable academic trust through transparent skill evidence and mutual peer reviews.

---

### 2. Full-Stack Technology Stack

| Layer | Technologies Used | Key Libraries & Specifications |
|---|---|---|
| **Frontend UI** | React 18, Vite | Tailwind CSS, Lucide React, Context API |
| **Video Calling** | WebRTC Native Client | Google STUN (`stun.l.google.com:19302`), Screen Sharing, In-call notes |
| **Backend API** | Python 3.13, FastAPI | Uvicorn, REST Endpoints, Asynchronous Handlers |
| **Database & ORM** | SQLite / PostgreSQL | SQLAlchemy 2.0 ORM, Relational Models & Indexes |
| **Authentication** | JWT (HS256) | Passlib Bcrypt Password Hashing, HTTPBearer Authorization |
| **Real-time Comms** | WebSockets | Real-time private chat & WebRTC room signaling |
| **File Handling** | Python-Multipart, Aiofiles | Secure unique naming, 10MB limit, strict MIME validation |

---

### 3. Key System Features

#### 3.1. Smart Subject Matching & Ranking Algorithm
- Modular rule-based algorithm evaluating:
  - Subject proficiency (Beginner, Intermediate, Advanced)
  - Proof level (Institution Verified, Assessment Passed, Project Reviewed, Certificate Uploaded)
  - Peer feedback rating average (out of 5.0)
  - Completed teaching sessions count
  - Shared learning language & availability keywords
  - College proximity synergy (+5 pts)
- Displays an **Estimated Match Percentage** with a detailed point-by-point breakdown tooltip.

#### 3.2. Academic Verification Standards
Strictly separates evidence into distinct, auditable statuses:
- 🛡️ **Institution Verified** (Officially accredited university validation)
- 🏆 **Assessment Passed** (Standardized peer testing score)
- 💻 **Project Reviewed** (GitHub repository code review)
- 📄 **Certificate Uploaded** (Student uploaded document)
- 👤 **Self-Reported** (Unverified)

#### 3.3. Mutual Connection Gate (Anti-Spam Security)
- Direct unsolicited messaging or calling of strangers is blocked at the backend level.
- Video rooms and private chat unlock exclusively after mutual connection acceptance.

#### 3.4. Google Meet-Style Integrated Video Classroom
- In-browser WebRTC video learning room with camera toggle, microphone mute, screen sharing, in-call chat, and live session duration timer.

#### 3.5. 13 Dedicated Application Views
1. Landing Page
2. Register & Login (with 1-Click Demo Logins)
3. Student Dashboard
4. Explore College Subjects
5. Ranked Mentor Results
6. Student Profile (with Illustrated Emoji Avatars)
7. Certificate & Project Portfolio
8. Connection Requests
9. Private Real-Time Chat
10. Video Learning Room
11. Session Calendar
12. Real-Time Notifications
13. Settings & Document Privacy

---

### 4. Verification & Testing

The backend includes automated tests verifying the end-to-end functionality:
- Authentication & JWT token issuance
- Subject listing & custom subject creation
- Compatibility ranking algorithm validation
- Connection gate enforcement (403 Forbidden for strangers)
- Private chat persistence & retrieval
- Session lifecycle & duplicate review prevention

**Test Suite Status: 9 / 9 Passed (100% Success Rate)**

---

### 5. Running the Application

```bash
# 1. Quick Launch (Windows):
run_app.bat

# 2. Manual Backend:
cd backend
python -m uvicorn app.main:app --port 8000 --reload

# 3. Manual Frontend:
cd frontend
npm run dev
```
Frontend URL: `http://localhost:5173`  
Backend API Docs: `http://127.0.0.1:8000/docs`
