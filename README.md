# Karma Net  
A prototype implementation of beckn protocol with mulearn karma ecosystem for talent discovery in an open network

Beckn Protocol allows easy convertion of standard APIs to be compatible with open network systems.
We are trying to make mulearn's existing centralized ecosystem be a open network for decentralized interoperation between all the stakeholders
so that others can host programs in this network and award karma and this can be used as proof of work which is discoverable by anyone in the network
  
In the hackathon we focused on just the discoverability aspect of mulearn profiles on the network

> Previous History of Project available at : https://github.com/Govind-S-B/knv2/blob/main/docs/history.md

## Higher Level Architecture :  
![image](https://i.imgur.com/xtpZAAb.png)

- For the mulearn backend , since we didnt have access to it we generated a few sample data and set up a db and api for mocking the actual mulearn backend  
- The Adapter APIs are responsible for parsing our API requests to be compatible with beckn protocol ( see Specification [here](https://github.com/beckn/DSEP-Specification/tree/draft/examples/student-connect/) ) and vice versa
- The GUI Layer is conventional Front End systems that we are familiar with and therfore isnt detailed here

## Port Mapping 
we reconfigured the default port mappings of multiple components and renamed a few services so that they all run in the same system without conflicts, make sure to have these ports free

```
BAP:
    client: 5003
    network: 5002
    mongodb: 27017
    redis: 6379
    rabbitMQ: 
        - 5672
        - 15672

BPP:
    client: 5013
    network: 5012
    mongodb: 27018
    redis: 6380
    rabbitMQ: 
        - 5673
        - 15673

webhook: 3005
```

