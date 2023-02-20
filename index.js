let model = {
    showErrors: false,
};

let getForm = () => {
    let form = document.forms.poc;
    return {
        name: form.name.value,
        age: form.age.value,
        city: form.city.value,
    };
};

document.addEventListener('DOMContentLoaded', function () {
    console.log(getForm());

    let form = document.forms.poc;
    form.addEventListener('submit', ev => {
        ev.preventDefault();
        model.showErrors = true;
        let errorNodes = form.querySelectorAll('[aria-hidden=true]');
        errorNodes.forEach(n => {
            n.setAttribute('aria-hidden', 'false');
        });
    });
});
