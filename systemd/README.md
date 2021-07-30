# Systemd service configuration

##### Create new service:

`sudo nano /etc/systemd/system/service-name.service`

##### Start the service:

`sudo systemctl start service-name`

##### Enable the service at system startup:

`sudo systemctl enable service-name`

##### Check the status of the service:

`sudo systemctl status service-name`

#### On configuration change:

`sudo systemctl daemon-reload`



