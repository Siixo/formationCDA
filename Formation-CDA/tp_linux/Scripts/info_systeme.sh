#!/bin/bash
#

echo "Current user: $USER"

df -h / | tail -1 | tr -s ' ' | cut -d ' ' -f4 

who
