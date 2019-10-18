document.addEventListener("DOMContentLoaded", () => {
  const newItemForm = document.querySelector("#new-item-form")
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all")
  deleteAllButton.addEventListener("click", handleDeleteAllClick);

  // document.getElementById("#new-item-form").reset();
})

  const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

  const newBirdSubmission = document.querySelector("#garden-birdwatch-list");

  const newSubmission = document.createElement("ul");
  newBirdSubmission.appendChild(newSubmission);

  const newBird = document.createElement("li");
  newBird.textContent = event.target.bird.value;
  newSubmission.appendChild(newBird);

  const newQuantity = document.createElement("li");
  newQuantity.textContent = event.target.quantity.value;
  newSubmission.appendChild(newQuantity);

  const newVisitor = document.createElement("li");
  newVisitor.textContent = event.target.visitor.value;
  newSubmission.appendChild(newVisitor);

return newSubmission;
}

const handleDeleteAllClick = function (event) {
  const newBirdSubmission = document.querySelector("#garden-birdwatch-list");
  newBirdSubmission.innerHTML = '';
}
