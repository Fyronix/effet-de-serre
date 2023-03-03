describe(`Unit test the landing page`, () => {
  it(`loads`, () => {
    cy.visit(`/`);
  });

  it(`has latest CO2 value`, () => {
    cy.get(`#latestCo2Value`).should('have.text').and('not.be.NaN');
  });

  it(`has latest temperature value`, () => {
    cy.get(`#latestTempValue`).should('have.text').and('not.be.NaN');
  });

  it(`has latest CO2 year`, () => {
    cy.get(`#latestCo2Year`).should('have.text').and('not.be.NaN');
  });

  it(`has latest temperature year`, () => {
    cy.get(`#latestTempYear`).should('have.text').and('not.be.NaN');
  });

  it(`has 10 year temp change`, () => {
    cy.get(`#tenYearWarming`).invoke('text').then(parseFloat).should('not.be.NaN');
  });

  it(`has stamp with text`, () => {
    cy.get(`#stamp`).should('have.text').and('not.be.empty');
  });
});
