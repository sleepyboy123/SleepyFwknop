Install node (https://nodejs.org/en/download/)

NodeJS Installation

Login details for MySQL Database
local host: jonathan Bored123!
172.16.0.126: jonathan Asdasd123%

Start database
`sudo systemctl start mysql`

Access MySQL
`mysql -u 'jonathan'`

Create user by running this command in mysql
`CREATE USER 'matomo'@'localhost' IDENTIFIED BY 'my-strong-password-here';`

Change Bind-Address to 0.0.0.0
`sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf`

Restart MySQL Server
`sudo systemctl restart mysql`

Allow firewall settings
`sudo ufw allow from remote_ip_address to any port 3306`

`ALTER USER 'matomo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'`
`flush privileges;`

ReactJS Installation
