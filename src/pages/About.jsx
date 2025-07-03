const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXE1dDVvbjA0M2ZyZ3hrZTljeG01bDhkcjhucndtb2Fsemhid29mZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SiGe0LNINZ9SLy86i2/giphy.gif"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About</h1>
          <p className="py-6">This is built by Ciro, say hi!</p>
          <p className="py-6">cirochen0406@gmail.com</p>
          <button className="btn btn-secondary">Copy email</button>
        </div>
      </div>
    </div>
  );
};

export default About;
