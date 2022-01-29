# Decentralized-Music-Ownership-System
A decentralized Music Ownership System developed on Truffle Suite and React Bootstrap to allow Music artists to upload their content to the blockchain, that can be streamed by users. 

## Execution Steps
To execute the program files please follow the following steps:
### 1.	Create a new react project by using the following command
	a.	npx create-react-app music-app
### 2.	For the react project install the following packages through these commands
	a.	npm install web3
	b.	npm install - - save ipfs-http-client (Note: the dashes are without spaces)
	c.	npm install react-bootstrap
### 3.	After these installations, place the source folder (in the submission) in place of the existing source folder
### 4.	Run ‘npm start’ to start the node project
### 5.	Create a directory and save the truffle project (in the submission) in the folder
### 6.	Run the following command to deploy the contract:
	a.	truffle migrate - - reset (Note: the dashes are without spaces)
### 7.	In the truffle project go to the build folder -> contract -> Music.json and open the file
### 8.	Copy the abi in the json file
### 9.	Navigate to the source folder of the react project and in the config.js file, copy the abi in place of the existing one
### 10.	In the same config.js file, copy the address of the deployed contract from ganache in place of the existing contract address
### 11.	The setup is complete and the Music Application can now be used!
