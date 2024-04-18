const form = document.querySelector("form");

// const height = parseInt(document.querySelector("#height").value)
// const weight = parseInt(document.querySelector("#weight").value)

// if (height and weight) write before event this will give empty value

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML`=Please Give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // showing result

    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
        result.innerHTML = `<span>Under Weight ${bmi} </span>`;
      }
      else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `<span>Normal ${bmi} </span>`;
      }
      else if (bmi > 24.9) {
        result.innerHTML = `<span>Over Weight ${bmi} </span>`;
      }
      
  }
});
