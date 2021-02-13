function taxCalcutor(year, age, income, investment = 0) {
  let ttax = 0
  if (year === 2020) {
    //step1 Deduct the investment amount via bonds and age
    income = income - investment;

    if (age > 60) {
      income = income - 75000;
    }


    //step2
    income = income - 100000;


    income = income - 900000


    ttax += 900000 * 0.15
    //All good till here



    ttax = ttax + (income * 0.25)


    if (ttax > 500000) {
      ttax = ttax + (ttax * 0.05)
    }
    console.log(`Tax deduction in 2020: ${ttax}`);
  }

  if (year === 2019) {
    //step1 Deduct the investment amount via bonds and age
    income = income - investment;
    // console.log(`After investment deduction : ${income}`);

    if (age > 60) {
      income = income - 50000;
    }

    //step2
    income = income - 100000;
    // console.log(`Deduction after 100000 : ${income}`)

    //STEP3
    income = income - 500000
    if ((income - 500000) < 0) {
      // income = income - 600000
      ttax += 0
    }
    ttax += 500000 * 0.1

    // console.log(`Tax : ${ttax}`)

    //STEP4
    if ((income - 600000) < 0) {
      // income = income - 600000
      ttax += 0
    }
    ttax += income * 0.2
    // console.log(`Tax : ${ttax}`)

    //step5
    // if (income > 0) {
    //   ttax = ttax + (income * 0.3)
    // }

    if (ttax > 500000) {
      ttax = ttax + (ttax * 0.02)
    }

    console.log(`Tax deduction in 2019: ${ttax}`);

  }

  if (year === 2018) {
    //step1 Deduct the investment amount via bonds and age
    income = income - investment;

    //step2
    income = income - 100000;

    income = income - 400000
    if ((income - 400000) < 0) {
      // income = income - 600000
      ttax += 0
    }
    ttax += 400000 * 0.1

    income = income - 500000

    ttax += 500000 * 0.2

    ttax = ttax + (income * 0.3)

    if (ttax > 500000) {
      ttax = ttax + (ttax * 0.01)
    }

    console.log(`Tax deduction in 2018: ${ttax}`);
  }
}

taxCalcutor(2020, 65, 3800000)
taxCalcutor(2018, 50, 3000000)
taxCalcutor(2019, 25, 825000)
