export default function ContactMe() {
  return (
    <div className="w-full md:w-1/2">
      <form
        action="https://usebasin.com/f/a83b09cacd91
    "
        method="POST"
        className=""
      >
        <div>
          <label className="text-white text-lg" htmlFor="firstName">
            First Name
          </label>
          <input
            required
            className="text-black text-lg block my-2 p-2 outline-none focus:outline-primary border border-primary border-solid outline-offset-0  rounded w-full"
            type="text"
            id="firstName"
          />
          <label className="text-white text-lg" htmlFor="email">
            Email
          </label>
          <input
            required
            className="text-black text-lg block my-2 p-2   outline-none focus:outline-primary border border-primary border-solid outline-offset-0 rounded w-full"
            type="email"
            id="email"
          />
          <label className="text-white text-lg" htmlFor="message">
            Message
          </label>
          <textarea
            required
            className="text-black text-lg block my-2 p-2 outline-none focus:outline-primary border border-primary border-solid outline-offset-0 rounded w-full resize-none"
            id="message"
          />
          <button
            className="border-2 mt-2 border-primary border-solid text-primary font-medium rounded py-3 px-7 hover:bg-primarylight"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
