function HomePage() {
return (
    <div className="homeText">
        <h2>Welcome to my Web Dev Portfolio</h2>
        <p>
            My name is Rafael Cendejas, and my future career goal is to become an AI/ML Software Engineer. I am passionate about technology and intrigued by the potential of artificial intelligence and machine learning to solve complex problems and create innovative solutions. I am committed to developing my skills in this area and look forward to contributing to advancements in this exciting field.
        </p>
        <p>
            This web app is a portfolio that showcases the projects I have worked on. It is built using mongoDb, Express, React, and Node.js (MERN). While the core of the app is built using MERN, several other technologies were used to build the app, which will be explained here briefly.
            <dl>
                <dt>HTML</dt>
                <dd>
                    Hyper Text Markup Language, also known as HTML, is the standard markup language for creating web pages and web applications.
                </dd>
                <dt>CSS</dt>
                <dd>
                    Cascading Style Sheets, also known as CSS, is a style sheet language used for describing the look and formatting of a document written in HTML.
                </dd>
                <dt>JavaScript</dt>
                <dd>
                    JavaScript is a high-level, interpreted programming language that enables interactive web pages and is the foundation of many modern web applications.
                </dd>
                <dt>Node.JS</dt>
                <dd>
                    Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.
                </dd>
                <dt>Express</dt>
                <dd>
                    Express is a minimal and flexible web application framework for Node.js that provides a robust set of features for web and mobile applications.
                </dd>
                <dt>Asynchronous Programming</dt>
                <dd>
                    Asynchronous programming is a programming paradigm that allows multiple tasks to be executed concurrently, improving the performance and responsiveness of web applications.
                </dd>
                <dt>DOM Changes</dt>
                <dd>
                    DOM (Document Object Model) changes refer to manipulating the structure, style, or content of a web page using JavaScript to dynamically update the page without requiring a full page reload.
                </dd>
                <dt>SPA</dt>
                <dd>
                    Single Page Applications (SPAs) are web applications that load a single HTML page and dynamically update the content as the user interacts with the app. This approach provides a more fluid and responsive user experience compared to traditional multi-page applications.
                </dd>
                <dt>React</dt>
                <dd>
                    React is a JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components.
                </dd>
                <dt>Mongoose</dt>
                <dd>
                    Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a schema-based solution to model application data.
                </dd>
                <dt>MongoDB</dt>
                <dd>
                    MongoDB is a popular NoSQL database program that uses JSON-like documents with optional schemas.
                </dd>
                <dt>REST</dt>
                <dd>
                    Representational State Transfer (REST) is an architectural style for designing networked applications. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.
                </dd>
                <dt>CRUD</dt>
                <dd>
                    CRUD stands for Create, Read, Update, and Delete, which are the four basic functions of persistent storage in web applications. These operations allow users to interact with data stored in a database.
                </dd>
            </dl>
        </p>
    </div>
);
}

export default HomePage;