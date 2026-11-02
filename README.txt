GRO BUSINESS SCHOOL — HOSTING-READY WEBSITE
=========================================
Prepared: 2 November 2026

PACKAGE CONTENTS
----------------
index.html       Complete landing page
style.css        All styling, responsive layouts and visual effects
app.js           Programme filters, course details, menu and View more interaction
assets/          GRO logo and all website photographs
README.txt       Hosting instructions and project summary
QA-CHECKLIST.txt  Checks to complete after uploading
 docs/           Original website requirements and implementation notes

HOW TO HOST
-----------
1. Extract this ZIP on your computer.
2. Upload index.html, style.css, app.js and the entire assets folder to your
   hosting provider's public website folder. Keep these items together.
   index.html must be at the root of the published folder.
3. No build command, Node.js server, package installation or database is needed.
4. Use your hosting provider's domain settings to connect your domain.
   Follow the exact DNS values supplied by the hosting provider.
5. Enable HTTPS using the hosting provider's SSL settings.
6. Open the domain and use QA-CHECKLIST.txt to check the published result.

For static-site upload hosting, upload the folder containing index.html.
For Git-based hosting, commit the website files and choose static-file hosting,
with no build step and the repository root as the published directory.
The docs folder, README and checklist are handover material and do not need
 to be uploaded to your public website.

LOCAL PREVIEW
-------------
You can open index.html directly in a browser for a basic preview.
For an HTTP preview, if Python 3 is already installed, run this command inside
 the extracted folder:

    python3 -m http.server 8080

Then visit http://localhost:8080. Stop the server with Ctrl+C.

LATEST DESIGN INCLUDED
----------------------
- Supplied GRO logo, navy and turquoise branding.
- Hero, benefits, about, vision and mission.
- Five compact photographic programme category cards with filtering.
- Professional Courses: four image cards across on desktop.
- View more courses expands to ten courses; Show fewer restores four.
- Course detail dialogs.
- Graduation-cap graphic beside the Professional Courses heading.
- Online learning, partnerships, admissions, contact and footer sections.
- Blue circular LMS Login and green circular Support buttons.
- Responsive desktop, tablet and mobile layouts.

IMPORTANT: WHAT THIS PACKAGE DOES AND DOES NOT INCLUDE
-----------------------------------------------------
This is the completed landing-page frontend, not the full institutional
platform described in the original requirements. It has no backend,
administration panel, student account system, payment processing, database,
application tracking, document uploads or working enquiry submission service.
Buttons for admissions, LMS, partnerships and support currently display clear
information dialogs. They do not submit applications or send enquiries.

BEFORE A PUBLIC LAUNCH
----------------------
Obtain and connect:
- Official GRO LMS login URL.
- Official support email and WhatsApp number or approved live-chat service.
- Admissions and partnership enquiry destination or backend.
- Confirmed course descriptions, availability, fees, duration, entry
  requirements, modules, assessment and awarding-institution information.
- Approved privacy notice and terms, and any required consent handling.

Keep undergraduate and postgraduate degrees marked as proposed until formal
partnerships and academic approvals are secured. The website does not claim
existing university partnerships. Do not add partner logos without approval.

EDITING CONTENT
---------------
Page sections and floating button SVG icons: index.html
Colours, spacing, cards, breakpoints and typography: style.css
Programme lists: courses and categories arrays in app.js
Professional course list: professionalCourses array in app.js
Professional course images: renderProfessional() in app.js
Pending integration messages: messages object in app.js

To make an LMS or support button navigate to a confirmed URL, replace its
button element with an anchor linking to that URL, and update relevant CSS
selectors to preserve the floating-button appearance. Alternatively update
its data-info handler in app.js. Never place private API keys in these files.

ASSETS AND EXTERNAL DEPENDENCIES
-------------------------------
All photographs and the supplied GRO logo are included locally in assets/.
Photographs are illustrative stock imagery and do not establish ownership of
 a campus, affiliation with any university, or actual students of GRO.
Photographs were obtained from images.unsplash.com; source image IDs are
 recorded in docs/ASSET-SOURCES.txt. Confirm usage rights before public use.
The logo was supplied by the client.

Fonts: DM Sans and Manrope are loaded from Google Fonts using the @import at
 the beginning of style.css. This requires internet access and makes requests
 to Google font services. System fonts are used if unavailable. Self-host
licensed font files if required by your deployment or privacy requirements.
There are no analytics, trackers, API credentials or database credentials
 intentionally included in this package.

EXISTING PRIVATE REVIEW SITE
---------------------------
https://gro-business-school-mansoor.aswinchatg1.chatgpt.site
This ZIP can be hosted independently. It does not connect your domain or
change the access permissions of the existing private review site.
