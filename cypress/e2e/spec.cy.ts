describe('home page', () => {
  it('home page visibility', () => {
    cy.visit('http://localhost:3000/')
    // cy.visit('https://www.bludogdiner.com/')
    cy.get('[data-cy="title"]').should('be.visible')
    cy.get('[data-cy="logo"]').should('be.visible')
    cy.get('[data-cy="orderOnlineLink"]').should('be.visible')
    cy.get('[data-cy="seeTheMenuLink"]').should('be.visible')
    cy.get('[data-cy="svgBtn"]').should('be.visible')
    cy.get('[data-cy="hamburgerOptions"]').should('not.visible')
    cy.get('[data-cy="facebookLink"]').should('be.visible')
    cy.get('[data-cy="backgroundImageOne"]').should('be.visible')
    cy.get('[data-cy="facebookLink"]').should('be.visible')
    cy.get('[data-cy="instagramLink"]').should('be.visible')
    cy.get('[data-cy="twitterLink"]').should('be.visible')
    cy.get('[data-cy="infoHeader"]').should('be.visible')
    cy.get('[data-cy="infoParagraph"]').should('be.visible')
    cy.get('[data-cy="hotDogImage"]').should('be.visible')
    cy.get('[data-cy="hotDogDescription"]').should('be.visible')
    cy.get('[data-cy="checkOurMenuBtn"]').should('be.visible')
    cy.get('[data-cy="backgroundImageTwo"]').should('be.visible')
    // cy.get('[data-cy="stayInTouchDiv"]').contains('STAY IN')
    cy.get('[data-cy="stayInTouchDiv"]').should('have.length', 1).within(($div) => {
      cy.get('p.line1').should('have.text', 'STAY IN');
      cy.get('p.line2').should('have.text', 'TOUCH!');
    })
    cy.get('[cy-data="contactDiv"]').within(() => {
      cy.get('p').should('have.length', 3);
      cy.contains('p', 'PHONE: 808-388-1824').should('exist');
      cy.contains('p', 'E-MAIL: Bludogdiner@gmail.com').should('exist');
      cy.contains('p', 'ADDRESS: 3216 judson st gig, harbor wa 98335').should('exist');
    });
    cy.get('[data-cy="hoursLocationDiv"]').within(() => {
      // Check for the presence of the image
      cy.get('img').should('exist');

      // Check text in the <p> tags
      cy.get('p.text-custom-blue').should('have.text', 'Hours & Location');

      // Check each hour entry
      cy.get('div.my-6').each(($hour) => {
        cy.wrap($hour).within(() => {
          cy.get('p.font-1-bold').should('exist');
          cy.get('p.font-1-semibold').should('exist');
        });
      });

      // Check for the Google iframe map
      cy.get('iframe[title="business location"]').should('exist');
    });
    cy.get('[data-cy="eventsDiv"]').within(() => {
      cy.get('p.text-custom-blue').should('have.text', 'Events');

      cy.get('[data-cy="liveCarousel"]').each(($event) => {
        cy.wrap($event).within(() => {
          cy.get('p.text-2xl.font-1-bold.text-custom-red').should('exist');
          cy.get('p.text-lg.font-1-semibold.text-white').should('exist');
          cy.get('p.text-md.font-1-semibold.text-white').eq(0).should('contain', 'TIME:');
          cy.get('p.text-md.font-1-semibold.text-white').eq(1).should('contain', 'DATE:');
          cy.get('p.text-md.font-1-semibold.text-white').eq(2).should('contain', 'LOCATION:');
        });
      });
    });

    cy.get('[data-cy="footerDiv"]').within(() => {
      // Check the text
      cy.contains("HOME");
      cy.contains("MENU");
      cy.contains("ORDER ONLINE");
      cy.contains("CONTACT US");
      cy.contains("PRIVACY POLICY");
      cy.contains("ABOUT US");
      cy.contains("Back to Top");

      // Check the images
      cy.get('img[alt="Inova Hive logo"]').should("be.visible");

      // Check the icons
      cy.get('a[href="https://www.facebook.com/bludogdiner"]').should("have.attr", "target", "_blank");
      cy.get('a[href="https://www.instagram.com/bludogdiner?igshid=OGQ5ZDc2ODK2ZA=="]').should("have.attr", "target", "_blank");
      cy.get('a[href="https://www.twitter.com/bludogdiner"]').should("have.attr", "target", "_blank");

      // Check the button
      cy.get("button").should("have.class", "bg-custom-red");
      cy.get("button").should("contain", "Back to Top");
    });
  })
})