import Image from "next/image";
import profile from "../public/me.webp"

export function About() {
    return (
        <section id="about" className="py-20">
            <h2 className="text-3xl font-bold mb-10">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <Image
                        src={profile}
                        alt="Profile"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        3년차 웹개발자 입니다.

                    </p>
                    <div className="flex flex-wrap gap-4">
                        <h3 className="text-xl font-semibold w-full">기술 스택</h3>
                        {["JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 