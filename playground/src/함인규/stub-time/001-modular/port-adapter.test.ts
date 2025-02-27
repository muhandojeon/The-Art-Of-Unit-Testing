import { FakeMusicPlayerAdapter } from "./port-adapter";

test('should pretend to play a song', () => {
    const musicPlayer = new FakeMusicPlayerAdapter();
    const result = musicPlayer.play('Harry Potter Theme');
    expect(result).toBe('Pretending to play Harry Potter Theme');
});