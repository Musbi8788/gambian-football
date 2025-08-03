# ScoutMe Gambia - Football Talent Discovery Platform

ScoutMe Gambia is a comprehensive web platform designed to connect football players, scouts, and clubs across The Gambia. The platform facilitates talent discovery, player development, and recruitment processes in the Gambian football ecosystem.

## Features

### For Players
- **Professional Profiles**: Create detailed player profiles with personal information, statistics, and achievements
- **Video Showcase**: Upload and manage highlight videos to showcase skills
- **Statistics Tracking**: Track and display performance statistics across matches and seasons
- **Application Management**: Apply to clubs and track application status
- **Direct Messaging**: Communicate directly with scouts and club representatives
- **Opportunity Discovery**: Browse and apply for football opportunities
- **Settings & Privacy**: Comprehensive privacy controls and account management

### For Scouts
- **Advanced Player Search**: Search players using multiple filters (position, age, region, etc.)
- **Player Analytics**: Access detailed player statistics and performance data
- **Communication Tools**: Direct messaging with players and clubs
- **Recruitment Management**: Track and manage recruitment activities
- **Profile Management**: Maintain professional scout profiles

### For Clubs/Teams
- **Team Management**: Manage team rosters and player information
- **Recruitment Tools**: Post opportunities and manage applications
- **Player Development**: Track player progress and development
- **Analytics Dashboard**: Comprehensive analytics and reporting

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome 6.0
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Local Storage**: Browser storage for user preferences and session management

## Project Structure

\`\`\`
ScoutMe-Gambia/
├── index.html                 # Landing page
├── login.html                 # Login page
├── register.html              # Registration page
├── player-dashboard.html      # Player dashboard
├── player-profile.html        # Player profile management
├── player-videos.html         # Video management
├── player-stats.html          # Statistics display
├── player-applications.html   # Application management
├── player-messages.html       # Messaging system
├── opportunities.html         # Opportunity browsing
├── player-settings.html       # Settings and preferences
├── scout-dashboard.html       # Scout dashboard
├── scout-search.html          # Player search interface
├── scout-messages.html        # Scout messaging
├── scout-profile.html         # Scout profile
├── team-admin-dashboard.html  # Team admin dashboard
├── team-admin-players.html    # Team player management
├── team-admin-settings.html   # Team settings
├── assets/
│   ├── css/
│   │   ├── style.css          # Main stylesheet
│   │   ├── dashboard.css      # Dashboard-specific styles
│   │   ├── settings.css       # Settings page styles
│   │   └── landing.css        # Landing page styles
│   ├── js/
│   │   ├── main.js            # Landing page JavaScript
│   │   ├── auth.js            # Authentication JavaScript
│   │   ├── dashboard.js       # Dashboard functionality
│   │   └── settings.js        # Settings functionality
│   ├── images/
│   │   └── scoutme-logo.png   # Application logo
│   └── icons/                 # Additional icons
└── README.md                  # This file
\`\`\`

## Setup Instructions

### 1. Download and Extract
- Download the ScoutMe Gambia ZIP file
- Extract to your desired directory

### 2. Local Development
- Open the project folder in your preferred code editor
- Use a local web server to serve the files (recommended)

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
