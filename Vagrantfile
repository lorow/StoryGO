# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-20.04"

  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.synced_folder ".", "/code"

  config.vm.provider "virtualbox" do |vb|
       vb.gui = false
       vb.memory = "1024"
  end
  config.vm.provision "shell", inline: <<-SHELL
     apt-get update -y
     apt-get install python3-pip firefox redis -y
     python3 -m pip install pipenv
     pipenv install redis fastapi uvicorn beautifulsoup4 rq jinja2 aiofiles selenium

     curl -LJO -o geckodriver.tar.gz https://github.com/mozilla/geckodriver/releases/download/v0.27.0/geckodriver-v0.27.0-linux64.tar.gz
     tar -xzf geckodriver-v0.27.0-linux64.tar.gz
     echo PATH=$PATH:/home/vagrant >> ~/.profile
    source ~/.profile
  SHELL
end
