Access to healthcare in Nigeria can be challenging and thorough. It is absurd that the first thing to living is being healthy. Carefinder is a simple tool that aims to help users find, export, and share hospitals within the region.

Requirements and Implementation Guide:

– Hospital Search: Carefinder allows users to search for hospitals within their region. Users can input their location or select from a list of nearby cities to find hospitals in their area. The platform will list hospitals and their respective contact details, including address, phone number, and email.

– Export Hospitals: Carefinder allows users to export the list of hospitals to a CSV file, making it easy to save and share the information. This feature will be implemented using Firebase’s built-in file storage.

– Share Hospitals: Carefinder also allows users to share the list of hospitals with others. Users can share the information via email or by generating a shareable link. This feature will be implemented using Firebase’s built-in email and link-sharing functionalities.

– User Authentication: Carefinder requires admin users to create an account to access the platform’s admin features. This feature will be implemented using Firebase’s built-in authentication feature, which supports multiple authentication methods, including email/password and social media logins.

– Markdown Support: Carefinder allows admin users to write content(create hospital entries and corresponding details) with a markdown. This feature makes it easy for users to format their content, add links, and insert images. The platform will provide a simple text editor that supports markdown syntax.

Best practices:

Build and deploy a scalable code base with proper linting and formatting with Prettier and Eslint.
Ensure you use typescript with either Vuejs or React with the necessary SEO.
You must build with either Firebase, Hasura, or any backend technology that will allow you to store user data and carry out authentication.
It is crucial to allow the user of Carefinder to write content with a markdown.
Form validation is essential.
At least 2 unit tests and 3 component tests should be present in the codebase.
