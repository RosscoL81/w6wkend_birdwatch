document.addEventListener("DOMContentLoaded", () => {
  const newItemForm = document.querySelector("#new-item-form")
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all")
  deleteAllButton.addEventListener("click", handleDeleteAllClick);

  newItemForm.reset();
})

  const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

  const newSubmission = createNewSubmission(event.target);
  const gardenBirdwatchList = document.querySelector("#garden-birdwatch-list");
  gardenBirdwatchList.appendChild(newSubmission);

  event.target.reset();
}

  const createNewSubmission = function (form) {
    const newSubmission = document.createElement("ul");
    newSubmission.classList.add("new-submission");


  const newBird = document.createElement("li");
  newBird.textContent = `Bird Type: ${event.target.bird.value}`;
  newSubmission.appendChild(newBird);

  const newQuantity = document.createElement("li");
  newQuantity.textContent = `Quantity: ${event.target.quantity.value}`;
  newSubmission.appendChild(newQuantity);

  const newVisitor = document.createElement("li");
  newVisitor.textContent = `Common Visitor? ${event.target.visitor.value}`;
  newSubmission.appendChild(newVisitor);

return newSubmission;


}

const handleDeleteAllClick = function (event) {
  const newBirdSubmission = document.querySelector("#garden-birdwatch-list");
  newBirdSubmission.innerHTML = '';
}
