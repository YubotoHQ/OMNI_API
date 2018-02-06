# OMNI_API
OMNI channel is messaging solution that enables you to communicate with your users through various messaging channels.

FORMAT: 1A
HOST: https://services.yuboto.com/

# OMNI API Documentation

## Getting Started with OMNI API

Before making use of our API, please read the following carefully to get you started.

The following document is addressed to programmers who want to incorporate the OMNI service to their systems.

Here, you will find information about reception via HTTP POST.

OMNI channel is messaging solution that enables you to communicate with your users through various messaging channels. 

Leverage your communication options with OMNI messaging and engage your users over various channels:

•   SMS

•   VIBER

To start using the OMNI service, follow the steps below:

•   Register at https://services.yuboto.com/yuniverse. 

•   Request an OMNI API Key from our support team at support@yuboto.com.

•   Purchase the required credits to start sending messages.

If you need information about message charges or more information about Viber messages, please contact us at: sales@yuboto.com

You can also call us at +30 211 11 44 111 working days from 9.00 am to 6.00 pm

The use of Yuboto platform is subject to the terms of use and privacy statement you may find at https://services.yuboto.com/yuniverse 

## Base URL

Submit all requests to the base URL. All the requests are submitted through HTTP POST method.

<b>Base URL:</b> https://services.yuboto.com/

<b>Service Endpoint:</b> /omni/v1

Using the OMNI service, you can perform the following actions:

•   <b>Send:</b> Send SMS or Viber messages (Paragraph 1)

•   <b>Dlr:</b> Retrieve the status of previously sent messages (Paragraph 2)

•   <b>Cost:</b> Request the cost of SMS and Viber messages (Paragraph 3 and Paragraph 4)

•   <b>Balance:</b> Request your account’s balance (Paragraph 5)

•   <b>Cancel:</b> Cancel scheduled messages (Paragraph 6)

## Content Type

The message request must be in JSON format. Because of that HTTP request must have HTTP header “Content-Type” that must have value “application/json; charset=utf-8”.

## Authentication

All API calls require authentication. This is essential for the API to identify which user is making the call so that appropriate results will be returned, as well as for security reasons.

For this purpose, API uses basic authentication. Authentication data are sent via HTTP header “Authorization”.

Steps to construct authorization header:

<b>1.</b> Base64 encode the API Key.

<b>2.</b> Supply an “Authorization” header with content “Basic” followed by the encoded API Key. For example, the Authorization header will be:

Authorization: <b>Basic apiKey</b>

Request an API Key from our support team at support@yuboto.com. Your API Key depends on the type of sending you wish to make (e.g. an API Key for <b>only SMS messages</b>, an API Key for <b>only Viber messages</b> or an API Key for <b>OMNI (SMS and/or Viber) messages</b>). Please keep your API Key safe to prevent any unauthorized access. Once you obtain your API Key, you will have to use it in every API call you make. The API key must always be specified as a parameter in the query string of the requesting URL. 

# Group Send Method

This method allows you to send text messages to one or multiple recipients simultaneously. The maximum number of recipients you can send at one time is 1000.

## Send Method

### Send Method [POST]

<font size="5px"><b>Type of SMS Messages</b></font>

Through Yuboto platform, you can send:

•   Simple SMS (up to 160 characters)

•   Flash SMS (up to 160 characters)

•   Long SMS (more than 160 characters)

•   Unicode SMS (up to 70 characters)


A simple SMS includes all the 7bit alphabet characters as defined by the GSM 03.38.
Some 8bit alphabet characters may also be included and sent as a simple SMS. These will count as 2 characters.

These characters are:

 | Character Name                   | Character  |
 |----------------------------------|------------|
 |    `CIRCUMFLEX ACCENT`           | ^          | 
 |    `LEFT CURLY BRACKET`          | {          |
 |    `RIGHT CURLY BRACKET`         | }          | 
 |    `REVERSE SOLIDUS (BACKSLASH)` | \          | 
 |    `LEFT SQUARE BRACKET`         | [          |
 |    `TILDE`                       | ~          |
 |    `RIGHT SQUARE BRACKET`        | ]          | 
 |    `VERTICAL BAR`                | `|`        |   
 |    `EURO SIGN`                   | €          |                                                                          | 

