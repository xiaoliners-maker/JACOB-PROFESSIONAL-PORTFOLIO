---
title: "Week 6 — Edit Profile, Avatar Upload & Push Notifications"
slug: "week-06"
period: "Mar 16–19, 2026"
week: 6
tags: ["Flutter", "Firebase Storage", "FCM", "Push Notifications"]
---

## Overview

Feature-heavy week on the mobile app — added profile editing, avatar upload to Firebase Storage, and push notifications via Firebase Cloud Messaging (FCM).

## Day-by-Day

**Mar 16–17** — Built the Edit Profile screen: name, contact, and role fields with Firestore write-back. Added image picker integration using `image_picker` package.

**Mar 18** — Implemented Firebase Storage avatar upload with real-time progress indicator. Images stored under `avatars/{userId}.jpg`.

**Mar 19** — Configured FCM for push notifications. Set up notification channels, foreground/background handlers, and topic subscriptions for doctor alerts.

## What I Learned

- Firebase Storage upload workflow with progress tracking
- FCM setup for Flutter: `firebase_messaging` package configuration
- Handling notification permissions on both Android and iOS (simulator)
- Form validation patterns in Flutter with `GlobalKey<FormState>`

## Technical Notes

- Avatar images compressed before upload using `flutter_image_compress`
- FCM topics: `doctor_alerts`, `patient_reminders`
- Notification payload includes `prescription_id` for deep linking
