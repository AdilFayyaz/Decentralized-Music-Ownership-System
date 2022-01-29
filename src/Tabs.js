import React, { useState } from "react";
import "./App.css";
import { create } from 'ipfs-http-client'
import Web3 from 'web3'
import {SIMP_STORAGE_ADDRESS, SIMP_STORAGE_ABI} from './config.js'

const client = create('https://ipfs.infura.io:5001/api/v0')

class Tabs extends React.Component {
    constructor(props){
            super(props);
            this.state = {
            fileUrl: "",
            updateFileUrl: '',
            play: false,
            hash: '',
            fetchUrl: '',
            simpcontract: '',
            account: '',
            songs: [],
            artists: [],
            artistSongs: [],
            songURL: '',
            songURLToPlay: '',
            doNotPlay: '',
            toggleState: 1,
            searchSongState: '',
            songPlaying: '',
            artistPlaying: '',
            producerPlaying: '',
            datePlaying: '',
            albumPlaying: '',
            likesPlaying: '',
            genrePlaying: '',
            topSongs: [],
            topArtists: [],
            topListeners: [],
            genreInfo: {}

        }
    }
//   const [toggleState, setToggleState] = useState(1);

  toggleTab (index) {
    this.setState ({
        toggleState: index
    })
  };
  componentDidMount(){
    this.loadBlockchainData()
    this.getAllSongs.bind(this)
    // const val = this.state.simpcontract.methods.getAllSongs().call()
    // console.log(val)
    
  }
  async loadBlockchainData() {
    const web3 = new Web3("HTTP://127.0.0.1:7545")
    const simpstorage = new web3.eth.Contract(SIMP_STORAGE_ABI,SIMP_STORAGE_ADDRESS);
    this.setState({ simpcontract: simpstorage }) 
    
  }
  async onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log(url)
      this.setState({fileUrl : url})
      this.state.fileUrl = url;
      localStorage.setItem('url', url)
      // this.state.updateFileU rl = url
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async playAudio() {
    var audio = new Audio(this.state.fileUrl)
    audio.play()
  }
  handleSubmit(e){
    e.preventDefault();
    e.target.reset();
  }
  async getAllSongs(){
    const songs = await this.state.simpcontract.methods.getAllSongs().call()
    this.setState({songs:songs})
      
  }
  async getAllArtists(){
    
    const arts = await this.state.simpcontract.methods.getAllArtists().call() 
    this.setState({artists: arts})
  }
  async getArtistSongs(name){
    const artistSongs = await this.state.simpcontract.methods.getArtistSongs(name).call()
    this.setState({artistSongs:artistSongs})
  }
  async getSongURL(name){
    const url = await this.state.simpcontract.methods.getURLofSong(name).call()
    this.setState({songURL: url})
    
  }
  async playThisSong(name){
    // Still playing song if account not specified?? :(
    const url = await this.state.simpcontract.methods.getURLofSong(name).call()
    this.setState({songURLToPlay: url})
    this.setState({doNotPlay: 0})
    this.state.simpcontract.methods.listenToSong().send({from: this.state.account})
    .catch((err)=>{
      this.setState({doNotPlay: 1})
      alert("Enter Your Account Number")

    });
    if (this.state.doNotPlay != 1){
      var audio = new Audio(this.state.songURLToPlay)
      audio.play();
    }
  }
  async likeThisSong(){
    this.state.simpcontract.methods.likeSong(this.state.artistPlaying, this.state.songPlaying)
    .send({from: this.state.account, gas: 900000})
    .catch((err)=>{
      alert("You already liked this song")
    });
  }

  searchSong =(event)=>{
    
    this.setState({searchSongState:event.target.value})
    console.log(this.state.searchSongState)
  }
  async getSongsArtist(songName){
    const a = await this.state.simpcontract.methods.getSongsArtist(songName).call()
    this.setState({artistPlaying:a})
  }
  async getSongsDate(songName){
    const a = await this.state.simpcontract.methods.getSongsDate(songName).call()
    this.setState({datePlaying:a})
  }
  async getSongsProducer(songName){
    const a = await this.state.simpcontract.methods.getSongsProducer(songName).call()
    this.setState({producerPlaying:a})
  }
  async getSongsGenre(songName){
    const a = await this.state.simpcontract.methods.getSongsGenre(songName).call()
    this.setState({genrePlaying:a})
  }
  async getSongsAlbumName(songName){
    const a = await this.state.simpcontract.methods.getSongsAlbumName(songName).call()
    this.setState({albumPlaying:a})
  }
  async getSongsLikes(songName){
    const a = await this.state.simpcontract.methods.getSongsLikes(songName).call()
    this.setState({likesPlaying:a})
  }
  async getTopSongs(val){
      const s = await this.state.simpcontract.methods.getTopKSongs(val).call()
      this.setState({topSongs: s})
  }
  
  async getTopArtists(val){
    const s = await this.state.simpcontract.methods.getTopArtists(val).call()
    this.setState({topArtists: s})
    }

   async getTopListeners(val){
    const s = await this.state.simpcontract.methods.getTopListeners(val).call()
    this.setState({topListeners: s})
    }

