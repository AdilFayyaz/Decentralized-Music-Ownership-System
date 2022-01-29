// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Music{
     // List of Song titles
    string [] public songTitles;
    string [] public songHashes;
    string [] public artists;
    string [] public bestSongs;
    songLikes [] public song_likes;
    artistLikes [] public artist_likes;
    // Map the artist to the song
    mapping(string=>Music_data[]) public artist_song_mapping;
    // Map the genre to the song
    mapping(string=>Music_data[]) public genre_song_mapping;
    // listeners list
    listenerCount [] public listener_count;

    struct songLikes{
        string songName;
        uint likes;
    }
    struct listenerCount{
        address listener;
        uint count;
    }
    struct artistLikes{
        string artistName;
        uint likes;
    }
    struct Music_data{
        string songTitle;
        string songProducer;
        string songArtist;
        string songDate;
        string genre;
        string albumName;
        string hash_;
        uint256 likes;
        address [] likedBy;
    }

    constructor(){

    }

    function songExists(string memory title) private view returns (bool){
        for (uint i=0;i<songTitles.length;i++){
            if (keccak256(bytes(songTitles[i])) == keccak256(bytes(title))){
                return true;
            }
        }
        return false;
    }
    function songHashExists(string memory hash_) private view returns (bool){
        for (uint i=0;i<songHashes.length;i++){
            if (keccak256(bytes(songHashes[i])) == keccak256(bytes(hash_))){
                return true;
            }
        }
        return false;
    }
    function artistExists(string memory _name) private view returns(bool){
        for (uint i=0;i<artists.length;i++){
            if(keccak256(bytes(artists[i])) == keccak256(bytes(_name))){
                return true;
            }
        }
        return false;
    }
    
    modifier onlyUniqueHash(string memory _hash){
        require(!songHashExists(_hash));
        _;
    }
    modifier onlyUniqueSongTitle(string memory _name){
        require(!songExists(_name));
        _;
    }
    modifier validArtist(string memory _name){
        require(artistExists(_name));
        _;
    }
    modifier validSong(string memory _song){
        require(songExists(_song));
        _;
    }

    function getAllArtists() view public returns(string [] memory){
        return artists;
    }
    function getAllSongs()view public returns(string [] memory){
        return songTitles;
    }
    function getArtistSongs(string memory artistName)view public validArtist(artistName)
     returns (string [] memory) {
         string [] memory songsOfArtist = new string[](artist_song_mapping[artistName].length);
         for(uint i=0;i<artist_song_mapping[artistName].length;i++){
             songsOfArtist[i] = artist_song_mapping[artistName][i].songTitle;
         }
         return songsOfArtist;
        // return artist_song_mapping[artistName];
    }
    function getSongsArtist(string memory songName) view public validSong(songName)
    returns(string memory artistName){
        // string memory artistName;
        for(uint i=0;i<artists.length;i++){
            for(uint j=0;j<artist_song_mapping[artists[i]].length;j++){
                if(keccak256(bytes(artist_song_mapping[artists[i]][j].songTitle)) == keccak256(bytes(songName))){
                    artistName = artist_song_mapping[artists[i]][j].songArtist;
                    return artistName;
                }
            }
        }
    }
    function getSongsProducer(string memory songName) view public validSong(songName)
    returns(string memory producer){
        // string memory producer;
        for(uint i=0;i<artists.length;i++){
            for(uint j=0;j<artist_song_mapping[artists[i]].length;j++){
                if(keccak256(bytes(artist_song_mapping[artists[i]][j].songTitle)) == keccak256(bytes(songName))){
                    producer = artist_song_mapping[artists[i]][j].songProducer;
                    return producer;
                }
            }
        }
    }
    function getSongsGenre(string memory songName) view public validSong(songName)
    returns(string memory genre){
        // string memory genre;
        for(uint i=0;i<artists.length;i++){
            for(uint j=0;j<artist_song_mapping[artists[i]].length;j++){
                if(keccak256(bytes(artist_song_mapping[artists[i]][j].songTitle)) == keccak256(bytes(songName))){
                    genre = artist_song_mapping[artists[i]][j].genre;
                    return genre;
                }
            }
        }
    }
    function getSongsAlbumName(string memory songName) view public validSong(songName)
    returns(string memory aname){
        // string memory aname;
        for(uint i=0;i<artists.length;i++){
            for(uint j=0;j<artist_song_mapping[artists[i]].length;j++){
                if(keccak256(bytes(artist_song_mapping[artists[i]][j].songTitle)) == keccak256(bytes(songName))){
                    aname = artist_song_mapping[artists[i]][j].albumName;
                    return aname;
                }
            }
        }
    }
    
    function getSongsLikes(string memory songName) view public validSong(songName)
    returns(uint256 likes){
        // uint likes;
        for(uint i=0;i<artists.length;i++){
            for(uint j=0;j<artist_song_mapping[artists[i]].length;j++){
                if(keccak256(bytes(artist_song_mapping[artists[i]][j].songTitle)) == keccak256(bytes(songName))){
                    likes = artist_song_mapping[artists[i]][j].likes;
                    return likes;
                }
            }
        }
    }
    function getSongsDate(string memory songName) view public validSong(songName)
    returns(string memory date_val){
        // string memory date_val;
        for(uint i=0;i<artists.length;i++){
            for(uint j=0;j<artist_song_mapping[artists[i]].length;j++){
                if(keccak256(bytes(artist_song_mapping[artists[i]][j].songTitle)) == keccak256(bytes(songName))){
                    date_val = artist_song_mapping[artists[i]][j].songDate;
                    return date_val;
                }
            }
        }
    }

    function getGenreSongs(string memory _genre) view public returns(Music_data [] memory){
        return genre_song_mapping[_genre];
    }

    function hasAlreadyBeenLiked(address personAddr, string memory _artist, uint i) view private returns(bool){
        for(uint k=0; k< artist_song_mapping[_artist][i].likedBy.length; k++){
            if(artist_song_mapping[_artist][i].likedBy[k] == personAddr){
                return true;
            }
        }
        return false;
    }
    function likeSong(string memory _artist, string memory _song)public validSong(_song) validArtist(_artist){
        
        for (uint i=0; i<artist_song_mapping[_artist].length;i++){
            if(keccak256(bytes(artist_song_mapping[_artist][i].songTitle)) ==
             keccak256(bytes(_song))){
                 artist_song_mapping[_artist][i].likes += 1;
                 // Check if the user hasn't previously liked this song
                 require(!hasAlreadyBeenLiked(msg.sender,_artist,i));
                 artist_song_mapping[_artist][i].likedBy.push(msg.sender);
                 bool found = false;
                 for(uint x =0; x<song_likes.length;x++){
                     if(keccak256(bytes(song_likes[x].songName)) == keccak256(bytes(_song))){
                        song_likes[x].likes += 1 ; // Increment the likes
                        found = true;
                     }
                 }
                 // If song not already in the songs list then add them here
                 if(!found){
                    song_likes.push(songLikes(artist_song_mapping[_artist][i].songTitle, artist_song_mapping[_artist][i].likes));
                 }
                 found = false;
                for(uint x =0; x<artist_likes.length;x++){
                     if(keccak256(bytes(artist_likes[x].artistName)) == keccak256(bytes(_artist))){
                        artist_likes[x].likes += 1 ; // Increment the likes
                        found = true;
                     }
                 }
                 // If song not already in the songs list then add them here
                 if(!found){
                    artist_likes.push(artistLikes(artist_song_mapping[_artist][i].songArtist, artist_song_mapping[_artist][i].likes));
                 }
             }
        }
    }
    function quickSort(songLikes[] memory arr, int left, int right) pure private {
        int i = left;
        int j = right;
        if (i == j) return;
        uint pivot = arr[uint(left + (right - left) / 2)].likes;
        while (i <= j) {
            while (arr[uint(i)].likes > pivot) i++;
            while (pivot > arr[uint(j)].likes) j--;
            if (i <= j) {
                (arr[uint(i)], arr[uint(j)]) = (arr[uint(j)], arr[uint(i)]);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSort(arr, left, j);
        if (i < right)
            quickSort(arr, i, right);
    }
    
    function quickSortListeners(listenerCount[] memory arr, int left, int right) pure private {
        int i = left;
        int j = right;
        if (i == j) return;
        uint pivot = arr[uint(left + (right - left) / 2)].count;
        while (i <= j) {
            while (arr[uint(i)].count > pivot) i++;
            while (pivot > arr[uint(j)].count) j--;
            if (i <= j) {
                (arr[uint(i)], arr[uint(j)]) = (arr[uint(j)], arr[uint(i)]);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSortListeners(arr, left, j);
        if (i < right)
            quickSortListeners(arr, i, right);
    }
    function quickSortArtists(artistLikes[] memory arr, int left, int right) pure private {
        int i = left;
        int j = right;
        if (i == j) return;
        uint pivot = arr[uint(left + (right - left) / 2)].likes;
        while (i <= j) {
            while (arr[uint(i)].likes > pivot) i++;
            while (pivot > arr[uint(j)].likes) j--;
            if (i <= j) {
                (arr[uint(i)], arr[uint(j)]) = (arr[uint(j)], arr[uint(i)]);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSortArtists(arr, left, j);
        if (i < right)
            quickSortArtists(arr, i, right);
    }
    
    function getTopKSongs(uint k) public view returns (songLikes [] memory){
        require(k<=song_likes.length);
        songLikes[] memory songsList = new songLikes[](k);
        songLikes[] memory songsLikesCopy = new songLikes[](song_likes.length);
        for(uint z=0;z<song_likes.length;z++){
            songsLikesCopy[z] = song_likes[z];
        }      
        quickSort(songsLikesCopy, int(0), int(songsLikesCopy.length-1));
        for(uint i=0;i<k;i++){
            songsList[i] = songsLikesCopy[i];
        }
        return songsList;

    }
    // Get top artists
    function getTopArtists(uint k) view public returns (artistLikes [] memory){
        require(k<=artist_likes.length);
        artistLikes[] memory artistsList = new artistLikes[](k);
        artistLikes[] memory copyArtists = new artistLikes[](artist_likes.length);
        
        for(uint z=0;z<artists.length;z++){
            copyArtists[z] = artist_likes[z];
        }
        quickSortArtists(copyArtists, int(0), int(copyArtists.length-1));
        // bubbleSort(listener_count);
        for(uint x =0;x<k;x++){
            artistsList[x] = (copyArtists[x]);
        }
        
        return artistsList;
    }
    

    // Add to listener count - will be used just to get top listeners
    function listenToSong() public {
        bool found = false;
        for(uint j=0;j<listener_count.length;j++){
            if(listener_count[j].listener == msg.sender){
                found = true;
                listener_count[j].count+=1;
            }
        }
        if (!found){
            listener_count.push(listenerCount(msg.sender,1));
        }
        
    }
    
    // Get top listeners
    function getTopListeners(uint k) view public returns (listenerCount [] memory){
        require(k<=listener_count.length);
        listenerCount[] memory listenersList = new listenerCount[](k);
        listenerCount[] memory copyListeners = new listenerCount[](listener_count.length);
        for(uint z=0;z<listener_count.length;z++){
            copyListeners[z] = listener_count[z];
        }
        quickSortListeners(copyListeners, int(0), int(copyListeners.length-1));
        // bubbleSort(listener_count);
        for(uint x =0;x<k;x++){
            listenersList[x] = (copyListeners[x]);
        }
        
        return listenersList;
    }

    function addMusicContent(string memory _songTitle, string memory _songProducer,
    string memory _songArtist, string memory _songDate, string memory _genre,
    string memory _albumName, string memory _hash_) public onlyUniqueHash(_hash_) onlyUniqueSongTitle(_songTitle){
        // Song Name and hash both do not exist before
        songTitles.push(_songTitle);
        songHashes.push(_hash_);
        bool x = true;
        //Only insert into artists array if not exists
        for (uint i=0;i<artists.length;i++){
            if(keccak256(bytes(artists[i])) == keccak256(bytes(_songArtist))){
                x = false;
            }
        }
        if (x == true){
            artists.push(_songArtist);
        }
        address [] memory a ;
        // Map artist to song
        artist_song_mapping[_songArtist].push(Music_data(_songTitle,_songProducer,
        _songArtist, _songDate, _genre,_albumName,_hash_,0, a));

        // Map genre to song
        genre_song_mapping[_genre].push(Music_data(_songTitle,_songProducer,_songArtist,
        _songDate, _genre, _albumName, _hash_,0,a));
    }
    function getURLofSong(string memory songName) public view returns(string memory){
        for(uint j=0;j<artists.length;j++){
            for(uint i=0;i<artist_song_mapping[artists[j]].length;i++){
                if(keccak256(bytes(artist_song_mapping[artists[j]][i].songTitle)) == keccak256(bytes(songName))){
                    return artist_song_mapping[artists[j]][i].hash_;
                }
            }
        }
        return "";
    }

}

// let myins = await Music.deployed()
// myins.listenToSong({from:accounts[0]})
// myins.addMusicContent('abc','as','Adil','dsf','sdf','sddf','234scvdw')
// myins.addMusicContent('abcd','as','Ali','dsf','sdf','sddf','234scvsdd')
// myins.addMusicContent('ab3c','as','Ali','dsf','sdf','sddf','234scved')
// myins.addMusicContent('aewbc','as','Ali','dsf','sdf','sddf','234sdscvd')
// myins.getArtistSongs('Adil')
// myins.likeSong('Adil', 'abc', {from:accounts[0]})
// myins.getAllArtists();
// myins.getAllSongs();  
// myins.getTopKSongs(3);