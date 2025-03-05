//визначає оцінку студента
function checkGrade() {
    const grade = parseInt(document.getElementById('grade').value);
    let gradeText;

    if (grade === 5) {
        gradeText = "відмінно";
    } else if (grade === 4) {
        gradeText = "добре";
    } else if (grade === 3) {
        gradeText = "задовільно";
    } else if (grade === 2 || grade === 1) { 
        gradeText = "незадовільно";
    } else {
        gradeText = "не балуйся";
    }

    document.getElementById('gradeResult').textContent = `оцінка: ${gradeText}`;
}

//визначає сезон за номером місяця
function checkSeason() {
    const month = parseInt(document.getElementById('month').value);
    let season;

    if (month >= 3 && month <= 5) {
        season = "весна";
    } else if (month >= 6 && month <= 8) {
        season = "літо";
    } else if (month >= 9 && month <= 11) {
        season = "осінь";
    } else if (month === 12 || month <= 2) {
        season = "зима";
    } else {
        season = "не балуйся";
    }

    document.getElementById('seasonResult').textContent = `сезон: ${season}`;

    //альтернатива через тернарний оператор
    const seasonTernary = (month >= 3 && month <= 5) ? "весна" :
                          (month >= 6 && month <= 8) ? "літо" :
                          (month >= 9 && month <= 11) ? "осінь" :
                          (month === 12 || month <= 2) ? "зима" :
                          "не балуйся";

    console.log(`сезон (тернарний оператор): ${seasonTernary}`);
}
