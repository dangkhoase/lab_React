import React from "react";
import { Tabs, Tab, Row, Container } from "react-materialize";
import { Players } from "../../Players";
import Card from "../card";
function New() {
  return (
    <div className="detail-container" style={{ width: "70%" }}>
      <Tabs className="tab-demo z-depth-1 tabs-fixed-width" scope="tabs-23">
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 1"
        >
          <Container>
            <Row>
              <div className="containerHome">
                {Players.filter((player) => parseInt(player.id) < 5).map(
                  (player, index) => (
                    <Card player={player} key={index} />
                  )
                )}
              </div>
            </Row>
          </Container>
        </Tab>
        <Tab
          active
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 2"
        >
          <Container>
            <Row>
              <div className="containerHome">
                {Players.filter((player) => parseInt(player.id) > 5).map(
                  (player, index) => (
                    <Card player={player} key={index} />
                  )
                )}
              </div>
            </Row>
          </Container>
        </Tab>
        <Tab
          //   disabled
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 3"
        >
          <Container>
            <Row>
              <div className="containerHome">
                {Players.filter((player) => parseInt(player.id) < 5).map(
                  (player, index) => (
                    <Card player={player} key={index} />
                  )
                )}
              </div>
            </Row>
          </Container>
        </Tab>
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="player 4"
        >
          <Container>
            <Row>
              <div className="containerHome">
                {Players.filter((player) => parseInt(player.id) > 5).map(
                  (player, index) => (
                    <Card player={player} key={index} />
                  )
                )}
              </div>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default New;
