#### NUXT Js Configuration 

### Package.json add in scripts section

 ### Project one

`"project1": "HOST=localhost PORT=3001 node .output/server/index.mjs"`

### Project two

`"project2": "HOST=localhost PORT=3002 node .output/server/index.mjs"`


### Sinle nuxt project 

### Your project folder run this command

`pm2 start npm -- start`

### Multiple nuxt project run

### Your project folder run this command

`pm2 start ecosystem.config.js`