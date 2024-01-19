---
draft: false
title: Release notes v0.0.4
sidebarCollapsible: false
sidebar_position: 6
date: 2023-01-10T09:00:00.000+00:00
description: Welcome to the documentation for the Fleek.xyz beta. Whether you are an expert or an absolute beginner, you'll find your answers here.
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Accounts
- Guide
- Learn
- Fleek
---

In this changelog, we are introducing some changes to the deployment overview page, increasing the storage upload limit, and some quality-of-life improvements that we've implemented from the feedback all our users have been sharing.

### New Features

- Automatic ENS integration is now available.
- New build breakdown in the deployment overview.
- Wallet linking is enabled for email accounts.
- Email linking is enabled for wallet accounts.
- Duplciate detection in the storage before uploading.
- Integrated ENS name resolution for users that have authenticated with a wallet and have an ENS name.
- Added async availability for domain names.
- Added async availability for environment variables.
- Added async availability validation for private gateways name.
- Added async availability validation for site name.
- Added async availability validation for emails.


### Improvements

- Adjusted the deployment tags to show previews, current, and outdated.
- Increased the storage upload limit to 2GB.
- Changed the way we create pins so we display it immediatly in the UI after upload is complete.
- Increased the docker image name character size to 50 characters.
- Increased the env variable value character size to 250 characters.
- Added copy to clipboard button in the deployment overview.
- Improved the efficacy of the site screenshot generation.
- Duplicated uploads are now skipped and marked as duplicates.
- Site slug now has a maximum of 63 characters long.
- Increased the succes rate of the screenshot service.

### Fixes

- Fixed a typo in the docker image tooltip.
- Fixed a problem where the site slug was not clickable after the first deployment.
- Disabled the redeployment button while the first deployment is in progress.
- ENS modal now closes after clicking 'Ok, I have added it' button.
- NextJS template image is now displaying in all browsers
- Storage tooltip now displays the correct information.
- Project name can be change on Arc Browsers.
- ENS subnames can be added correctly to a site.
- Only images can be uploaded as avatars now.
- Domains are removed from the list immeditally after triggering the deletion.
- Loader is now visible in light theme.

### Backoffice & Monitoring

- Added the build settings in the deployment details information in the backoffice for better customer support.
- Added project and site id information in the backoffice search capabilities.
- Added ENS names search in the backoffice to improve customer support experience.
- Added project link on all tables in the backoffice to improve customer support experience.
- Added Private Gateway information in the domains table.