All the other characters included in the 8bit alphabet can only be sent as Unicode characters (SMS 70 characters).

For more information about Unicode characters, you can visit: http://www.unicode.org/charts/.

If you use small case Greek characters (8bit) in a non Unicode format, then the system will automatically convert them into Capital Greek characters (7bit).

Long SMS is a text message longer than 160 characters. If the user’s mobile phone supports it, then the text message will be received as one. Otherwise the message will be divided into multiple messages of 153 characters each (Maximum number of characters 2000).

If you choose to send a long SMS without previously notifying the system, then the system will limit it to 160 characters (simple SMS).


<font size="5px"><b>System Forwarded Callbacks</b></font>

If callback is false, then Yuboto’s system will not send to the client the final state info. When callback is true, Yuboto’s system will forward the final state info to the client. The information that the client will receive, it is possible for the user to pass it on dynamically to the system.

The message info will be forwarded through a get request to the callback url. The following parameters will be included in the query string:

•   sender – The message sender

•   receiver – The destination phone number

•   messageId – The unique id that the message has

•   statusCode – The status code that the message has

•   statusDescription – See paragraph 3.3 for a detailed description of status values

•   dlrDate – The date that the message delivered

•   channel – The channel with which the message was sent

•   option1 – The user defined value that was passed to method ‘send’

•   option2 – The user defined value that was passed to method ‘send’

