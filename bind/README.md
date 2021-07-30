# Bind DNS Server configuration

##### Install bind:

`sudo apt install bind9`

##### Create/Edit named.conf.local:

`sudo nano /etc/bind/named.conf.local`

##### Create example.com.hosts:

`sudo nano /var/lib/bind/example.com.hosts`

##### Restart bind:

`sudo systemctl restart bind9`