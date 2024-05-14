/*--------------------IMP Point----------------

1)  We need to select form , bcoz we have submit btn in form (not click event)only i.e calculate .

2)  When we submit form ,it get submitted in two ways : post / get .And it values go into url or server but as we don't have server so we need to prevent its default behaviour by using preventDefault Method.

3) From input we get values in string , so we need to convert to int/float using parseInt/parseFloat.

4) height/weight agr bahr likha toh :
-Actually, ekdum aap jab click krna chah rhe h ussi waqt hm wah values lena chah rhe h,

-jese hee hum, ht/wt ko bahr likhenge script run ho jayegi and page load ho jayega , so we get empty values in ht/ wt ,

-But we want values when we calculate so, use ht/wt inside function.

5) Use some checks so that out code run without any mistake.

6) After bmi calculation, we want number fixed to 2 decimal points so use toFixed(2) method.

7) results ke andr bmi ans dalne ke liye use innerHTML property.
*/


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const ht = parseFloat(document.querySelector('#height').value);
  const wt = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (ht === '' || ht < 0 || isNaN(ht)) {
    alert('Please enter a valid value for height');
    return;
  } else if (wt === '' || wt < 0 || isNaN(wt)) {
    alert('Please enter a valid value for weight');
    return;
  } else {
    const bmi = (100 * 100 * wt) / (ht * ht);
    result.innerHTML = `${bmi.toFixed(2)}`;
  }

  const weightGuide = document.getElementById('weight-guide');
  const res = weightGuide.querySelectorAll("p.res");

  const bmiInput = parseFloat(result.innerHTML);
  const conclusion = document.querySelector('#conclusion');

  if (bmiInput < 18.6) {
    conclusion.innerHTML = `Underweight : ${res[0].innerHTML}`;
    conclusion.classList.add("highlight");
  } else if (bmiInput >= 18.6 && bmiInput <= 24.9) {
    conclusion.innerHTML = `Normal : ${res[1].innerHTML}`;
    conclusion.classList.add("highlight");
  } else {
    conclusion.innerHTML = `Overweight : ${res[2].innerHTML}`;
    conclusion.classList.add("highlight");
  }
});

