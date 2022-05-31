
const allBooksSection = document.getElementById('all-books');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');
const addNewBookSection = document.getElementById('add-new-book');
const contactSection = document.getElementById('contact');

allBooksSection.classList.add('active');
allBooksSection.classList.remove('hide-class');

function toggleVisbility(activeEle) {
  activeEle.classList.toggle('active');
  activeEle.classList.remove('hide-class');
}

function clearClasses(element1, element2) {
  element1.classList.remove('active');
  element1.classList.add('hide-class');

  element2.classList.remove('active');
  element2.classList.add('hide-class');
}

listLink.addEventListener('click', () => {
  toggleVisbility(allBooksSection);
  clearClasses(addNewBookSection, contactSection);
});

addLink.addEventListener('click', () => {
  toggleVisbility(addNewBookSection);
  clearClasses(allBooksSection, contactSection);
});

contactLink.addEventListener('click', () => {
  toggleVisbility(contactSection);
  clearClasses(allBooksSection, addNewBookSection);
});
