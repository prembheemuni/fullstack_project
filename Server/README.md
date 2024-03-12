—> install prisma and dependencies ->Specify the db —> create models in prisma.schema —> Spin up the db using docker/any —> run prisma migrations → start the server(TS watch and nodemon)

npm i typescript ts-node @types/node -D
npx tsc —init
npm i prisma -D
npx prisma init --datasource-provider postgresql

Run npx prisma migrate dev —name init

Runnig db:
docker compose up dev-db -d

for getting dump

docker exec -t <container_name_or_id> pg_dump -U <your_postgres_username> -d <your_database_name> > backup.sql

npm run watch : watch mode 
npm run dev : nodemon mode

Both needs to be run.
