cd E:\Project\COM_H5\HigherClient\NewHigherClient\assets\script\test
call pbjs -t static-module -w commonjs -o ./proto.js ./*.proto
call pbts -o ./proto.d.ts ./proto.js

