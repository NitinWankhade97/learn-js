const form = document.querySelector("form");
//  this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    const bmi1 = (weight / ((height*height)/10000)).toFixed(2)
    // show the results 



    if(bmi < 18.6) {
      results.innerHTML = `
        <span>Your BMI: ${bmi}</span><br>
        <p> You are under weight. Please give some attention towards your health.</p>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `
        <span>Your BMI: ${bmi}</span>
        <p> You are maintaing your health like a pro...keep it up. !!!</p>`;
    }
    else {
      results.innerHTML = `
        <span>Your BMI: ${bmi}</span>
        <p> You are over-weight...please plan you diet accordingly.</p>`;
    }        
  }
});
