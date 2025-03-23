// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle language selection
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            document.documentElement.lang = lang;
            document.body.dir = lang === 'ar-SA' ? 'rtl' : 'ltr';
            
            // Translation dictionary
            const translations = {
                'en-GB': {
                    'nav.brand': 'ODOOTEAM',
                    'nav.home': 'Home',
                    'nav.about': 'About Us',
                    'nav.services': 'Services',
                    'nav.portfolio': 'Portfolio',
                    'nav.blog': 'Blog',
                    'nav.pricing': 'Pricing',
                    'nav.contact': 'Contact Us',
                    'hero-title': 'Get Started with Odoo Today',
                    'hero-lead': 'Get Started with Odoo Today',
                    'hero-btn': 'Learn More',
                    'about-title': 'About ODOOTEAM',
                    'about-desc': 'We have been providing Odoo development, implementation, and consultation in Egypt since 2019.',
                    'services.title': 'Our Professional Services',
                    'services.development.title': 'Odoo Development',
                    'services.development.desc': 'Custom solutions tailored to your business needs:',
                    'services.development.feature1': 'Module Development',
                    'services.development.feature2': 'API Integration',
                    'services.development.feature3': 'System Customization',
                    'services.implementation.title': 'Odoo Implementation',
                    'services.implementation.desc': 'Seamless deployment process:',
                    'services.implementation.feature1': 'System Configuration',
                    'services.implementation.feature2': 'Data Migration',
                    'services.implementation.feature3': 'User Training',
                    'services.consultation.title': 'Odoo Consultation',
                    'services.consultation.desc': 'Strategic business optimization:',
                    'services.consultation.feature1': 'Process Analysis',
                    'services.consultation.feature2': 'Workflow Design',
                    'services.consultation.feature3': 'ERP Strategy',
                    'services.learn-more': 'Learn More',
                    'why-choose-title': 'Why Choose Us?',
                    'why-choose-desc': 'Highlight expertise, experience, and unique selling points.',
                    "featured-projects-title": "Featured Projects",
                    "project-1-title": "Project 1",
                    "project-1-desc": "Short description of Project 1.",
                    "project-2-title": "Project 2",
                    "project-2-desc": "Short description of Project 2.",
                    "project-3-title": "Project 3",
                    "project-3-desc": "Short description of Project 3.",
                    "project-4-title": "Project 4",
                    "project-4-desc": "Short description of Project 4.",
                    "project-5-title": "Project 5",
                    "project-5-desc": "Short description of Project 5.",
                    "testimonials-title": "Client Testimonials",
                    "testimonial-1": "\"Great service and support!\" - Client 1",
                    "testimonial-2": "\"Highly recommended!\" - Client 2",
                    "testimonial-3": "\"Excellent work!\" - Client 3",
                    "testimonial-4": "\"Very professional team.\" - Client 4",
                    "testimonial-5": "\"Outstanding results.\" - Client 5"
                },
                'ar-SA': {
                    'nav.brand': 'ODOOTEAM',
                    'nav.home': 'الرئيسية',
                    'nav.about': 'من نحن',
                    'nav.services': 'الخدمات',
                    'nav.portfolio': 'المحفظة',
                    'nav.blog': 'المدونة',
                    'nav.pricing': 'الأسعار',
                    'nav.contact': 'اتصل بنا',
                    'hero-title': 'ابدأ مع أودو اليوم',
                    'hero-lead': 'ابدأ مع أودو اليوم',
                    'hero-btn': 'تعرف أكثر',
                    'about-title': 'عن ODOOTEAM',
                    'about-desc': 'لقد قمنا بتوفير تطوير أودو، وتنفيذ و استشارات في مصر منذ عام 2019.',
                    'services.title': 'خدماتنا الاحترافية',
                    'services.development.title': 'تطوير أودو',
                    'services.development.desc': 'حلول مخصصة مصممة خصيصًا لاحتياجات عملك:',
                    'services.development.feature1': 'تطوير الوحدات',
                    'services.development.feature2': 'تكامل واجهة برمجة التطبيقات',
                    'services.development.feature3': 'تخصيص النظام',
                    'services.implementation.title': 'تنفيذ أودو',
                    'services.implementation.desc': 'عملية نشر سلسة:',
                    'services.implementation.feature1': 'تكوين النظام',
                    'services.implementation.feature2': 'ترحيل البيانات',
                    'services.implementation.feature3': 'تدريب المستخدمين',
                    'services.consultation.title': 'استشارات أودو',
                    'services.consultation.desc': 'تحسين الأعمال الاستراتيجية:',
                    'services.consultation.feature1': 'تحليل العمليات',
                    'services.consultation.feature2': 'تصميم سير العمل',
                    'services.consultation.feature3': 'استراتيجية تخطيط موارد المؤسسات',
                    'services.learn-more': 'تعرف على المزيد',
                    'why-choose-title': 'لماذا أخترتنا؟',
                    'why-choose-desc': 'تسليط الضوء على الخبرة والتجربة ونقاط البيع الفريدة.',
                    "featured-projects-title": "المشاريع المميزة",
                    "project-1-title": "المشروع 1",
                    "project-1-desc": "وصف موجز للمشروع 1.",
                    "project-2-title": "المشروع 2",
                    "project-2-desc": "وصف موجز للمشروع 2.",
                    "project-3-title": "المشروع 3",
                    "project-3-desc": "وصف موجز للمشروع 3.",
                    "project-4-title": "المشروع 4",
                    "project-4-desc": "وصف موجز للمشروع 4.",
                    "project-5-title": "المشروع 5",
                    "project-5-desc": "وصف موجز للمشروع 5.",
                    "testimonials-title": "شهادات العملاء",
                    "testimonial-1": "\"خدمة ودعم رائعان!\" - العميل 1",
                    "testimonial-2": "\"موصى به للغاية!\" - العميل 2",
                    "testimonial-3": "\"عمل ممتاز!\" - العميل 3",
                    "testimonial-4": "\"فريق محترف للغاية.\" - العميل 4",
                    "testimonial-5": "\"نتائج رائعة.\" - العميل 5",
                    "combined-carousel-title": "أبرز الأحداث"
                }
            };



            
            // Update all translatable elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                el.textContent = translations[lang][key];
            });
            updateIcons(lang);
        });
    });

    function updateIcons(lang) {
        // Add logic to change icons based on language
    }

    function updateIcons(lang) {
        const developmentIcon = document.querySelector('.development-icon');
        const implementationIcon = document.querySelector('.implementation-icon');
        const consultationIcon = document.querySelector('.consultation-icon');

        if (lang === 'ar-SA') {
            // Change icons for Arabic
            if (developmentIcon) developmentIcon.className = 'fas fa-code fa-3x text-primary service-icon'; // Replace with Arabic icon class if needed
            if (implementationIcon) implementationIcon.className = 'fas fa-rocket fa-3x text-primary service-icon'; // Replace with Arabic icon class if needed
            if (consultationIcon) consultationIcon.className = 'fas fa-chart-line fa-3x text-primary service-icon'; // Replace with Arabic icon class if needed
        } else {
            // Default icons for English
            if (developmentIcon) developmentIcon.className = 'fas fa-code fa-3x text-primary service-icon development-icon';
            if (implementationIcon) implementationIcon.className = 'fas fa-rocket fa-3x text-primary service-icon implementation-icon';
            if (consultationIcon) consultationIcon.className = 'fas fa-chart-line fa-3x text-primary service-icon consultation-icon';
        }
    }
});
