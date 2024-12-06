import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button, Row, Col, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import DataFile from '../../../data/COW2021001887-I589Data.csv';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* This section renders a set of cards that display different types of graphs related to asylum grant rates. 
      The cards are arranged in a grid layout using the Ant Design Row and Col components. 
      Each card contains an image and a title describing the type of data it represents,
       such as "Grant Rates by Office", "Grant Rates by Nationality", and "Grant Rates Over Time".
        These cards allow users to gain insight to different data visualizations within the application. */}
      <div className="graphs-section">
        <div className="cards-container">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={22} sm={20} md={8} lg={8} className="graph-card-col">
              <Card
                hoverable
                className="graph-card"
                cover={
                  <div className="graph-card-image-container">
                    <img
                      alt="Grant Rates by Office"
                      src={GrantRatesByOfficeImg}
                    />
                  </div>
                }
              >
                <Card.Meta title="Search Grant Rates by Office" />
              </Card>
            </Col>
            <Col xs={22} sm={20} md={8} lg={8} className="graph-card-col">
              <Card
                hoverable
                className="graph-card"
                cover={
                  <div className="graph-card-image-container">
                    <img
                      alt="Grant Rates by Nationality"
                      src={GrantRatesByNationalityImg}
                    />
                  </div>
                }
              >
                <Card.Meta title="Search Grant Rates by Nationality" />
              </Card>
            </Col>
            <Col xs={22} sm={20} md={8} lg={8} className="graph-card-col">
              <Card
                hoverable
                className="graph-card"
                cover={
                  <div className="graph-card-image-container">
                    <img
                      alt="Grant Rates Over Time"
                      src={GrantRatesOverTimeImg}
                    />
                  </div>
                }
              >
                <Card.Meta title="Search Grant Rates Over Time" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          className="default-btn"
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          className="default-btn"
          onClick={() => {
            const link = document.createElement('a');
            link.href = DataFile;
            link.download = 'COW2021001887-I589Data.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

      {/* This section displays a set of cards with insights about the systemic disparities in asylum grant rates. */}
      <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
      </div>

      <Row gutter={[32, 32]} justify="center">
        <Col xs={22} sm={20} md={8} lg={8} className="graph-card-col">
          <Card title="36%" className="graph-card">
            <p>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </Card>
        </Col>
        <Col xs={22} sm={20} md={8} lg={8} className="graph-card-col">
          <Card title="5%" className="graph-card">
            <p>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </p>
          </Card>
        </Col>
        <Col xs={22} sm={20} md={8} lg={8} className="graph-card-col">
          <Card title="6x Lower" className="graph-card">
            <p>
              Between fiscal year 2017 and 2020, the New York asylum office's
              average grant rate was six times lower than the San Francisco
              asylum office.
            </p>
          </Card>
        </Col>
      </Row>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          className="default-btn read-more-btn"
          onClick={() =>
            window.open(
              'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/',
              '_blank'
            )
          }
        >
          Read More
        </Button>
      </div>

      <p onClick={() => scrollToTop()} className="back-to-top">
        Back To Top ^
      </p>
    </div>
  );
}

export default RenderLandingPage;
