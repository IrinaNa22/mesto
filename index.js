const editPopup = document.querySelector(".popup");
const buttonEditPopup = document.querySelector(".profile__edit-button");
const formInputName = document.querySelector('.popup__input-name');
const formInputDescriptor = document.querySelector('.popup__input-descriptor');
const buttonSaveEditPopup = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__user-name');
const userDescription = document.querySelector('.profile__descriptor');

buttonEditPopup.addEventListener('click', function() {
  console.log('click')

  editPopup.classList.add('popup_opened');

  formInputName.value = userName.textContent;
  formInputDescriptor.value = userDescription.textContent;
})

const buttonCloseEditPopup = document.querySelector('.popup__close-button');

buttonCloseEditPopup.addEventListener('click', function() { 
  console.log('click')
  editPopup.classList.remove('popup_opened');
})


buttonSaveEditPopup.addEventListener('submit', 
  (event) => {
  event.preventDefault();
  userName.textContent = formInputName.value;
  userDescription.textContent = formInputDescriptor.value;
  editPopup.classList.remove('popup_opened');
}
)