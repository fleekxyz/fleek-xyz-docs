---
draft: false
title: Changelog - October 12th, 2023
sidebarCollapsible: false
sidebar_position: 4
date: 2023-01-10T09:00:00.000+00:00
description: Welcome to the documentation for the beta of Fleek.xyz. This is the 0.0.1 edition of the release notes, you'll find all the new updates of the Fleek Platform here.
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Accounts
- Guide
- Learn
- Fleek
---

In changelog we are introducing another improvement to our closed alpha release of the Fleek.xyz. We are applying the first batch of feedbacks provided by our alpha testers and we have many more to come in the following days! 

### New Features
- Users can now change the site slug, modifying the on-fleek.app URL accordingly.
- Tracking and display of template usage frequency have been implemented on the templates page.
- A "Trigger Deployment" button has been added to the site overview.
- Custom build commands and publish directory options have been added to templates.
- An email placeholder has been inserted in the email field.
- Usernames are now validated uniquely and include an asynchronous availability check before confirming the username.

### Improvements
- Site name validation has been altered to include sites with fewer than 3 characters.
- A monitor on AR tokens has been created to enhance operations on Arweave uploads.
- The maximum length of environment variable names has been extended from 30 to 150 characters.
- Horizontal scrolling has been added to invitation links.
- Avatar uploads for accounts have been made circular.
- Preflight request caching on the GQ server has been implemented to reduce loading times.
- Storage upload validations have been improved for a superior UX, introducing a limit of 1 GB on uploads.
- Site preview images are now displayed in dark mode.
- Options for the random slug generator have been refined.
- Deployment information is now returned in the deployment creation response to enhance UX.
- Asynchronous validations for availability have been added on combined fields.
- A link to the build settings has been added in the recent deploy card.
- Skeleton loading has been introduced to the templates marketplace.
- onBlur validations have been added to all forms.
- Asynchronous validations for availability have been added on unique fields.
- All error messages related to domain creations are now serialized and displayed.
- Domain validations have been enhanced for improved UX.

### Bug Fixes
- Fixed a bug that allowed users to alter the checkbox for creating a private repository for templates post-form submission.
- Corrected an error preventing newly created sites from appearing in the site list.
- Resolved a bug enabling users to delete the first ENV variable slot in the deployment form.
- Fixed a bug where revoking permissions to the GH app disrupted the repository selection.
- Addressed an issue where users could not leave a project while being a member.
- Ensured all branches are listed in the deployment process.
- Fixed a bug causing glitches in the site avatar.
- Corrected typos throughout platform texts.
- Resolved an error where the template repository was forked but the site was not accurately created on Fleek.
- Ensured the "Copy Filecoin Deal ID" now copies the correct value.
- Fixed an issue preventing some users from setting the initial environment variables as encrypted.
- Addressed an issue with URL parameters not functioning with on-fleek.app domains.
- Resolved an issue in the deployment form that allowed users to alter values on forms post-submission.
- Fixed an error that permitted users to cancel a deployment that was already deployed.
- Resolved an error allowing users to deploy a site even after revoking permissions on the GitHub app.
- Site previews for PRs are now building successfully.

### CLI
- Fixed a type issue present when installing the SDK on Next JS projects.
- Corrected an error where the --config option was not functioning during site deploy in the CLI.

### SDK
- Resolved a types issue occurring when installing the SDK on Next JS projects.

### Backoffice
- Added Filecoin and Arweave information for files in the Backoffice to enhance customer support.
- Introduced project storage configuration in the Backoffice for better customer support.
- Added a list of project members in the Backoffice to improve customer support.
- Included a list of private gateways in the Backoffice to enhance customer support.
- Added a deployment list with CSV exports in the Backoffice to bolster customer support.
- Included the wallet public key in the user list of the Backoffice to improve customer support.
- Implemented filters on the site list in the Backoffice to enhance customer support.
- Added site information in the domains list in the Backoffice to improve customer support.
- Integrated site information in the deployments list in the Backoffice to enhance customer support.
