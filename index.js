const editPopup = document.querySelector('.popup');
const buttonEditPopup = document.querySelector('.profile__edit-button');
const formInputName = document.querySelector('.popup__form-item_input_name');
const formInputDescriptor = document.querySelector('.popup__form-item_input_descriptor');
const buttonSaveEditPopup = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__user-name');
const userDescription = document.querySelector('.profile__descriptor');
const closeLargeImagePopup = document.querySelector('.popup__close-button_image_large');

function openPopup(popapName) {
  popapName.classList.add('popup_opened');
}

buttonEditPopup.addEventListener('click', function() {
  openPopup(editPopup);
  formInputName.value = userName.textContent;
  formInputDescriptor.value = userDescription.textContent;
})

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

const buttonCloseEditPopup = document.querySelector('.popup__close-button');

buttonCloseEditPopup.addEventListener('click', function() { 
  closePopup(editPopup);
})


buttonSaveEditPopup.addEventListener('submit', 
  (event) => {
  event.preventDefault();
  userName.textContent = formInputName.value;
  userDescription.textContent = formInputDescriptor.value;
  editPopup.classList.remove('popup_opened');
}
)

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];


const gridTemplate = document.getElementById('grid-element');

 
const photoGrid = document.querySelector('.photo-grid');

const createElement = (card) => {
 const postElement = gridTemplate.content.querySelector('.element').cloneNode(true);
const postName = postElement.querySelector('.element__name');
const postImage = postElement.querySelector('.element__photo');
const caption = document.querySelector('.popup__caption');
const photo = document.querySelector('.popup__image');
const popupLargeImage = document.querySelector('.popup_image_large');
const buttonCloseLargeImage = document.querySelector('.popup__close-button_image_large')


  postName.textContent = card.name;
  postImage.src = card.link;
  postImage.alt = card.name;

const likeButton = postElement.querySelector('.element__button-like');

likeButton.addEventListener('click', (evt) => {
  console.log(evt);
  evt.target.classList.toggle('element__button-like_active');
})

const deleteButton = postElement.querySelector('.element__delete-button');
deleteButton.addEventListener('click', (evt) => {
  postElement.remove();
})

postImage.addEventListener('click', function() {
  photo.src = postImage.src;
  caption.textContent = postName.textContent;
  openPopup(popupLargeImage);
})

buttonCloseLargeImage.addEventListener('click', function() {
  closePopup(popupLargeImage);
})
  return postElement;
}  

const renderElement = (element) => {
    photoGrid.append(element);
}

initialCards.forEach((item) => {
const newPost = createElement(item);
renderElement(newPost);
})

const buttonAddPhoto = document.querySelector('.profile__add-button');
const addPostPopup = document.querySelector('.popup_post_add');

buttonAddPhoto.addEventListener('click', (evt) => {
  openPopup(addPostPopup);

})

const buttonCloseAddPostPopup = document.querySelector('.popup__close-button_post_add');

buttonCloseAddPostPopup.addEventListener('click', (evt) => {
  closePopup(addPostPopup);
})

const buttonCreatePostPopup = document.querySelector('.popup__save-button_post_create');


const placeDescription = document.querySelector('.element__name');
const photoLink = document.querySelector('.element__photo');

const addPostForm = document.querySelector('.popup__form_post_add');
console.log(addPostForm);
const formInputPlaceName = addPostForm.querySelector('.popup__form-item_input_place');
console.log(formInputPlaceName);
const formInputPhotoLink = addPostForm.querySelector('.popup__form-item_input_link');
console.log(formInputPhotoLink);

const handlePhotoPostSubmit = (event) => {
  event.preventDefault();
const name = formInputPlaceName.value;
const link = formInputPhotoLink.value;

const photoPostData = {
  name, 
  link
}

photoGrid.prepend(createElement(photoPostData));

closePopup(addPostPopup)
}

addPostForm.addEventListener('submit', handlePhotoPostSubmit);

