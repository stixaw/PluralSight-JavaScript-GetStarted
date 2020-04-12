let result;

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changePercentage(percentage) {
    document.getElementById('percent-off').textContent = `${percentage}% OFF`
}

function salaryReduction(perc, x) {
    result = (1-perc/100) * x;
    // result = x - result
    return result;
}

function changeElementColor(id, color) {
    const element = document.getElementById(id);
    element.style.color = color;
}

function getClick(id){
    const button = document.getElementById(id);
    button.addEventListener('click', function(){
        const review = document.getElementById('review');
        if (review.classList.contains('d-none')){
            review.classList.remove('d-none');
            button.textContent="CLOSE REVIEW";
        }
        else{
            review.classList.add('d-none');
            button.textContent="SEE REVIEW"
        }
    })
}