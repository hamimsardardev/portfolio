import React from "react";

const ProjectIdea = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="text-center pt-[100px] pb-[112px] border-b-1 border-seconerycolor">
            <h4 className="font-dmSans text-[48px] font-semibold leading-[56px] text-white w-[619px] mx-auto">
              Do you have Project Idea? Let's discuss your project!
            </h4>
            <p className="font-dmSans text-[18px] font-regular leading-[24px] text-primarytwo py-8 mx-auto w-[577px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
              <div className="group rounded-[8px] bg-third hover:bg-[#141E26] transition duration-300">
                <button className="button">Let’s work Together</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectIdea;
