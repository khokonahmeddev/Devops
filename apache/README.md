# Apache installation and configuration

##### Apache Install

`sudo apt install apache2`

##### Setup Firewall

`sudo ufw app list`

##### Now we will enable Apache Full

`sudo ufw allow 'Apache Full'`

##### With this command you can view the status of UFW

`sudo ufw status`

##### If Activate UFW

`sudo ufw enable`

##### Check Apache Installation and status

`sudo systemctl status apache2`

##### When you have your server’s IP address, enter it into your browser’s address bar

`http://your_server_ip`

##### Enable Apache Rewrite Module

`sudo a2enmod rewrite`

##### Now restart Apache so that this change becomes live

`sudo service apache2 restart`


# How To Set Up Apache Virtual Hosts on Ubuntu:


##### Create the Directory Structure

 `sudo mkdir -p /var/www/yourdomin.com/html`

##### Grant Permissions

`sudo chown -R $USER:$USER /var/www/yourdomin.com/html `

`sudo chmod -R 755 /var/www`

#####  Create Demo Pages for Each Virtual Host

`sudo nano /var/www/yourdomin.com/html/index.html `

##### Create New Virtual Host Files

`sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/yourdomin.com.conf` 

##### Open the new file in your editor with root privileges

`sudo nano /etc/apache2/sites-available/yourdomin.com.conf`


# Enable the New Virtual Host Files:

##### We can use the a2ensite tool to enable each of our sites like this

`sudo a2ensite yourdomin.com.conf`

##### Next, disable the default site defined in 000-default.conf

 `sudo a2dissite 000-default.conf`

##### In other documentation, you may also see an example using the service command

 `sudo service apache2 restart`

##### When you are finished, you need to restart Apache to make these changes take effect

 `sudo systemctl restart apache2`

##### Visit your domin 

 `yourdomin.com`