    async getGenreSongs(gen){
        const s = await this.state.simpcontract.methods.getGenreSongs(gen).call()
        this.setState({genreInfo: s})
    }

  render(){
    return (
        // <div className="App-header" >    
            <div className="container" style={{ backgroundImage: "url(./insideBG.png)"  ,backgroundRepeat: 'no-repeat'}}>
                <div className="bloc-tabs">
                    <button
                    className={this.state.toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={this.toggleTab.bind(this,1)}
                    >
                    Account
                    </button>
                    <button
                    className={this.state.toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={this.toggleTab.bind(this,2)}
                    >
                    Artist
                    </button>
                    <button
                    className={this.state.toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={this.toggleTab.bind(this,3)}
                    >
                    Library
                    </button>
                    <button
                    className={this.state.toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={this.toggleTab.bind(this,4)}
                    >
                    Listen
                    </button>
                    <button
                    className={this.state.toggleState === 5 ? "tabs active-tabs" : "tabs"}
                    onClick={this.toggleTab.bind(this,5)}
                    >
                    Hottest
                    </button>
                    <button
                    className={this.state.toggleState === 6 ? "tabs active-tabs" : "tabs"}
                    onClick={this.toggleTab.bind(this,6)}
                    >
                    Genres 
                    </button>
                </div>
                <div className="content-tabs">
                    <div className={this.state.toggleState === 1 ? "content  active-content" : "content"}>
                        <h2>Enter Your Account Address </h2>
                        <br></br>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            const accNum = new FormData(event.target).get("accountNum");
                            this.setState({account:accNum})
                            this.handleSubmit(event)
                            }}>
                            <div className="section1">
                                <input id="acnum" name="accountNum" type="text" placeholder='Account Address' required />
                                <br></br>
                                <p>Using Account at Address: {this.state.account}</p>
                                <br></br>
                                
                                <button type="submit" hidden="" value="Use Address">Use Address</button>
                            </div>
                        </form>
                        
                    </div>
                    <div className={this.state.toggleState === 2 ? "content  active-content" : "content"}>
                        <div className="section2-left">
                            <div className="section4">
                                <h2>Welcome User</h2> 
                                <br></br>
                                <p>{this.state.account}</p>
                                <br></br>
                            </div>
                        
                            <div >
                                <input className="custom-file-input"
                                type="file"
                                onChange={(e)=>this.onChange(e)}
                                /> 
                            </div>
                            <br></br>
                        <div>
                            Audio link: 
                            {this.state.fileUrl}
                        </div>
                        <br></br>
                        
                        <div className="form-section-2">
                            <form onSubmit={(event) => {event.preventDefault()
                            const SongName = new FormData(event.target).get("SongName");
                            const SongProducer = new FormData(event.target).get("SongProducer");
                            const SongArtist = new FormData(event.target).get("SongArtist");
                            const SongDate = new FormData(event.target).get("SongDate");
                            const Genre = new FormData(event.target).get("Genre");
                            const AlbumName = new FormData(event.target).get("AlbumName");
                            const HashUrl = this.state.fileUrl;
                            
                            this.state.simpcontract.methods.addMusicContent(SongName,SongProducer,SongArtist,
                            SongDate,Genre, AlbumName, HashUrl).send({from: this.state.account, gas: 900000})
                            .catch((err) => {
                                alert("Song Name and URL should be unique -- " + err);
                            });
                            this.handleSubmit(event);
                            }}>
                            <input type="text" name = "SongName" placeholder='Name of the song'/>
                            <input type="text" name = "SongProducer" placeholder='Producer'/>
                            <input type="text" name = "SongArtist" placeholder='Artist Name'/>
                            <input type="text" name = "SongDate" placeholder='Date'/>
                            <input type="text" name = "Genre" placeholder='Genre'/>
                            <input type="text" name = "AlbumName" placeholder='Album Name'/>
                            
                            <button className="sec2-submit"
                            type="submit"> Add to Blockchain </button>
                            </form>
                        </div>

                        <div className="section2">
                            <button onClick={this.playAudio.bind(this)}>
                                <span>Test Audio</span>
                            </button>
                        </div>

                </div>  


                    </div>
                    <div className={this.state.toggleState === 3 ? "content  active-content" : "content"}>
                        <div className="section3">
                            <h2>Get All Songs</h2>
                            <button type='submit' onClick={(event) => {
                                event.preventDefault()
                                this.getAllSongs()
                                this.loadBlockchainData()
                        
                                }}>
                                <p>Get Songss</p>
                            </button>
                        </div>
                        <div className="listSA">
                            {this.state.songs.map(name =>
                                <div>
                                <button> {name} </button>  
                                </div>
                            )}
                        </div>
                        <br></br>
                        <div className="section3">
                            <h2> Get all Artists </h2>
                            <button type='submit' onClick={(event) => {
                                event.preventDefault()
                                this.getAllArtists()
                                this.loadBlockchainData()
                                }}> 
                                <p>Get Artists</p> 
                            </button>
                        </div>
                        <div className="listSA">
                        {
                            this.state.artists.map((val)=>
                            <div>
                            <button> {val} </button>  
                            </div>
                        )}
                        </div>
                    </div>
                    <div className={this.state.toggleState === 4 ? "content  active-content" : "content"}>
                        <div className="section4">
                            <h2>Welcome User</h2> 
                            <br></br>
                            <p>{this.state.account}</p>
                            <br></br>
                            <form onSubmit={(event) =>{
                                event.preventDefault();
                                const songName = new FormData(event.target).get("songName")
                                if(this.state.account){
                                    this.playThisSong(songName)
                                    this.loadBlockchainData()
                                    this.setState({songPlaying: songName})
                                    this.getSongsArtist(songName)
                                    this.getSongsProducer(songName)
                                    this.getSongsAlbumName(songName)
                                    this.getSongsDate(songName)
                                    this.getSongsGenre(songName)
                                    this.getSongsLikes(songName)
                                }
                                else{
                                    alert("Enter Account Info")
                                }
                                
                            }}>
                                <input type='text' id='aname' name ='songName' placeholder='Song Name' required></input>
                                <button type="submit" hidden="" value="Play Music">Play Music</button>
                            </form>
                            <br></br>
                            <div>
                                <div>Song: {this.state.songPlaying}</div>
                                <div>Artist: {this.state.artistPlaying}</div>
                                <div>Genre: {this.state.genrePlaying}</div>
                                <div>Date: {this.state.datePlaying}</div>
                                <div>Likes: {this.state.likesPlaying}</div>
                                <div>Album Name: {this.state.albumPlaying}</div>
                            </div>
                        </div>
                        <br></br>
                        <div className="likebutton">
                            <button onClick={this.likeThisSong.bind(this)}>Like this Song</button>
                        </div>
                        
                    </div>
                    <div className={this.state.toggleState === 5 ? "content  active-content" : "content"}>     
                        <div  className="section4">
                            <h2>Welcome User</h2> 
                            <br></br>
                            <p>{this.state.account}</p>
                            <br></br>   
                            <div>
                                <p> Get Top Songs </p>
                                <div>
                                    <form onSubmit={(event) =>{
                                        event.preventDefault();
                                        const val = new FormData(event.target).get("value")
                                        this.getTopSongs(val)
                                        this.loadBlockchainData()
                                    }}>
                                        <input type='text' id='aname' name ='value' placeholder='Top Value' required></input>
                                        <button type="submit" hidden="" value="Get top Songs">Get top Songs</button>
                                    </form>
                                    <p> {this.state.topSongs.map(name =>
                                             <div className="listSA">
                                                <button> Song Name: {name[0]} -- </button>  
                                                <button> Number of Likes: {name[1]}</button>
                                            </div>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p> Get Top Artists </p>
                                <div>
                                    <form onSubmit={(event) =>{
                                        event.preventDefault();
                                        const val = new FormData(event.target).get("value")
                                        this.getTopArtists(val)
                                        this.loadBlockchainData()
                                    }}>
                                        <input type='text' id='aname' name ='value' placeholder='Top Value' required></input>
                                        <button type="submit" hidden="" value="Get top Artists">Get top Artists</button>
                                    </form>
                                    <p> {this.state.topArtists.map(name =>
                                            <div>
                                            <button> Artist Name: {name[0]} -- </button>  
                                            <button> Number of Likes on Songs: {name[1]}</button>
                                            </div>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p> Get Top Listeners </p>
                                <div>
                                    <form onSubmit={(event) =>{
                                        event.preventDefault();
                                        const val = new FormData(event.target).get("value")
                                        this.getTopListeners(val)
                                        this.loadBlockchainData()
                                    }}>
                                        <input type='text' id='aname' name ='value' placeholder='Top Value' required></input>
                                        <button type="submit" hidden="" value="Get top Listeners">Get top Listeners</button>
                                    </form>
                                    <p> {this.state.topListeners.map(name =>
                                            <div>
                                            <button> Listener: {name} </button>  
                                            </div>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.toggleState === 6 ? "content  active-content" : "content"}>
                        <div  className="section4">
                            <h2>Welcome User</h2> 
                            <br></br>
                            <p>{this.state.account}</p>
                            <br></br> 
                            <p> Get Genre Songs </p>
                            <div>
                                <div>
                                    <form onSubmit={(event) =>{
                                        event.preventDefault();
                                        const val = new FormData(event.target).get("value")
                                        this.getGenreSongs(val)
                                        this.loadBlockchainData()
                                    }}>
                                        <input type='text' id='aname' name ='value' placeholder='Genre Name' required></input>
                                        <button type="submit" hidden="" value="Get Genre Songs">Get Genre Songs</button>
                                    </form>
                                    <br></br>
                                    {/* <p>{this.state.genreInfo.toString()}</p> */}
                                    <p> {
                                        Object.keys(this.state.genreInfo).map((keyName, i) => (
                                            <li   key={i}>
                                                <span>Song Name: {this.state.genreInfo[keyName][0]}</span>
                                            </li>
                                        ))}    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Tabs;
