#!/bin/bash
PATH="/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/sbin:/usr/local/bin"
export PATH
SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd)
#cocos工程名，即工程的文件夹名，一般为client
CLIENT_DIR="ProjectHigher"
function usage() {
    echo "Usage: $0 -b <branch>"
    echo
    echo "Example:"
    echo "$0 -b master"
    echo
    exit 1
}
function echoerr() {
    echo "$@" 1>&2;
}
while getopts ":b:d:p:n:" OPTION; do
    case "${OPTION}" in
        b)
            BRANCH=${OPTARG}
            ;;
    d)
        ISDEBUG=${OPTARG}
        ;;
    p) 
        PLATFROM=${OPTARG};;
    n)
        NAME=${OPTARG};;
     *)
            usage
            ;;
    esac
done
shift $((OPTIND-1))
if [ -z "$BRANCH" ]; then
    echoerr "You must specify BRANCH with -b option DEBUG with -d option PLATFROM with -p option -n NAME"
    exit 1
fi
#工程目录地址
PROJECT_DIR="/Volumes/jenkins-workspace/workspace/h5game-client/$NAME"
cd $SCRIPT_DIR
#git checkout $BRANCH
git reset --hard
#git pull
/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path $SCRIPT_DIR/$CLIENT_DIR --build "platform=$PLATFROM;debug=$ISDEBUG"
cd $SCRIPT_DIR
mkdir -p $NAME/$PLATFROM/
gulp    $PLATFROM 
mv $PROJECT_DIR/$CLIENT_DIR/build/$PLATFROM  $NAME/$PLATFROM/$BRANCH
str="wechatgame" 
#新增wechatgame打包
if test $PLATFROM == $str
    then
        #增加开放数据域地址至game.json
        sed -i "" "s/\"deviceOrientation/\"openDataContext\"\: \"opendata\"\,\"deviceOrientation/g" $PROJECT_DIR/$NAME/$PLATFROM/$BRANCH/game.json
        #生成res文件的链接并填入game.js 如https://h5game.123u.com/PacMan/wechatgame/master/
        sed -i "" "s/REMOTE_SERVER_ROOT \= \"\"/REMOTE_SERVER_ROOT \= \"https\:\/\/h5game\.123u.com\/$NAME\/$PLATFROM\/$BRANCH\/\"/g" $PROJECT_DIR/$NAME/$PLATFROM/$BRANCH/game.js
        #创建分享文件夹
        mkdir -p $NAME/$PLATFROM/$BRANCH/share/
        if ! -d $PROJECT_DIR/$CLIENT_DIR/share/ 
            then
                mkdir -p $PROJECT_DIR/$CLIENT_DIR/share/
        fi
        mkdir -p $NAME/$PLATFROM/$BRANCH/opendata/
        echo $NAME/$PLATFROM/$BRANCH/opendata/
        if ! -d $PROJECT_DIR/$CLIENT_DIR/opendata/ 
            then
                mkdir -p $PROJECT_DIR/$CLIENT_DIR/opendata/
        fi
        #复制工程下share文件夹至打包文件夹下
        cp -R $PROJECT_DIR/$CLIENT_DIR/share/  $NAME/$PLATFROM/$BRANCH/share/
        #复制工程下的 opendata 目录至 打包文件夹下
        cp -R $PROJECT_DIR/$CLIENT_DIR/opendata/  $NAME/$PLATFROM/$BRANCH/opendata/
        cd $NAME/$PLATFROM 
        #打包文件夹，如果非debug模式，则删除res文件夹
        if $ISDEBUG = "true"
            then
                tar cvf $BRANCH.zip $BRANCH
            else
                mv $BRANCH/res ./res
                tar cvf $BRANCH.zip $BRANCH
                mv ./res $BRANCH/res
        fi
        echo "have zip"
    else    
        echo "no zip"
fi
#打包判断结束
cd $SCRIPT_DIR
#发送文件夹下的内容至远程服务器
RSYNC_PASSWORD=update.h5game rsync -av $NAME update@42.62.22.18::h5game/