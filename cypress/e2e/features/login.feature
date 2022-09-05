Feature: Saucedemo Login - Cypress-Cucumber Automation
   Background:
      Given I navigate to the SwagLabs - Saucedemo page

   @regression

   Scenario Outline: Login as a user with locked out credentials

      Given I should now see the login screen
      When  a user enters username and password
         | username        | password     |
         | locked_out_user | secret_sauce |
      ### Session Testing clears page before it checks title ####
      # This is part of the Scenerio of login However, cy.sesssion() sees it as a second test
      # when cucumber sees it as 1
      Then Now I should see - "Epic sadface: Sorry, this user has been locked out"


   Scenario Outline: Login as a user with invalid password credentials

      Given I should now see the login screen
      When  a user enters username and password
         | username      | password     |
         | standard_user | bad_password |
      Then Now I should see - "Epic sadface: Username and password do not match any user in this service"


   Scenario Outline: Login as a user with invalid user credentials

      Given I should now see the login screen
      When  a user enters username and password
         | username | password     |
         | non_user | secret_sauce |
      Then Now I should see - "Epic sadface: Username and password do not match any user in this service"


   Scenario Outline: Login as a user with invalid credentials

      Given I should now see the login screen
      When  a user enters username and password
         | username | password     |
         | non_user | bad_password |
      Then Now I should see - "Epic sadface: Username and password do not match any user in this service"




   Scenario Outline: Login as a user with valid credentials

      Given I should now see the login screen
      When entering in a "<username>" and "<password>"
      Then Now I should see the "<title>"


      Examples:
         | title    | username      | password     |
         | Products | standard_user | secret_sauce |


