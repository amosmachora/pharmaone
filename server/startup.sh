#!/usr/bin/bash

echo "Starting PharmaOne Backend ..."

mvn spring-boot:run &

cd src

cd frontend

echo "Starting Pharmaone frontend ..."

npm start &
