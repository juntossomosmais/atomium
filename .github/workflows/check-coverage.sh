#!/bin/bash

directory=$1

directory_upper=$(echo "$directory" | tr '[:lower:]' '[:upper:]')

if [ -d "packages/$directory/coverage" ]; then
  echo "Coverage directory exists for $directory."
  echo "COVERAGE_$directory_upper=true" >> $GITHUB_ENV
else
  echo "Coverage directory does not exist for $directory."
  echo "COVERAGE_$directory_upper=false" >> $GITHUB_ENV
fi
