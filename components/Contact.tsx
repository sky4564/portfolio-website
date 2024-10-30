export function Contact() {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-10">Contact</h2>
            <div className="max-w-xl mx-auto">
                <div className="flex flex-col gap-6">
                    <a
                        href="mailto:your.email@example.com"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>📧</span> your.email@example.com
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>💻</span> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-lg hover:text-blue-500"
                    >
                        <span>💼</span> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
} 