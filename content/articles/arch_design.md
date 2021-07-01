---
title: The technical architecture design of 4EVERLAND
description: Based on IPFS and the underlying technology of Ethereum, 4EVERLAND is designed to provide a distributed, highly efficient, self-motivated, and low-cost data hosting gateway. 4EVERLAND has designed a robust architecture to support the stable and efficient operation of the entire network, which mainly includes 4EVER-STORAGE, Proof of storage, 4EVER-GATEWAY, Smart contracts, and 4EVER-HOSTING.
img: '/imgs/blogs/3.png'
alt: The architecture design of 4EVERLAND
published: 2021-06-19
---

Based on IPFS and the underlying technology of Ethereum, 4EVERLAND is designed to provide a distributed, highly efficient, self-motivated, and low-cost data hosting gateway. 4EVERLAND has designed a robust architecture to support the stable and efficient operation of the entire network, which mainly includes 4EVER-STORAGE, Proof of storage, 4EVER-GATEWAY, Smart contracts, and 4EVER-HOSTING.

![image](/imgs/blogs/3.png)

### Storage Node (4EVER-STORAGE)

4EVER-STORAGE is a client containing a synchronization service (Cluster Service) and IPFS nodes, is compatible with the IPFS protocol and automatically joins a cluster of nodes (Swarm) as a result of the Smart Contract module's node campaign. Nodes can synchronize content with each other and store specific content persistently.

4EVERLAND forms nodes into a huge storage network through Swarm technology, relying on node cooperativeness to achieve persistent storage of specific data and supporting horizontal expansion of nodes.

### Proof of storage

4EVERLAND data layer is a global data synchronization network built on IPFS protocol with distributed nodes, the data is constructed and synchronized through the Swarm network. The data availability and authenticity are the important indicators of 4EVERLAND's ecosystem incentive layer. As a result, 4EVERLAND node Proof of Storage need to address the following issues:

- The nodes do synchronize, and store data submitted by Swarm Network users.
- The data needed by users can be obtained from a 4EVERLAND node at any time.

Therefore, to address the above issues, 4EVERLAND proposes the PoSC based on TEE technology to verify the reliability of node data. The challenger can generate a PoSC by randomly combining CIDs, and the challenged node needs to respond to the challenge within a specific time to prove that the content is indeed stored. The honest node will be rewarded while the dishonest node will be penalized.

![image](/imgs/blogs/4.png)

### Gateway node (4EVER-GATEWAY)

4EVER-GATEWAY helps users select the nearest storage node to access 4EVERLAND gateway. Gateway node contains the following modules:

- DDNS, or Dynamic DNS, allows developers to simply configure DNS, or use the free domain names provided by 4EVERLAND to achieve global node acceleration based on 4EVERLAND.
- The Data/IO module provides compression processing, content access cache acceleration, data transfer optimization and other functions for each site.
- Cert Manager module provides free HTTPS certificate for each site, which saves a lot of time for developers.

### Smart contracts

The smart contract module of 4EVERLAND mainly consists of payment contract, bidding contract, lending contract, and governance contract, which implement the four core functions of fee payment, node campaign, lending, and community governance, respectively. The following section explains the core functional design of the smart contracts above.

Smart contract module is an important technical solution for 4EVERLAND to realize decentralized governance. Through smart contract module, nodes can join 4EVERLAND network in an open, transparent, and free way, add nodes, modify node revenue, punish malicious nodes through decentralized autonomous organization, and finally realize a safe, stable, efficient, cooperative and autonomous node cluster.

![image](/imgs/blogs/5.png)

### 4EVER-HOSTING5

4EVER-HOSTING is a developer application, can be accessed from the official website of 4EVERLAND. Developers can deploy web application resources to the 4EVERLAND gateway as a DWeb through the visual interface (Hosting App) or the command (@4everland/cli). All nodes in 4EVERLAND can provide persistent storage for the DWeb, and all gateways can provide access acceleration services for the DWeb.

4EVERLAND provides products and protocols such as DWeb hosting, decentralized gateway, decentralized domain name, digital marketing system, and data services to help developers access Web 3.0 in one click.
