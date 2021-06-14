import ContactComp from "../components/ContactComp";
const Contact = () => {
  return (
    <>
      <div className="py-20 text-4xl font-semibold text-center">
        <div>Contact Us</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div className="font-thin pt-7">Home / Contact Us</div>
      </div>
      <ContactComp />
    </>
  );
};

export default Contact;
