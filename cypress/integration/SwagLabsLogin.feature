Feature: Saucedemo Login - Cypress-Cucumber Automation
   Background:
      Given I navigate to the SwagLabs - Saucedemo page

   @regression
   Scenario: Login as a user with valid credentials

      Given I should now see the login screen
      When  I enter a username and password
         | username      | password     |
         | standard_user | secret_sauce |
      Then I can click the login button to login
      And  Now I should see the Products page
         | title    |
         | Products |

   @regression
   Scenario: Loging as a user with locked out credentials

      Given I should now see the login screen
      When  I enter a username and password
         | username        | password     |
         | locked_out_user | secret_sauce |
      Then I can click the login button to login
      And Now I should see - "Epic sadface: Sorry, this user has been locked out."


   Scenario: Loging in as a user that is invalid username
      Given I should now see the login screen
      When  I enter a username and password
         | username     | password     |
         | bad_username | secret_sauce |
      Then I can click the login button to login
      And Now I should see - "Epic sadface: Username and password do not match any user in this service"

