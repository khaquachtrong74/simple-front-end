#!/bin/bash

if [ $# -lt 1 ];then
    echo "Usage: $0 <project_name>"
fi

PROJECT_NAME="$1"
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"
mkdir CSS
mkdir JS
mkdir Images
touch index.html
cd..