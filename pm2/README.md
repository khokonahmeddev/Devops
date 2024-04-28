# PM2 installation and configuration


#### Install PM2 globally

`npm install -g pm2`

#### Verify the installation

`pm2 -v`


#### List application

`pm2 list`


### Restart pm2 server

`pm2 restart myapp`


### Stop pm2 my app

`pm2 stop myapp`

### Delete pm2 my app

`pm2 delete myapp`


#### NUXT js 

### Package.json add in scripts section

 ### Project one

`"project1": "HOST=localhost PORT=3001 node .output/server/index.mjs"`

### project two

`"project2": "HOST=localhost PORT=3002 node .output/server/index.mjs"`


### Sinle nuxt project 

### Your project folder run this command

`pm2 start npm -- start`

### Multiple nuxt project run

### Your project folder run this command

`pm2 start nuxt_ecosystem.config.js`


