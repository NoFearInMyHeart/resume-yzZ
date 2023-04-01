import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://hspliving-10009.oss-cn-beijing.aliyuncs.com/2022-11-20/db31a8e6-16d1-4c87-8f41-ba24580dedbd_WechatIMG14.png"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            <Typewriter
              options={{
                strings: ['Welcome🚀'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
