#!/bin/bash

# Navigate to your project directory (if not already there)
cd ~/my_portfolio

# Upload the files to the S3 bucket
aws s3 cp . s3://sathagesey703/ --recursive --acl public-read


