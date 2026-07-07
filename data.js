/* ============================================================================
   EDIT YOUR CONTENT HERE
   ----------------------------------------------------------------------------
   This is the ONLY file you need to touch to update the site.
   Add an object to any array below and a new row/card appears automatically.
   - To add a project:  add an object to `commercial`, `personal`, or `openSource`.
   - To add a skill:     add a string to the relevant group's `items`.
   - To show a brand logo on a chip: make sure the tech name has an entry in
     `iconMap` at the bottom (name -> Simple Icons slug, see simpleicons.org).
   ========================================================================== */

const PORTFOLIO = {
  // ---- Identity -----------------------------------------------------------
  name: 'Vitalii Svietkov',
  role: 'Backend Developer',
  handle: 'vitalii.dev',
  initials: 'V', // letter shown in the rail logo badge
  location: 'Dnipro, Ukraine',

  email: 'vsvietkov@gmail.com',
  github: 'https://github.com/vsvietkov',
  linkedin: '',
  resume: '',
  photo: 'https://avatars.githubusercontent.com/u/95583010',

  // One of: 'Available for full-time' | 'Available for freelance' | 'Not available'
  availability: 'Not available',

  // ---- Rail meta block ----------------------------------------------------
  // A meta row shows `value` as-is, OR use `since: 'YYYY-MM'` (or 'YYYY') to
  // auto-compute elapsed time from that date (e.g. "5 years"), updated daily.
  meta: [
    { label: 'Experience', since: '2021-09' },
    { label: 'Based in',   value: 'Dnipro, Ukraine' },
    { label: 'Languages',  value: 'English · Ukrainian · Russian' },
    { label: 'Core stack', value: 'Go · PHP · JavaScript' },
  ],

  // ---- Section navigation (drives the numbered rail nav) ------------------
  // `id` must match the <section id="…"> in index.html.
  // `grouped: true` puts a section inside the indented blue-bordered cluster
  // in the nav (used here for the three "project" sections).
  sections: [
    { id: 'skills',      label: 'skills' },
    { id: 'work',        label: 'commercial',  grouped: true },
    { id: 'personal',    label: 'personal',    grouped: true },
    { id: 'open-source', label: 'open source', grouped: true },
    { id: 'experience',  label: 'experience' },
    { id: 'contact',     label: 'contact' },
  ],

  // ---- Skills & stack -----------------------------------------------------
  skills: [
    {
      group: 'Languages',
      items: ['Go', 'PHP', 'JavaScript', 'SQL'],
    },
    {
      group: 'Backend & frameworks',
      items: ['Laravel', 'GraphQL', 'Gin / Echo', 'REST', 'SOA', 'Microservice', 'Serverless'],
    },
    {
      group: 'Data & infrastructure',
      items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS', 'SQS', 'DynamoDB', 'UNIX'],
    },
    {
      group: 'AI & tooling',
      items: ['Claude Code', 'LLM agents', 'Prompt pipelines', 'GitHub Actions (CI/CD)', 'Devcontainers', 'JetBrains'],
    },
  ],

  // ---- Commercial work (NDA thumbnail) ------------------------------------
  // Optional flags: aiFirst: true | image: 'path/to/shot.png' | nda: false
  // Thumbnail: `image` wins if set; otherwise the NDA placeholder, unless
  // `nda: false`, which shows an initials placeholder (like personal projects).
  commercial: [
    {
      title: 'Pharmaceutical Document Ingestion & Validation Platform',
      desc: 'A document intelligence pipeline that ingests approved pharmaceutical marketing materials from Veeva    \n' +
          '  Vault, extracts structured knowledge artifacts using AI, and routes them through a multi-stage          \n' +
          '  human-in-the-loop (HITL) validation workflow. Features a parallel double-validation engine with         \n' +
          '  automatic F1 agreement scoring and escalation logic, a correction UI for annotators to review and fix AI\n' +
          '  extractions, and an admin suite for entity management, audit browsing, rollback, and annotator          \n' +
          '  performance analytics.',
      tags: ['Go', 'PostgreSQL', 'AWS'],
      aiFirst: true,
      nda: true,
    },
    {
      title: 'Pharma Content Authoring Platform',
      desc: 'An AI-powered internal web application that enables compliant omnichannel content creation for life sciences and pharmaceutical marketing teams, featuring intelligent content reuse, no-code authoring tools, Veeva Vault integration, and built-in compliance assistants to accelerate email, detail aid, social, and web content production.',
      tags: ['Go', 'PHP', 'Node', 'Gin / Echo', 'Laravel', 'PostgreSQL', 'AWS', 'SOA', 'Serverless'],
      aiFirst: true,
      nda: true,
    },
    {
      title: 'OHIF Fork',
      desc: 'A proof-of-concept fork of the OHIF DICOM microscopy viewer that extends the OpenLayers-based whole-slide pathology image viewer with new annotation and image-manipulation tooling: text-labeled arrow annotations persisted as DICOM Structured Reports (SR), interactive window-level (brightness) control, map rotation, and an always-on overview navigation mini-map.',
      tags: ['JavaScript', 'DICOM'],
      image: 'images/ohif-logo-light.webp',
      nda: false,
    },
    {
      title: 'Bound360',
      desc: 'A web-based AI-driven personalization and optimization platform that delivers actionable audience insights, 1:1 personalized web experiences, and segmentation capabilities to help marketers effectively engage known and anonymous visitors.',
      tags: ['React', 'JavaScript', 'jQuery'],
      image: 'images/bound360.svg',
      nda: false,
    },
    {
      title: 'Viaplay',
      desc: 'A leading Nordic web-based streaming platform that delivers a wide range of movies, TV series, documentaries, original content, and live sports to millions of subscribers across multiple countries.',
      tags: ['Laravel', 'PHP', 'Node', 'AWS', 'Serverless'],
      image: 'https://frontend-assets.viaplay.com/sanity/viaplay_image.jpeg',
      nda: false,
    },
    {
      title: 'Employee Management System',
      desc: 'An internal web-based platform designed to support Project Managers and HR teams by centralizing employee data, streamlining onboarding, performance tracking, leave management, and reporting processes.',
      tags: ['Laravel', 'PHP', 'jQuery', 'Azure'],
      nda: false,
    },
    {
      title: 'CV Management System',
      desc: 'An internal web-based platform developed to streamline the company\'s recruitment processes by enabling efficient storage, search, tracking, and reporting of candidate resumes and related data.',
      tags: ['Laravel', 'PHP', 'jQuery', 'Azure'],
      nda: false,
    },
  ],

  // ---- Personal projects --------------------------------------------------
  // Optional flags: aiFirst: true | status: 'in-progress' | status: 'upcoming'
  personal: [
    {
      title: 'Check For Me',
      desc: 'Self-hosted habit and streak tracker with a clean REST API and a tiny web client.',
      tags: ['Go', 'PHP', 'PostgreSQL', 'Laravel', 'SOA', 'AWS', 'SQS'],
      status: 'in-progress',
      aiFirst: true,
    },
    {
      title: 'Tree Builder (TBD)',
      desc: 'Terminal focus timer with daily logs and a weekly summary export.',
      tags: ['Go', 'Bubble Tea'],
      status: 'upcoming',
    },
  ],

  // ---- Open source & tools ------------------------------------------------
  openSource: [
    {
      name: 'golang-template',
      desc: 'Template project for Go backend applications.',
      link: 'https://github.com/vsvietkov/golang-template',
      tags: ['Go'],
    },
    {
      name: 'laravel-template',
      desc: 'Template project for PHP Laravel applications.',
      link: 'https://github.com/vsvietkov/template-laravel',
      tags: ['PHP', 'Laravel'],
    },
    {
      name: 'data-structures-golang',
      desc: 'My implementation of data structures in Go.',
      link: 'https://github.com/vsvietkov/data-structures-golang',
      tags: ['Go'],
    },
  ],

  // ---- Experience ---------------------------------------------------------
  // Optional: add `companyUrl` to turn the company name into a link (opens in
  // a new tab). Omit it to show the company as plain text.
  experience: [
    {
      period: '10.2023 — Present',
      role: 'Backend Developer',
      company: 'WebLab Technology',
      companyUrl: 'https://www.wltech.ai/',
      desc: 'Lead backend for the order-routing platform; designed the event pipeline and mentored two engineers.',
    },
    {
      period: '02.2023 — 10.2023',
      role: 'Full-stack Developer',
      company: 'Sigma Software',
      companyUrl: 'https://sigma.software',
      desc: 'Built and scaled the payments gateway and billing engine across a Laravel + Go service mesh.',
    },
    {
      period: '02.2022 — 02.2023',
      role: 'Junior Full-stack Developer',
      company: 'Sigma Software',
      companyUrl: 'https://sigma.software',
      desc: 'Delivered customer-facing features across PHP monoliths and the first Go microservices.',
    },
    {
      period: '09.2021 — 02.2022',
      role: 'Trainee Full-stack Developer',
      company: 'Sigma Software',
      companyUrl: 'https://sigma.software',
      desc: 'Delivered customer-facing features across PHP monoliths and the first Go microservices.',
    },
  ],

  // ---- Contact ------------------------------------------------------------
  contact: {
    heading: "Let's build something reliable.",
    blurb: 'Open to backend roles and freelance work. The fastest way to reach me is email.',
  },

  // ---- Tech-name -> Simple Icons slug -------------------------------------
  // Add a mapping to show a brand logo (in its original colour) on any chip
  // with this exact name. Names without a mapping just render as text.
  iconMap: {
    'Go': 'go',
    'PHP': 'php',
    'JavaScript': 'javascript',
    'Laravel': 'laravel',
    'GraphQL': 'graphql',
    'PostgreSQL': 'postgresql',
    'MySQL': 'mysql',
    'Redis': 'redis',
    'Docker': 'docker',
    'UNIX': 'linux',
    'Git': 'git',
    'Observability': 'grafana',
    'ClickHouse': 'clickhouse',
    'SQLite': 'sqlite',
    'HTMX': 'htmx',
    'jQuery': 'jquery',
    'Node': 'nodedotjs',
    'Claude Code': 'claudecode',
    'JetBrains': 'jetbrains',
    'React': 'react',
    'GitHub Actions (CI/CD)': 'githubactions',
    'Gin / Echo': 'gin',
    'Serverless': 'serverless',
  },
};
