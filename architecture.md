# KARMA-NET Architecture Documentation

## Overview

KARMA-NET aims to integrate the Beckn Protocol with the Mulearn Karma ecosystem, enabling talent discovery in an open network. The architecture comprises distinct layers, including the GUI, Adapter API/Parser, Beckn Application Protocol (BAP), Beckn Platform Protocol (BPP), Webhook, Adapter API Explainer, and the Database.

---

## GUI Layer (Vue.js and Figma)

The GUI layer is built using Vue.js and incorporates design assets from Figma. It ensures a user-friendly interface for seamless interactions within the KARMA-NET system.

---

## Adapter API / Parser

The Adapter API/Parser acts as a vital bridge, converting JSON data into the required format compatible with the Beckn Adapter Protocol (BAP). It facilitates smooth integration and interaction within the protocol.

---

## Beckn Application Protocol (BAP)

### Client

The Client interface serves as the primary user interaction point, facilitating user engagement. It interfaces with the Adapter API/Parser to manage initial data processing stages.

### Network

The Network component lies at the core of the Beckn Protocol, acting as a registry area. It manages interactions with dependencies such as RabbitMQ, MongoDB, and Redis, essential for Client and Network functionalities.

#### Dependencies:
- **RabbitMQ:** Facilitates messaging and communication.
- **MongoDB:** Serves as a robust storage backend.
- **Redis:** Enables efficient caching and data retrieval.

### Registry and Gateway

These components enable the retrieval of product/domain-specific information. They offer a gateway for users to access and search for specific data domains within the system.

---

## Beckn Platform Protocol (BPP)

Similar to BAP, BPP comprises Network and Client interfaces, managing interactions with MongoDB, Redis, and RabbitMQ. It emphasizes decentralization and complements the functionalities of BAP.

### Webhook

The Webhook acts as a data broadcast mechanism, connecting different applications within the Beckn ecosystem. It adheres strictly to the Beckn specified schema, translating schema to a database-compatible JSON format, and acting as a data bridge.

---

## Adapter API Explainer

The Adapter API Explainer provides an interface for interpreting and clarifying Beckn protocol-related data. It simplifies complexities within the protocol, ensuring clarity in interactions.

---

## Database (DB Handler API and MongoDB)

At the heart of the system lies the Database, comprising the DB Handler API and MongoDB. This central hub manages and stores essential data vital for the seamless functioning of the KARMA-NET ecosystem.

---

![KARMA-NET Architecture Diagram](https://camo.githubusercontent.com/a83fe4902f2bca2f6864e716dcfa420db4f9710dd2a595289d187ee5e93da313/68747470733a2f2f692e696d6775722e636f6d2f7874705a4141622e706e67)

