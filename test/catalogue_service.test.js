const catalogueService = require("../app/catalogue_service");
describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
  describe("catalogue.Service.checkBookByTitle",() => {
    test("returns true if the book title exists in the catalogue", () => {
      expect(catalogueService.checkBookByTitle("The Origin of Species")).toBe(true);
      expect(catalogueService.checkBookByTitle("Sapiens")).toBe(false);
    });
  });
  describe("catalogue.Service.countBooksByFirstLetter",() => {
    test("returns the the total number of books beginning with a letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
  });
});
describe("catalogue.Service.getQuantity",() => {
  test("returns the quantity of items in stock by given title", () => {
    expect(catalogueService.getQuantity("Wolf Hall")).toBe(33);
  });  
});
describe("catalogue.getBooksByAuthor",() => {
  test("returns the array of books by given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toBe([
      {title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3},
        {title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
        {title: "Great Expectations", author: "Charles Dickens", quantity: 1},
      ]);
    });
});
});
