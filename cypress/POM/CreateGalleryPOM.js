class CreateGallery {
    get createGalleryButton() {
        return cy.get(".nav-link").eq(2);
    }

    get titleField() {
        return cy.get("#title");
    }

    get descriptionField() {
        return cy.get('#description');
    }

    get imageField() {
        return cy.get('.form-control').eq(2);
    }

    get submitButton() {
        return cy.get('button[type="submit"]').contains('Submit');
    }

    get cancelButton() {
        return cy.get('button[type="submit"]').contains('Cancel')
    }
}

export const createGalleryPage = new CreateGallery();
