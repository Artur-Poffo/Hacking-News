<!-- ![Logo of the project](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/app/assets/images/logo.png) -->


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

<!-- ![Homepage image](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/home.png) -->

### 2 - You need create your account and login to access the homepage.

<!-- ![Posts](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/posts.png) -->

### 3 - After logging in you will have the JWT token saved in your browser cookies and you will have free access to the site until the cookie expires

<!-- ![Post show](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/post_1.png)
![Post show](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/post_2.png)
![Post show](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/post_3.png) -->

### 4 - and you will be able to read the posts freely

<!-- ![Portfolio](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/portfolio_1.png)
![Portfolio](https://github.com/Lucasdfg07/Blog_Lucas_Fernandes/blob/master/public/readme/portfolio_2.png) -->


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