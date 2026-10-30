# Miovision — Intelligent Transportation Systems (ITS) & AI Traffic Management

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://arabiabdou453-cpu.github.io/miovision/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Industry](https://img.shields.io/badge/Industry-ITS%20%7C%20Smart%20Cities%20%7C%20V2X-blueviolet?style=for-the-badge)](https://miovision.com/)
[![Global Impact](https://img.shields.io/badge/Deployments-50%2B%20Countries%20%7C%201000%2B%20Agencies-success?style=for-the-badge)](https://miovision.com/)

An enterprise-grade smart mobility and traffic management platform powering the future of urban infrastructure. Miovision delivers edge-based AI video analytics, connected vehicle (V2X) integration, automated traffic signal performance measures (ATSPMs), and adaptive signal timing across municipal, regional, and state transportation departments worldwide.

---

## 🌟 Live Demo

- **Public Live Application:** [https://arabiabdou453-cpu.github.io/miovision/](https://arabiabdou453-cpu.github.io/miovision/)
- **Source Repository:** [https://github.com/arabiabdou453-cpu/miovision](https://github.com/arabiabdou453-cpu/miovision)

---

## 🚦 Platform Architecture & Overview

Miovision bridges hardware at the signal cabinet with cloud-based intelligence, turning intersections into real-time digital hubs for public transit, emergency vehicles, freight, cyclists, and pedestrians.

```
+---------------------------------------------------------------------------------------+
|                         Miovision Unified Smart Mobility Platform                     |
+---------------------------------------------------------------------------------------+
         │                                   │                               │
         ▼                                   ▼                               ▼
+───────────────────────────+   +───────────────────────────+   +───────────────────────────+
|     Signal Optimization   |   |     Traffic Insights      |   |     Connected Vehicle     |
| • MATEO Adaptive Control  |   | • Continuous ATSPMs       |   | • V2X & C-V2X Telemetry   |
| • Automated Retiming      |   | • Multimodal Classification|  | • Emergency TSP Priority  |
| • Controller Management   |   | • Safety & Conflict Audit |   | • Corridor Synchronization|
+───────────────────────────+   +───────────────────────────+   +───────────────────────────+
         │                                   │                               │
         └───────────────────────────────────┼───────────────────────────────┘
                                             ▼
+---------------------------------------------------------------------------------------+
|                           Enterprise City & Regional Deployment                       |
|   • Departments of Transportation (DOTs)  • Smart Cities  • MPOs  • Traffic Centers   |
+---------------------------------------------------------------------------------------+
```

---

## 🚀 Key Modules & Capabilities

### 1. Adaptive Traffic Signal Optimization (Miovision MATEO)
- **Real-Time Signal Actuation:** Dynamically adjusts green splits, cycle lengths, and coordination offsets in response to actual vehicle and pedestrian queues.
- **Corridor Progression:** Eliminates corridor bottlenecks and reduces stops, idle fuel consumption, and greenhouse gas emissions.
- **Emergency Vehicle & Transit Priority (TSP):** Seamless integration with fire, EMS, and transit fleet dispatch systems for rapid green clearance.

### 2. High-Precision Multimodal AI Detection
- **Computer Vision at the Intersection Edge:** Simultaneous high-accuracy detection and tracking of motor vehicles, articulated trucks, transit buses, bicycles, and pedestrians.
- **Automated Signal Performance Measures (ATSPMs):** Real-time Purdue Coordination Diagrams, Split Failure reports, and Arrival on Green metrics without requiring expensive manual turning movement counts.

### 3. Controller Manager & Cabinet Remote Diagnostics
- **Remote Cabinet Monitoring:** Direct telemetric connection to all standard controller brands (NEMA TS1/TS2, 2070, 170, ATC).
- **Proactive Maintenance Alerts:** Detects flash events, detector faults, and power fluctuations before citizens report them.

### 4. Safety Analytics & Vision Zero Enablement
- **Near-Miss & Surrogate Safety Analysis:** Quantifies post-encroachment time (PET) and collision risk hot-spots to inform proactive engineering interventions before accidents happen.

---

## 🌍 Proven Global Deployments

Miovision solutions are deployed by leading municipal authorities, provincial governments, and state DOTs globally:

| Agency / Municipality | Region | Implementation Focus |
|:---|:---|:---|
| **Texas Department of Transportation (TxDOT)** | Texas, USA | Statewide corridor optimization and automated performance reporting. |
| **Florida Department of Transportation (FDOT)** | Florida, USA | ATSPM deployment, signal health monitoring, and multimodal data collection. |
| **Massachusetts Department of Transportation (MassDOT)** | Massachusetts, USA | Regional intersection telemetry and adaptive signal control. |
| **San Francisco Municipal Transportation Agency (SFMTA)** | California, USA | High-density urban multimodal detection and transit signal priority. |
| **City of Toronto** | Ontario, Canada | Citywide traffic data analytics, Vision Zero safety monitoring, and automated counts. |
| **Abu Dhabi Integrated Transport Centre (ITC)** | UAE | Advanced traffic control systems and smart intersection management. |

---

## 💻 Tech Stack & Deployment Options

- **Frontend:** Semantic HTML5, CSS3 with modular slide menus, Animate On Scroll (AOS) animations, and responsive mega-menu navigation.
- **Server:** Zero-dependency Node.js HTTP server (`server.js`) with static MIME resolution and SPA route fallback.
- **Offline Assets:** Complete vector brand marks, customer seals, web fonts, and Dashicon iconography bundled locally.

---

## 🛠️ Quick Start Guide

### Prerequisites
- Node.js (v16.0 or higher recommended)
- Git

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arabiabdou453-cpu/miovision.git
   cd miovision
   ```

2. **Start the local server:**
   ```bash
   npm start
   ```

3. **Open the browser:**
   ```
   http://localhost:3000
   ```

---

## 📁 Repository Structure

```
miovision/
├── assets/                    # Platform themes, styles, graphics & uploads
│   ├── plugins/                   # Frontend menu and form components
│   ├── themes/moivisionWPv2/      # Brand styles, vector iconography & scripts
│   └── uploads/                   # High-resolution agency seals, product art & logos
├── assets/fonts/                   # Core stylesheets, scripts & dashicons font pack
├── 404.html                       # Fallback router error handler
├── index.html                     # Main application entry point
├── package.json                   # Project metadata and npm start script
├── server.js                      # High-efficiency static HTTP server
├── LICENSE                        # MIT License
├── .nojekyll                      # Disables Jekyll processing on GitHub Pages
└── README.md                      # Comprehensive platform documentation
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
