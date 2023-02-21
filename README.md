# Hacking News (School Project)
This is a school project of technology and web security

## Technologies 

Here are the technologies used in this project.

* Next.js v13
* TypeScript
* React-Hook-Form
* axios
* framer-motion
* jsonwebtoken for jwt
* MongoDB with mongoose
* nookies for cookies
* styled-components
* yup for validation

## Services Used

* Github
* Vercel
* MongoDB Atlas

## Getting started

* Clone the repository
  ```bash
    git clone https://github.com/Artur-Poffo/Hacking-News.git
  ```

* Create your Atlas MongoDB database.
  - Follow the steps in the [documentation](https://www.mongodb.com/docs/atlas/) and create your database
  
* Connect your database to the application
  - in your cluster's control panel, select connect and then `connect with application`
  - Copy the provided connection string and don't forget to replace `<password>` with the password of the user you registered when you created the database
  - Create a `.env.local` file on root of project
  - insert two development variables,
    - MONGO_URI=`<YOUR STRING CONNECT>`
    - SECRET=`<SECRET FOR JWT GENERATE, WHATEVER STRING>`
  
* install dependencies.
  - `npm install` in root directory (you need installed node and npm for this)
  
* To run the project.
  - `npm run dev` on root directory

## How to use

### 1 - When you access for the first time, you will see the SignIn page <3

![SignIn Page Print](https://github.com/Artur-Poffo/Hacking-News/tree/main/public/readme/SignIn.png?raw=true)

### 2 - You need create your account and login to access the homepage.

![SignUp Page Print](https://github.com/Artur-Poffo/Hacking-News/tree/main/public/readme/SignUp.png?raw=true)

### 3 - After logging in you will have the JWT token saved in your browser cookies and you will have free access to the site until the cookie expires

![Home Page Print](https://github.com/Artur-Poffo/Hacking-News/tree/main/public/readme/Home.png?raw=true)

### 4 - and you will be able to read the posts freely

![Post Page Print](https://github.com/Artur-Poffo/Hacking-News/tree/main/public/readme/Post.png?raw=true)


## Features

The main features of the application are:
 - SignUp and SignIn functions
 - Complete JWT authentication
 - Learn a lot of information


## Links
  - Deploy on Vercel: https://hacking-news.vercel.app/
  - Repository: https://github.com/Artur-Poffo/Hacking-News

  ## Versioning

  1.0.0


  ## Authors

  * **Artur Poffo** 

  Please follow github and join us!
  Thanks to visiting me and good coding!