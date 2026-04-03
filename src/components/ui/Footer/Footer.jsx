import PrimaryButton from "../Button/PrimaryButton";

export default function Footer() {
  return (
    <>
      <div id="footer" className="bg-black">
        <div className="cssContainer py-16 ">
          <header className="max-w-175 mx-auto text-center text-white mb-8 lg:mb-23 flex flex-col gap-8 items-center justify-center ">
            <h3 className="text-[2rem] lg:text-[3.375rem]  ">
              Make better decisions, together, faster
            </h3>

            {/* Cta*/}
            <div className="flex gap-4">
              <PrimaryButton>Try It Free</PrimaryButton>
              <PrimaryButton>Book a demo</PrimaryButton>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
