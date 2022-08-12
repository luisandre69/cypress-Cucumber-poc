import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import requestValidation from './requestValidationPage'


Given('I open the bad url page', () => {
    requestValidation.visitBadURL()
})

Given('I open the multi modal url page', () => {
    requestValidation.visitMultiModalURL()
})

Given('I open the html css url page', () => {
    requestValidation.visitHtmlCssURL()
})

When('I validate the status code as bad Url page', () => {
    requestValidation.verifyStatusCodeHtmlCss()
})

When('I validate the status code as multi Modal page', () => {
    requestValidation.verifyStatusCodeBad()
})

When('I validate the status code as html css page', () => {
    requestValidation.verifyStatusCodeHtmlCss()
})

When('That there is no errors on the console', () => {
    requestValidation.verifyConsole()
})

Then('I can verify that all the links are working', () => {
    requestValidation.verifyLinks()
})
