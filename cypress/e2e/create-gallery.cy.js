/// <reference types='cypress'/>

import { createGalleryPage } from '../POM/CreateGalleryPOM';
import { loginPage } from '../POM/LoginPOM';

const url = 'https://gallery-app.vivifyideas.com';

describe('Create gallery', () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit(`${url}/login`);
    loginPage.emailField.type('sovasova@gmail.com');
    loginPage.passwordField.type('sova12345678');
    loginPage.submitButton.click();
    cy.wait(1000);
  });

  it("Create gallery", () => {
    createGalleryPage.createGalleryButton.click();
    createGalleryPage.titleField.type('Music');
    createGalleryPage.descriptionField.type('Music pictures');
    createGalleryPage.imageField.type('https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg');
    createGalleryPage.submitButton.click();
    cy.wait(1000);
    cy.get('h1').should('contain', 'All Galleries');
  });
});
