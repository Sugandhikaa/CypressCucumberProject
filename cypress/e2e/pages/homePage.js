class HomePage {
    // Locators for the elements on the homepage
    elements = {
      mainBanner: () => cy.get("div.login_logo"),
      searchBar: () => cy.get("#search-bar"),
      searchButton: () => cy.get("#search-button"),
      featuredProductsSection: () => cy.get(".featured-products"),
      categoryLink: (category) => cy.get(`a[title="${category}"]`)
    };
  
    // Method to verify the page title
    verifyTitle(expectedTitle) {
      cy.title().should('eq', expectedTitle);
    }
  
    // Method to check if the main banner is visible
    checkMainBannerVisible() {
      this.elements.mainBanner().should('be.visible');
    }
  
    // Method to check if the search bar is visible
    checkSearchBarVisible() {
      this.elements.searchBar().should('be.visible');
    }
  
    // Method to check if the featured products section is visible
    checkFeaturedProductsSectionVisible() {
      this.elements.featuredProductsSection().should('be.visible');
    }
  
    // Method to perform a search
    searchForProduct(product) {
      this.elements.searchBar().clear().type(product);
      this.elements.searchButton().click();
    }
  
    // Method to click on a category link
    clickCategory(category) {
      this.elements.categoryLink(category).click();
    }
  
    // Method to verify the URL contains the category
    verifyCategoryPageRedirection(category) {
      cy.url().should('include', `/category/${category.toLowerCase()}`);
    }
  }
  
  export const homePage = new HomePage();
  