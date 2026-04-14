
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu')
            const icon = document.getElementById('menu-icon')
            
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden')
                icon.classList.replace('fa-bars', 'fa-xmark')
            } else {
                menu.classList.add('hidden')
                icon.classList.replace('fa-xmark', 'fa-bars')
            }
        }
        
        function submitForm() {
            const form = document.getElementById('contact-form')
            const btn = form.querySelector('button')
            
            const originalText = btn.innerHTML
            
            btn.innerHTML = `
                <span class="animate-pulse">Sending love &amp; confirmation...</span>
                <i class="fa-solid fa-heart ml-2"></i>
            `
            btn.disabled = true
            
            setTimeout(() => {
                alert("✨ Message received! I'll reply within 24 hours. Thank you for trusting me with your time 💕")
                form.reset()
                btn.innerHTML = originalText
                btn.disabled = false
            }, 1600)
        }
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href') === '#') return
                e.preventDefault()
                const target = document.querySelector(this.getAttribute('href'))
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            })
        })
        
        console.log('%c✨ Rachel Oluoch VA Portfolio updated with Case Studies! 💕', 'color:#c084fc; font-family:monospace')
        console.log('%c📬 Feel free to reach out if you have any questions or want to chat about how I can help your business! 💌', 'color:#f472b6; font-family:monospace')