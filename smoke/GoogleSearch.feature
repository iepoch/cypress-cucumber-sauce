Feature: Google Search

    @focus
    Scenario: Search for Pick Em on Google.
        Given I go to "https://www.google.com" 
        When  I search for "getpckem"
        Then I see "Pick Em"
    
    