import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Player, PlayerRef } from "@remotion/player";
import { Video } from "./components/Video";
import Header from "./components/Header";

function App() {
  const playerRef = useRef<PlayerRef>(null);

  const pauseVid = () => {
    playerRef?.current?.pause();
  };

  const playVid = () => {
    playerRef?.current?.play();
  };

  return (
    <Container>
      <Header />
      <Row>
        <Col className="d-flex justify-content-center align-items-center mt-5">
          <Player
            component={Video}
            compositionWidth={900}
            compositionHeight={600}
            durationInFrames={1000}
            ref={playerRef}
            spaceKeyToPlayOrPause={false}
            clickToPlay={false}
            controls
            fps={60}
            inputProps={{ playVid, pauseVid }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
