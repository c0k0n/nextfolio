export default function ResumePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Resume</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                {/* Add your work experience here */}
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                {/* Add your education details here */}
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                {/* Add your skills here */}
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Certifications & Achievements</h2>
                {/* Add your certifications and achievements here */}
            </section>
        </div>
    )
}