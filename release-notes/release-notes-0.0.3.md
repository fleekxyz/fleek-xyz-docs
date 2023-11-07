---
draft: false
title: Release notes v0.0.3
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

In the changelog, we are introducing another improvement to our closed alpha release of Fleek.xyz. This release we are focusing on all the delete flows and improving the general experience around sites and storage.

### New Features

- New Delete Project flow
- New Delete Site flow
- New Delete Gateway flow

### Improvements

- We are now handling correctly the cancelling state for deployments
- We are now mapping the error when the git repository fails to be cloned correctly
- We have added a tooltip for the docker image field in the site creation and build settings flow
- We have added a new dropdown to select the type of storage for the project
- We have added a vary cache header in the pullzones to improve protection againts cache poisoning
- We have added the option to add a new Github account in the account dropdown
- We have dissable the redeploy button during the first deploy of a site
- We have unified the site overview and deploy overview to avoid inconsistencies in the UI
- We have added the availability checking for ENS inside of projects

### Fixes

- We fixed an error where site builds were stuck due to an invalid docker image
- We fixed a typo in the ENS creation modal
- We have fixed an error where files with special characters in the names were showing a 401 error on the PGW
- We have fixed an error where users were stuck in the UI because they auth provider cookie was removed
- We have unified the text for view site and visit site across the platform

### Backoffice & Monitoring

- We have added the deployment ID in the BO to improve customer support
- We are now posting the alarms into the status page