/// <reference types="cypress" />

describe('Testing the app', () => {

    beforeEach(() => {
      cy.visit('https://manuelalejandro93.github.io/hotels_deployment/')
    })
  
    it('Should show all cards (18 cards)', () => {
      cy.get('div.divMain').should('have.length', 18)
    })
  
    it('Should choose the first option of the select of prices ($)', () => {
      cy.get('select[name="selectPrice"]').as('selectPrice')
      cy.get('@selectPrice').select('1')
      cy.get('div.divMain').should('have.length', 3)
    })
  
    it('Should choose the second option of the select of prices ($$)', () => {
      cy.get('select[name="selectPrice"]').as('selectPrice')
      cy.get('@selectPrice').select('2')
      cy.get('div.divMain').should('have.length', 4)
    })
  
    it('Should choose the third option of the select of prices ($$$)', () => {
      cy.get('select[name="selectPrice"]').as('selectPrice')
      cy.get('@selectPrice').select('3')
      cy.get('div.divMain').should('have.length', 2)
    })
  
    it('Should choose the fourth option of the select of prices ($$$$)', () => {
      cy.get('select[name="selectPrice"]').as('selectPrice')
      cy.get('@selectPrice').select('4')
      cy.get('div.divMain').should('have.length', 9)
    })
  
    it('Should choose the third option of the select of prices ($$$), then show the cards (2) and then clear the filters and show all cards again (18)', () => {
      cy.get('select[name="selectPrice"]').as('selectPrice')
      cy.get('@selectPrice').select('3')
      cy.get('div.divMain').should('have.length', 2)
      cy.get('.clear').as('buttonClear')
      cy.get('@buttonClear').click()
      cy.get('div.divMain').should('have.length', 18)
    })
  
  })
