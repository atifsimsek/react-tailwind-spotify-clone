import { Icon } from "Icons"
import { useAudio } from 'react-use';
import { secondsToTime } from "utils";
import CustomRange from "Components/CustomRange";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setControls, setPlaying, setSidebar } from "stores.js/player";


const Player = () => {
    const { current, sidebar } = useSelector(state => state.player)
    const dispatch = useDispatch()

    const [audio, state, controls, ref] = useAudio({
        src: current.src,
        autoPlay: false,
    });

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])

    useEffect(() => {
        controls.play()
    }, [current])

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])

    

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted) {
            return "volumeMuted"
        }
        if (state.volume > 0 && state.volume < 0.33) {
            return "volumeLow"
        }
        if (state.volume >= 0.033 && state.volume < 0.66) {
            return "volumeNormal"
        }

        return "volumeFull"
    }, [state.volume, state.muted])

    return (
        <div className='flex px-4 justify-between items-center h-full'>
            <div className=' min-w-[11.25rem] w-[30%] flex items-center'>
                {current && (
                    <div className="flex items-center  ">
                        <div className="flex items-center mr-3 ">
                            {
                                !sidebar && (
                                    <div className="w-14 h-14 mr-3 group flex-shrink-0 relative">
                                        <img src={current.image} alt="" />
                                        <button
                                            onClick={() => { dispatch(setSidebar(true)) }}
                                            className="w-6 h-6 bg-black opacity-0 hover:!opacity-100 hover:scale-[1.06] group-hover:opacity-60 rounded-full top-1 right-1 absolute flex items-center justify-center">
                                            <Icon name="up" size={16} />
                                        </button>
                                    </div>
                                )
                            }
                            <div>
                                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                                <p className="text-[0.688rem] text-white text-opacity-70">{current.artist}</p>

                            </div>
                        </div>
                        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                            <Icon name="heart" size={16} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                            <Icon name="pictureInPicture" size={16} />
                        </button>

                    </div>
                )
                }
            </div>
            <div className='flex flex-col items-center max-w-[45.125rem] px-4 w-[40%]'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                        <Icon name="shuffle" size={16} />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                        <Icon name="playerPrev" size={16} />
                    </button>
                    <button onClick={controls[state?.playing ? "pause" : "play"]} className='w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.05] '>
                        <Icon name={state?.playing ? "pause" : "play"} size={16} />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                        <Icon name="playerNext" size={16} />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                        <Icon name="repeat" size={16} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className=' min-w-[11.25rem] w-[30%] flex items-center justify-end'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                    <Icon name="mic" size={16} />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                    <Icon name="queue" size={16} />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                    <Icon name="device" size={16} />
                </button>
                <button
                    onClick={controls[state.muted ? "unmute" : "mute"]}
                    className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 '>
                    <Icon name={volumeIcon} size={16} />
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Player