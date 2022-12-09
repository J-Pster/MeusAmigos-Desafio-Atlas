# Preinstall frontend and backend for the application

# Create Env Files
echo "Creating .env files"

echo "Creating frontend .env files"
cp ./envs/env_front_example.env ./frontend/.env

echo "Creating backend .env files"
cp ./envs/env_back_dev_example.env ./backend/.env.development.local
cp ./envs/env_back_prod_example.env ./backend/.env.production.local
cp ./envs/env_back_test_example.env ./backend/.env.test.local

# Install dependencies
echo "Installing dependencies"

echo "Installing frontend dependencies"
cd ./frontend
npm install

echo "Installing backend dependencies"
cd ../backend
npm install

echo "Prestart Finished!"