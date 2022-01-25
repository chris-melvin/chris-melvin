export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="border-2 mt-2 border-primary border-solid text-primary font-medium rounded py-3 px-7 hover:bg-primarylight"
    >
      {children}
    </button>
  );
}
