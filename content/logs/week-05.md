---
title: "Week 5 — Flutter Mobile App & Firebase Integration"
slug: "week-05"
period: "Mar 9–13, 2026"
week: 5
tags: ["Flutter", "Dart", "Firebase", "Mobile"]
---

## Overview

Pivoted to mobile this week — began building the Flutter companion app for MediTrack with Firebase as the backend.

## Day-by-Day

**Mar 9** — Set up Flutter development environment. Initialized the `meditrack_mobile` project and configured Firebase via `flutterfire configure`.

**Mar 10–11** — Built the core screens: Login, Patient Dashboard, Prescription List, and Adherence Log. Applied Material Design 3 components throughout.

**Mar 12–13** — Integrated Firestore real-time listeners for prescription and alert data. Set up Firebase Auth for login/logout flow with role detection.

## What I Learned

- Flutter widget tree and state management with `setState`
- Dart null safety and strong typing practices
- `StreamBuilder` for real-time Firestore data
- Firebase Auth flow for mobile: sign in, sign out, and auth state persistence

## Technical Notes

- Used `cloud_firestore` and `firebase_auth` Flutter packages
- Created reusable `PrescriptionCard` and `AlertBadge` widgets
- Implemented bottom navigation with role-aware tab visibility
