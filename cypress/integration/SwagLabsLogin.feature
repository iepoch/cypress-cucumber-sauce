Feature: Saucedemo Login - Cypress-Cucumber Automation
   Background:
      Given I navigate to the SwagLabs - Saucedemo page

   @regression
   Scenario Outline: Login as a user with valid credentials

      Given I should now see the login screen
      When  I enter a username and password
         | username      | password     |
         | standard_user | secret_sauce |
      ### Session Testing clears page before it checks title ####
      # This is part of the Scenerio of login However, cy.sesssion() sees it as a second test
      # when cucumber sees it as 1
      And  Now I should see the "<title>"





      Examples:
         | title    |
         | Products |


