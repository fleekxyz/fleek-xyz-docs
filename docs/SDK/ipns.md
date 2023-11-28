---
draft: false
title: IPNS | SDK 
sidebarCollapsible: false
sidebar_position: 4
date: 2023-01-10T09:00:00.000+00:00
description: Learn how to pin a file on IPNS using the service's primary methods. Upload files individually, in bulk, or directly from your local system.
category: Documentation
keywords: [services, documentation, getting started]
tags:
- Accounts
- Guide
- Learn
- Fleek
---

### How to create an IPNS record

To create an IPNS record using the SDK you need to be authenticated, with a project selected, followin the steps in the authentication section [here](/docs/SDK/index). After that you can use the 'ipns' module to create an IPNS record.

```typescript copy
const record = await sdk.ipns().createRecord();
```

This returns an object with the following properties:

```typescript
id: the IPNS record id on Fleek DB.
name: the IPNS record name.
hash: the IPFS cid associated with the record.
```

Initially all the records are created with an empy IPFS hash, to add it you will need to publish it.

You can query the record by name:

```typescript copy
const record = await sdk.ipns().getRecord({ name: record.name });
```

### How to publish an IPNS record

To publish an IPNS record you need to provide the IPNS record name and the IPFS hash you want to associate it with.

```typescript copy
const record = await sdk.ipns().publishRecord({ id: record.id, hash });
```

:::info
It is important to note that IPNS propagation can take from 1 up to 30 minutes.
:::

### List all records

To list all the records associated with a project you can use the `listRecords` method.

```typescript copy
const records = await sdk.ipns().listRecords();
```

### Delete a record

To delete an IPNS record you can use the `deleteRecord` method.

```typescript copy
await sdk.ipns().deleteRecord({ id: record.id });
```
:::info
It is important to note that IPNS propagation can take from 1 up to 30 minutes.
:::