# Basic-REST-API
![API](https://github.com/user-attachments/assets/9ad7b9b8-329e-40d8-8e2f-a129c9c5f8b8)

## Introduction and Objectives
In this project, I developed a REST API designed to manage patient data, with a primary focus on implementing the essential CRUD (Create, Read, Update, Delete) operations. This API ensures secure and efficient handling of sensitive patient information while adhering to RESTful principles. The project was designed to demonstrate my backend development skills and to be an integral part of my GitHub portfolio.

## Objectives:

Develop a REST API to manage patient records securely.
Demonstrate the implementation of CRUD operations within a RESTful framework.
Showcase the use of modern development tools for efficient API testing and deployment.

## Technologies Employed
- <b>Azure Virtual Machine</b>: To isolate the operation from my physical system
- <b>Node.js</b>: A JavaScript runtime for server-side development.
- <b>Express.js</b>: A web framework for Node.js, simplifying routing and middleware management.
- <b>body-parser</b>: Middleware for parsing JSON request bodies.
- <b>Visual Studio Code</b>: An integrated development environment (IDE) used for coding and debugging, run with administrator privileges to handle necessary system operations.
- <b>Postman</b>: A platform for API testing, used to validate and verify the functionality of the REST API.

## Connection Between Technologies

<b>VS Code to Node.js/Express</b>: VS Code is where you write and debug your Node.js and Express.js code.<br>
<b>Node.js/Express to Postman</b>: Node.js runs the server you built with Express.js, and Postman is used to send requests to this server to test the API’s functionality.

### Basically:
1. Develop the API in VS Code using Node.js and Express.js.
2. Run the API on Node.js, using Express.js to manage routing and middleware.
3. Test the API with Postman to ensure it works as expected.

## Methodologies and Procedures
1. <b>Development Environment</b>
The project was developed using Visual Studio Code, running as an administrator to ensure full access to system resources.<br>
This setup allowed for efficient coding, debugging, and testing within a controlled environment.<br><br>
![image](https://github.com/user-attachments/assets/8a265c20-6eab-476e-a403-b04204ea3f6a)


2. <b>Database Setup</b>
Patient data and medical records were stored in simple JavaScript objects, simulating a basic database for the purpose of this project.<br>
<b>Patients Object</b>: Stores patient information such as SSN, first name, last name, and phone number.<br>
<b>Records Object</b>: Stores the patient's medical status.<br><br>

3. <b>CRUD Operations</b><br>

<b>Create (POST)</b>: Adds a new patient to the database.

![image](https://github.com/user-attachments/assets/8ffc811c-58b7-4f51-a42b-73d45818fddc)

<b>Endpoint</b>: / <br>
<b>Headers Required</b>: SSN, FirstName, LastName, Phone<br>
<b>Action</b>: Adds the patient data to the patients object.<br><br>

<b>Read (GET)</b>: Retrieves a patient's medical record.

![image](https://github.com/user-attachments/assets/0cb6e444-fcaf-4455-b4d8-d1c7f648e7bd)

<b>Endpoint</b>: /records<br>
<b>Headers Required</b>: SSN, FirstName, LastName<br>
<b>Body Parameter</b>: reasonforvisit set to "medicalrecords"<br>
<b>Action</b>: Validates patient details and returns the corresponding record from the records object.<br><br>

<b>Update (PUT)</b>: Updates a patient's phone number.

![image](https://github.com/user-attachments/assets/86f8d986-b79c-435e-a3f3-c53622e16919)

<b>Endpoint</b>: /<br>
<b>Headers Required</b>: SSN, FirstName, LastName<br>
<b>Body Parameter</b>: Phone<br>
<b>Action</b>: Updates the patient’s phone number if the SSN, first name, and last name match.<br><br>

<b>Delete (DELETE)</b>: Removes a patient’s data from the database.

![image](https://github.com/user-attachments/assets/08d08f82-ab2a-400a-8251-101363036117)

<b>Endpoint</b>: /<br>
<b>Headers Required</b>: SSN, FirstName, LastName<br>
<b>Action</b>: Deletes both the patient’s personal information and medical records from the patients and records objects.<br><br>

4. <b>API Testing with Postman</b>:
Postman was utilized to test the API's functionality, ensuring that each CRUD operation behaved as expected. Tests included creating new patients, retrieving medical records, updating phone numbers, and deleting patient data. Postman allowed for easy manipulation of request headers and body content, providing a comprehensive testing environment.

![image](https://github.com/user-attachments/assets/aac7c818-54ad-4f01-9baf-61c2d77a3ef1)

5. <b>Security Measures</b>
SSN Validation: Ensures that the SSN corresponds to the correct patient data before any operation is performed.
Error Handling: Implemented robust error handling with appropriate HTTP status codes, ensuring the API's reliability and security.

## Insights and Implications
This project deepened my understanding of RESTful API design and the practical application of CRUD operations. The use of Visual Studio Code and Postman provided a streamlined workflow for development and testing, demonstrating the importance of a solid development environment.

### Implications:

Scalability: The current in-memory database can be scaled to a more robust system like MongoDB or SQL without significant changes to the API logic.
Security: Emphasized the importance of data validation and secure handling of sensitive information, particularly in healthcare-related applications.

## Conclusion
This REST API project successfully implements CRUD operations, showcasing my ability to design and develop secure and efficient backend services. Utilizing Visual Studio Code for development and Postman for testing ensured a professional and effective workflow. The project is a key addition to my GitHub portfolio, highlighting my skills in backend development and RESTful API design. Future enhancements could include integrating a more advanced database and adding authentication for greater security and functionality.
