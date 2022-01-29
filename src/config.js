export const SIMP_STORAGE_ADDRESS = "0xf632A9aD429550485E080Db68D4095836740127d" 
export const SIMP_STORAGE_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artist_likes",
    "outputs": [
      {
        "internalType": "string",
        "name": "artistName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artist_song_mapping",
    "outputs": [
      {
        "internalType": "string",
        "name": "songTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songProducer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songArtist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "genre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "albumName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hash_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artists",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bestSongs",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "genre_song_mapping",
    "outputs": [
      {
        "internalType": "string",
        "name": "songTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songProducer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songArtist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "genre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "albumName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hash_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listener_count",
    "outputs": [
      {
        "internalType": "address",
        "name": "listener",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songHashes",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songTitles",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "song_likes",
    "outputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllArtists",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllSongs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "artistName",
        "type": "string"
      }
    ],
    "name": "getArtistSongs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsArtist",
    "outputs": [
      {
        "internalType": "string",
        "name": "artistName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsProducer",
    "outputs": [
      {
        "internalType": "string",
        "name": "producer",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsGenre",
    "outputs": [
      {
        "internalType": "string",
        "name": "genre",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsAlbumName",
    "outputs": [
      {
        "internalType": "string",
        "name": "aname",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsLikes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsDate",
    "outputs": [
      {
        "internalType": "string",
        "name": "date_val",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_genre",
        "type": "string"
      }
    ],
    "name": "getGenreSongs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "songTitle",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "songProducer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "songArtist",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "songDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "genre",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "albumName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hash_",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "likedBy",
            "type": "address[]"
          }
        ],
        "internalType": "struct Music.Music_data[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_song",
        "type": "string"
      }
    ],
    "name": "likeSong",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "getTopKSongs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "songName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internalType": "struct Music.songLikes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "getTopArtists",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "artistName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internalType": "struct Music.artistLikes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "listenToSong",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "getTopListeners",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "listener",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "count",
            "type": "uint256"
          }
        ],
        "internalType": "struct Music.listenerCount[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_songTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_songProducer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_songArtist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_songDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_genre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_albumName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hash_",
        "type": "string"
      }
    ],
    "name": "addMusicContent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getURLofSong",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]