const changeTextButton = document.getElementById('changeTextBtn');
const demoParagraph = document.getElementById('demo');

/*function handleClick(){
    demoParagraph.textContent = 'Text Changed';
}*/

changeTextButton.addEventListener('click', function () {//Event Listenser : method to pass two parameter especially for click and callback function
    const name = prompt("Enter your name")
    // demoParagraph.textContent = 'Text changed!';
    demoParagraph.textContent = "Welcome " + name;
});