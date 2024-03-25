#!/bin/bash

# Update the system
sudo yum install update -y

# Install libs
sudo yum install -y httpd
sudo yum install -y git

# Start Apache Server
sudo systemctl start httpd
sudo systemctl enable httpd

# Configure the project
mkdir app && cd app
git clone https://github.com/navneetdavang/covid-19-project.git
sudo cp -r covid-19-project/* /var/www/html/
