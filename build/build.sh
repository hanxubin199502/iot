#!/usr/bin/env bash
source /etc/environment
WORKSPACE=$(dirname $(cd "$(dirname "$0")";pwd))
NAME=iot-saas-official
VERSION=$2
cd $WORKSPACE/build &&
case "$1" in
    dev)
        sed -i "s#10.26.2.29#192.168.7.152#g"  $WORKSPACE/config/prod.env.js
		sed -i "s#10.26.2.34#192.168.7.152#g"  $WORKSPACE/config/prod.env.js
		# sed -i "s#10.26.2.34#192.168.14.127#g"  $WORKSPACE/config/prod.env.js
		# sed -i "s#10.26.2.34#192.168.14.127#g"  $WORKSPACE/config/prod.env.js
        ;;
    qa)
        sed -i "s#10.26.2.29#192.168.7.153#g"  $WORKSPACE/config/prod.env.js
		sed -i "s#10.26.2.34#192.168.7.153#g"  $WORKSPACE/config/prod.env.js
        ;;
    preview)
        sed -i "s#http://fnb.bysglobal.com#https://${PREVIEW_IP}#g"  $WORKSPACE/config/prod.env.js
        ;;
    staging)
        sed -i "s#http://fnb.bysglobal.com#https://${STAGING_IP}#g"  $WORKSPACE/config/prod.env.js
        ;;
    prod)
        sed -i "s#10.26.2.29#10.24.4.81#g"  $WORKSPACE/config/prod.env.js
		sed -i "s#10.26.2.34#10.24.4.81#g"  $WORKSPACE/config/prod.env.js
        ;;
    cloud)
        sed -i "s#10.26.2.29#40.73.30.160#g"  $WORKSPACE/config/prod.env.js
		sed -i "s#10.26.2.34#40.73.30.160#g"  $WORKSPACE/config/prod.env.js
        ;;
    prod-a)
        sed -i "s#10.26.2.29#40.73.30.160#g"  $WORKSPACE/config/prod.env.js
		sed -i "s#10.26.2.34#40.73.30.160#g"  $WORKSPACE/config/prod.env.js
        ;;
    *)
        echo -e "Invalid parameters"
esac
npm i
npm run build
#yarn
#yarn build production
cp -rv $WORKSPACE/dist  $WORKSPACE/build
docker build --no-cache --rm=true --force-rm=true -f Dockerfile -t bys-cd.chinacloudapp.cn/iotplatform/$NAME:$VERSION  .  &&
docker push bys-cd.chinacloudapp.cn/iotplatform/$NAME:$VERSION