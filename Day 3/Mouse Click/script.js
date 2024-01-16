const mousemoveContainer = document.getElementById('mousemoveContainer');
const mousemoveText = document.getElementById('mousemoveText');

mousemoveContainer.addEventListener('mousemove', function(event) {
  const x = event.clientX;
  const y = event.clientY;
  mousemoveText.textContent = `Mouse Position: X - ${x}, Y - ${y}`;
});