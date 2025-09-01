export default function Contact() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-gray-600 max-w-2xl text-center">
          Feel free to reach out via email at 
          <a href="mailto:your@email.com" className="text-indigo-600 underline ml-1">
            your@email.com
          </a>.
        </p>
      </section>
    );
  }
  