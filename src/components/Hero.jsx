import heroImage from "../assets/heroImage.png";

export const Hero = () => {
	return (
		<section
			className="flex justify-center px-5 py-12 min-[720px]:px-20 md:py-20 h-[90vh] sm:h-full bg-bottom bg-no-repeat bg-contain"
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<div className="flex flex-col justify-start items-center gap-16">
				<div className="flex flex-col justify-start items-center gap-8">
					<h1 className="text-[40px] leading-normal sm:text-6xl sm:leading-[90px] text-center font-semibold">
						Wallet: The Money App
					</h1>
					<p className="text-white40 text-center">
						Your personal finance advisor on your fingertips
					</p>
				</div>

				<button className="py-2 px-9 rounded-2xl bg-yellow text-darkGray">
					Get Started
				</button>
			</div>
		</section>
	);
};
