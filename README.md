Setup and Run:
1. npm install --production (make sure to include 'production' tag)
2. npm start 
3. App is served to 127.0.0.1:8080
NOTE: 2a. If npm start does not point to the correct http-server module directory
        -> Install http-server globally: npm install -g http-server 
        -> Run http-server: http-server

Write-up:
While browsing your site I found that your Particle Build control panel is a basic version of the skill test prompt. My project aims to match the look of the control panel and extend its functionality to include the four Particle API endpoints specified.

I found it very easy and fun to be able to drop in your existing style elements using Bourbon + Neat. I have already realized the ease of Redux's data flow and REALLY enjoyed using native javascript to produce UI elements. Particle's JS API was great to work with and I was pleasantly surprised by the super-clean codebase and the size of the community. 

The only hiccup was trying to use Particle.callFunction(). It was the only endpoint specified that required passing arguments (broken in Particle-api-js v6.0.0). After a bit of bewilderment, I tried a previous version and only then found the closed issue calling out the flaw. On the bright side, I got to dig into and familiarize myself with the codebase while searching for the bug.

If I had more time to devote to this project I would break down the components, especially DeviceInfoVar and DeviceInfoFunc. I would definitely refactor my code to follow a style guide, as I'm not too happy about my current code style, especially some of the element iterators in my render functions. At this point I think I have the infrastructure set up to make implementing all of the remaining API features trivial, and it would be great to implement "Product" API functionality as well.

In the office is there much interaction between the hardware and software developers? It would be great to see my work put into action on the spot and to have a flow of ideas and feedback from the hardware side. Your product is so open-ended, do you encourage/ enable employees to come up with ideas to demonstrate its capabilities (hackathons, demonstrations, etc)? What are your biggest projects at the moment, and would the majority of my work be on new features or supporting existing systems?

After seeing how neat the Particle-API-JS source is, I'd love to jump in and make some contributions. Would you be willing to setup another mock account so I can setup devices and products for testing my changes? 

Thanks for taking the time to check out my submission, and I look forward to chatting.

- Tyler