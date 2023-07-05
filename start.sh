#!/bin/bash

nodemon ./category-service/index.js &

nodemon ./book-service/index.js &

nodemon ./author-service/index.js &