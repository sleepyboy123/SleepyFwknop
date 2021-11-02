# SleepyFWKNOP

Install node (https://nodejs.org/en/download/)

NodeJS Installation

Login details for MySQL Database
local host: jonathan Bored123!
172.16.0.126: jonathan Asdasd123%

Start Database
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

Install Dependencies
`npm install`

Start Website
`npm start`

# To Do List

Get FWKNOP Running on Client & Server Machine

When ReactJS Sends a POST Request to the NodeJS API,

NodeJS API will exec a cmd to send a SPA Packet to Authenticate itself.

Wait for a couple of seconds

NodeJS will then establish an SSH connection

Wait for a couple of seconds

Execute Python Script to do CRUD on the Server Machine

NodeJS will receive cmd line response from Server Machine

NodeJS will forward cmd line response to ReactJS
