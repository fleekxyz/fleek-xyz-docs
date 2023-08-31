---
draft: false
title: Gateways
sidebarCollapsible: false
sidebar_position: 2
date: 2023-01-10T09:00:00.000+00:00
description: Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Edge Platform
- CDN
- Guide
- Learn
- Fleek
---

### Introduction
In this section we will dive deeper into the IPFS private gateways services and how to use them to serve your content to your users. We will go through the following topics:

- What is a private gateway?
- Creating a private gateway
- Deleting a private gateway

### What is a private gateway?

A private gateway is a service that allows you to serve your content to your users through a custom domain. This means that you can serve your content through a domain like `https://mydomain.com` instead of `https://ipfs.io/ipfs/<hash>`.

They are private because this gateway only allow the files pinned in you account to be served. By allowing you to set up a custom domain it gives you an extra branding layer to your content.

### Creating a private gateway

To create a private gateway you will need to have a Fleek project and a custom domain. Currently we are making mandatory that each private gateway has at least one custom domain associated with it to avoid abuse.

To set up the gateway you have to go to the project settings and click on the `Gateways` tab. In this tab you will see a list of all the gateways you have created for this project. To create a new gateway you need to add a name for it and click on the `Add Gateway` button. Once the gateways is created a modal will appear to add your first custom domain on top of it. 

You need to add the domain and in similar fashion to how its added to a site in [Custom domains](/docs/gateways) section you will need to configure the DNS provider to point to the gateway. Once you have configured the DNS provider you can click on the `Ok, I have added it` button and and we will run the verification to make sure its setted up correctly.

Once the verification is completed you will see the status of the gateway change to `Active` and you will be able to use it to serve your content. You can access the content on your gateway via the domain like this `my-gateway-url/ipfs/<cid>` and `my-gateway-url/ipns/<cid>`

You can set up more than one domain per gateway. To do this you can click on the three dots icon in the gateway row and select the `Add Domain` option. This will open a modal where you can add a new domain to the gateway.



