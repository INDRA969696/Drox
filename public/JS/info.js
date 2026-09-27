var homePageText = `Welcome to the DROX official website! Explore our collection of file and enjoy the comunity!.`;
var creditsPageText = `> We’re Drox—a community sharing fully open-source, unencoded scripts. Learn from real-world experience, not rigid, boring textbooks. We use a more practical and straight-to-the-point approach to learning.

> Second, everything we do is transparent. All files are completely open, and you can even check this entire website’s source code on GitHub or just inspect it with F12. No hidden code, no encryption.

> As the owner of Drox, I don't care about profit. We’re purely here to share knowledge and help grow the developer community. Tech is evolving fast, and we’re making sure nobody gets left behind by providing a permanent place to learn.`;

const paragrafHome = document.querySelector(".home-page-paragraph");
const paragrafCredits = document.querySelector(".credits-page-paragraph");

paragrafHome.textContent = homePageText;
paragrafCredits.textContent = creditsPageText;
