cd D:\Code\HigherClient\ProjectHigher\assets\script\proto
call pbjs -t static-module -w commonjs -o ./proto.js ./*.proto
call pbts -o ./proto.d.ts ./proto.js

