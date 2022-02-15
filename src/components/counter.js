import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ContentWrapper from './contentWrapper';
import CO2 from './co2';

const Counter = ({
  currentCo2, currentTemp, currentSlr, currentIceMelt,
}) => (
  <ContentWrapper
    style={`
      padding: 0;
      margin-top: .5rem;
      text-align: center;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        > div {
          flex-grow: 1
          min-height: 80px;
          padding: 2rem 1.5rem 0;
          > div {
            font-size: 0.9rem;
          }
          > strong {
            padding-top: 0.75rem;
            display: block;
            font-weight: bold;
            font-size: 1.5rem;
          }
        }
      `}
    >
      <div>
        <div>
          Atmosphère
          {` `}
          <CO2 />
        </div>
        <strong id="currentCo2Counter">
          {currentCo2}
          ppm
        </strong>
      </div>
      <div>
        <div>Anomalie de température globale</div>
        <strong id="currentTempCounter">
          +
          {currentTemp}
          °C
        </strong>
      </div>
      <div>
        <div>Élévation mondiale du niveau de la mer</div>
        <strong id="currentSlrCounter">
          +
          {currentSlr}
          mm/year
        </strong>
      </div>
      <div>
        <div>Minimum de glace de mer arctique</div>
        <strong id="currentIceMeltCounter">
          {currentIceMelt}
          M km
          <sup>2</sup>
        </strong>
      </div>
    </div>
  </ContentWrapper>
);

Counter.propTypes = {
  currentCo2: PropTypes.number.isRequired,
  currentTemp: PropTypes.number.isRequired,
  currentSlr: PropTypes.number.isRequired,
  currentIceMelt: PropTypes.number.isRequired,
};

export default Counter;
