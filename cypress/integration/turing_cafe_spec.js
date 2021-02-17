describe('Turing Cafe', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy
    .fixture('resyData.json')
    .then((reservations) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200,
        body: reservations.resys
      })
    })
    
    cy.visit(baseUrl)
  });

  it ('Should display the site heading ', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe')
  });

})
