#!/bin/bash

directory=$1

if [ -d "packages/$directory/coverage" ]; then
  echo "Coverage directory exists for $directory."
  echo "COVERAGE_$directory=true" >> $GITHUB_ENV
else
  echo "Coverage directory does not exist for $directory."
  echo "COVERAGE_$directory=false" >> $GITHUB_ENV
fi