+ Parameters 
  + phonenumbers: `306936XXXXXX, 306936XXXXXX` (required, string (Use country code without + or 00.) )
  Refers to the phone number of the recipient or recipients of the text message (use commas for multiple recipients).
  + dateinToSend: `20180101` (optional, Integer (ΥΥΥΥΜΜDD, YYYY refers to the year ΜΜ refers to the month DD refers to the day))
  Indicates the date you wish to send the message. If this is omitted, the message is sent instantly.
  + timeinToSend: `20180101` (optional, Integer (HHMM, ΗΗ refers to the hour ΜΜ refers to minutes))
  Indicates the time you wish to send your message. If this is omitted, the message is sent instantly.
  + dlr: `true` (optional, Bool)
  The flag indicates if delivery receipt request must be sent to customer’s application. (Default: false)
  + callbackUrl: `http://test.com` (optional, string)
  When the message reaches its final state, a call to this url will be performed by Yuboto’s system with the message’s delivery info. See paragraph 2.3. 
  + option1: `option 1` (optional, string)
  User defined value that will be included in the call to the provided callback_url.
  + option2: `option 2` (optional, string)
  User defined value that will be included in the call to the provided callback_url.
  + sms: (optional, SmsObj Object)
  This object is required if list of channels contains SMS channel. (&#x2055;<b>sms</b> or <b>viber</b> parameter must always exists to your call request):
     + sender: SMS originator (“sender”) that will be displayed on mobile device’s screen.
     •   Alphanumeric origin, max. 11 characters
     •   Numeric origin, max. 20 characters
     (<b>Permitted Values:</b> String, <b>Required:</b> Yes)
     + text: The text of the message (<b>Permitted Values:</b> String, <b>Required:</b> Yes)
     + validity: If the SMS is not delivered directly, this variable indicates the amount of seconds for which the message will remain active, before being rejected by the SMSC (<b>Permitted Values:</b> Integer (Min Value: 30, Max Value: 4320 (default)), <b>Required:</b> No)
     + typesms: Indicates the type of message you wish to send (<b>Permitted Values:</b> String (1. sms (default), 2. flash, 3. unicode), <b>Required:</b> No)
     + longsms: Indicates if the message can be over 160 characters. It applies only to standard type SMS (<b>Permitted Values:</b> Bool (1. false (default),  2. true), <b>Required:</b> No)
     + priority: Indicates which channel has priority when it comes to omni messaging (default value is: 0) (<b>Permitted Values:</b> Integer, <b>Required:</b> No)
  + viber:(optional, ViberObj Object)
  This object is required if a list of channels contains VIBER channel. Parameters text, buttonCaption + buttonAction and image make Viber Service Message content. There are 4 possible combinations of Viber Service Message content: 1) text only, 2) image only, 3) text + button, 4) text + button + image. (&#x2055;<b>sms</b> or <b>viber</b> parameter must always exists to your call request).
     + sender: Viber message originator (“sender”) that will be displayed on mobile device’s screen.
     •   Alphanumeric origin, max. 20 characters
     (<b>Permitted Values:</b> String, <b>Required:</b> Yes)
     + text<b>&#x2055;</b>: The Viber Service Message text. Text length can be up to 1000 characters. VIBER text can be sent alone, without button or image (<b>Permitted Values:</b> String, <b>Required:</b> No)
     + validity: If the Viber message is not delivered directly, this variable indicates the amount of seconds for which the message will remain active, before being rejected (<b>Permitted Values:</b> Integer (Min Value: 15, Max Value: 86.400 (default)), <b>Required:</b> No)
     + expiryText: Relevant for iOS version of Viber application (iPhone users only). This is the text that will be displayed if Viber Service Message expires (<b>Permitted Values:</b> String, <b>Required:</b> Yes)
     + buttonCaption<b>&#x2055;</b>: A textual writing on the button. Maximum length is 30 characters. The VIBER button can be sent only if Viber Service Message contains text (<b>Permitted Values:</b> String, <b>Required:</b> No)
     + buttonAction<b>&#x2055;</b>: The link of button action. (<b>Permitted Values:</b> String, <b>Required:</b> No)
     + image<b>&#x2055;</b>: The URL address of image sent to end user. The VIBER image can be sent only alone or together with text and button (<b>Permitted Values:</b> String, <b>Required:</b> No)
     + priority: Indicates which channel has priority when it comes to omni messaging (default value is: 0) (<b>Permitted Values:</b> Integer, <b>Required:</b> No)
     
         
        
   <b>&#x2055;</b> Parameters text, buttonCaption + buttonAction and image make Viber Service Message content. There are 4 possible combinations of Viber Service Message content:
     •   text only,
     •   image only,
     •   text + button,
     •   text + button + image

+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz
   
The request body is of type SendRequest.

   + Body
    
          {
                      callbackUrl = "http://test.com",
                      dlr = true,
                      option1 = "option 1",
                      option2 = "option 2",
                      phonenumbers = { "306936XXXXXX", "306936XXXXXX" },
                      dateinToSend = 20180101,
                      timeinToSend = 1000,
                      sms = new SmsObj
                      {
                          sender = "Demo",
                          text = " This is a test sms fallback",
                          validity = 100,
                          typesms = "sms",
                          priority = 1
                      },
                      viber = new ViberObj
                      {
                          sender = "Demo",
                          text = " This is an omni viber message",
                          validity = 15,
                          image = "https://someurl/banner.jpg",
                          buttonAction = "https://someurl/contact",
                          buttonCaption = "Contact us",
                          expiryText = "This viber message expired",
                          priority = 0
                      }
                   }
       
+ Response
   The response body is of type SendResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `Message`: A list which contains the status of the messages.
         - `id`: The id of message status.
         - `channel`: The channel that the message will be send (SMS or Viber).
         - `phonenumber`: Refers to the phone number of the recipient of the text message.
         - `status`: The status of the message.
        
    + Body
    
            {
                    "ErrorCode":0,
                    "ErrorMessage":"",
                    "Message":[
                     {
                          "id":"MessageID1",
                          "channel":"sms",
                          "phonenumber":"306936XXXXXX",
                          "status":"Submitted"
                     },
                     {
                          "id":"MessageID2",
                          "channel":"sms",
                          "phonenumber":"306936XXXXXXX",
                          "status":"Submitted"
                     }
                    ]
            }

# Group DLR Method

Using this method, you can retrieve information on sent text messages and check their status in real-time.

## DLR Method [/omni/v1/Dlr]

### DLR Method [POST /omni/v1/Dlr]

<font size="5px"><b>Status of Messages</b></font>

The following table shows the possible status of a message (SMS or Viber):

 | Initial Status                   | Final Status*   |
 |----------------------------------|-----------------|
 |    `Sent`                        | No              | 
 |    `Pending`                     | No              |
 |    `Submitted`                   | No              | 
 |    `Buffered`                    | No              | 
 |    `Delivered`                   | Yes             |
 |    `Not Delivered**^`            | Yes             |
 |    `Unknown^`                    | Yes             | 
 |    `Error`                       | Yes             |   
 |    `Expired^`                    | Yes             |
 |    `Failed***`                   | Yes             |
 |    `Rejected****^`               | Yes             |
 |    `Scheduled`                   | No              |
 |    `Canceled`                    | Yes             |
 |    `Deleted^`                    | Yes             |
 |    `Seen`                        | Yes             |
 
<b>&#x2055;</b> Indicates if this is the final status of the message or it is going to change.

<b>&#x2055;&#x2055;</b> Some of the possible reasons for failure of delivery might be:

i) Invalid telephone number ii) telephone deactivated or switched-off. In the last two cases, the SMSC holds the message for 3 days and before rejecting it, allows you to select shorter time period (the variable validity of SmsObj see par. 2.2)

