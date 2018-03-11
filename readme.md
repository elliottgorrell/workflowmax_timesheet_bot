# Intro

This is a little project I am creating to play with Node.js and the Slack API. It's concept came from my boss having to message me on Monday mornings far too often to tell me I had forgotten to fill in my timesheets. When complete this little app will run on AWS Lambda and be triggered on Sunday afternoons.
It will do the following:

1. Hit the WorkflowMax API retrieving the timesheets of all staff for the week
2. If any staff don't have their timesheet filled for any of the days use their WorkflowMax email's in the next step
3. Assume their workflowmax email is their slack email and retrieve their slack Ids using their emails
4. Hit the slackbot api telling it to DM all the users who haven't finished their timesheets

## TODO
[x] Write class to interact with times.list workflowmax API  
[x] Write class to interact with staff.list workflowmax API  
[ ] Write function to discover who has been naughty and not done their timesheet  
[ ] Write class to instruct slackbot to send a DM with certain content  
[ ] Write class to retrieve slack users by email  
[ ] Add serverless framework  
[ ] Deploy to Lambda  

## Challenges and Risks
* How are we going to filter out old staff and non-working staff in WorkflowMax?
* Will workflowmax email match slack email?
