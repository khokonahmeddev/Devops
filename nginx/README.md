# Nginx installation and configuration

##### Install nginx:

`sudo apt install nginx`

##### Check Nginx Folder

`ll /etc/`


##### Create a server block:

`sudo nano /etc/nginx/sites-available/server-name`

##### Create symlink:

`sudo ln -s /etc/nginx/sites-available/server-name /etc/nginx/sites-enabled/`

##### Test configuration:

`sudo nginx -t`

##### Restart nginx:

`sudo systemctl restart nginx`


---

### Securing with LetsEncrypt SSL

##### Install Certbot:

`sudo apt install python3-certbot-nginx`

##### Setup SSL for your domain:

`sudo certbot --nginx -d domain-name`