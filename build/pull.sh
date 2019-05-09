#!/usr/bin/env bash
source /etc/environment
NAME=iot-saas-fe
VERSION=$2
docker pull bys-cd.chinacloudapp.cn/iotplatform/$NAME:$VERSION
docker stop $NAME
docker rm $NAME
rm -rf /home/beyondsoft/fnb-fe/html/IoT-SAAS-FE
docker run  -d \
--name $NAME   bys-cd.chinacloudapp.cn/iotplatform/$NAME:$VERSION
docker cp $NAME:/tmp/IoT-SAAS-FE  /home/beyondsoft/iot-nginx/html