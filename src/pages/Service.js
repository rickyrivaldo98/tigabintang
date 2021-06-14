import ServiceComp from "../components/ServiceComp";

const Service = () => {
  return (
    <>
      <div className="py-20 text-4xl font-semibold text-center">
        <div>Our Service</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div className="font-thin pt-7">Home / Service</div>
      </div>
      <ServiceComp />
    </>
  );
};

export default Service;
