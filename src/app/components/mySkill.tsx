import Image from "next/image";
import React from "react";

const MySkill = () => {
  return (
    <>
      <section className="py-[100px] bg-third">
        <div className="container">
          <div className="font-roboto text-[48px] font-bold leading-[26px] text-primarytwo  text-center mb-4">
            <h4 className="mb-6">My Skills</h4>
            <p className="font-roboto text-[16px] font-normal leading-[24px] mx-auto text-primarytwo mb-3 w-[529px]">
              I've created and updated websites for many different clients. I
              worked with multiple CMS including WordPress, Joomla, and Drupal,
              as well as created my own custom website management system in
              Node.js
            </p>
            <div>
              <div className="flex gap-[103px] justify-center items-center">
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/html.png"
                  alt="html.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/css.png"
                  alt="css.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/js.png"
                  alt="js.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full flex justify-end"
                  src="/react.png"
                  alt="react.png"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex gap-[103px] justify-center items-center mt-6">
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/vscode.png"
                  alt="vscode.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full text-primarytwo"
                  src="/git.png"
                  alt="git.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/github.png"
                  alt="github.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/bootstrap.png"
                  alt="bootstrap.png"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkill;
