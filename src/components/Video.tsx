import { AbsoluteFill, Sequence } from 'remotion';
import Logo from './Logo';
import { EditableText } from './EditableText';
import { Title } from './Title';

export type VidepProps = {
  playVideo: () => void;
  pauseVideo: () => void;
};

export const Video = ({ playVideo, pauseVideo }: VidepProps) => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <AbsoluteFill>
        <AbsoluteFill>
          <Logo />
        </AbsoluteFill>

        <Sequence from={35}>
          <Title titleText={'This video player is great'} />
        </Sequence>

        <Sequence from={75}>
          <EditableText playVideo={playVideo} pauseVideo={pauseVideo} />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
