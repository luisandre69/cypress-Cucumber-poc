const badURL = 'https://www.w3.org/standards/badpage'
const multiModalURL = 'https://www.w3.org/standards/webofdevices/multimodal'
const htmlCssURL = 'https://www.w3.org/standards/webdesign/htmlcss'

let windowErrorSpy

Cypress.on('window:before:load', (win) => {
    windowErrorSpy = cy.spy(win.console, 'error')
})

class requestValidation {
    static visitBadURL() {
        cy.visit(badURL, { failOnStatusCode: false })
    }

    static visitMultiModalURL() {
        cy.visit(multiModalURL)
    }

    static visitHtmlCssURL() {
        cy.visit(htmlCssURL)
    }

    static verifyStatusCodeBad() {
        cy.request({
            url: badURL,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404)
        })
    }

    static verifyStatusCodeModal() {
        cy.request({
            url: multiModalURL,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    }

    static verifyStatusCodeHtmlCss() {
        cy.request({
            url: htmlCssURL,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    }

    static verifyConsole() {
        cy.wait(1000).then(() => {
            expect(windowErrorSpy).to.not.be.called
        })
    }

    static verifyLinks() {
        cy.get('a').each((link) => {
            cy.request(link.prop('href')).its('status').should('eq', 200)
        })
    }
}

export default requestValidation
