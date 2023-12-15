---
draft: false
title: Release notes v0.0.4
sidebarCollapsible: false
sidebar_position: 6
date: 2023-01-10T09:00:00.000+00:00
description: Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Accounts
- Guide
- Learn
- Fleek
---

In this changelog we are doing introducing some changes on the deployment overviews, increased the upload limit of the storage and some quality of life improvements that we've been collecting from the feedback all our users have been sharing.

### New Features

- New build breakdown in the deployment overview.
- Duplciate detection in the storage before uploading.
- Integrated ENS name resolution for users that have authenticated with wallet and have an ENS name.
- Added async abailability for domain names.
- Added async abailability for environment variables.
- Added async availability validation for private gateways name.
- Added async availability validation for site name.
- Added async availability validation for emails.


### Improvements

- Adjusted the the deployment tags to show previews, current and outdated.
- Increased the upload limit of the storage to 2GB.
- Changed the way we create pins so we display it inmediately in the UI after upload is complete.
- Increased the docker image name character size to 50 chgaracters.
- Increased the env variable value character size to 250 characters.
- Added copy to clipboard button in the deployment overview.
- Improved the efficacy of the site screenshot generation.

### Fixes

- Fixed a typo in the docker image tooltip.
- Fixed a problem where the user was not able to click the site slug was not clickable after the first deployment.

### Backoffice & Monitoring

- Added the build settings in the deployment details information in the backoffice for better customer support.
- Added project and site id information in the backoffice search capabilities.
- Added ENS names search in the backoffice to improve customer support experience.
- Added project link on all tables in the backoffice to improve customer support experience.
