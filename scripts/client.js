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
        <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button class="remove-employee">Remove</button></td>
        </tr>
    `)
    console.log(parseInt(annualSalary));
    // total += parseInt(annualSalary);
    // total = total/12
    // total = total.toFixed(2);
    total += (Math.round((annualSalary)/12))
    // .toFixed(2);
    totalUpdate ();
    
}

total = 0;
//     for (let i=0; i < total; i++){
//         total += i
//     }

// totalSalary = total 

function totalUpdate (){
    $('#total-salaries').text('')
    $('#total-salaries').text(`
        Total: $${total}
    `)
    
}