<b>&#x2055;&#x2055;&#x2055;</b> Delivery fails when there are no available Credits to your account.

<b>&#x2055;&#x2055;&#x2055;&#x2055;</b> Messages are rejected when the recipient of the SMS or Viber message has an invalid format or when your account or Yuboto platform do not support it.
Failed or Rejected messages are not charged (to your account). 

<b>^</b> These status (final status) cause fallback to your 2nd priority channel. For example, if your priority channel is Viber, at first Yuboto will try to deliver a Viber service message. If the Viber Service Message is undeliverable for whatsoever reason, Yuboto will send an SMS message. 
Possible reasons for Viber Service Message non-delivery are:

•   Subscriber doesn’t have Viber app installed on device

•   Subscriber is not reachable within given TTL

•   Subscriber has Viber app that does not support Viber Service Messages (e.g. Windows Phone OS version of Viber app)

+ Parameters 
  + id: `54E3B5F5-2CF3-412E-80A6-A324D94500F6` (required, string)
  The id of message status.
  
+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz

The request body is of type DlrRequest.
    
    + Body
        {
            id = "54E3B5F5-2CF3-412E-80A6-A324D94500F6”             
        }

     
+ Response
   The response body is of type DlrResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `id`: The id of message status.
    + `phonenumber`: Refers to the phone number of the recipient or recipients of the text message.
    + `option1`: The value that included in the call to the provided callback_url.
    + `option2`: The value that included in the call to the provided callback_url.
    + `dlr`: A list with dlr channels and their details.
         - `channel`: The message channel related to DLR request. Possible values are: viber or sms.
         - `priority`: Indicates which channel has priority when it comes to omni messaging (default value is: 0).
         - `status`: The status that the message has.
         - `cost`: The cost of the message.
         - `sender`: The sender of the message.
         - `text`: The text that the message has.
         - `submitDate`: The date the message was sent.
         - `dlrDate`: The date the message was delivered.
        
    + Body
    
            {
                "ErrorCode":0,
                "ErrorMessage":"",
                "id":"54E3B5F5-2CF3-412E-80A6-A324D94500F6",
                "phonenumber":"306936XXXXXXX",
                "option1":"option1 value",
                "option2":"option2 value",
                "dlr":[
                {
                    "channel":"viber",
                    "priority":0,
                    "status":"Not Delivered",
                    "cost":1,
                    "sender":"Demo",
                    "text":"This is a demo viber msg",
                    "submitDate":"\/Date(1500550221991)\/",
                    "dlrDate":"\/Date(1500550221990)\/"
                },
                {
                    "channel":"sms",
                    "priority":1,
                    "status":"Delivered",
                    "cost":1,
                    "sender":"Demo",
                    "text":"This is a demo sms msg",
                    "submitDate":"\/Date(1500550281991)\/",
                    "dlrDate":"\/Date(1500550341991)\/"
                }
                ]
            }


