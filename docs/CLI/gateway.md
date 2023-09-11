---
draft: false
title: Gateway
sidebarCollapsible: false
sidebar_position: 8
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

### Creating a private gateway

To create a private gateway you will need to have a Fleek project and a custom domain. Currently we are making mandatory that each private gateway has at least one custom domain associated with it to avoid abuse.

To create a gateway using the CLI you will need to run the following command:

```shellscript filename="Creating a Gateway" copy
> fleek gateway create
✔ Enter private gateway name (eg. first): … my-first-gateway
> Success! Private gateway "my-first-gateway" successfully created.
```

The next step will be to configure the custom domain for your gateway. 

```shellscript filename="Configuring the custom domain" copy
> fleek gateway domain add
✔ Enter private gateway name (eg. first): … my-first-gateway
✔ Enter domain name (eg. example.com): … ipfs.my-gateway.online
> Success! Domain "ipfs.my-gateway.online" successfully created.   
```

Now that the domain is created you will need to set up the correct DNS records to make sure that your domain points to the CDN pull zone. The CLI will provide you with the DNS records you need to add to your domain.

```shellscript  filename="Setting up the DNS records" copy
> fleek gateway domain add
✔ Enter private gateway name (eg. first): … my-first-gateway
✔ Enter domain name (eg. example.com): … ipfs.my-gateway.online
> Success! Domain "ipfs.my-gateway.online" successfully created.
> Update DNS records for "ipfs.my-gateway.online":
> CNAME @ <your-pullzone-id>.fleekcdn.xyz
> Press any key as soon as you configure your domain provider for verification.
```

If you need help configuring your DNS records, you can find more information in our [DNS records guide](/guides/dns-records).

Once you have confured your DNS records, you can verify your domain. To do this, you will need to press any key in the CLI. This will trigger a verification process that will check if the DNS records are correctly configured.

```shellscript filename="Finish" copy
> fleek gateway domain add
✔ Enter private gateway name (eg. first): … my-first-gateway
✔ Enter domain name (eg. example.com): … ipfs.my-gateway.online
> Success! Domain "ipfs.my-gateway.online" successfully created.
> Update DNS records for "ipfs.my-gateway.online":
> CNAME @ <your-pullzone-id>.fleekcdn.xyz
> Press any key as soon as you configure your domain provider for verification.
> Success! Domain "ipfs.my-gateway.online" was verified.    
```

Now that your domain is verified, you can start using it to serve your content. The content will no appear under `ipfs.my-gateway.online/ipfs/<cid>`

### Exploring the private gateway settings

At any moment you can access the private gateway settings by running the following command:

```shellscript filename="Gateway settings" copy
➜  ~ fleek gateways detail
WARN! Fleek CLI is in beta, use it at your own discretion
✔ Choose existing private gateway: › beefy-clever-autumn

ID                         Slug                 Name                    Created At              
------------------------------------------------------------------------------------------------
cljqwfv790002lc08g6nmf8e0  beefy-clever-autumn  my-first-gateway  2023-07-06T08:41:58.963Z

> You can access your content through domains bellow:
> https://ipfs.my-gateway.online/ipfs/<cid>
```