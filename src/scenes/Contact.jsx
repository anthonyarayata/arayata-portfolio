const Contact = () => {
  return (
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-2xl lg:text-4xl font-bold">Contact</h1>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">LinkedIn Icon</a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-black no-underline hover:underline">GitHub Icon</a>
        </div>
      </div>
  );
}
export default Contact;