# Group Cost Method

Through the following method you can request the cost of sending a simple SMS or Viber.

## Cost Method [/omni/v1/Cost]

### Cost Method [POST]

+ Parameters 
  + iso2: `gr` (required, string (2-letter code))
  The ISO_3166-1_alpha-2 code of the country. <b>&#x2055;</b>iso2 or phonenumber parameter must always exists.
  + phonenumber: `306936XXXXXX` (required, string)
  Refers to the phone number of the recipient of the text message. <b>&#x2055;</b>iso2 or phonenumber parameter must always exists. 
  + channel: `sms` (required, string)
  The channel that the message will be send (SMS or Viber). <b>&#x2055;&#x2055;</b> In case you have an <b>omni API Key</b> (you send SMS and/or Viber messages), you need to specify for which channel you want to learn the cost. If your channel is not omni, then this parameter is not required.
  
+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz
            
The request body is of type CostRequest.
    
    + Body
        {
            iso2 = “gr”,
            channel = “sms”
        }

     
+ Response
   The response body is of type CostResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `channel`: The channel that the message will be send (SMS or Viber).
    + `type`: Indicates the type of your cost (e.g. credits or money).
    + `costInfo`: A list with all the details about the cost of sending a simple SMS or Viber message to one or multiple recipients.
         - `networkName`: The name of the network (e.g. `VODAFONE - PANAFON Hellenic Telecommunications Company`).
         - `cost`: The cost of sending a simple SMS or Viber message to one or multiple recipients.

        
    + Body
    
            {
                "ErrorCode":0,
                "ErrorMessage":"",
                "channel":"sms",
                "type":"credits",
                "costInfo":[
                {
                    "networkName":"Network name1",
                    "cost":1
                },
                {
                    "networkName":"Network name2",
                    "cost":1
                }
                ]
            }

# Group Cost Details Method

Using this method, you can retrieve the cost details of sending a simple SMS or Viber message for a specific iso2. The difference from Cost Method is that this method returns for a specific iso2, the mcc and mnc.

## Cost Details Method [/omni/v1/CostDetails]

### Cost Details Method [POST]            
            
+ Parameters 
  + iso2: `gr` (required, string (2-letter code))
  The ISO_3166-1_alpha-2 code of the country.

+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz
  
The request body is of type CostRequest.
    
    + Body
        {
            iso2 = “gr”
        }

     
+ Response
   The response body is of type CostDetailsResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `channel`: The channel that the message will be send (SMS or Viber).
    + `type`: Indicates the type of your cost (e.g. credits or money).
    + `costInfoDetails`: A list with all the details about the cost info of sending a simple SMS or Viber message to one or multiple recipients.
         - `networkName`: The name of the network (e.g. `VODAFONE - PANAFON Hellenic Telecommunications Company`).
         - `mcc`: The mobile country code (MCC) consists of 3 decimal digits (e.g. `202`).
         - `mnc`: The mobile network code (MNC) consists of 2 or 3 decimal digits (for example: MNC of 001 is not the same as MNC of 01). The first digit of the mobile country code identifies the geographic region as follows (the digits 1 and 8 are not used):

            •   0 - Test networks
            
            •   2 - Europe
            
            •   3 - North America and the Caribbean
            
            •   4 - Asia and the Middle East
            
            •   5 - Oceania
            
            •   6 - Africa
            
            •   7 - South and Central America
            
            •   9 - Worldwide (Satellite, Air - aboard aircraft, Maritime - aboard ships, Antarctica)
         - `cost`: The cost of sending a simple SMS or Viber message to one or multiple recipients.

        
    + Body
    
            {
                "costInfoDetails":[
                {
                    "networkName":"Wind Hellas Telecommunications SA",
                    "mcc":"202",
                    "mnc":"009",
                    "cost":1.00
                },
                {
                    "networkName":"Wind Hellas Telecommunications SA",
                    "mcc":"202",
                    "mnc":"010",
                    "cost":1.00
                },
                {
                    "networkName":"VODAFONE - PANAFON Hellenic Telecommunications Company SA",
                    "mcc":"202",
                    "mnc":"005",
                    "cost":1.00
                },
                {
                    "networkName":"COSMOTE Mobile Telecommunications SA",
                    "mcc":"202",
                    "mnc":"001",
                    "cost":1.00
                },
                {
                    "networkName":"COSMOTE Mobile Telecommunications SA",
                    "mcc":"202",
                    "mnc":"002",
                    "cost":1.00
                }
                ],
                "ErrorCode":0,
                "ErrorMessage":null,
                "channel":"sms",
                "type":"credits"
            }

