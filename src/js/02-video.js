import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currTime = JSON.parse(localStorage.getItem('videoplayer-current-time') ?? 0);
player.setCurrentTime(currTime);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}