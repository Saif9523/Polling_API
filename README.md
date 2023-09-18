# Polling_API
<h5>
  <p> API for Polling Questions - Coding Ninjas Backend Skill Test Project </p>

  <p> Task: Need to create an API where anyone can create questions with options and also add votes to it </p>
</h5>

<h1> Polling System API Features </h1>
<ul>
  <li> Create questions </li>
  <li> Add options to question </li>
  <li> Delete a question → (optional: A question can’t be deleted if one of it’s options has votes) </li>
  <li> Delete an option → (optional: An option can’t be deleted if it has even one vote given to it) </li>
  <li> Add vote to an option </li>
  <li> View a question with all of its options </li>
</ul>

<h1> Required Routes </h1>
<li> /questions/create (To create a question) </li>
<li> /questions/:id/options/create (To add options to a specific question) </li>
<li> /questions/:id/delete (To delete a question) </li>
<li> /options/:id/delete (To delete an option) </li>
<li> /options/:id/add_vote (To increment the count of votes) </li>
<li> /questions/:id (To view a question and it’s options) </li?

<h1> Usage </h1>
<ul>
  <li> Run npm start to start the application. </li>
  <li> Connect to the API using Postman on port 8000. </li>
</ul>

<h1> Folder Structure </h1>

CSV_Upload/
|── |config/
│   |      ├── mongoose.js
|   |
├── routes/
│   |      ├── api/V1/
│   ├── index.js
|   |
├── controllers/
│   ├── OptionsController.js
│   ├── QuestionsController.js
|   |
├── models/
│   ├── options.js
│   ├── questions.js
|   |
├── package-lock.json
├── package.json
├── README.md

# Teach Stack
<ul>
  <li> NodeJs </li>
  <li> ExpressJs </li>
  <li> MongoDB </li>
  <li> PassportJs </li>
  <li> Mongoose ODM </li>
</ul>


# Hosted Link : https://saif9523.github.io/Polling_API/
