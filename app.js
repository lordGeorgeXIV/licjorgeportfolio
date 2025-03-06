/*CONTROLS BUTTON TRANSITION*/ 
const sections=document.querySelectorAll('.section')
const secBtns=document.querySelectorAll('.controls')
const secBtn=document.querySelectorAll('.control')
const allSections=document.querySelector('.main-content')

function pageTransitions() {
    const buttons = document.querySelectorAll('.control'); // Get all buttons

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from the currently active button
            document.querySelector('.active-btn')?.classList.remove('active-btn');
            // Add active class to the clicked button
            button.classList.add('active-btn');
        });
    });

    //Section Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (!id) return;
    
        secBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(id)?.classList.add('active');
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-toggle');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    });
}
pageTransitions();
