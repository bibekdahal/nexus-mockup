
const inquiryTabs = document.querySelectorAll('#inquiry .tab');
const inquiryForms = document.querySelectorAll('#inquiry form');


const selectInquiryForm = (tabName) => {
    inquiryTabs.forEach(tab => tab.classList.remove('active'));
    inquiryForms.forEach(form => form.classList.remove('active'));

    document.querySelector(`#inquiry .tab[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}


inquiryTabs.forEach(inquiryTab => {
    inquiryTab.onclick = () => {
        const tab = inquiryTab.dataset.tab;
        selectInquiryForm(tab);
    };
});
