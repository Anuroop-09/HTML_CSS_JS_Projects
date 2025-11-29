window.addEventListener('DOMContentLoaded', () => {

    const bmiFormEl = document.getElementById("bmi--form");
    const heightEl = document.getElementById("height");
    const weightEl = document.getElementById("weight");
    const generateBtn = document.getElementById("btn--generate");
    const resetBtn = document.getElementById("btn--reset");
    const bmiScoreEl = document.getElementById("bmi--score");
    const bmiMarkerEl = document.getElementById("bmi--marker");

    // CHECK FOR WHETHER INPUTS ARE VALID OR NOT
    const checkInputsAreValid = function (height, weight) {
        let result = true;
        const heightErrorEl = bmiFormEl.querySelector("input#height+p.form__error");
        const weightErrorEl = bmiFormEl.querySelector("input#weight+p.form__error");
        heightErrorEl.textContent = "";
        weightErrorEl.textContent = "";

        if (height == "" && weight == "") {
            heightErrorEl.textContent = "* height is empty";
            weightErrorEl.textContent = "* weight is empty";
            result = false;
        } else if (height == "") {
            heightErrorEl.textContent = "* height is empty";
            result = false;
        } else if (weight == "") {
            weightErrorEl.textContent = "* weight is empty";
            result = false;
        } else if (height < 120 || height > 250) {
            heightErrorEl.textContent = "height should be between 120 - 250 cms";
            result = false;
        } else if (weight < 20 || weight > 250) {
            weightErrorEl.textContent = "weight should be between 20 - 250 kgs";
            result = false;
        }
        return result;
    }

    // HANDLE REMOVE BACKGROUND SECTION LIST ITEM 
    const removeListItemBackgroundColor = function () {
        const listItems = document.querySelectorAll(".section__item");
        listItems.forEach(listItem => {
            listItem.style.backgroundColor = "";
        });
    }

    // HANDLE SET BMI SCORE
    const setBmiScore = function (bmiScore, color) {
        bmiScoreEl.textContent = bmiScore;
        bmiScoreEl.style.color = color;
    }

    // HANDLE MARKER POSITION
    const setBmiMarkerPosition = function (position) {
        bmiMarkerEl.style.left = position;
    }

    // HANDLE SET BACKGROUND SECTION LIST ITEM 
    const setListItemBackgroundColor = function (category) {
        const listItemBg =  {
            underweight: "rgba(255, 215, 55, 0.2)",
            healthy: "rgba(45, 194, 34, 0.2)",
            overweight: "rgba(236, 158, 23, 0.2)",
            obesity: "rgba(236, 74, 23, 0.2)"
        };
        document.querySelector(`.section__item--${category}`).style.backgroundColor = listItemBg[category];
    }

    // HANDLE UPDATE BMI RESULT 
    const updateBmiResult = function (bmiValue) {
        removeListItemBackgroundColor();
        if (bmiValue <= 18.5) {
            setBmiScore(bmiValue, "var(--bg-underweight)");
            setBmiMarkerPosition('12.5%');
            setListItemBackgroundColor('underweight');
        } else if (bmiValue > 18.5 && bmiValue <= 25.0) {
            setBmiScore(bmiValue, "var(--bg-healthy)");
            setBmiMarkerPosition('37.5%');
            setListItemBackgroundColor('healthy');
        } else if (bmiValue > 25.0 && bmiValue <= 30.0) {
            setBmiScore(bmiValue, "var(--bg-overweight)");
            setBmiMarkerPosition('37.5%');
            setListItemBackgroundColor('overweight');
        } else if (bmiValue > 30.0) {
            setBmiScore(bmiValue, "var(--bg-obesity)");
            setBmiMarkerPosition('87.5%');
            setListItemBackgroundColor('obesity');
        }
    }

    // HANDLE HEIGHT INPUT FIELD 
    heightEl.addEventListener('input', (e) => {
        const heightInputLen = e.target.value.length;

        if (heightInputLen > 3) {
            heightEl.value = e.target.value.slice(0, 3);
        }
    });

    // HANDLE WEIGHT INPUT FIELD
    weightEl.addEventListener('input', (e) => {
        const weightInputLen = e.target.value.length;

        if (weightInputLen > 3) {
            weightEl.value = e.target.value.slice(0, 3);
        }
    });

    // HANDLE BMI FORM CALCULATOR
    bmiFormEl.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest("#btn--generate")) {
            const heightInputVal = heightEl.value;
            const weightInputVal = weightEl.value;
            if (!checkInputsAreValid(heightInputVal, weightInputVal)) return;
            const heightInMeters = heightInputVal / 100;
            const bmiScore = weightInputVal / (Math.pow(heightInMeters, 2));
            const roundedBmiScore = bmiScore.toFixed(2);
            updateBmiResult(roundedBmiScore);
        };

        if (e.target.closest("#btn--reset")) {
            heightEl.value = weightEl.value = "";
            removeListItemBackgroundColor();
            setBmiScore('_ _', 'black');
            setBmiMarkerPosition('0');
        };

    });

});