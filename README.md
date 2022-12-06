# 4156_FE
This is the front end server for 4156 project

# Instruction USE DEMO02
https://nodejs.org/en/download/
download the mac/windows version

GO TO demo02 directory    

npm install

npm run dev

## how to change/edit demo01
1. src/router/index.js
2. src/views/HomeView   add routerlink
3. add a view (one page) to src/views/*View.vue

## some problems / tasks
- oauth not used (use backend's oauth), I currently store the token and username in localStorage.getItem('token')
- This is currently a client? not a foraml FE server?
