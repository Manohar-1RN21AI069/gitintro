const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const ptag = document.getElementById("p")

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  modal.style.color = "red";
  ptag.textContent = "Something..."
});


closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});