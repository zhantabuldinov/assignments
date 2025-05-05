function calculateDowry() {
  let price = 100;

  let edu = document.getElementById("education").value;
  let money = document.getElementById("netWorth").value;
  let cast = document.getElementById("caste").value;

  let age = 0;
  let ages = document.getElementsByName("age");
  for (let i = 0; i < ages.length; i++) {
    if (ages[i].checked) {
      age = ages[i].value;
    }
  }

  let skills = document.querySelectorAll(".skill");
  let skillsBonus = 0;
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].checked) {
      skillsBonus += parseFloat(skills[i].value);
    }
  }

  let rep = document.querySelectorAll(".reputation");
  let reputationBonus = 0;
  for (let i = 0; i < rep.length; i++) {
    if (rep[i].checked) {
      reputationBonus += parseFloat(rep[i].value);
    }
  }

  price *= parseFloat(edu);
  price *= parseFloat(money);
  price += parseFloat(cast);
  price += skillsBonus;
  price *= parseFloat(age);
  price += reputationBonus;

  document.getElementById("finalPrice").innerText = "$" + price.toFixed(2);
}
