var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  return  Object.assign({}, playlist, {[artistName]: songTitle})
 

}


function removeFromPlaylist(playlist, artistName){
<<<<<<< HEAD
delete playlist[artistName]
return playlist
=======
delete playlist.artistName
>>>>>>> 100a8fff60ad2cec78d2e4c2d7e7deda1d3bf888

}