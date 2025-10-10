import Image from "next/image";
import React from "react";

const MySkill = () => {
  return (
    <>
      <section className="pb-[100px]">
        <div className="container">
          <div className="font-geist text-[48px] font-bold leading-[26px] text-primary  text-center mb-[50px]">
            <h4 className="mb-[50px]">My Skills</h4>
            <div>
              <div className="flex gap-[103px] justify-center items-center">
                <Image
                  src="/html.png"
                  alt="html.png"
                  height={120}
                  width={120}
                />
                <Image src="/css.png" alt="css.png" height={120} width={120} />
                <Image src="/js.png" alt="js.png" height={120} width={120} />
                <Image
                  className="flex justify-end"
                  src="/react.png"
                  alt="react.png"
                  height={120}
                  width={120}
                />
              </div>
              <div className="flex gap-[103px] justify-center items-center mt-6">
                <Image
                  src="/vscode.png"
                  alt="vscode.png"
                  height={120}
                  width={120}
                />
                <Image src="/git.png" alt="git.png" height={120} width={120} />
                <Image
                  src="/github.png"
                  alt="github.png"
                  height={120}
                  width={120}
                />
                <Image
                  src="/bootstrap.png"
                  alt="bootstrap.png"
                  height={120}
                  width={120}
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
