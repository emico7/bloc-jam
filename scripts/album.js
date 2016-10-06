var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' }
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your poket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Magenta', duration: '2:15' }
    ]
};

var albumSmith = {
    title: 'In The Lonely Hour',
    artist: 'Sam Smith',
    label: 'EM',
    year: '2014',
    albumArtUrl: 'assets/images/album_covers/02.png',
    songs: [
        { title: 'Money on My Mind', duration: '2:01' },
        { title: 'Good Thing', duration: '4:31' },
        { title: 'Stay with Me', duration: '3:33' },
        { title: 'Leave Your Lover', duration: '5:01' },
        { title: 'I\'m Not the Only One', duration: '3:12' }
    ]
};

var albumArr = [albumPicasso, albumMarconi, albumSmith];

var createSongRow = function(songNumber, songName, songLength) {
    var template = 
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
    
    return template;
};

var setCurrentAlbum = function(album) {
    
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
    
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    var index = 0;

    var albumCover = document.getElementsByClassName('album-cover-art')[0];
    albumCover.addEventListener('mousedown', function(event) {
        index++;
        if (index === albumArr.length) {
            index = 0;
        }
        setCurrentAlbum(albumArr[index]);
    });
};

