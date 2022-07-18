console.log('script sourced');
$(readyNow);

function readyNow() {
    console.log('ready now');
    // $('#submit-button').on('click', addNewEmployee);
    $('#submit-button').click(addNewEmployee);

}

function addNewEmployee () {
    let firstName = $('#first-name-input').val();
    console.log(firstName);
    let lastName = $('#last-name-input').val();
    console.log(lastName);
    let id = $('#ID-input').val();
    console.log(id);
    let title = $('#title-input').val();
    console.log(title);
    let annualSalary = $('#salary-input').val();
    console.log(annualSalary);

    $('#employee-table').append(`
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <button class="remove-employee">Remove</button>
    `)
}

total = 0;
    for (let i=0; i < total; i++){
        totalSalary += i
    }

totalSalary = total 