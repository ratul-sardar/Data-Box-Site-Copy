export default function Accordion({ question, children }) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold text-[1rem]">{question}</div>
      <div className="collapse-content text-[1rem] text-gray-700 font-normal ">
        {children}
      </div>
    </div>
  );
}
