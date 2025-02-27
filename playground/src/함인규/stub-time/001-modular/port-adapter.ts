//포트
abstract class MusicPlayerPort {
    abstract play(song: string): void;
}

//어댑터1
class LocalMusicPlayerAdapter extends MusicPlayerPort {
    play(song: string) {
        console.log(`Playing ${song} from local file system.`);
    }
}

//어댑터2
class StreamingMusicPlayerAdapter extends MusicPlayerPort {
    play(song: string) {
        console.log(`Playing ${song} from external service.`);
    }
}

//어댑터3 -> 얘는 테스트를 위한 가짜!
export class FakeMusicPlayerAdapter extends MusicPlayerPort {
    play(song: string) {
        return `Pretending to play ${song}`;
    }
}


// 클라이언트
const musicPlayer = new LocalMusicPlayerAdapter();
musicPlayer.play('Harry Potter Theme');

const streamingMusicPlayer = new StreamingMusicPlayerAdapter();
streamingMusicPlayer.play('Harry Potter Theme');
