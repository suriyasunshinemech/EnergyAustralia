/// <reference types="cypress" />
/// element which is having serial nos considered as parent element
/// element which has radio button considered as child element

describe("Validate EQTest cases", () => {

    it.only("Validate count of parent element", function () {
        cy.visit('http://localhost:4200/festivals')
        cy.get('body > ol > li').should('have.length', 18)
    });


    it.only("Validate count of child element", function () {
        cy.visit('http://localhost:4200/festivals')
        cy.get('body > ol > li > ul > li').should('have.length', 16)
    });

    it.only("Find how many empty child element", function () {
        cy.visit('http://localhost:4200/festivals')
        var i = 0; cy.get('body > ol > li > ul').find("li").then((rows) => {
            rows.toArray().forEach(x => {
                if (x.innerText === '') {
                    i = i + 1;
                }
            })
            cy.log("Total empty tags are - " + i)
        });
    });

    it.only("List all the parent element text", function () {
        cy.visit('http://localhost:4200/festivals')
        cy.get('body > ol> li').then((rows) => {
            rows.toArray().forEach(x => { cy.log("Parent elemnents are - " + x.innerText) })
        });
    });

    it.only("List all the child element text", function () {
        cy.visit('http://localhost:4200/festivals')
        cy.get('body > ol> li> ul').find('li').then((rows) => {
            rows.toArray().forEach(x => { cy.log("Child elemnents are - " + x.innerText) })
        });
    });

    it.only("Validate whether 'Propeller' present", function () {
        cy.visit('http://localhost:4200/festivals')
        cy.get('body > ol').find("li").then((rows) => {
            rows.toArray().forEach(x => {
                if (x.innerText === 'Propeller') { cy.log('Yes "Propeller" presented ') }
            })
        });
    });

});
