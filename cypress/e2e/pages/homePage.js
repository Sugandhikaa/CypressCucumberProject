class HomePage {
    // Locators for the elements on the homepage
    elements = {
      lblmainBanner: () => cy.get("div.login_logo"),
      txtUserName: () => cy.get("input#user-name.input_error.form_input"),
      txtPassword: () => cy.get("input#password.input_error.form_input"),
      btnLogin: () => cy.get("#login-button")
   
    };
  
    // Method to verify the page title
    verifyTitle(expectedTitle) {
      cy.title().should('eq', expectedTitle);
    }
  
    // Method to check if the main banner is visible
    checkMainBannerVisible() {
      this.elements.lblmainBanner().should('be.visible');
    }
  
    // Method to check if the search bar is visible
    checkLoginElementsVisible() {
      this.elements.txtUserName().should('be.visible');
      this.elements.txtPassword().should('be.visible');
      this.elements.btnLogin().should('be.visible');
    }
  
  
  }
  
  export const homePage = new HomePage();
  