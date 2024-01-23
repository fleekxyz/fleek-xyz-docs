---
draft: false
title: Release notes v0.0.3
sidebarCollapsible: false
sidebar_position: 6
date: 2023-01-10T09:00:00.000+00:00
description: Welcome to the documentation for the beta of Fleek.xyz. This is the 0.0.3 version of the release notes, you'll find all the new updates of the Fleek Platform here.
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Accounts
- Guide
- Learn
- Fleek
---

In the changelog, we are introducing another improvement to our closed alpha release of Fleek.xyz. This release we are focusing on all the delete flows and improving the general experience around sites and storage.

### New Features

- New Delete Project flow
- New Delete Site flow
- New Delete Gateway flow

### Improvements

- Correctly handling the cancellation state for deployments.
- Mapping the error that occurs when the Git repository fails to be cloned correctly.
- Added a tooltip for the Docker image field in the site creation and build settings flow.
- Added a new dropdown to select the type of storage for the project.
- Added a 'Vary' cache header in the pull zones to improve protection against cache poisoning.
- Added the option to add a new GitHub account in the account dropdown.
- Disabled the redeploy button during the first deployment of a site.
- Unified the site overview and deploy overview to avoid inconsistencies in the UI.
- Added the availability check for ENS within projects.

### Fixes

- Fixed an error where site builds were stuck due to an invalid Docker image.
- Fixed a typo in the ENS creation modal.
- Fixed an error where files with special characters in their names were showing a 401 error on the PGW.
- Fixed an error where users were stuck in the UI because their auth provider cookie had been removed.
- Unified the text for "View Site" and "Visit Site" across the platform.

### Backoffice & Monitoring

- Added the deployment ID in the BO to improve customer support
