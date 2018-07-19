
# Hymn REST API

This is a node.js rest API for a hymn application; an application that helps users to keep a collections of the hymns they like. This is inspired by my love for hymns. This is intended to be consumed by a mobile application.

#### Features
- Create Hymn
- Get all Hymns
- Get one Hymn by id
- Update one Hymn by id
- Delete one Hymn by id

## Getting Started

### Prerequisites
You need the following installed/setted-up so as to get the server running:

1. Node

2. ExpressJs

3. Mongoose

4. Body-parser

### Installing
Clone the repo by running

> git clone https://github.com/Betty-Kebenei/hymn-rest-api

Navigate to the directory containing the project.

Then run the following command to install other required dependencies after cloning:

> npm install 

## Database Set-up

Create a database in mLab https://mlab.com and export the database url as an environment variable.

- Go to mLab's website
- Click on ‘Create New'
- Select the Sandbox Plan Type and click on ‘Continue’
- Add a database name
- Add a database user
- Get your environment variable that you will set like this before running the application

> DB_URL = 'mongodb://user:password@some-string-from-mlab/database-name'

## Run the application

Run the command below:

> node app.js

## Endpoints

| METHOD | ENDPOINT | PUBLIC ACCESS | SUMMARY |
| --- | --- | --- | --- |
| **POST** | /hymn | TRUE | Create a hymn |
| **GET** | /hymn | TRUE | Get all hymns |
| **GET** | /hymn/:id | TRUE | Get hymn by ID |
| **PUT** | /hymn/:id | TRUE | Update hymn by ID |
| **DELETE** | /hymn/:id  | TRUE | Delete hymn by ID |


### Author

Betty Kebenei
