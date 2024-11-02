export function Contact() {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-10">Contact</h2>
            <div className="max-w-xl mx-auto">
                <div className="flex flex-col gap-6">
                    <a
                        href="mailto:qw486512@gmail.com"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>📧</span> qw486512@gmail.com
                    </a>
                    <a
                        href="tel:010-5553-0475"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>☎️</span> 010-5553-0475
                    </a>
                    <a
                        href="https://github.com/sky4564"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>💻</span> GitHub
                    </a>
                    {/* <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>📚</span> Blog
                    </a> */}
                </div>
            </div>
        </section>
    );
} 