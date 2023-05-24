
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="mx-auto text-center w-1/2 md:w-4/12 py-8">
      <p className="text-yellow-600 mb-2 italic text-xl font-[400]">--- {subHeading} ---</p>
      <h3 className=" text-4xl border-y-4 py-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;