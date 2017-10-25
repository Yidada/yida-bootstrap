#!/bin/bash

ssh root@XXXXx 'bash -s' << CMD
rm -rf /root/workspace/XX/dist
CMD

scp -r ./dist root@XXXX:/root/workspace/xxx/

echo 'release finish!'
