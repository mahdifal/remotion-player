import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Player, PlayerRef } from '@remotion/player';
import { Video } from './components/Video';
import Header from './components/Header';

function App() {
  const videoPlayerRef = useRef<PlayerRef>(null);

  const pauseVideo = () => {
    videoPlayerRef?.current?.pause();
  };

  const playVideo = () => {
    videoPlayerRef?.current?.play();
  };

  return (
    <Container>
      <Header title="Video Player with Editable Text" />
      <Row>
        <Col className="d-flex justify-content-center align-items-center mt-5">
          <Player
            component={Video}
            compositionWidth={900}
            compositionHeight={600}
            durationInFrames={1000}
            ref={videoPlayerRef}
            spaceKeyToPlayOrPause={false}
            clickToPlay={false}
            controls
            fps={60}
            inputProps={{ playVideo, pauseVideo }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
