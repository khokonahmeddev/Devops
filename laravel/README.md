# Laravel Supervisor Configuration

#### Installing Supervisor

`sudo apt-get install supervisor`

#### Create a new configuration file

`sudo nano /etc/supervisor/conf.d/your-worker.conf`

`
[program:your-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/domain/html/artisan queue:work --tries=3 --queue=high-priority,high,default
autostart=true
autorestart=true
user=obak
numprocs=8
redirect_stderr=true
stdout_logfile=/var/www/domain/your-worker.log
`

#### Starting Supervisor

`sudo supervisorctl reread`
 
`sudo supervisorctl update`
 
`sudo supervisorctl start reload`

`sudo service supervisor restart`

