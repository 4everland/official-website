---
title: 4EVERLAND Bi-Weekly (October 25, 2021 - November 7, 2021)
description: A summary of the progress of 4EVERLAND in these two weeks.
img: '/imgs/blogs/Bi-Weekly.png'
alt: 4EVERLAND Bi-Weekly Report
published: 2021-11-08
---

![image](/imgs/blogs/Bi-Weekly.png)

**_Date: October 25, 2021 - November 7, 2021_**

## Technical Progress

### 4EVER-HOSTING

- Refactored data statistics module @DONE
- Updated the project details page to hide commits when the project isn’t connected to a git repository @DONE
- Updated the homepage Settings to add a left navigation menu @DONE
- Updated the statistics page to add time filtering for charts and optimize the responsive display @DONE
- Updated the project creation page to add a branch name search function in the branch selection step (when there are more than 5 branches) @DONE
- Added IPFS CID validation @DONE
- Updated and optimized project build status public component @DONE
- Developing Command Line Interface (CLI) @WIP

### 4EVER-GATEWAY

- Optimizing gateway performance @DONE

### Proof of Storage Challenge (PoSC)

- Solved the issues of failed verification on large file synchronization pin add request
- Motified enclave synchronous data to asynchronous mode as it might block the reporting and synchronous data process.
- Fixed the crash issue after a long run due to resource competition
- Motified contract event subscription mode to event.filter to scan blocks
- Fixed the IPFS reconnection issue while the network is slow

## Community Work

- 4EVERLAND Partnered with Js13kgames
  We’re thrilled to partner with Js13kgames, an HTML5 and JavaScript game development competition in just 13kb. 4EVERLAND will provide web hosting services for all Js13kgames sites. It is easy for every developer to deploy their games with 4EVERLAND and enjoy low-maintenance and global acceleration. Additionally, the 4EVERLAND foundation offers extra 10,000 4EVER tokens to any js13games game developers. The only requirement is that the game is deployed and published in 4EVERLAND. More details: https://link.medium.com/RGUjTIwI0kb

- 4EVERLAND Partnered with Hillstone Finance
  Hillstone.finance, has completed IPFS-based deployment using 4EVERLAND’s DWeb hosting services. 4EVERLAND will provide DWeb Hosting services to Hillstone Finance ecosystem applications, further improving data uploading, downloading, visit and other cloud computing services. We’ll develop Web3 together in Korea, and provide web3 cloud computing services to Korean developers.

- Developers Deployed Project on the 4EVERLAND Platform
  Many developers from 4EVERLAND community deployed some mini-game projects using 4EVERLAND’s decentralized DWeb hosting services. We’d like to invite more such developers, projects, and community members to try 4EVERLAND hosting services.

- 4EVERLAND — Interview with Featured Developer of the Month
  We’ve got a Featured Developer for this month! Catch Sr. Programmer, Lee Baker, as he shares with us his experience with developing TOMSapp.li7.io on the 4EVERLAND platform and learn more about Decentralized Web. Check for it: https://www.youtube.com/watch?v=8_5qqbIOfsw&t=3s

## About 4EVERLAND

4EVERLAND is a Web3.0 cloud computing platform with global acceleration, privacy protection, distributed storage and other technical features. Based on IPFS and the underlying technology of Ethereum, 4EVERLAND is committed to providing a distributed, highly efficient, self-motivated, and low-cost data hosting gateway, and becoming the infrastructure for millions of Web3.0 developers and applications.

- **_4EVER-STORAGE:_** 4EVERLAND connects nodes into a huge storage network through Swarm technology, which depends on node cooperativeness to achieve persistent storage of specific data, and supports horizontal expansion of nodes.

- **_4EVER-GATEWAY:_** The gateway nodes contain dynamic DNS, Data I/O, and Cert Manager modules. After simple configuration, developers can achieve safe and reliable global acceleration based on 4EVERLAND quickly.

- **_Proof of Storage:_** 4EVERLAND builds Swarm distributed storage network based on IPFS protocol and proposes proof of storage challenge (PoSC) based on TEE technology, to ensure the availability and reliability of data.

- **_Smart Contracts:_** The smart contracts module of 4EVERLAND mainly includes payment contracts, auction contracts, lending contracts, control contracts,etc. It achieves open, transparent and free decentralized governance through smart contracts.

- **_4EVER-HOSTING:_** 4EVER-HOSTING is a developer application, available from the official website of 4EVERLAND. Developers can deploy web application resources to the 4EVERLAND gateway as a DWeb through the visual interface (Hosting App) or the command (@4everland/cli).

### Community

- **_Website:_** https://www.4everland.org/
- **_Twitter:_** https://twitter.com/4everland_org
- **_Telegram:_** https://t.me/org_4everland
- **_Medium:_** https://4everland.medium.com/
- **_Discord:_** https://discord.com/invite/Cun2VpsdjF
- **_Reddit:_** https://www.reddit.com/r/4everland/
- **_Email:_** contact@4everland.org
