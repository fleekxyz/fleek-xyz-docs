---
draft: false
title: Release notes v0.0.2
sidebarCollapsible: false
sidebar_position: 5
date: 2023-01-10T09:00:00.000+00:00
description: Welcome to the documentation for the beta of Fleek.xyz. This is the 0.0.2 edition of the release notes, you'll find all the new featuees of the Fleek Platform here.
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Accounts
- Guide
- Learn
- Fleek
---

In the changelog, we are introducing another improvement to our closed alpha release of Fleek.xyz. We are continuing with all the good feedback provided by the community, focusing heavily on storage performance and domain management!

### New Features
- You can now set primary domains for Sites and Private Gateways.
- We have implemented error collection on the front end for better debugging and customer support.
- Now users can create sites with names using capital letters.
- We have added an option to copy the deploy ID.

### Improvements
- We have improved the upload speed for all files via the UI.
- Changed "Delete Domain" in favor of "Remove Domain" to avoid confusion.
- We have changed the cursors for the tooltips to show an arrow as a pointer.
- We have disabled the option to cancel a deployment that was not building.
- We are now hiding the managed domains section where there are no domains.
- We have increased the limit of storage in our deploying lambda to accommodate bigger site repositories.
- We have improved the domain validation rules to prevent the creation of invalid domains.
- We have made the GitHub avatar bigger in the deploy flow.
- We have made the URL of the deployment card clickable to redirect to the site.
- We have added the auto-generated domain on the site overview if there is no domain set.
- We have removed the delete option from a domain that is in the verifying stage.
- The "Learn More" button in the templates marketplace now opens in a new tab.

### Bug Fixes
- Fixed a bug where the IPNS values were not being updated after a deployment.
- We have fixed typos in the Private Gateway delete modal.
- We have fixed an error where the delete button was active during domain deletion.
- Fixed an error where we were showing the incorrect message when a site name was not available.
- We have fixed an issue with some users getting stuck on the welcome screen.
- We have fixed a problem where the 'View Site' button on the deployment was not working.
- We have fixed a bug where the site was available for visits while the first deployment was in progress.
- We have fixed a problem where the 'View Site' button on the recent deployment cards was not working.

### CLI
- We improved error handling when the user is not using the default Fleek configuration files while deploying with GHA.

### Backoffice & Monitoring
- We have created a canary project to monitor the site deployment flow for better customer support and availability.
- We have created a monitoring system for all of our backend services.
- We are tracking the mean build time for sites to identify improvements to the deployment process.

