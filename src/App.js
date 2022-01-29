  /* src/App.js */
// ipfs-only-hash
import './App.css'
// import React, { useState } from 'react'
// import { create } from 'ipfs-http-client'
// import Web3 from 'web3'
// import {SIMP_STORAGE_ADDRESS, SIMP_STORAGE_ABI} from './config.js'
import Tabs from './Tabs';

// const client = create('https://ipfs.infura.io:5001/api/v0')

function App() {
  
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App