# Group Balance Method

Through the following method you can retrieve information on your current balance.

## Balance Method [/omni/v1/Balance]

### Balance Method [POST]         

+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz
            
+ Response
   The response body is of type BalanceResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `balance`: Your current balance in credits.
    + `balanceLimit`: To what limit your account can send messaging (default value is: 0).
    + `type`: The type of your balance based on user’s configuration (e.g. credits or money).
        
    + Body
    
            {
                "ErrorCode":0,
                "ErrorMessage":"",
                "balance":100,
                "balanceLimit":0,
                "type":"credits"
            }

# Group Cancel Method 

Through the following method you can cancel a scheduled message, before the scheduled date and time. You are able to cancel the sending of a message up to <b>three minutes</b> before the time it is scheduled to send.

## Cancel Method [/omni/v1/Cancel]

### Cancel Method [POST]            
            
+ Parameters 
  + id: `601756D5-6537-4DC5-BD07-10D95BF1621E` (required, string)
  The id of message status.

+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz
  
The request body is of type CancelRequest.
    
    + Body
        {
            id = "601756D5-6537-4DC5-BD07-10D95BF1621E"
        }

     
+ Response
   The response body is of type CancelResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `channel`: The channel that the message is scheduled to be send (SMS or Viber).
    + `id`: The id of message status.
    + `status`: The status of the message.
        
    + Body
    
            {
                "ErrorCode":0,
                "ErrorMessage":"",
                "channel":"sms",
                "id":"601756D5-6537-4DC5-BD07-10D95BF1621E",
                "status":"Canceled"
            }

# Group Create Key Method 

This method creates an API Key for your subaccounts. Contact with Account Manager, in order to give you more information about how getting an API Key. Thanks to this method, you can provide your subaccounts with an API Key that they can use.

## Create Key Method [/omni/v1/CreateKey]

### Create Key Method [POST]            
            
+ Parameters 
  + username: `demouser22` (required, string)
  The username of your subaccount.

+ Request (application/json; charset=utf-8)
+ Headers

            Authorization: Basic QkIxNDMwRTQtOEE4OC00NTAzLThCMjAtQjI4QkJDOURBMUUz
  
The request body is of type CreateKeyRequest.
    
    + Body
        {
            username = "demouser22"
        }

     
+ Response
   The response body is of type CreateKeyResponse.
   
    + `ErrorCode`: The response error code for this call. This will be 0 if successful.
    + `ErrorMessage`: The response error message. This will be null if successful.
    + `username`: The user’s username.
    + `apiKey`: The unique API Key of the user.
    + `channel`: The channel that your API Key can be used. Possible values are:
    <b>1) viber</b> - sending only VIBER message,
    <b>2) sms</b> - sending only SMS message,
    <b>3) omni</b> - a combination of all available channels. In case there are more than two channels, then the system will see the priority of each channel and send the messages to the first priority channel.

        
    + Body
    
            {
                "ErrorCode":0,
                "ErrorMessage":"",
                "username":"demouser22",
                "apiKey":"-----NewApiKey-----",
                "channel":"sms"
            }



