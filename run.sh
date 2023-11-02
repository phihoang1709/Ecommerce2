#!/bin/bash
cd backend && nodemon app.js &
cd frontend && sudo npm run dev &