import React, { useRef } from 'react';
import video from '../../Images/video.mp4';
import './Video_player.css';

const VideoPlayer = ({ playState, setPlayState }: { playState: boolean; setPlayState: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const player = useRef<HTMLDivElement>(null);
    
    const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`videoplayer ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
