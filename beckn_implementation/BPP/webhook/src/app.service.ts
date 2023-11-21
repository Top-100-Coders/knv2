import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
import searchResponse  from './response_search.json';
import { serialize } from 'v8';

dotenv.config();
@Injectable()
export class AppService {
  async getSandBoxDataService(body: any) {
    try {
      if (body.context.action.includes('on_')) {
        return;
      }
      let sandboxUrl = '';
      
      let response = {
        "context": {
          "domain": "dsep:talent",
          "action": "on_search",
          "location": {
            "country": {
              "name": "India",
              "code": "IND"
            },
            "city": {
              "name": "Bangalore",
              "code": "std:080"
            }
          },
          "version": "1.1.0",
          "bap_id": "ps-bap-network.becknprotocol.io",
          "bap_uri": "https://ps-bap-client.becknprotocol.io/",
          "bpp_id": "mulearn-deva-bpp",
          "bpp_uri": "https://mulearn-deva-bpp.loca.lt",
          "transaction_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
          "message_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
          "timestamp": "2023-07-16T04:41:16Z"
        },
        "message": {
          "catalog": {
            "descriptor": {
              "name": "Student Profiles"
            },
            "providers": [
              {
                "id": "289edce4-d002-4962-b311-4c025e22b4f6",
                "descriptor": {
                  "name": "MuLearn Talent pool app",
                  "short_desc": "MuLearn Talent pool App Pvt Ltd",
                  "images": [
                    {
                      "url": "https://mulearn.in/images/logo.png"
                    }
                  ]
                },
                "fulfillments": [
                  {
                    "id": "ful-01",
                    "type": "virtual-meet"
                  },
                  {
                    "id": "ful-02",
                    "type": "physical-meet"
                  }
                ],
                "items": [
                  {
                    "id": "1224",
                    "descriptor": {
                      "name": "Mayank Bansal",
                      "short_desc": "Product Manager || Enabling Reconciliation & Settlement framework on ONDC || Financial Services || Retail ",
                      "long_desc": "Entrepreneurial journey from failed startup to thriving tech ventures. Expertise in software development, blockchain, and B2B solutions. Currently contributing to FIDE at Enterprise Minds.",
                      "media" : [
                        {
                          "mimetype": "application/pdf",
                          "url" : "https://www.resume-link.com"
                        },
                        {
                          "mimetype": "application/pdf",
                          "url" : "https://www.certificate-link.com/1"
                        },
                        {
                          "mimetype": "application/pdf",
                          "url" : "https://www.certificate-link.com/2"
                        }
                      ],
                      "images": [
                        {
                          "url" : "https://media.licdn.com/dms/image/C4E03AQEQLnpcjmWwGQ/profile-displayphoto-shrink_400_400/0/1638454324563?e=1705536000&v=beta&t=NBLbRWXya0YrMWsfWY8PCbfFW7msDBpiYzxpcbh9fA4"
                        }
                      ]
                    },
                    "fulfillment_ids": [
                      "ful-01",
                      "ful-02"
                    ]
                  },
                  {
                    "id": "1225",
                    "descriptor": {
                      "name": "Ravi Prakash",
                      "short_desc": "Head of Architecture and Technology Ecosystem at FIDE (Previously Beckn Foundation). Genesis author of beckn protocol specification.",
                      "long_desc": "Digital transformation leader, architect of beckn protocol. 9+ years' experience in hardware, middleware, and software. ME in Embedded Systems, BTech in Electronics.",
                      "media" : [
                        {
                          "mimetype": "application/pdf",
                          "url" : "https://www.resume-link.com"
                        },
                        {
                          "mimetype": "application/pdf",
                          "url" : "https://www.certificate-link.com/1"
                        },
                        {
                          "mimetype": "application/pdf",
                          "url" : "https://www.certificate-link.com/2"
                        }
                      ],
                      "images": [
                        {
                          "url" : "https://media.licdn.com/dms/image/C5103AQHUETtJK2ZqRw/profile-displayphoto-shrink_400_400/0/1558161034172?e=1705536000&v=beta&t=jxO7s1fvk8fcXPK7CmTcU_kVzkqY-SKriPzWGPgIETE"
                        }
                      ]
                    },
                    "fulfillment_ids": [
                      "ful-01",
                      "ful-02"
                    ]
                  }
                ]
              }
            ]
          }
        }
      };
    
      
      // if (
      //   body.context.domain.includes('financial') &&
      //   !body.context.domain.includes('onest')
      // ) {
      //   sandboxUrl = `${process.env.SANDBOXURL}/financial-services/${body.context.action}`;
      // } else if (
      //   body.context.domain.includes('dsep') ||
      //   body.context.domain.includes('onest')
      // ) {
      //   sandboxUrl = `${process.env.SANDBOXURL}/dsep/${body.context.action}`;
      // } else if (body.context.domain.includes('dent')) {
      //   sandboxUrl = `${process.env.SANDBOXURL}/dent/${body.context.action}`;
      // } else if (body.context.domain.includes('dhp')) {
      //   sandboxUrl = `${process.env.SANDBOXURL}/dhp/${body.context.action}`;
      // } else if (body.context.domain.includes('supply-chain-services')) {
      //   sandboxUrl = `${process.env.SANDBOXURL}/industry-4.0/${body.context.action}`;
      // } else if (
      //   body.context.domain.includes('online-dispute-resolution:0.1.0')
      // ) {
      //   sandboxUrl = `${process.env.SANDBOXURL}/odr/${body.context.action}`;
      // } else if (body.context.domain.includes('local-retail')) {
      //   const default_version = "1.1.0"
      //   let version = default_version
      //   const current_version = body?.context?.core_version
      //   if (current_version) {
      //     version = current_version
      //   }
      //   sandboxUrl = `${process.env.SANDBOXURL}/local-retail/${version}/${body.context.action}`;
      // } else {
      //   sandboxUrl = `${process.env.SANDBOXURL}/mobility/${body.context.action}`;
      // }
      // console.log('called', sandboxUrl);
      //const { responseData } = searchResponse; //await axios.post(sandboxUrl, body);

      console.log('searchresponse: ' + JSON.stringify(response));
      if (!response?.context) {
        console.log(
          new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
          'Invalid response from sandbox bpp api',
        );
        return;
      }

      response.context.message_id = body.context.message_id;
      response.context.bap_id = body.context.bap_id;
      response.context.bap_uri = body.context.bap_uri;
      response.context.transaction_id = body.context.transaction_id;
      response.context.domain = body.context.domain;

      if (body?.context?.bpp_id)
      response.context.bpp_id = body.context.bpp_id;

      if (body?.context?.bpp_uri)
      response.context.bpp_uri = body.context.bpp_uri;

      console.log('searchresponse: ' + JSON.stringify(response));
      
      let requestAction = null;

      switch (body.context.action) {
        case 'search':
          requestAction = 'on_search';
          break;
        case 'select':
          requestAction = 'on_select';
          break;
        case 'init':
          requestAction = 'on_init';
          break;
        case 'confirm':
          requestAction = 'on_confirm';
          break;
        case 'status':
          requestAction = 'on_status';
          break;
        case 'track':
          requestAction = 'on_track';
          break;
        case 'cancel':
          requestAction = 'on_cancel';
          break;
        case 'update':
          requestAction = 'on_update';
          break;
        case 'rating':
          requestAction = 'on_rating';
          break;
        case 'support':
          requestAction = 'on_support';
          break;
        case 'get_cancellation_reasons':
          requestAction = 'cancellation_reasons';
          break;
        case 'get_rating_categories':
          requestAction = 'rating_categories';
          break;

        default:
          console.log(
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
            'Invalid request action -> ' + requestAction,
          );
          return;
      }

      const bppClientUrl = `${process.env.BPPCLIENTURL}/${requestAction}`;

      setTimeout(async () => {
        console.log(
          '\n\n',
          '-----------------------------------------------------------',
          '\n',
          new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
          `\n`,
          `\n`,
          `Making post request to: ${bppClientUrl}`,
          `\n`,
          `\n`,
          `Body: ${JSON.stringify(body)}`,
          `\n`,
          '-----------------------------------------------------------',
        );
        try {
          const r = await axios.post(bppClientUrl, response);
        } catch (error) {
          console.log('error=>', error);
        }
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }
}
