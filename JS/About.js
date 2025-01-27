const sections = document.querySelectorAll('.hidden');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        document.querySelector('.button').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
        
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = "We will connect with you shortly. Stay tuned!";
        
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
        
            console.log(`Form Submitted:
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}`);

            document.getElementById('contactForm').reset();
        
            alert("You have received a new form submission!");
        });
        
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        confirmationMessage.classList.remove("hidden"); 
        contactForm.reset(); 
    });
