# Mini Social Media Dashboard

## Tech Stack
- Frontend: React.js, React google Charts
- Backend: Django

## Project Description
- This project is a demonstration of a social media dashboard with features such as dynamic display of the number of posts, likes, and comments. 
- The line graph changes dynamically with the likes data, and the bar graph has been hardcoded with data but can be changed to dynamic data in future use.

- The homepage of the website contains the dashboard showing all the contents.
 - On the left side navigation, you can add a new post by clicking on the **"Add Post"** button where you will be asked to add data such as Title, description, likes, comments, shares (likes, comments, and shares are just being hardcoded to showcase changes in the dashboard data). 
 - After successfully adding a post by clicking on the Add post button, you can see the dashboard getting updated.

Additionally, you can also view all the posts by clicking on the **"All Posts"** button on the left side navigation of the dashboard. It will show you all the posts that have been created till now.

## Backend

The Backend has been created using Django. All the API endpoints that are created are as follows:

- `/api/posts`: To show all the posts
- `/api/dashboard`: To show total data such as the total number of likes, comments, shares
- `/api/posts/with-likes-comments`: To add a new post

## Instructions to Run Locally

### 1. Clone the Repository

```bash
# Clone the repo
git clone https://github.com/Aayush987/Mini-Social-Media-Dashboard.git

cd Mini-Social-Media-Dashboard

```

### 2. For the Frontend
```bash
cd Frontend
npm install
npm run dev
```

#### You can see the frontend of the project running on localhost:5173.

### 3. For the Backend 


```bash
cd social_media_dashboard
# Install dependencies
pip install -r requirements.txt
# Make migrations
python manage.py migrate
# Run server
python manage.py runserver

```
#### The backend will be available on   [http:127.0.0.1:8000](http://127.0.0.1:8000/)

Note: You will not see anything on the above backend port. You have to attach different endpoints to see the content.

For ex: To see dashboard:
  go to - http://127.0.0.1:8000/api/dashboard



## Resources Used
-  ChatGpt for coding assistance