<LearniverseLogo alt="Learniverse Logo" data-testid="Learniverse Logo"/>
<br />
<div align="center">
<h3 align="center">Learniverse</h3>

  <p align="center">
    everything to make your studies easier
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#main-functions">Main Functions</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#tests">Tests</a></li>
      <ul>
        <li><a href="#e2e-tests-playwright">E2E-Tests (Playwright)</a></li>
        <li><a href="#unit-tests-jest">Unit-Tests (Jest)</a></li>
      </ul>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

Learniverse is a learning platform specifically for the Media Informatics course.
Users can make tutoring requests, use a plotting tool to graphically display mathematical formulas and review the content of individual subjects for optimal exam preparation.
The footer of the page contains links to the imprint.

### Main Functions:

- YouTube videos on the individual chapters of the modules
- Chatbot: Artificial intelligence for answering questions
- Graphtool: Visualization of mathematical functions

### Built With

- [Next.js](https://nextjs.org/) - Framework for server-side rendering and API routing
- [React](https://reactjs.org/) - JavaScript library for the user interface
- [YouTube API](https://developers.google.com/youtube/v3) - API for the integration of YouTube videos
- [Groq](https://console.groq.com/) - API for the integration of Groq artificial intelligence

## Getting Started

### Prerequisites

- npm

```sh
  npm install npm@latest -g
```

### Installation

1. Clone the Repo

```sh
   git clone https://gitlab.cs.hs-rm.de/dross001/learniverse.git
```

2. Navigate to Folder "learniverse"

```sh
   cd learniverse
```

4. Install NPM Packages

```sh
   npm install
```

5. Enter Your API in This File: `.env.local`

```js
NEXT_PUBLIC_API_KEY = "secret";
NEXT_PUBLIC_YT_API_KEY = "secret";
```

6. Start the Project

```sh
   npm run dev
```

## Folder Structure

<pre>‚
├── __mocks__
├── .next
├── .vscode
├── components
│   ├── BenefitCardBar
│   │   ├── BeneditCard
│   │   │   ├── BeneditCard.Module.css
│   │   │   ├── BeneditCard.tsx
│   │   ├── ...
│   ├── ...
├── context
├── coverage
├── interfaces
├── node_modules
├── pages
│   ├── api
│   │   ├── content.ts
│   ├── moduleDetail
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── 404.module.css
│   ├── 404.tsx
│   ├── graphiverse.module.css
│   ├── graphiverse.tsx
│   ├── index.module.css
│   ├── index.tsx
├── playwright-report
├── public
│   ├── fonts
│   ├── ...
├── styles
│   ├── globals.css
├── tests
│   ├── playwright_e2e
│      ├── header.spec.ts
│      └── ...
├── unitTests
    ├── Chat.test.tsx
├── .env.local
└── ...
</pre>

## Tests

### E2E-Tests (Playwright)

```sh
# Before all (in different terminal)
npm run dev

# Execute all tests
npx playwright test

# Execute a special test (here: “Click First Module Card”)
npx playwright test -g "Click First Module Card"

# Record your own test (at the end the url where it should start)
npx playwright codegen localhost:3000

# Execute all tests in indexTest.spec.ts
npx playwright test indexTest.spec.ts

# Open Ui to execute all tests (optional: write specific file after “test”)
npx playwright test --ui

# Execute all tests in test.spec.ts and watch (write specific file to “test” if necessary)
npx playwright test --headed

# Shows report of the last executed test (overview of what failed and why)
npx playwright show-report
```

### Unit-Tests (Jest)

```sh
# Alle Tests ausführen
npm test
```

Node:
In file package-lock.json a script is defined
-> with "npm test" the command "npm run jest tests/jest" is executed (so playwright tests don't get tested at the same time)

## Contact

Valentin Diehl - Valentin.Diehl@student.hs-rm.de
<br/>
Julia Trumpp - Julia.Trumpp@student.hs-rm.de
<br/>
David Rossel - David.rossel@student.hs-rm.de

<br><br>
