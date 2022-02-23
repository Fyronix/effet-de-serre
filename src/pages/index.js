import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { lighten, desaturate } from 'unitransform';
import { css } from '@emotion/core';
import { withRouteData } from 'react-static';
import { Scatter } from 'react-chartjs-2';
import Cite from '../components/cite';
import RefList from '../components/reflist';
import IsEarthWarming from '../components/isEarthWarming';
import Header from '../components/header';
import CO2 from '../components/co2';
import ContentWrapper from '../components/contentWrapper';
import { red } from '../utils/colors';
import ShareLinks from '../components/shareLinks';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const figureWrapperStyle = css`
      width: 80%;
      margin: 3rem auto;
      >div{
        padding 1.5rem;
        box-shadow:rgba(00, 00, 00, 0.2) 0px 6px 16px 0px;
        border-radius: 5px;
        > img {
          width: 100%;
        }
      @media (max-width: 700px) {
        padding: 0;
        box-shadow: none;
      }
      }
      >strong {
        margin-top: 1.5rem;
        display: block;
        text-align: center;
      }
      @media (max-width: 700px) {
        width: 98%;
      }
    `;
    const datasetOptions = {
      borderColor: lighten(red, 10),
      backgroundColor: desaturate(lighten(red, 20), 30),
    };

    const {
      co2,
      temp,
      latestCo2Value,
      latestTempValue,
      slrTrend,
      latestCo2Year,
      latestIceMeltValue,
      latestTempYear,
      tenYearWarming,
    } = this.props;

    return (
      <>
        <Header
          currentCo2={latestCo2Value}
          currentTemp={latestTempValue}
          currentSlr={slrTrend}
          currentIceMelt={latestIceMeltValue}
        />
        <ContentWrapper>
          <article
            css={css`
              svg {
                margin: 0 auto;
                display: block;
                .mg-active-datapoint-container {
                  transform: translate(-200px, 0);
                }
              }
            `}
          >
            <h2
              css={css`
                margin-top: 0;
                padding-top: 0;
              `}
            >
              Le réchauffement climatique est-il toujours d'actualité ?
            </h2>
            <IsEarthWarming
              tenYearWarming={tenYearWarming}
              latestTempValue={latestTempValue}
            />
            <ShareLinks />
            <h2>Qu'est ce que le réchauffement climatique?</h2>
            <p>
            Le réchauffement climatique est la tendance de la Terre
              à augmenter de température à un rythme sans précédent à partir du milieu
               20ième siècle.
              <Cite name="nasa" />
            </p>
            <p>
            Bien que des changements graduels sur Terre
              et sur climat se sont produits dans le passé, cette dernière tendance a été
               principalement causée par la libération de dioxyde de carbone (
              <CO2 />
              ) dans l'atmosphère en brûlant des combustibles fossiles.
              <Cite name="nasa" />
              {` `}
              <CO2 />
              {` `}
              est un
              {` `}
              <em>gaz à effet de serre</em>
              , cela veut dire qu'il
               il emprisonne la chaleur dans la Terre
              {`'`}
              et l'atmosphère plutôt que de lui permettre de rayonner dans l'espace.
              <Cite name="nasa" />
            </p>
            <p>
            Depuis le milieu des années 1950, la température de la Terre 
              a une nette tendance positive (voir fig. 1).
            </p>
            <div css={figureWrapperStyle}>
              <div>
                <Scatter
                  data={{
                    datasets: [
                      {
                        label: `Global average temperature`,
                        data: temp,
                        ...datasetOptions,
                      },
                    ],
                  }}
                  options={{
                    legend: {
                      display: false,
                    },
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            callback: (value) => `${value}°C`,
                          },
                          scaleLabel: {
                            display: true,
                            labelString: `Température moyenne mondiale`,
                          },
                        },
                      ],
                    },
                    tooltips: {
                      callbacks: {
                        label: (tooltipItem) => `${tooltipItem.xLabel}, ${tooltipItem.yLabel}°C`,
                      },
                      mode: `index`,
                      intersect: false,
                    },
                  }}
                />
              </div>
              <strong>
                Figure 1
                <Cite name="tempData" />
              </strong>
            </div>
            <p>
                La quantité de terre s'est réchauffée est mesurée par rapport à la moyenne
               température globale pré-industrielle. À partir de
              {` `}
              <span id="latestTempYear">{latestTempYear}</span>
              , La température de la Terre est d'environ
              {` `}
              <span id="latestTempValue">{latestTempValue}</span>
              °C au-dessus des niveaux préindustriels.
              <Cite name="tempData" />
              {` `}
              Si la température de la planète
              continue d'augmenter, on peut s'attendre à beaucoup
               impacts environnementaux et sociétaux dont les plus significatifs
               nous expliquerons dans cet article.
            </p>
            <p>
            Fin 2015, 184 nations étaient parties à l'Accord de Paris sur le climat,
               un accord de l'ONU portant sur la réduction des émissions de gaz à effet de
               un effort pour atténuer le réchauffement climatique. L'objectif déclaré de la
               accord est de limiter la température moyenne mondiale à 1,5°C
               au-dessus des niveaux préindustriels.
              <Cite name="1.5C" />
            </p>
            <p>
            En 2018, l'ONU a publié un rapport détaillant les impacts potentiels
               du changement climatique induit par l'homme et d'éventuelles
               les mesures. Sa principale conclusion était que rester en dessous de l'objectif de 1,5 °C
               est possible, mais nécessiterait
               {` `}
               {`"`}
               des changements rapides, profonds et sans précédent dans tous les aspects de
               société
              {`"`}
              .
              <Cite name="1.5C-press-release" />
              {` `}
              Les émissions humaines de carbone seraient
               doivent diminuer de 45 % par rapport aux niveaux de 2010 d'ici 2030 et atteindre une
               zéro d'ici 2050.
              <Cite name="1.5C" />
            </p>
            <p>
            La principale cause du réchauffement climatique est l'émission humaine de
               {` `}
               <CO2 />
               {` `}
               dans l'atmosphère
               <CO2 />
               {` `}
               est produit par la combustion de combustibles fossiles, principalement à partir d'électricité
               production, agriculture, industrie et véhicules avec
               moteurs à combustion.
              <Cite name="emissionsData" />
              {` `}
              à partir de
              {` `}
              <span id="latestCo2Year">{latestCo2Year}</span>
              , la concentration
               {`'`}
               en carbone de l'atmosphère
               {` `}
               <span id="latestCo2Value">{latestCo2Value}</span>
               ppm (voir fig. 2).
              <Cite name="co2After1958" />
            </p>
            <div css={figureWrapperStyle}>
              <div>
                <Scatter
                  data={{
                    datasets: [
                      {
                        label: `CO2 atmosphérique`,
                        data: co2,
                        ...datasetOptions,
                      },
                    ],
                  }}
                  options={{
                    legend: {
                      display: false,
                    },
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            callback: (value) => `${value}ppm`,
                          },
                          scaleLabel: {
                            display: true,
                            labelString: `Concentration atmosphérique de CO2`,
                          },
                        },
                      ],
                    },
                    tooltips: {
                      callbacks: {
                        label: (tooltipItem) => `${tooltipItem.xLabel}, ${tooltipItem.yLabel}ppm`,
                      },
                      mode: `index`,
                      intersect: false,
                    },
                  }}
                />
              </div>
              <strong>
                Figure 2
                <Cite name="co2After1958" />
                <Cite name="co2Before1958" />
              </strong>
            </div>
            <p>
            Puisque 
               {` `}
               l'abondance de  {` `}
               <CO2 />
               {` `}
                dans l'atmosphère est directement liée à l'augmentation'
               {`'`}
               de la température de la Terre, limitant le carbone atmosphérique a été
               identifiée comme vitale pour atténuer le réchauffement climatique. En tant que membre de
               Convention sur le climat du Protocole de Kyoto, les scientifiques ont 450ppm comme
               bonne limite supérieure pour la concentration de carbone afin de maintenir
               réchauffement en dessous de +2°C.
            </p>
            <h2>Effets du réchauffement climatique</h2>
             <p>
               Le réchauffement climatique aura un impact sur un large éventail de problèmes, y compris
               santé, moyens de subsistance, sécurité alimentaire, approvisionnement en eau, sécurité humaine,
               et la croissance économique.
               <Cite name="1.5C" />
               {` `}
               La gravité de ces impacts est déterminée
               par la température de la Terre ; atteignant 2°C au-dessus de la température préindustrielle
               moyenne mettrait des millions de personnes de plus en danger que si
               le réchauffement a été limité à 1,5°C.
               <Cite name="1.5C" />
               {` `}
               En général,
               {`"`}
               les pays des tropiques et subtropicaux de l'hémisphère sud sont
               devraient connaître les impacts les plus importants sur la croissance économique.
               {`"`}
               <Cite name="1.5C" />
             </p>
             <p>
               L'ONU prévoit des phénomènes météorologiques extrêmes plus fréquents (fortes pluies
               et sécheresse) et les températures extrêmes dues au réchauffement climatique.
               <Cite name="1.5C" />
               {` `}
               Le risque le plus immédiat pour l'environnement est
               la disparition des récifs coralliens - un processus qui a déjà commencé
               à grande échelle (voir fig. 3).
             </p>
            <div css={figureWrapperStyle}>
              <div>
                <img src={`assets/risks.png`} alt="risks of climate change" />
              </div>
              <strong>
                Figure 3
                <Cite name="guardian" />
                <Cite name="1.5C" />
              </strong>
            </div>
            <p>
              Le changement climatique est susceptible d'augmenter la prévalence de
              maladie. On estime que les augmentations mondiales de température modifient
              la répartition des insectes vecteurs connus de pathogènes,
              comme les moustiques.
              <Cite name="pathogenMigration" />
              {` `}
              Des études en Chine montrent que
              l'augmentation des températures affecte positivement la viabilité de la maladie
              transfert en diminuant le temps d'incubation virale dans les vecteurs --
              entraînant une augmentation des taux d'infection.
              <Cite name="viralIncubation" />
              L'Organisation mondiale de la santé a estimé que le changement climatique a
              responsables de 3 % des diarrhées, 3 % du paludisme et 3,8 % des
              décès dus à la dengue dans le monde en 2004. Total attribuable
              la mortalité était d'environ 0,2 % des décès en 2004 ; parmi ceux-ci, 85 % étaient
              décès d'enfants.
              <Cite name="qui" />
            </p>
            <p>
              La biodiversité mondiale est fortement menacée par le changement climatique
              à mesure que les environnements changeants augmentent la pression d'extinction sur les espèces.
              Un examen en 2013 révèle que l'évolution des environnements peut conduire à
              l'extinction de milliers d'espèces dans les 100 prochaines années.
              Les causes immédiates de ces extinctions comprennent des facteurs biotiques et
              facteurs abiotiques, tels qu'une tolérance physiologique limitée aux
              les températures et l'évolution des interactions entre les espèces.
              <Cite name="speciesExtinction" />
            </p>
            <p>
              Alors que la menace pour la biodiversité se profile, l'augmentation des zoonoses
              maladie à travers le monde. Une plus grande biodiversité donne moins de pathogènes
              place pour dominer et se propager, et que les humains exploitent et dégradent ces
              écosystèmes vitaux, les conditions deviennent plus favorables à ces hôtes,
              vecteurs et agents pathogènes.
              <Cite name="zoonoticDisease" />
              {` `}
              Avec la montée du COVID-19 et ses effets
              étant fortement ressenti dans le monde entier, il est indéniablement clair que le
              la propagation de ces maladies zoonotiques est un résultat majeur de notre surexploitation
              des ressources naturelles et des habitats vitaux. Alors que la demande de viande et de terre
              augmentation, la déforestation massive a considérablement augmenté le contact humain
              avec des animaux sauvages et leurs fluides corporels qui peuvent être des vecteurs d'agents pathogènes.
              <Cite name="zoonoticDiseaseTwo" />
            </p>
            <p>
              Parmi les autres impacts déjà visibles du réchauffement climatique, citons
              la fonte des glaciers et de la banquise, qui contribue à l'élévation du niveau de la mer.
              <Cite name="natGéo" />
              {` `}
              Cependant, la dilatation thermique est plus importante
              composante dans ce, contribuant 70-75% de l'élévation du niveau de la mer.
              <Cite name="ipcc" />
              {` `}
              Certaines régions ont connu une grave sécheresse, entraînant
              les pénuries de nourriture et d'eau ainsi que les incendies de forêt.
              <Cite name="natGéo" />
            </p>
            <h2
              css={css`
                margin-top: 4%;
                font-size: 1.2em;
              `}
            >
              Liens
            </h2>
            <RefList />
          </article>
        </ContentWrapper>
      </>
    );
  }
}

Home.propTypes = {
  co2: PropTypes.arrayOf(PropTypes.object),
  temp: PropTypes.arrayOf(PropTypes.object),
  latestCo2Value: PropTypes.number,
  latestTempValue: PropTypes.number,
  latestIceMeltValue: PropTypes.number,
  latestTempYear: PropTypes.number,
  slrTrend: PropTypes.number,
  latestCo2Year: PropTypes.number,
  tenYearWarming: PropTypes.number.isRequired,
};

export default withRouteData(Home);
