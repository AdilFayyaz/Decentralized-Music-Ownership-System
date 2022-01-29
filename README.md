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


## Functionality
### 1. Add Account Information
![image](https://user-images.githubusercontent.com/62440954/151669846-abd5f54d-75b3-4a4e-bbca-c40093a67391.png)

### 2. Upload a Song to IPFS
![image](https://user-images.githubusercontent.com/62440954/151669873-37d27dd3-b86e-4075-aa76-6b23e067e400.png)

### 3. Add Metadata to be Inserted to the Blockchain
![image](https://user-images.githubusercontent.com/62440954/151669885-0bcaadc9-000a-4660-8b45-8d0996cc639c.png)
![image](https://user-images.githubusercontent.com/62440954/151669893-f944478b-0b44-4ba6-90b7-913e889847fa.png)

### 4. Get Songs and Artists
![image](https://user-images.githubusercontent.com/62440954/151669908-7c54a9fd-1bea-47fc-a9fe-5774adfc22cd.png)
![image](https://user-images.githubusercontent.com/62440954/151669910-cba2ad2a-60e6-47a9-90b3-8c44fa59ca75.png)

### 5. Play a Song
![image](https://user-images.githubusercontent.com/62440954/151669935-a8aefc59-2d07-4530-ac42-b4c57faf8f09.png)

### 6. Like a Song
![image](https://user-images.githubusercontent.com/62440954/151669941-339411f5-6176-45ea-ab81-c7f6f1877944.png)

### 7. Get Top Songs
![image](https://user-images.githubusercontent.com/62440954/151669958-2c6569e9-1758-4ca0-a464-41fbce570f53.png)

### 8. Get Top Artists
![image](https://user-images.githubusercontent.com/62440954/151669974-a090171f-f65d-44b5-883c-16c000cc2188.png)

### 9. Get Top Listeners
![image](https://user-images.githubusercontent.com/62440954/151669979-c87db84f-422b-470e-b3ad-1612c6e27c39.png)

### 10. Get a Genere's Songs
![image](https://user-images.githubusercontent.com/62440954/151669993-6ed2bda0-534c-41f1-a638-884e51963b10.png)



