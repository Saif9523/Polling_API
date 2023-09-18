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

# API Endpoints

<table>
  <tr>
    <th> HTTP Verbs	 </th>
    <th> Endpoints	</th>
    <th> Action </th>
  </tr>
  <tr>
    <td> POST	</td>
    <td> /questions/create	</td>
    <td>To create a question </td>
  </tr>
  <tr>
    <td> POST </td>
    <td> /questions/:id/options/create	</td>
    <td>To add options to a specific question </td>
  </tr>
  <tr>
    <td> DELETE	 </td>
    <td> /questions/:id/delete		</td>
    <td> To delete a question </td>
  </tr>
  <tr>
    <td> DELETE </td>
    <td> /options/:id/delete		</td>
    <td> To delete an option </td>
  </tr>
  <tr>
    <td> Get </td>
    <td> /options/:id/add_vote	</td>
    <td> To increase the count of votes </td>
  </tr>
  <tr>
    <td> Get </td>
    <td> /questions/:id		</td>
    <td> To view a question and its options </td>
  </tr>
</table>

<h1> Usage </h1>
<ul>
  <li> Run npm start to start the application. </li>
  <li> Connect to the API using Postman on port 8000. </li>
</ul>


# Teach Stack
<ul>
  <li> NodeJs </li>
  <li> ExpressJs </li>
  <li> MongoDB </li>
  <li> PassportJs </li>
  <li> Mongoose ODM </li>
</ul>


# Hosted Link : https://saif9523.github.io/Polling_API/
