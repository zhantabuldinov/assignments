function calculateDowry() {
  let price = 100;

  let education = parseFloat(document.getElementById('education').value);
  let netWorth = parseFloat(document.getElementById('netWorth').value);
  let caste = parseInt(document.getElementById('caste').value);
  let age = parseFloat(document.querySelector('input[name="age"]:checked').value);

  let skills = document.querySelectorAll('.skill:checked');
  let reputation = document.querySelectorAll('.reputation:checked');

  let skillSum = 0;
  skills.forEach(skill => skillSum += parseInt(skill.value));

  let reputationSum = 0;
  reputation.forEach(rep => reputationSum += parseFloat(rep.value));

  price = price * education * netWorth * age + caste + skillSum + reputationSum;

  document.getElementById('finalPrice').textContent = `$${price.toFixed(2)}`;
}
