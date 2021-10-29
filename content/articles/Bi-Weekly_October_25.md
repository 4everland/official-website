---
title: 4EVERLAND Bi-Weekly (October 11, 2021-October 24, 2021)
description: A summary of the progress of 4EVERLAND in these two weeks.
img: '/imgs/blogs/Bi-Weekly.png'
alt: 4EVERLAND Bi-Weekly Report
published: 2021-10-25
---

![image](/imgs/blogs/Bi-Weekly.png)

***Date: October 11, 2021 - October 24, 2021***

## Technical Progress

### 4EVER-HOSTING

- Optimizing data statistics module @WIP
- Claim’ button in First Landing page now available @DONE

### 4EVER-GATEWAY
- Published new gateway @DONE
- Optimizing gateway performance @WIP

### Proof of Storage Challenge (PoSC)
- Optimizated PoSCperformance/function:
- Solved the issues of failed verification on large file synchronization pin request
- When data is pulled, there is a probability of failure due to a single point effect. Added the gradient sleep waiting time logic cached the pin fails cid.
- Modified enclave synchronous data to asynchronous mode as it might block the reporting process.
- Increased object stat size verification to prevent fraud
- Fixed a bug of data missing based on the block
- Updated payment contract/matic contract, added new cid collection via address, added user-defined deadline field interface

## Community Work
- The 4EVERLAND Global Marketing Manager Conducted an AMA in the Decentralized club

On October 20, 2021, Darren Wheatley, 4EVERLAND Global Marketing Manager participated in the AMA at the Decentralization Club in order to further explain the project to the community and to engage more developers in deploying our platform. He answered a wide range of questions from the community, including questions about the team, partnerships, products, and more.

- 4EVERLAND First Landing Event Reward Distribution Announcement

4EVERLAND released First Landing Event Reward Distribution Announcement on October 21st, 2021, which includes guidelines for collecting your rewards, reclaiming rewards from malicious accounts, and limited NFT. More details: https://link.medium.com/vrFhQdEhxkb

- 4EVERLAND Partnered with Bella protocol to accelerate Web 3.0 Adoption

4EVERLAND will provide DWeb Hosting services to Bella ecosystem applications, further improving data uploading, downloading, visit and other cloud computing services. Bella Protocol ’s website, https://dweb.bella.fi, has been fully decentralized using 4EVERLAND’s DWeb hosting services. Decentralization of https://dweb.bella.fi will facilitate better security, transparency, and traceability, whilst further improving data processing. We’d love to have more projects and developers deployed through the visual interface (Hosting App) or the command line (@4everland/cli ). All nodes in 4EVERLAND can provide persistent storage for the DWeb, and all gateways can provide acceleration for the DWeb. Website: https://4everland.org


## About 4EVERLAND

4EVERLAND is a Web3.0 cloud computing platform with global acceleration, privacy protection, distributed storage and other technical features.

- ***4EVER-STORAGE:*** 4EVERLAND connects nodes into a huge storage network through Swarm technology, which depends on node cooperativeness to achieve persistent storage of specific data, and supports horizontal expansion of nodes.

- ***4EVER-GATEWAY:*** The gateway nodes contain dynamic DNS, Data I/O, and Cert Manager modules. After simple configuration, developers can achieve safe and reliable global acceleration based on 4EVERLAND quickly.

- ***Proof of Storage:*** 4EVERLAND builds Swarm distributed storage network based on IPFS protocol and proposes proof of storage challenge (PoSC) based on TEE technology, to ensure the availability and reliability of data.

- ***Smart Contracts:*** The smart contracts module of 4EVERLAND mainly includes payment contracts, auction contracts, lending contracts, control contracts,etc. It achieves open, transparent and free decentralized governance through smart contracts.

- ***4EVER-HOSTING:*** 4EVER-HOSTING is a developer application, available from the official website of 4EVERLAND. Developers can deploy web application resources to the 4EVERLAND gateway as a DWeb through the visual interface (Hosting App) or the command (@4everland/cli). 


### Community
- ***Website:*** https://www.4everland.org/ 
- ***Twitter:*** https://twitter.com/4everland_org 
- ***Telegram:*** https://t.me/org_4everland 
- ***Medium:*** https://4everland.medium.com/ 
- ***Discord:*** https://discord.gg/sxtHDvvpuT 
- ***Reddit:*** https://www.reddit.com/user/4everland_org/ 
- ***Email:*** contact@4everland.org