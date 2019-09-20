#!/usr/bin/env bash
source /etc/environment
NAME=iot-saas-official
VERSION=$2
docker pull bys-iot.chinanorth2.cloudapp.chinacloudapi.cn/iotplatform/$NAME:$VERSION
docker stop $NAME
docker rm $NAME
rm -rf /home/beyondsoft/fnb-fe/html/IoT-SAAS-OFFICIAL
docker run  -d \
--name $NAME   bys-iot.chinanorth2.cloudapp.chinacloudapi.cn/iotplatform/$NAME:$VERSION
docker cp $NAME:/tmp/IoT-SAAS-OFFICIAL  /home/beyondsoft/iot-nginx/html