// Topics.js
import React from 'react';

function Topics() {
    return (
        <>
        <h2>Web Development Concepts</h2>
        <nav className="local">
            <a href="#webServers">Web Servers</a>
            <a href="#frontendDesign">Frontend Design</a>
            <a href="#optimizingImages">Optimizing Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#cascadingStylesheets">Cascading Stylesheets</a>
            <a href="#forms">Forms</a>
            <a href="#nodeNpmExpress">Node, npm and Express</a>
            <a href="#JavaScript">JavaScript</a>
        </nav>
        <article id="webServers">
            <h3>Web Servers</h3>
            <p>
                {/* Explain what index means as it relates to websites and servers. Explain the concept of a designated home
                page and how its name relates to different servers and languages.*/} 
                Relating to websites and servers, the index is the <strong>designated home page</strong> of a website, normally represented by the file index.html in the
                <strong>root</strong> directory. This file is configured to be displayed when a <strong>GET</strong> request
                is made to the server without specifying a specific file or directory. With different servers and languages,
                the name of the designated home page can vary. For example, on the <strong>Apache</strong> web server used by
                OSU Engineering's web server, the designated home page is index.html. On other servers, such as those running
                on <strong>Microsoft's</strong> .NET platform, the use of default.html is allowed as a homepage. In some other
                cases, the server may look for an index.js or index.php file as the homepage.
            </p>
            <p>
                {/* Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen (use the concepts
                provided in the Exploration). What is different about the file's details when viewed from the web server
                versus the local computer?*/} 
                In the browser's Web Dev/Inspector Network tab output screen, we can see the{" "} <strong>status code</strong> of the files that are being loaded. The files shown in the Network tab output are
                associated with the
                <strong>HTTP</strong> requests made by the browser. We also see the
                <strong> Response and Request Headers</strong> as well as the <strong>raw response data</strong>. The Response
                Headers include things such as <strong>cache details, encoding, content type, dates, and server</strong>. The
                Request Headers include things such as the <strong>user agent, encoding, language, host, and dates</strong>.
                The raw response data is the actual content of the file that was loaded, in this case, index.html. When
                viewing the file from the web server in Firefox, we can see that the school's favicon.ico file is loaded in,
                as are both the main.css and main.js files that were attempted to be loaded in. When viewing the file from the
                local computer in Firefox, we can see only the index.html file was loaded, the main.js file throws a console
                error "ERR_FILE_NOT_FOUND", and the main.css file was not loaded. There is no raw Response data shown.
            </p>
            <p>
                {/* Explain why the favicon.ico file has a status 200, but the main.css and main.js files have a status 404.*/}
                The favicon.ico file has a status <strong>200</strong> because the file was loaded in due to it being
                typically requested by browsers automatically. The main.css and main.js files have a status
                <strong>404</strong> because the files were not found in the specified paths relative to the index.html file.
            </p>
            <p>
                {/* Explain the parts of your web server's URL. What are the scheme, the subdomains, the host domain, and the
                resources? */}
                The parts of my web server's URL,
                https://web.engr.oregonstate.edu/~cendejar/a1-cendejar/index.html, are as follows:
                <strong>Scheme:</strong> The scheme is the protocol used to access the resource. In this case, the scheme is
                <strong>HTTPS</strong>. <strong>Subdomains:</strong> The subdomains are the additional parts of the domain
                that are used to further specify the location of the resource. In this case, the subdomain is
                <strong>web.engr</strong>. <strong>Host Domain:</strong> The host domain, also known as the host name, is the
                main domain in which the resource is located. In this case, the host domain is
                <strong>oregonstate.edu</strong>. <strong>Resources:</strong> The resources are the specific files or
                directories that are being accessed on the server. In this case, within the main user directory, ~cendejar,
                the path to the resource is <strong>a1-cendejar/index.html</strong>.
            </p>
        </article>
        <article id="frontendDesign">
            <h3>Frontend Design</h3>
            <p>
                {/*Explain the concept of frontend design*/} 
                In <strong>frontend design</strong>, creating the best possible
                experience for the user is the key goal. This includes the graphical user interface as well as the
                interactivity of the page as a whole. To achieve this, the designer must consider various aspects of the page,
                such as color, typography, font size, images, layouts, and be able being easily navigated.
            </p>
            <p>
                {/* Explain the Five E's of Usability*/} 
                The Five E's of Usability is as follows:</p>
                <dl>
                <dt>
                    <strong>Effective</strong>
                </dt>
                <dd>Helps the user meet their goals.</dd>
                <dt>
                    <strong>Efficient</strong>
                </dt>
                <dd>Creates an environment in which a user can perform their tasks in the fewest number of steps.</dd>
                <dt>
                    <strong>Easy to Navigate</strong>
                </dt>
                <dd>Allows a user to easily navigate a page, even if it is their first time visiting it.</dd>
                <dt>
                    <strong>Error Free</strong>
                </dt>
                <dd>Minimizes the errors on the page to avoid both accessibility and availability issues.</dd>
                <dt>
                    <strong>Engaging</strong>
                </dt>
                <dd>
                    Keeps the user engaged with the page, making them want to come back. It fits the unique needs of the
                    intended audience in terms of content and design.
                </dd>
                </dl>
            <p>
                {/*The purpose of each of the page layout tags*/} 
                The purpose of each of the page layout tags is as follows: A<strong>&lt;header&gt; </strong> tag is an element that is used to denote the banner or masthead
                for a website or app. It normally includes the name of the website, publisher, possibly a log, and its
                marketing tagline. Furthermore, it is typically placed at the top of the page and is normally the same from
                page to page in order for a user to know they're still on the same site. A <strong>&lt;nav&gt;</strong> tag is
                an element that is used to denote the navigation links for a website or app. It is used to take the user to
                different parts of the website or app from the current page. A <strong>&lt;main&gt;</strong> tag is an element
                that denotes the main content of the page. It holds content such as stories, galleries, tutorials, etc. A
                <strong>&lt;section&gt;</strong> tag is an element that is used to make a thematic grouping of content that is
                semantically related. A <strong>&lt;article&gt;</strong> tag is an element that is used to denote a specific
                topic or subject with its own headline and content. A <strong>&lt;footer&gt;</strong> element is used to hold
                legal information, author information, contact information, and other important links for the website or app.
            </p>
            <p>
                {/* How anchors link to external content, internal content, and from page-to-page*/} 
                An anchor tag denoted by{" "} <strong>&lt;a&gt;</strong> is used to link both internal and external content. It is important to include a useful description of where the link will take you by providing text between the opening and closing tags. The following are ways to link to external content, internal content, and from page-to-page:
            </p>
            <ol>
                <li>
                    To link to external content, use the <strong>href</strong> attribute to specify the URL. It's best practice
                    to use an <strong>absolute</strong> URL for external paths.
                </li>
                <li>
                    For internal links, use a <strong>relative</strong> URL, which points to a location relative to the working
                    files. If the file is in the same directory, use the file's name. If it's in a subdirectory, use the
                    subdirectory name followed by the file's name. For files in parent directories, use "../" followed by the
                    directory and file name. Additionally, you can add an <strong>id</strong> attribute to the anchor tag to
                    link to a specific part of a page using "#id".
                </li>
                <li>
                    To link from page to page, use the href attribute to specify the path to the linked page. The path can be
                    either relative or absolute, depending on the linked file's location.
                </li>
            </ol>
        </article>
        <article id="optimizingImages">
            <h3>Optimizing Images</h3>
            <p>
                {/* Name and explain the purpose of the 6 major image optimizing specifications. */}
                In order for a web page to
                load quickly and efficiently, it is important to optimize the images used on a web page. There are six major
                image-optimizing specifications that can be used to achieve this. They are as follows:
                <strong>
                    Descriptive file names, small file size,exact dimensions, correct file format, reduced resolution, and color
                    mode
                </strong>
                .<strong> Descriptive file names</strong> include an overall description of the image in order to improve
                search engine optimization (SEO). It helps categorize the image when it is indexed by search engines.
                <strong>Small file sizes</strong> reduce the amount of data that needs to be transferred from the server to
                the client, which in turn reduces the load time of the page. The two main ways to reduce file size are using
                two different compression types, <strong>lossy</strong> and <strong>lossless</strong>. Lossy compression
                reduces the file size by removing some of the image data, while lossless compression reduces the file size by
                removing unnecessary metadata.
                <strong>Exact dimensions</strong> are important, as they allow the browser to allocate the correct amount of
                space for the image before it is loaded. Having the correct file format is essential, as it can affect the
                quality of the image. For example,.JPEG/.JPG is best for photos, while line-art images like logos and icons
                are usually .GIF.
                <strong>Reduced resolution</strong> is key to reducing the overall file size of an image. The resolution of an
                image is the number of pixels it contains. The higher the resolution, the larger the file size. Lastly, the
                color mode of an image can impact the file size, just as the type of information stored in the image can
                modify the file size.
            </p>
            <p>
                {/* Name and explain the file formats appropriate for photos and for line art */}
                There are five major file formats
                that are appropriate for photos and line art. They are as follows:{" "}
                <strong>JPEG, WebP, PNG, SVG and GIF</strong>.<strong>JPG</strong> is one of the most common file formats for
                photos. It is a lossy compression format, which means that it loses some image data when it is compressed. It
                is suitable for photos as it can compress images to a smaller size without losing too much detail. WebP is
                another file format that is used for photos, which can compress images even further than JPEG.{" "}
                <strong>WebP</strong> can also support transparency and animation, as well as both lossless and lossy
                compression. Being able to compress in both lossless and lossy fashions makes WebP versatile for various types
                of images. However, if one uses too aggressive a compression setting, it can result in a loss of image
                quality. <strong>PNG</strong> is a file format that is commonly used for line art, logos, and images with
                transparency. Unlike JPEG and JPG, PNG is a lossless compression format, which means that it does not lose any
                image data when it is compressed. This makes it ideal for images that need to be compressed without
                compromising quality. <strong>SVG</strong> is a file format that is primarily used for logos and icons. It is
                a vector-based format that can be scaled to any size without losing quality, which makes it ideal for
                responsive design and high-resolution displays. <strong>GIF</strong> is another file format that is used for
                line art, logos, animation, and images with transparency. It uses a lossless compression format that is best
                for images with fewer colors. While GIF can support animation, it is not suitable for photos as it is limited
                to 256 colors.
            </p>
        </article>
        <article id="favicons">
            <h3>Favicons</h3>
            <p>
                {/* How do browsers and devices use Favicons*/}
                Browsers and devices use <strong>favicons</strong> as a way to
                display a small yet recognizable image within the browser tab, bookmark, and device's home screen. These icons
                help a user easily identify a website or app. The process of displaying a favicon is automatic, as the browser
                will look for a file named “favicon.ico” in the root directory of the website. If the file is not found, the
                browser will look for a link to the favicon in the head of the HTML document. In order to ensure compatibility
                across various devices and browsers, this favicon.ico file is stored in multiple sizes. Subsequently, it is
                linked to the website via a link tag within the HTML document's head section, enabling its rendering across
                the browsing experience.
                </p>
        </article>
        <article id="cascadingStylesheets">
            <h3>Cascading Stylesheets</h3>
            <p>
                {/* What are the main reasons to incorporate stylesheet in websites and apps?*/}
                The main reasons to include{" "}
                <strong>cascading styleSheets</strong> are to separate the structure of the document from the visual
                presentation. This allows for an efficient way to apply styles to various pages of a website or app without
                having to repeat the same styles in each document. Additionally, CSS allows for the creation of responsive
                designs that can adapt to different screen sizes and devices. It also provides a way to create a consistent
                look and feel across a website or app, making it easier for users to navigate and understand the content,
                increasing the overall user experience.
            </p>
            <p>
                {/*} What are the 5 ways to incorporate style? and why? */}
                The five ways to incorporate style are:{" "}
                <strong>External, Import, Embedded, Inline, and JavaScript DOM Manipulation</strong>.<strong>External</strong>{" "}
                styles utilize separate <strong>Cascading Style Sheets (CSS) </strong> when linked in the &quot;head&quot;
                section of the HTML document. This method is the preferred method as it allows for the separation of a
                document and its style, which makes it easier to manage and maintain the styles across different pages. We use
                external styling primarily due to its high reusability and maintainability. You can make global changes in one
                place rather than on multiple individual HTML pages.
                <strong>Import</strong> styling is similar to external styling, but it allows for the importing of one CSS
                file into another. This method allows for targeted styling while still benefiting from the reusability and
                maintainability of external styling. We can use import styling to help maintain modularity and encapsulate
                styles.
                <strong>Embedded</strong> styling can be used to style parts of a document using the &lt;style&gt; tag. It can
                be useful for small style changes that are specific to a single document. Though it can be useful for small
                changes, due to it being directly styled, it is less maintainable and reusable than external or import
                styling.
                <strong>Inline</strong> styling is used to style individual elements using the &apos;style&apos; attribute.
                One can use inline styling to make quick changes to a single element, since it overrides the other styles.
                However, like embedded styling, it is less maintainable and reusable than external or import styling. This is
                mostly used to make quick changes to a single element.
                <strong>JavaScript DOM Manipulation</strong> can be used to dynamically change the style of an element using
                JavaScript. This method is useful for creating interactive elements that change based on user input or other
                events. It is generally more complex to implement and less efficient for static styling in comparison to CSS.
            </p>
        </article>
        <article id="forms">
            <h3>Forms</h3>
            <p>
                {/*} What are the 6 major goals of accessible forms? And why? */}
                The six major goals of accessible forms are:
                Provide clear instructions, let users know what is required, setting the first autofocus, ensure each form
                control can be filled in using the keyboard, add tab indexing to complex forms, and ensure validation messages
                are screen readable.
                <strong>Providing clear instructions</strong> are important to help users understand what information is
                needed and how to fill out the form.
                <strong>Letting users know what is required</strong> is important to help users understand what information is
                needed and why it is being gathered.
                <strong>Setting the first autofocus</strong> is important to help users quickly start filling out the form
                without having to click on the first field.
                <strong>Ensuring each form control can be filled in using the keyboard</strong> is important to help users who
                may have difficulty using a mouse or other pointing device.
                <strong>Adding tab indexing to complex forms</strong> is important to help users navigate through the form
                using the keyboard and in which order they need to be filled out.
                <strong>Ensuring validation messages are screen readable</strong> is important since the built-in validation
                messages are not always screen readable, so it is important to provide custom validation messages that are
                screen readable.
            </p>
            <p>
                {/*What are the major tags, their attributes, and their purposes?*/} 
                The major tags are <code>&lt;form&gt;</code>
                , <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;select&gt;</code>,{" "}
                <code>&lt;option&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>, and{" "}
                <code>&lt;fieldset&gt;</code>.
            </p>
            <p>
                <code>&lt;form&gt;</code> is used to create an HTML form for user input. The form element can contain one or
                more of the following form elements: <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>,{" "}
                <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
                <code>&lt;button&gt;</code>, <code>&lt;legend&gt;</code>, and <code>&lt;fieldset&gt;</code>.
                <strong> &lt;input&gt;</strong> is used to create an input field that allows the user to enter data. The type
                attribute specifies the type of input field, such as text, password, email, etc.
                <strong> &lt;label&gt;</strong> is used to create a label for an input field. The "for" attribute of the label
                element should be equal to the id attribute of the input field to bind them together.
                <strong> &lt;select&gt;</strong> is used to create a drop-down list. The select element can contain one or
                more <code>&lt;option&gt;</code> elements.
                <strong> &lt;option&gt;</strong> is used to create an option in a drop-down list. The value attribute
                specifies the value to be sent to the server when the form is submitted.
                <strong> &lt;textarea&gt;</strong> is used to create a multi-line text input field. The rows and cols
                attributes specify the size of the text area.
                <strong> &lt;button&gt;</strong> is used to create a clickable button. The type attribute specifies the type
                of button, such as submit or a reset button.
                <strong> &lt;fieldset&gt;</strong> is used to group related elements in a form. The legend element is used to
                define a caption for the fieldset element.
                <strong> &lt;legend&gt;</strong> is used to define a caption for the fieldset element.
            </p>
            <p>
            {/* What are the major form style recommendations to improve usability? And why?*/}
            <div>
                <strong>Size and placement of labels and form controls</strong> make sure your form controls are large
                enough to be easily tapped on a touchscreen, and that labels are close to the controls they're associated
                with. This helps users understand what each control is for, and makes the form easier to use on no matter
                the device they are viewing it on.
                <strong>Color and contrast</strong> are used to make your form controls stand out from the background, and
                to highlight important information. But be careful not to rely on color alone to convey information, as this
                can be a problem for users with color vision deficiencies.
                <strong>Spacing</strong>: The use of generous spacing between form controls to make your form easier to use,
                especially on touchscreens. This also helps to visually group related controls together.
                <strong>Standard design expectations:</strong> One must follow standard design conventions for forms. For
                example, required fields are usually indicated with an asterisk, and form controls are usually arranged
                vertically rather than horizontally.
                <strong>Unique text and values:</strong> One must use clear, descriptive labels for your form controls, and
                make sure each control has a unique `name` attribute. This helps users understand what each control is for,
                and helps you process the form data on the server.
            </div>
            </p>
        </article>
        <article id="nodeNpmExpress">
            <h3>Node, npm and Express</h3>
            <p>
                {/* What are these three technologies, and how can we use them to improve the web development experience?*/}
                <strong>Node.js</strong> is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers
                to run JavaScript code outside of a web browser, making it possible to build server-side applications using
                JavaScript. This opens up new possibilities for web development, as developers can now use a single language
                for both client-side and server-side development.
                <strong>npm</strong> (Node Package Manager) is a package manager for JavaScript. It allows developers to
                easily install, manage, and share reusable code packages (also known as modules or libraries) for their
                Node.js applications. npm provides a vast ecosystem of packages that can be used to enhance the functionality
                of your applications and speed up development.
                <strong>Express</strong> is a web application framework for Node.js. It provides a set of tools and features
                that simplify the process of building web applications and APIs. Express allows developers to define routes,
                handle HTTP requests and responses, and manage middleware for their applications. It is lightweight, flexible,
                and widely used in the Node.js community. By using Node.js, npm, and Express together, developers can leverage
                the power of JavaScript to build fast, scalable, and efficient web applications. They can take advantage of
                the extensive npm package ecosystem to easily integrate third-party libraries and tools into their projects.
                Express provides a structured and organized way to handle routing and middleware, making it easier to build
                and maintain complex web applications. Overall, these three technologies greatly improve the web development
                experience by providing a unified and efficient platform for building server-side applications, managing
                dependencies, and simplifying the development process.
            </p>
        </article>
        <article id="JavaScript">
            <h3>JavaScript</h3>
            <p>
                {/*What are the main data types in JavaScript?*/}
                The main data types in JavaScript are: numbers, booleans,
                strings, symbols, objects, and special values such as null and undefined. JavaScript has only one{" "}
                <strong>number</strong> type, which is a double-precision floating point value. A <strong>boolean</strong>{" "}
                only has two values, either <strong>true</strong> or <strong>false</strong>. Booleans are used for conditional
                statements to control the flow of a program.
                <strong>Strings</strong> are sequences of characters enclosed in single or double quotes. Strings are used to
                represent text data in JavaScript. Strings that only contain characters are called{" "}
                <strong>string literals</strong>. JavaScript also supports strings that contain expressions, which are called{" "}
                <strong>template literals</strong> and are enclosed with a <strong>backtick (`)</strong>. A{" "}
                <strong>symbol</strong> is a built-in object whose constructor returns a symbol primitive that is guaranteed
                to be unique.
                <strong>Objects</strong> are used to store collections of keyed collections and more complex entities. The
                last two special values are <strong>null</strong> and <strong>undefined</strong>. Null is a special value that
                represents the absence of an object, while undefined is a special value that represents the absence of a
                value.
            </p>
            <p>
                {/*How are objects, arrays and JSON used?*/}
                <strong>Objects</strong> are used to store collections of key-value pairs. They are used to represent complex
                data structures and can be accessed and modified using dot notation or bracket notation.{" "}
                <strong>Arrays</strong> are used to store ordered collections of values. They are used to represent lists of
                items and can be accessed and modified with indexed notation by using square brackets. JavaScript requires
                that the properties o an object must be of the string data type.
                <strong>JSON</strong> (JavaScript Object Notation) is a lightweight data interchange format that is based on
                JavaScript object syntax. It is used to store and exchange data between a server and a web application. JSON
                is widely used in web development for sending and receiving data over the internet.
            </p>
            <p>
                {/* How are conditionals and loops used?*/}
                <strong>Conditionals</strong> are used to execute different code blocks based on different conditions. The
                most common conditional statements in JavaScript are <strong>if</strong>, <strong>else if</strong>, and{" "}
                <strong>else</strong>. We can use the basic if statement to execute a block of code if a specified condition
                is true. If the condition is false, another block of code can be executed using the else statement. The else
                if statement can be used to specify a new condition if the first condition is false. Another conditional is a{" "}
                <strong>switch</strong> statement, which can be used to select one of many code blocks to be executed. It is
                often used as an alternative to if-else statements. Lastly, a <strong>ternary operator</strong> is a shorthand
                way to write an if-else statement in a single line of code.
                <strong>Loops</strong> are used to execute a block of code multiple times. The most common types of loops in
                JavaScript are <strong>for</strong>, <strong>while</strong>, and <strong>do-while</strong> loops. The for loop
                is used to execute a block of code a specified number of times. The while loop is used to execute a block of
                code as long as a specified condition is true. The do-while loop is similar to the while loop, but it will
                always execute the block of code at least once, even if the condition is false.
            </p>
            <p>
                {/*What is object-oriented programming?*/}
                <strong>Object-oriented programming</strong> is a programming paradigm that is based on the concept of
                objects. Objects are instances of classes that contain data and methods. In the context of JavaScript, objects
                are used to represent real-world entities and are composed of properties and methods. An object in JavaScript
                is expected to have an identity, state, and behavior. The identity of an object is defined by its properties,
                which store the object's data. The state of an object is defined by the values of its properties. The behavior
                of an object is defined by its methods, which are functions that can be called to perform actions on the
                object's data. Object-oriented programming allows developers to create reusable and modular code by
                encapsulating data and behavior within objects.
            </p>
            <p>
                {/*What is functional programming?*/}
                <strong>Functional programming</strong> is a programming paradigm that is based on the concept of functions.
                Functions are first-class values in functional programming, which means that they can be passed as arguments
                to other functions, returned as values from other functions, and stored in variables. In the context of
                JavaScript, functions are used to represent actions that can be performed on data. Functional programming
                emphasizes the use of pure functions, which are functions that do not have side effects and always return the
                same output for the same input. Functional programming also encourages the use of higher-order functions,
                which are functions that take other functions as arguments or return functions as values. Functional
                programming allows developers to write concise and expressive code by composing functions to perform complex
                operations.
            </p>
        </article>
        </>
    );
}

export default Topics;
