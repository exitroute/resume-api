# Resume App API

This node.js app was created to support the development of an application 
that would allow a user to perpare and send optimised resumes as part of job 
applications in a few clicks. 

This would allow the user to spend more time networking and less 
time preparing resumes that get only a few seconds of a review.

The idea started as a proposal to turn my resume into a chatbot. After working 
with a static site generator I decide to pause the development of the 
chatbot in favour of developiing an app using **express,** **node,** and 
**mongo,** and implement **CRUD** methods as per the course curriculum.


This is where the authentication logic for the 
resume will go

URLSearchParams

TODO

Add packages
Add file and folders

/controllers 
  authentication.js
    -> functions: authenication, newUser
    save to database

/helpers
  validateToken.js

/routes 
  index.js -> public routes
  auth.js -> authenticate, newUser

/model
  User.js

/data
  resume.json
