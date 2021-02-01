## **Introduction**

We are using Trello as our Project Workflow management system. So we will be implementing some features from Trello in our GitHub working pattern. To keep our management workflow easy, we have certain guidelines that will help us working together.

## **Our Guidlines**
1.  We will be using “Production ready master approach” which is really famous in developers community. That means, we will be merging only production ready release here after completing all tests and reviews.

2. We will be using one development branch which is our central branch for working during development. Pushing code directly in development is rather to be avoided. Instead, we will create a separate branch for each Epic or User story as per the use cases.
One example for it using epics:
For the epic Oauth2 Login:
We will create two branches with technical numbers from Trello at the end of the name of the branch. 
*  oauth2_backend_84
*  oauth2_frontend_72

   This will help us track the branch with our Trello user story logs and will be critical during evaluation and review process.          Furthermore, ideally one person works simultaneously at one branch.

3. Each branches will be created from development and at last merged in development. Once the code is development-ready, please create a Pull-request and add at least one of the developers to review it. After the review, code will be merged into development. Some criteria for approval are:
*  Screenshot of running program.
*  No merge conflict.

4. Please don't delete a branch after merging.