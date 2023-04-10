const editPopup = document.querySelector('.popup_type_edit-profile');
const buttonEditPopup = document.querySelector('.profile__edit-button');
const formInputName = document.querySelector('.popup__form-item_input_name');
const formInputDescriptor = document.querySelector('.popup__form-item_input_descriptor');
const buttonSaveEditPopup = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__user-name');
const userDescription = document.querySelector('.profile__descriptor');
const closeLargeImagePopup = document.querySelector('.popup__close-button_image_large');

function openPopup(popapElement) {
  popapElement.classList.add('popup_opened');
}

buttonEditPopup.addEventListener('click', function() {
  openPopup(editPopup);
  formInputName.value = userName.textContent;
  formInputDescriptor.value = userDescription.textContent;
})

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
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
    closePopup(editPopup);
  }
)

const initialCards = [{
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
  const postElementName = postElement.querySelector('.element__name');
  const postElementImage = postElement.querySelector('.element__photo');
  const captionPopupLargeImage = document.querySelector('.popup__caption');
  const photoPopupLargeImage = document.querySelector('.popup__image');
  const popupLargeImage = document.querySelector('.popup_image_large');
  const buttonCloseLargeImage = document.querySelector('.popup__close-button_image_large');
  
  postElementName.textContent = card.name;
  postElementImage.src = card.link;
  postElementImage.alt = card.name;

  const likeButton = postElement.querySelector('.element__button-like');

  likeButton.addEventListener('click', (evt) => {
    console.log(evt);
    evt.target.classList.toggle('element__button-like_active');
  })

  const deleteButton = postElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', (evt) => {
    postElement.remove();
  })

  postElementImage.addEventListener('click', function() {
    captionPopupLargeImage.textContent = postElementName.textContent;
    photoPopupLargeImage.src = postElementImage.src;
    photoPopupLargeImage.alt = postElementName.textContent;

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
const buttonCloseAddPostPopup = document.querySelector('.popup__close-button_post_add');

buttonAddPhoto.addEventListener('click', (evt) => {
  addPostForm.reset();
  openPopup(addPostPopup);
})

buttonCloseAddPostPopup.addEventListener('click', (evt) => {
  closePopup(addPostPopup);
})

const buttonCreatePostPopup = document.querySelector('.popup__save-button_post_create');
const placeDescription = document.querySelector('.element__name');
const photoLink = document.querySelector('.element__photo');
const addPostForm = document.querySelector('.popup__form_post_add');
const formInputPlaceName = addPostForm.querySelector('.popup__form-item_input_place');
const formInputPhotoLink = addPostForm.querySelector('.popup__form-item_input_link');

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