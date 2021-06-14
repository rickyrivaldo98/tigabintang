const ContactComp = () => {
  return (
    <>
      <div className="text-center w-full py-20 bg-white">
        <div className="text-yellow-500 font-bold text-2xl">Get In Touch</div>
        <div className="font-bold text-4xl mb-10">For Any Query</div>
        <div className="flex bg-indigo-900 justify-center gap-x-10 py-14 mx-20">
          <div className="h-96 w-1/3 ml-10 border-white border-solid border bg-indigo-900"></div>
          <div className="h-96 w-1/3 border-white border-solid border bg-indigo-900"></div>
          <div className="h-96 w-1/3 mr-10 border-white border-solid border bg-indigo-900"></div>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
