# PrayerTimes - Arabic Countries Prayer Schedule Platform

[![Frontend](https://img.shields.io/badge/Frontend-HTML5_/_CSS3_/_JS-orange.svg)](#)
[![API](https://img.shields.io/badge/Data_Source-External_Prayer_API-blue.svg)](#)
[![Design](https://img.shields.io/badge/Design-Responsive_/_Clean-green.svg)](#)

A fast, lightweight, and fully responsive web application designed to help users instantly track accurate daily prayer times across various Arabic countries. By integrating a live external REST API with Vanilla JavaScript, the platform fetches up-to-the-minute geographical data, helping millions of Muslims stay connected to their daily prayers.

---

## Project Objectives

* **Community Utility:** Deliver a simple, ad-free, and accessible tool for users to check prayer timings on any device.
* **Asynchronous Data Fetching:** Master the use of modern JavaScript asynchronous operations (`async/await` and Fetch API) to pull live global data.
* **Dynamic UI Updates:** Modify the browser DOM instantly based on the country and city selected by the user without refreshing the page.
* **Timezone Accuracy:** Display precise local times based on the specific calculation methods used in the Arab world.

---

## The Impact & Value of PrayerTimes

Many mobile applications for prayer times are bloated with heavy ads, slow loading times, or require forceful location tracking. **PrayerTimes** delivers absolute convenience:

* **Zero Loading Friction:** Completely server-independent on the frontend; it relies on smooth client-side execution for instant results.
* **Empowers Travelers:** Allows anyone traveling across Arab nations to quickly switch cities and know the exact prayer time differences instantly.
* **No Setup Required:** Runs entirely inside any modern browser with a single click, removing the need to download heavy mobile apps.

---

## Key Features

### Location-Based Selection
* **Arab Countries Filter:** menus to easily switch between different Arab countries.
* **Live Clock & Date:** Built-in dynamic real-time clock displaying the current time and date.

### Dynamic Prayer Schedule Card
* **Complete Timings:** Displays all 5 daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) plus Sunrise (Shuruq).

### 🔌 API Integration Logic
* **Asynchronous Fetching:** Robust JavaScript error-handling to ensure the app handles network drops or API downtime gracefully.
* **Zero-Lag UI:** Data updates instantly as soon as the user changes their location preference.

---

## Technology Stack

* **Markup & Layout:** HTML5
* **Styling & Custom Themes:** CSS3 (Featuring modern layout flexbox/grid for clean mobile responsiveness)
* **Application Logic:** Vanilla JavaScript (ES6+, utilizing native `fetch`, `async/await`, and promises)
* **Data Source:** Aladhan API
