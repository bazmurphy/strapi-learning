

## 1. Postgres Setup

1. run psql with the superuser postgres
`psql -U postgres`

2. create the database for scrapi to use
`CREATE DATABASE strapi_database;`

3.
`CREATE ROLE strapi_database_username WITH LOGIN PASSWORD 'strapi_database_password` CREATEDB;`

3. grant priveledges
  `GRANT ALL PRIVILEGES ON DATABASE strapi_database TO strapi_database_username;`

## 2. Strapi Install

`npx create-strapi-app@latest .`

1. Installation Type: Custom (manual settings)
2. Preferred Language: JavaScript
3. Database Client: postgres
4. Database Name: strapi_database
5. Host: 127.0.0.1
6. Port: 5432
7. postgres
8. **********
9. Enable SSL: No

## 3. Strapi Start

1. `npm run develop`
Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart)