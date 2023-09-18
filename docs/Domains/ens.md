---
draft: false
title: ENS 
sidebarCollapsible: false
sidebar_position: 2
date: 2023-01-10T09:00:00.000+00:00
description: Learn to set and manage your .eth domains. Discover the convenience of .limo gateway and how to resolve seamlessly with MetaMask or public gateways..
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

[Ethereum Name Service Domains](https://ens.domains/es/) provide a decentralized alternative to DNS domains. These are Ethereum based names followed by the .eth TLD. One of its great features is its capability to map multiple records with multiple purposes.

For example, an IPFS content hash or IPNS record from a site you uploaded with Fleek, to have that name.eth resolve to that content (much like any DNS domain maps to an html file!). For example, [Eth Limo](https://ens.eth.limo/).

#### ENS Name Resolving

Given ENS names and their resolving live on Ethereum, for a user to resolve/visit an ENS domain they will need to have a compatible provider/browser installed that is able to resolve them. Using the MetaMask browser extension is one option, as it resolves .eth domains. An alternative is using a public gateway such as ETH Limo!

Which by appending .limo at the end of your ENS simply resolves it via HTTPS.

### Adding an ENS domain

To add an ENS domain to your site, first you need to have a site created. If you don't have a site yet, please follow the steps in the [Sites](/docs/Sites) section.

Once you have a site created, go to the site overview and click on the settings icon. In the settings page, click on the **Domains** tab. You will see a list of all the ENS you have added to the site. To add a new ENS domain, type it into the input available in the ENS domains section and after we run some validations (mainly cehcking that the domain is valid and is not added to another site) you will be able to add it by clicking the **Add ENS Domain** button.

When the ENS domain is added you will see a new row in the ENS domains table with the domain you added and the status of the domain in `creating`. During this process we are creating a IPNS record that you will be able to use as configuration for your ENS domain.

You can use IPNS or IPFS as the content of you ENS domain. 

#### Edit the ENS Content Record

With the edit and management view enabled, you will be able to scroll down to the records section and click ADD/EDIT RECORD. Scroll down to the CONTENT field and enter:

![ENS Record](https://storage.fleek.zone/27a60cdd-37d3-480c-ae88-3ad4ca886b13-bucket/imgs/fleek-record.gif)

For an IPNS name:

```
ipns://yourhash
```

For example

```
ipns://k51qzi5uqu5dj4m3cwuo6mezt5j3zdx6euck56nab99rt1onxo9y0nwbmcgoAA
```

For an IPFS name:

```
ipfs://yourhash
```

For example

```
ipfs://k51qzi5uqu5dj4m3cwuo6mezt5j3zdx6euck56nab99rt1onxo9y0nwbmcgoAA
```

Once set, scroll down to confirm and validate the Ethereum transaction with your wallet. When the transaction is validated, your site will be set and ready on your ENS domain!

To confirm, use the .limo gateway to access it as explained above.


### Adding an ENS Subname

Normally, trying to add an ENS subdomain or Subname of ENS V3 can trigger an errors due to controller settings in ENS. To ensure you can easily add any ENS subdomain to any Fleek site you want, go to the ENS app at https://app.ens.domains/yourname and:

1. Visit the subnames tab, and select the subname you want to add to Fleek.
2. Unwrap your subname.
3. Set it as a primary name.
4. Done! Go back to Fleek, and follow the normal ENS flow.