# Karma Net  
A prototype implementation of beckn protocol with mulearn karma ecosystem for talent discovery in an open network

Beckn Protocol allows easy convertion of standard APIs to be compatible with open network systems.
We are trying to make mulearn's existing centralized ecosystem be a open network for decentralized interoperation between all the stakeholders
so that others can host programs in this network and award karma and this can be used as proof of work which is discoverable by anyone in the network
  
In the hackathon we focused on just the discoverability aspect of mulearn profiles on the network

> Previous History of Project available at : [history](https://github.com/Top-100-Coders/knv2/blob/main/docs/history.md)

## Higher Level Architecture :  
![image](https://i.imgur.com/xtpZAAb.png)

- For the mulearn backend , since we didnt have access to it we generated a few sample data and set up a db and api for mocking the actual mulearn backend  
- The Adapter APIs are responsible for parsing our API requests to be compatible with beckn protocol ( see Specification [here](https://github.com/beckn/DSEP-Specification/tree/draft/examples/student-connect/) ) and vice versa
- The GUI Layer is conventional Front End systems that we are familiar with and therfore isnt detailed here
  
More can be read here : [architecture.md
](https://github.com/Top-100-Coders/knv2/blob/main/docs/architecture.md)

# Contributions

The team and their valuable contributions are as follows:

## Govind - (Lead)

- **Adapter Creation:**
  - Govind took charge of creating adapters, ensuring seamless communication between different components of the project. The adapters he created provided the crucial functionality of converting JSON format to Beckenifed data and vice versa.

- **Database:**
  - Govind was responsible for the design and implementation of the project's database. This includes defining the schema and optimizing queries for efficient data retrieval and storage.

- **Webhook:**
  - Govind implemented webhook functionalities, enabling real-time communication between the project and services. This is crucial for timely updates and data synchronization.

## Riza

- **Documentation:**
  - Riza played a pivotal role in documenting the project. This involves creating comprehensive documentation that outlines the project's architecture, functionalities, and usage. Clear documentation contributes to easier onboarding and maintenance.

- **BAP Creation:**
  - Riza initiated Beckn Application Protocol (BAP) for Beckn Protocol implementation, covering client management, messaging (RabbitMQ), efficient data handling (Redis), MongoDB as the core database, and centralized networking.
- **OpenAI Integration (WIP):**
  - Riza is actively working on integrating OpenAI into the project. This involves incorporating advanced AI capabilities to enhance the system's functionality and provide intelligent responses.

## Joshua

- **Front-end Integration:**
  - Joshua was responsible for integrating the project's back-end functionalities with the front-end. This includes connecting user interfaces to the underlying logic, ensuring a smooth and responsive user experience.

- **UI/UX :**
  - Joshua contributed to the aesthetics and usability of the project by designing intuitive user interfaces. This involves creating visually appealing layouts and optimizing the user journey.

## Adish

- **Beckn Integration:**
  - Adish led the integration of the Beckn protocol into the project. He helped the team understand the principles of the Beckn protocol and implement it into the project. He set up both the network and client halves of the BPP, the webhook, and the connections required.

- **Database and Connectivity:**
  - Adish played a crucial part in defining the database and connectivity in the project, which deals with retrieving the data of the candidates from the custom set server rather than the sandbox URL.

## Vyshnav 

- **UI/UX:**
  - Vyshnav collaborated on the UI design, contributing to the visual elements and user experience. This includes designing user interfaces that are not only aesthetically pleasing but also user-friendly and efficient.

- **JSON Configuration:**
  - Vyshnav worked on the configuration of JSON files within the project. This involves specifying settings, parameters, and preferences in a structured JSON format, enabling easy customization and adaptability.


---
## Note

Unfortunately the time frame for the challenge proved to be a bit too hard and we couldnt integrate all the parts of the program together. Some unfortunate incidents had sabatoged our pace, the individual Parts work as shown in the "Proof of Work" directory, but we have not been able to integrate the whole project. We plan on getting it done ASAP.
