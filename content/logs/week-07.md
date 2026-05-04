---
title: "Week 7 — Bug Fixes, UI/UX Polish"
slug: "week-07"
period: "Mar 23–27, 2026"
week: 7
tags: ["Flutter", "React.js", "UI/UX", "Testing"]
---

## Overview

Dedicated polish week — squashed bugs across both the web and mobile apps, refined UI interactions, and improved overall UX consistency.

## Day-by-Day

**Mar 23** — Conducted a full bug audit across MediTrack web and mobile. Created a prioritized issue list with reproducible steps.

**Mar 24–25** — Fixed critical bugs: prescription date display off by one day, Firestore listener not unsubscribing on unmount, and avatar not refreshing after upload.

**Mar 26–27** — UI polish pass: consistent spacing, color tokens, typography scale, and loading states. Added skeleton loaders for async data screens.

## What I Learned

- Systematic approach to bug investigation and reproduction
- React `useEffect` cleanup patterns to prevent memory leaks
- Importance of design tokens for cross-platform consistency
- Writing clear bug reports with steps to reproduce

## Technical Notes

- Fixed date issue by normalizing timestamps to ISO 8601 before display
- Added `dispose()` calls to all Firestore stream subscriptions in Flutter
- Introduced a shared color constants file for both platforms
