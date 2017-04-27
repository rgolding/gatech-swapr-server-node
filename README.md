# gatech-swapr-server-node
Node.js server for SWAPR

[![Run Status](https://api.shippable.com/projects/57f3d13f6d80900e003ab96c/badge?branch=master)](https://app.shippable.com/projects/57f3d13f6d80900e003ab96c)

Our current model frontend lives in [gatech-swapr-client](https://github.gatech.edu/sdouglas6/gatech-swapr-client)

Our API lives on [apiary.io](https://app.apiary.io/swaprnode/editor)

## Installing node.js
On OS X, install Homebrew, then do
`brew install node`

## Installing the project dependencies
`npm install -d`

## Running the test suite
The tokens used in test-data.json were generated using "This is the test secret" as the secret in the signature.

`npm test`

Note: Please go to company_practice_server/models/user.js to see an example of password hashing.

The username/password combos for the test students are as follows:

user_1, password1
user_2, password2
user_3, password3
user_4, password4

Hashes/salts are generated from https://www.bcrypt-generator.com. The bcrypt implementation uses only 10^8 iterations of the key derivation function (i.e., a "cost" of 08, as indicated by the $08 near the beginning of each salted hash). 10^12 is apparently best practice these days.

## Setup PostgreSQL For Macs
1. a You need to download the installer from PostgreSQL Official website. (Windows)
1. b Install using HomeBrew: (Mac)
  brew install postgresql
2. postgres user and PostGres databse should be automatically created. Make a new server and database with any names, update files in sequelize.json to reflect your choice. Tables should be made automatically with grunt. 
3. Download Postico https://eggerapps.at/postico/ for table gui. Connect to user postgres. 





