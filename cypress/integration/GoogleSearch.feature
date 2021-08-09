Feature: Google Search

    @focus
    Scenario: Search for Stefan Clem on Google.
        Given I go to "https://www.google.com" 
        When  I search for "Stefan Clem"
        Then I see "Stefan Clem - Pre-processors - Resume #423 - GitHub"
    
    