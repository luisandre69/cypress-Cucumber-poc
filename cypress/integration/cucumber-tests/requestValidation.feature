Feature: Validate the requests from the page
    As a user
    I want to validate the status code of the page
    validate that there is no error message on the console
    and verify if no links are broken on the page

    @focus
    Scenario: Validation of bad url page
        Given I open the bad url page
        And I see 'Error 404 - Not found' in the title
        When I validate the status code as bad Url page
        And That there is no errors on the console
        Then I can verify that all the links are working

    Scenario: Validation of multi modal url page
        Given I open the multi modal url page
        And I see 'Multimodal Access - W3C' in the title
        When I validate the status code as multi Modal page
        And That there is no errors on the console
        Then I can verify that all the links are working


    Scenario: Validation of html/css url page
        Given I open the html css url page
        And I see 'HTML & CSS - W3C' in the title
        When I validate the status code as html css page
        And That there is no errors on the console
        Then I can verify that all the links are working
